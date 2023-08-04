import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Flex,
  VStack,
  Text,
  IconButton,
  Icon,
  Divider,
} from '@chakra-ui/react';
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileAdd,
} from 'react-icons/ai';

const Sidebar = () => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      h="100vh"
      w="200px"
      bg="blue.500"
      color="white"
      display={{ base: 'none', md: 'block' }}
      boxShadow="xl"
    >
      <Flex direction="column" h="100%" justify="space-between">
        <VStack spacing="4" align="center" pt="8">
          <Box>
            <Text fontSize="xl" fontWeight="bold">
              StageLink
            </Text>
          </Box>
          <Link to="/">
            <Flex align="center">
              <Icon as={AiOutlineHome} fontSize="xl" mr="2" />
              <Text>Accueil</Text>
            </Flex>
          </Link>
          <Link to="/profile">
            <Flex align="center">
              <Icon as={AiOutlineUser} fontSize="xl" mr="2" />
              <Text>Profil</Text>
            </Flex>
          </Link>
          <Link to="/add-post">
            <Flex align="center">
              <Icon as={AiOutlineFileAdd} fontSize="xl" mr="2" />
              <Text>Ajouter une annonce</Text>
            </Flex>
          </Link>
        </VStack>
        <Divider my="8" borderColor="whiteAlpha.400" />
        <Flex justify="center" align="center" pb="8">
          <Text fontSize="sm">Votre entreprise</Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Sidebar;
