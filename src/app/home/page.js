"use server";
import IconWrapper from "@/components/IconWrapper";
import {
  Flex,
  Heading,
  Text,
  Icon,
  Box,
  Link,
  Image,
  Grid,
} from "@chakra-ui/react";
import {
  SiTypescript,
  SiJavascript,
  SiJest,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiAndroid,
  SiKotlin,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiGit,
  SiMaterialdesign,
  SiAngular,
  SiVuedotjs,
  SiMysql,
  SiServerless,
  SiChakraui,
  SiPython,
  SiDotnet,
} from "react-icons/si";
import {
  FaAws,
  FaBootstrap,
  FaDocker,
  FaFigma,
  FaGithub,
  FaJava,
  FaPlay,
} from "react-icons/fa";
import RecentlyPlayed from "@/components/RecentlyPlayed";
import RecentlyRead from "@/components/RecentlyRead";

// Utility function to lighten colors
const lightenColor = (color, amount = 0.55) => {
  // Remove any leading #
  color = color.replace("#", "");

  // Convert hex to RGB
  const r = parseInt(color.substring(0, 2), 16);
  const g = parseInt(color.substring(2, 4), 16);
  const b = parseInt(color.substring(4, 6), 16);

  // Convert RGB to HSL
  const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h = 0,
      s,
      l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return [h * 360, s * 100, l * 100];
  };

  // Convert HSL back to RGB with modified lightness calculation
  const hslToRgb = (h, s, l) => {
    h /= 360;
    s /= 100;
    // Increase minimum lightness to 0.6 (60%)
    l = Math.max(l / 100, 0.6);
    // Cap maximum lightness at 0.95 (95%)
    l = Math.min(l + 0.55, 0.45);

    let r, g, b;

    if (s === 0) {
      r = g = b = l;
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };

      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  };

  // Convert to HSL and increase lightness
  const [h, s, l] = rgbToHsl(r, g, b);
  // Reduce saturation by 20% for lighter colors
  const newS = Math.max(0, s * 0.2);
  const newL = Math.min(l + amount * 100, 95);
  const [nr, ng, nb] = hslToRgb(h, newS, newL);

  // Convert back to hex
  const toHex = (n) => {
    const hex = n.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  };

  return `#${toHex(nr)}${toHex(ng)}${toHex(nb)}`;
};

const TechBlock = ({ icon, name, iconColor }) => {
  const lighterColor = lightenColor(iconColor);
  return (
    <Flex
      alignItems="center"
      gap={2}
      bg="rgba(255, 255, 255, 0.05)"
      p={3}
      width={"max-content"}
      borderRadius="xl"
      transition="all 0.3s ease"
      border="1px solid"
      borderColor={"secondary"}
      _hover={{
        bg: lighterColor,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        borer: "1px solid",
        borderColor: iconColor,
      }}
      className="group"
      backgroundColor={"secondary"}
    >
      {/* <IconWrapper icon={icon} /> */}

      <Icon
        _groupHover={{
          color: iconColor,
        }}
      >
        {icon}
      </Icon>

      <Text fontSize="md" fontWeight="medium">
        {name}
      </Text>
    </Flex>
  );
};

const ActivityCard = ({ type, title, subtitle, image }) => {
  return (
    <Box
      bg="secondary"
      borderRadius="15px"
      p={4}
      backdropFilter="blur(10px)"
      transition="all 0.3s"
      _hover={{ bg: "rgba(255, 255, 255, 0.08)" }}
      w={"32%"}
    >
      <Flex gap={4}>
        <Image
          src={image}
          alt={title}
          boxSize="80px"
          borderRadius="md"
          objectFit="cover"
          objectPosition={"center"}
        />

        <Box>
          {type === "NOW_PLAYING" ? (
            <Flex align="center" gap={2}>
              <Text color="gray.400" fontSize="sm" mb={2}>
                NOW PLAYING
                <Icon color="white" size="xs">
                  <FaPlay />
                </Icon>
              </Text>
            </Flex>
          ) : (
            "FINISHED"
          )}
          <Text color="white" fontSize="md" fontWeight="medium">
            {title}
          </Text>
          <Text color="gray.400">{subtitle}</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export async function Home() {
  const technologies = [
    { icon: <FaJava />, name: "Java", iconColor: "#ee2a2c" },
    { icon: <SiPython />, name: "Python", iconColor: "#306998" },
    { icon: <SiJavascript />, name: "JavaScript", iconColor: "#f0dc57" },
    { icon: <SiTypescript />, name: "TypeScript", iconColor: "#387cc8" },
    { icon: <SiMysql />, name: "SQL", iconColor: "#3D6E93" },
    { icon: <SiReact />, name: "React", iconColor: "#21d9fe" },
    { icon: <SiAngular />, name: "Angular", iconColor: "#c51435" },
    { icon: <SiVuedotjs />, name: "Vue.js", iconColor: "#48ba87" },
    { icon: <SiNextdotjs />, name: "Next.js", iconColor: "#080808" },
    { icon: <SiHtml5 />, name: "HTML5", iconColor: "#e5532f" },
    { icon: <SiCss3 />, name: "CSS3", iconColor: "#2d53e5" },
    { icon: <SiNodedotjs />, name: "Node.js", iconColor: "#8ec719" },
    { icon: <SiExpress />, name: "Express", iconColor: "#02040a" },
    { icon: <SiMysql />, name: "MySQL", iconColor: "#1e6997" },
    { icon: <SiServerless />, name: "Serverless", iconColor: "#f15952" },
    { icon: <SiDotnet />, name: ".NET Core", iconColor: "#5732d6" },
    { icon: <FaAws />, name: "AWS", iconColor: "#ff9c15" },
    { icon: <SiChakraui />, name: "ChakraUI", iconColor: "#51cac5" },
    { icon: <SiGit />, name: "Git", iconColor: "#f1563b" },
    { icon: <FaGithub />, name: "GitHub", iconColor: "#383737" },
    { icon: <FaDocker />, name: "Docker", iconColor: "#1C63ED" },
    { icon: <FaFigma />, name: "Figma", iconColor: "#874FFF" },
    { icon: <FaBootstrap />, name: "Bootstrap", iconColor: "#6E2CF3" },

    // {
    //   icon: <SiMaterialdesign />,
    //   name: "Material Design",
    //   iconColor: "#13689e",
    // },
  ];

  return (
    <Flex w="100%" direction={"column"} position={"relative"}>
      <Heading
        size={"4xl"}
        mb="30px"
        _after={{
          content: '""',
          position: "absolute",
          left: "0",
          top: "55px",
          height: "5px",
          width: "40px",
          backgroundColor: "tertiary",
          borderRadius: "3px",
        }}
      >
        About Me
      </Heading>

      <Text>
        I’m a passionate computer science graduate student at{" "}
        <Link href="https://www.iit.edu/" target={"_blank"} outline={"none"}>
          <Text as="span" color={"tertiary"} fontWeight={"500"}>
            Illinois Institute of Technology
          </Text>
        </Link>{" "}
        with over three years of experience in software development.
      </Text>
      <br />
      <Text>
        My journey includes building user-centric web applications, scalable
        backend systems, and cloud-based solutions. From designing dynamic
        interfaces to optimizing APIs, I’m driven by the challenge of solving
        complex problems through technology.
      </Text>

      <Heading size={"2xl"} my={"6"} fontWeight={600}>
        Tech Stack
      </Heading>
      <Flex
        mx="auto"
        gap={4}
        flexWrap={"wrap"}
        justifyContent={{ base: "center", md: "flex-start" }}
      >
        {technologies.map((tech, index) => (
          <TechBlock
            key={index}
            icon={tech.icon}
            name={tech.name}
            iconColor={tech.iconColor}
          />
        ))}
      </Flex>

      <Heading size={"2xl"} mt={"6"} fontWeight={600}>
        Activity
      </Heading>
      <Text my={"2"}>What I’ve recently listened and read.</Text>
      <Grid
        gridTemplateColumns={{ base: "1fr", md: "1fr 1fr" }}
        gap={"20px"}
        my={"2"}
      >
        <RecentlyRead />
        <RecentlyPlayed />
      </Grid>

      {/*<Flex
        gap={4}
        mb={8}
        flexDir={{ base: "column", md: "row" }}
        w="100%"
        flexWrap={"wrap"}
        justifyContent={"center"}
        alignItems={"center"}
      > */}
      {/* <ActivityCard
          type="NOW_PLAYING"
          title="Two Faced"
          subtitle="Linkin Park"
          image="/song-cover.webp"
          w="50%"
        />
        <ActivityCard
          type="FINISHED"
          title="Atomic Habits"
          subtitle="James Clear"
          image="/book-cover.jpg"
          w="50%"
        />
        <ActivityCard
          type="FINISHED"
          title="Atomic Habits"
          subtitle="James Clear"
          image="/book-cover.jpg"
          w="50%"
        /> */}
      {/* </Flex> */}
    </Flex>
  );
}
