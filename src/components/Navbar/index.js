import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      p={5}
      boxShadow={"md"}
      px={{ base: 5, md: "200px" }}
    >
      <Image
        src="https://ui-avatars.com/api/?name=Aditya Dewantara"
        alt="logo"
      />
      <Flex gap={5} display={{ base: "none", md: "flex" }}>
        <Text>Profile</Text>
        <Text>Education</Text>
        <Text>Experiences</Text>
        <Text>Projects</Text>
      </Flex>

      <Menu>
        <MenuButton
          as={Button}
          bgColor={"transparent"}
          _active={{ bgColor: "transparent" }}
          display={{ base: "flex", md: "none" }}
        >
          <HamburgerIcon />
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
}
