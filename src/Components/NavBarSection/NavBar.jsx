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
  useBreakpointValue,
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

  // Vérifiez si l'utilisateur est connecté en vérifiant le localStorage
  const isUserLoggedIn = !!localStorage.getItem('token') && !!localStorage.getItem('user');

  console.log('isUserLoggedIn:', isUserLoggedIn); // Ajout d'un console log pour vérifier la valeur de isUserLoggedIn

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
          <Box as="nav" display={{ base: 'none', md: 'flex' }} align="center" color="white">
            <Text as={Link} to="/stage" mx={2} marginLeft="20px" marginRight="20px">
              Stage
            </Text>
            <Text as={Link} to="/entreprise" mx={2} marginLeft="20px" marginRight="20px">
              Entreprise
            </Text>
            <Text as={Link} to="/a-propos" mx={2} marginLeft="20px" marginRight="20px">
              A propos
            </Text>
            <Text as={Link} to="/contact" mx={2} marginLeft="20px" marginRight="20px">
              Contact
            </Text>
            <Text as={Link} to="/blog" mx={2} marginLeft="20px" marginRight="20px">
              Blog
            </Text>
            <Text as={Link} to="/login" mx={2} marginLeft="20px" marginRight="20px">
              Connexion
            </Text>
            <Text as={Link} to="/signup" mx={2} marginLeft="20px" marginRight="20px">
              Inscription
            </Text>
            {isUserLoggedIn && ( // Vérifiez si l'utilisateur est connecté
              <Text as={Link} to="/dashboard" mx={2} marginLeft="20px" marginRight="20px">
                Dashboard
              </Text>
            )}
            <Text mx={2} cursor="pointer" onClick={handlelogout} marginLeft="20px" marginRight="20px">
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
              <VStack spacing={4} color="white">
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
                {isUserLoggedIn && ( // Vérifiez si l'utilisateur est connecté
                  <Link to="/dashboard" _hover={{ color: 'white' }}>
                    Dashboard
                  </Link>
                )}
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
