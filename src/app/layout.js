import { Provider } from "@/components/provider";
import { ProfileSideBar } from "@/components/ProfileSideBar";
import { Flex, Box } from "@chakra-ui/react";
import { Header } from "@/components/header";
import { NavBar } from "@/components/NavBar";
import Script from "next/script";
import { CommandBar, CommandBarIndicator } from "@/components/CommandBar";

export const metadata = {
  title: "Govind Kurapati",
  description:
    "Portfolio website of Govind Kurapati - Software Engineer and Full Stack Developer",
  authors: [{ name: "Govind Kurapati" }],
  keywords: [
    "Govind Kurapati",
    "Software Engineer",
    "Web Developer",
    "Portfolio",
    "React Developer",
    "Full Stack Developer",
  ],
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://govind-kurapati.com",
    site_name: "Govind Kurapati Portfolio",
    title: "Govind Kurapati - Software Engineer",
    description:
      "Portfolio website of Govind Kurapati - Software Engineer and Developer",
    images: [
      {
        url: "/profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Govind Kurapati - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Govind Kurapati - Software Engineer",
    description:
      "Portfolio website of Govind Kurapati - Software Engineer and Developer",
    images: ["/l/profile-pic.jpg"],
    creator: "@YourTwitterHandle",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="de1f9ed3-d8bb-424a-9e00-5d027dfa2722"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <Provider>
          <CommandBar />
          <CommandBarIndicator />
          <Flex
            w="full"
            alignItems="stretch"
            justifyContent={"center"}
            gap="6"
            position={"relative"}
            maxWidth={"1200px"}
            margin="60px auto"
            transition={"all 0.5s ease"}
            flexWrap={"wrap"}
          >
            <ProfileSideBar />
            <Flex
              w={{ base: "90%", xl: "68%" }}
              backgroundColor={"primary"}
              borderRadius={"20px"}
              padding={"30px"}
              border="1px solid"
              borderColor={"borderColor"}
              pos={"relative"}
            >
              <Header />

              {children}
            </Flex>
            <NavBar />
          </Flex>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
