"use client";
import { WorkItem } from "@/components/WorkItem";
import {
  Flex,
  Text,
  Heading,
  Box,
  VStack,
  Icon,
  List,
  useToken,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { LuGraduationCap } from "react-icons/lu";

export const ExperienceItem = ({
  company,
  position,
  location,
  date,
  children,
  _notLast,
}) => {
  const [tertiaryColor] = useToken("colors", ["secondary"]);
  return (
    <Box
      position="relative"
      pl={6}
      pb={8}
      borderLeft="2px"
      borderColor="gray.700"
      _notLast={_notLast}
    >
      <Box
        position="absolute"
        left="0px"
        top="12px"
        w="8px"
        h="8px"
        borderRadius="full"
        bg={"tertiary"}
        boxShadow={`0 0 0 6px ${tertiaryColor}`}
      />
      <VStack align="stretch" gap="2px" ml="20px">
        <Flex justify="space-between" direction={"column"}>
          <Text fontSize="xl" fontWeight="semibold">
            {position}
          </Text>
        </Flex>
        <Flex align="center" gap={"10px"}>
          <Text color={"tertiary"} fontSize="lg" m="0">
            {company}
          </Text>
          {/* <Box color="secondary">
            <FaCircle size={"8px"} />
          </Box> */}
          @<Text color={"tertiary"}>{location}</Text>
        </Flex>
        <Text
          p="5px"
          px="10px"
          bgColor="secondary"
          w="fit-content"
          borderRadius="15px"
          fontSize="12px"
          textTransform="uppercase"
          mt="3px"
        >
          {date}
        </Text>

        <Box color="gray.300" fontSize="md" pt={2}>
          {children}
        </Box>
      </VStack>
    </Box>
  );
};

export default function Resume() {
  const EXPERIENCE_DATA = [
    {
      title: "Web Developer",
      organisation: "ACM, Illinois Tech",
      timePeriod: "Nov 2024 - Present",
      location: "Chicago, USA",
      activites: [
        "Designed and developed the website for the hackathon event, ScarletHacks.",
        "Used NextJS and Chakra UI to build the website.",
        "Automated deployment using GitHub Actions.",
      ],
    },
    {
      title: "Senior Software Engineer",
      organisation: "Presidio",
      timePeriod: "Sep 2023 - Jun 2024",
      location: "Chennai, India",
      activites: [
        "Built and refactored several UI components using VueJs and ReactJs.",
        "Designed multiple REST APIs using NodeJS and .NET Core.",
        "Leveraged AWS as a cloud provider to deploy and manage apps.",
        "Created and managed SQL scripts for a few processes that involved updating/removing data from SQL server DB.",
        "Developed an automation script with Puppeteer, enhancing the developer workflow thereby significantly reducing time spent on repetitive tasks by 75%.",
      ],
    },
    {
      title: "Software Engineer",
      organisation: "Presidio",
      timePeriod: "JUL 2021 - sep 2023",
      location: "Chennai, India",
      activites: [
        "Used Vue and NextJS as frontend technologies to develop the user interface by following the coding standards and the UX design templates.",
        "Developed backend APIs with NodeJS using the serverless framework.",
        "Utilised DynamoDB and RDS as the database and used its SDK for making operations to manipulate the data persisted on DB.",
        "Worked with a few AWS services like DynamoDB, SES, Lambda, S3 and Cloudwatch.",
        "Used Material, Bootstrap and TailwindCSS as UI libraries for creating reusable frontend components.",
      ],
    },
    {
      title: "Software Engineer Trainee",
      organisation: "Presidio",
      timePeriod: "SEP 2020 - JUN 2021",
      location: "Chennai, India",
      activites: [
        "Developed a Hiring Management System to streamline candidate management, meeting scheduling, and feedback processes for the HR department.",
        "Engaged in the entire product life cycle, spanning from the initial gathering of requirements to the final stages of system testing and deployment.",
        "Involved in both frontend and backend development.",
        "Upheld coding standards and confirmed functionality through the inclusion of test cases.",
      ],
    },
  ];

  const VOLUNTEER_DATA = [
    {
      title: "Associate Programmer",
      organisation: "TEDx Illinois Tech",
      timePeriod: "Oct 2024 - Nov 2024",
      location: "Chicago, USA",
      activites: [
        "Led website changes, guaranteeing timely event information and a seamless user experience.",
        "Assisted the organizing team by coordinating sponsorship outreach, engaging with alumni for event support, and managing logistical tasks and ensuring smooth event execution.",
      ],
    },
  ];

  const EDUCATION_DATA = [
    {
      title: "Master of Computer Science",
      organisation: "Illinois Institute of Technology",
      timePeriod: "Aug 2024 - May 2026",
      location: "Chicago, USA",
      activites: [
        "GPA: 3.83/4.0",
        "Relevant Coursework: Algorithms, Database Systems, Machine Learning, Software Engineering, Computer Networks.",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex w="100%" direction={"column"} position={"relative"}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
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
            Resume
          </Heading>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <WorkItem
            icon={<LuGraduationCap />}
            title="Education"
            data={EDUCATION_DATA}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <WorkItem
            icon={<MdOutlineWorkOutline />}
            title="Work Experience"
            data={EXPERIENCE_DATA}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <WorkItem
            icon={<MdOutlineVolunteerActivism />}
            title="Volunteer Experience"
            data={VOLUNTEER_DATA}
          />
        </motion.div>
      </Flex>
    </motion.div>
  );
}
