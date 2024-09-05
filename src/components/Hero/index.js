import {
  Badge,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";

export default function Hero() {
  return (
    <Flex
      py={{ base: 10, md: 20 }}
      px={{ base: 5, md: "300px" }}
      gap={8}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={{ base: "column", md: "row" }}
      bgColor={"blackAlpha.100"}
    >
      <Image
        src="https://ui-avatars.com/api/?name=Aditya Dewantara"
        alt="logo"
        w={"300px"}
        borderRadius={"50%"}
      />
      <VStack alignItems={{ base: "center", md: "flex-start" }}>
        <Heading as={"h1"} textAlign={"center"}>
          Aditya Dewantara Fadillah
        </Heading>
        <Text fontSize={"20px"} as={"i"}>
          Fullstack Web Developer
        </Text>
        <HStack>
          <Badge>Laravel</Badge>
          <Badge colorScheme="green">NextJS</Badge>
          <Badge colorScheme="red">Javascript</Badge>
          <Badge colorScheme="purple">Typescript</Badge>
        </HStack>
        <Button colorScheme={"blue"} size={"sm"}>
          Download My CV
        </Button>
      </VStack>
    </Flex>
  );
}
