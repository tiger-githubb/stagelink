import React from 'react';
import { signOut, getAuth } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Flex,
  Text,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavBar = () => {
  // const { colorMode, toggleColorMode } = useColorMode();
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
    <Box bg="gray.800" px={4} py={3}>
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Text fontSize="xl" fontWeight="bold" color="white">
          <strong>Stage</strong>Link
        </Text>

        {/* Hamburger menu for mobile */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
          icon={<HamburgerIcon />}
          variant="ghost"
          color="white"
        />

        {/* Drawer for mobile */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent bg="gray.800" color="white">
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>
              <DrawerBody>
                <VStack spacing={4}>
                  <Text
                    as={Link}
                    to="/stage"
                    color="gray.400"
                    _hover={{ color: 'white' }}
                  >
                    Stage
                  </Text>
                  <Text
                    as={Link}
                    to="/entreprise"
                    color="gray.400"
                    _hover={{ color: 'white' }}
                  >
                    Entreprise
                  </Text>
                  <Text
                    as={Link}
                    to="/a-propos"
                    color="gray.400"
                    _hover={{ color: 'white' }}
                  >
                    A propos
                  </Text>
                  <Text
                    as={Link}
                    to="/contact"
                    color="gray.400"
                    _hover={{ color: 'white' }}
                  >
                    Contact
                  </Text>
                  <Text
                    as={Link}
                    to="/blog"
                    color="gray.400"
                    _hover={{ color: 'white' }}
                  >
                    Blog
                  </Text>
                  <Text
                    as={Link}
                    to="/login"
                    color="gray.400"
                    _hover={{ color: 'white' }}
                  >
                    Connexion
                  </Text>
                  <Text
                    as={Link}
                    to="/signup"
                    color="gray.400"
                    _hover={{ color: 'white' }}
                  >
                    Inscription
                  </Text>
                  <Text
                    color="gray.400"
                    _hover={{ color: 'white' }}
                    onClick={handlelogout}
                    cursor="pointer"
                  >
                    Deconnexion
                  </Text>
                </VStack>
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default NavBar;
