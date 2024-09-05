import { Flex, Heading, Text, VStack } from "@chakra-ui/react";

export default function About() {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
      mt={10}
      px={{ base: 5, md: "200px" }}
    >
      <Heading as={"h2"} _hover={{ textDecoration: "underline" }}>
        About Me
      </Heading>

      <VStack mt={5} alignItems={"flex-start"}>
        <Text fontSize={"20px"}>
          Sup Reader! I'm interested in Backend since I was in Vocational High
          School, because I'm majoring in Software Engineering. Then after
          graduating in 2016 I continued to work for a company in Bandung which
          is engaged in Software Development. And also taking college while
          working at Widyatama University.
        </Text>

        <Text>Email : T3hC1@example.com</Text>
        <Text>Phone : +6285158852609</Text>
      </VStack>
    </Flex>
  );
}
