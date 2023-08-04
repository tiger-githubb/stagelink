import React from 'react';
import { signOut, getAuth } from 'firebase/auth';
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
  useBreakpointValue, // Importez useBreakpointValue
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const auth = getAuth();
  const handlelogout = async () => {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  // Utilisez useBreakpointValue pour définir le bouton de menu
  const displayMenuButton = useBreakpointValue({ base: true, md: false });

  return (
    <Box bg="brand.primary" px={4} py={3}>
      <Flex justify="space-between" align="center">
        {/* Logo */}
        <Text fontSize="xl" fontWeight="bold" color="white">
          <strong>Stage</strong>Link
        </Text>

        {/* Affichez le bouton de menu uniquement sur mobile */}
        {displayMenuButton && (
          <IconButton
            onClick={isOpen ? onClose : onOpen}
            icon={<HamburgerIcon />}
            variant="ghost"
            color="white"
            display={{ base: 'flex', md: 'none' }}
          />
        )}

        {/* Affichez le menu complet sur PC */}
        {!displayMenuButton && (
          <Box
            as="nav"
            display={{ base: 'none', md: 'flex' }}
            align="center"
            color="white" // Texte en blanc
          >
            <Link to="/stage" mx={2}>
              Stage
            </Link>
            <Link to="/entreprise" mx={2}>
              Entreprise
            </Link>
            <Link to="/a-propos" mx={2}>
              A propos
            </Link>
            <Link to="/contact" mx={2}>
              Contact
            </Link>
            <Link to="/blog" mx={2}>
              Blog
            </Link>
            <Link to="/login" mx={2}>
              Connexion
            </Link>
            <Link to="/signup" mx={2}>
              Inscription
            </Link>
            <Text mx={2} cursor="pointer" onClick={handlelogout}>
              Deconnexion
            </Text>
          </Box>
        )}
      </Flex>

      {/* Drawer pour le menu hamburger */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} display={{ base: 'block', md: 'none' }}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" color="white">
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} color="white"> {/* Texte en blanc */}
                <Link to="/stage" _hover={{ color: 'white' }}>
                  Stage
                </Link>
                <Link to="/entreprise" _hover={{ color: 'white' }}>
                  Entreprise
                </Link>
                <Link to="/a-propos" _hover={{ color: 'white' }}>
                  A propos
                </Link>
                <Link to="/contact" _hover={{ color: 'white' }}>
                  Contact
                </Link>
                <Link to="/blog" _hover={{ color: 'white' }}>
                  Blog
                </Link>
                <Link to="/login" _hover={{ color: 'white' }}>
                  Connexion
                </Link>
                <Link to="/signup" _hover={{ color: 'white' }}>
                  Inscription
                </Link>
                <Text _hover={{ color: 'white' }} onClick={handlelogout} cursor="pointer">
                  Deconnexion
                </Text>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default NavBar;
