import { ExperienceItem } from "@/app/(routes)/resume/page";
import { Flex, Heading, VStack, Text, Icon, List } from "@chakra-ui/react";
import { FaCircle } from "react-icons/fa";

export const WorkItem = ({ title, icon, data }) => {
  return (
    <Flex direction={"column"}>
      <Flex gap={"16px"} alignItems={"center"} my={"30px"}>
        <Flex
          fontSize={"25px"}
          borderRadius={"15px"}
          color={"tertiary"}
          width={"45px"}
          height={"45px"}
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow="0px 4px 20px rgba(0, 0, 0, 0.25)"
          position="relative"
          _before={{
            content: '""',
            position: "absolute",
            top: "-1px",
            left: "-1px",
            right: "-1px",
            bottom: "-1px",
            borderRadius: "inherit",
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.05) 0%, transparent 100%)",
          }}
          _after={{
            content: '""',
            position: "absolute",
            top: "45px",
            left: "21.5px",
            width: "1px",
            height: "100%",
            background: "secondary",
          }}
        >
          <Icon size={"20px"}>{icon}</Icon>
        </Flex>

        <Heading size={"2xl"} fontWeight={"700"}>
          {title}
        </Heading>
      </Flex>

      {data != null && data.length > 0 && (
        <VStack align="stretch" spacing={6} ml="18px">
          {data.map((e, index) => {
            return (
              <ExperienceItem
                company={e.organisation}
                position={e.title}
                location={e.location}
                date={e.timePeriod}
                key={index}
                _notLast={{
                  _before: {
                    content: '""',
                    position: "absolute",
                    top: "20px",
                    left: "3.5px",
                    width: "1px",
                    height: "100%",
                    background: "secondary",
                  },
                }}
              >
                <VStack align="stretch" spacing={3}>
                  {e.activites.length > 0 && (
                    <List.Root spacing={3} display={"flex"} gap={"10px"}>
                      {e.activites.map((activity, index) => {
                        return (
                          <List.Item
                            display="flex"
                            alignItems="start"
                            key={index}
                          >
                            <List.Indicator asChild size="6px">
                              <FaCircle />
                            </List.Indicator>
                            <Text color={"title.100"} display="inline">
                              {activity}
                            </Text>
                          </List.Item>
                        );
                      })}
                    </List.Root>
                  )}
                </VStack>
              </ExperienceItem>
            );
          })}
        </VStack>
      )}
    </Flex>
  );
};
