import React from 'react';
import { signOut, getAuth } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import { ChakraProvider, Flex, Box, IconButton, useDisclosure, VStack, HStack, Text } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';


const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const auth = getAuth();
  const handlelogout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    navigate("/login");
  }
  return (
    <Flex
      bg="gray.800"
      color="white"
      px={4}
      py={3}
      align="center"
      justify="space-between"
    >
      {/* Logo */}
      <Box>
        <Text fontSize="lg" fontWeight="bold">My Website</Text>
      </Box>

      {/* Hamburger menu for mobile */}
      <IconButton
        display={{ base: "flex", md: "none" }}
        onClick={isOpen ? onClose : onOpen}
        icon={<HamburgerIcon />}
        variant="ghost"
      />

      {/* Navbar items */}
      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <HStack spacing={4}>
          <Text>Home</Text>
          <Text>About</Text>
          <Text>Contact</Text>
          {/* Add more menu items as needed */}
        </HStack>
      </Box>
    </Flex>
  );
};

export default NavBar;


