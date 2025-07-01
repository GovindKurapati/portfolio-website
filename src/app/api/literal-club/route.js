export async function GET() {
  try {
    // Get access token using refresh token
    const LITERAL_CLUB_TOKEN = process.env.LITERAL_CLUB_TOKEN;

    const graphqlQuery = {
      query: `
      query MyReadingStates {
        myReadingStates {
          id
          status
          bookId
          profileId
          createdAt
          book {
            id
            slug
            title
            subtitle
            description
            cover
            authors {
              id
              name
            }
            gradientColors
          }
        }
      }
    `,
    };

    const response = await fetch("https://literal.club/graphql/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // If needed, add auth headers like:
        Authorization: `Bearer ${LITERAL_CLUB_TOKEN}`,
      },
      body: JSON.stringify(graphqlQuery),
    });

    const result = await response.json();

    if (result.errors) {
      return res.status(500).json({ error: result.errors });
    }

    const readingStates = result.data?.myReadingStates || [];

    if (readingStates.length === 0) {
      return res.status(404).json({ error: "No reading states found." });
    }

    const firstReadingState = readingStates[0];

    console.log("First Reading State:", firstReadingState);

    return new Response(
      JSON.stringify({
        title: firstReadingState.book.title,
        author: firstReadingState.book.authors[0].name,
        image: firstReadingState.book.cover,
        url:
          "https://literal.club/govind_k/book/" + firstReadingState.book.slug,
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
