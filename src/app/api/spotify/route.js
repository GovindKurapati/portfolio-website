const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";
const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";

const BASIC = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

const getAccessToken = async () => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Basic ${BASIC}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "refresh_token",
        refresh_token: REFRESH_TOKEN,
      }),
    });

    const data = await response.json();

    return data.access_token;
  } catch (error) {
    console.error("Failed to get access token", error);
  }
};

export async function GET() {
  try {
    // Get access token using refresh token
    const access_token = await getAccessToken();
    console.log("access_token", access_token);

    // Fetch recently played song
    const response = await fetch(RECENTLY_PLAYED_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log("response", JSON.stringify(response));

    if (!response.ok) {
      console.error(
        "Failed to fetch recently played song",
        JSON.stringify(response)
      );
      return new Response(
        JSON.stringify({ error: "Failed to fetch recently played song" }),
        { status: response.status }
      );
    }

    const data = await response.json();
    const lastPlayedTrack = data.items[0]?.track;

    return new Response(
      JSON.stringify({
        name: lastPlayedTrack.name,
        artist: lastPlayedTrack.artists.map((artist) => artist.name).join(", "),
        album: lastPlayedTrack.album.name,
        image: lastPlayedTrack.album.images[0]?.url,
        url: lastPlayedTrack.external_urls.spotify,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}
