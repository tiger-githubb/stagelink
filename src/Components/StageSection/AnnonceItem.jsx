import React from 'react';
import { Box, Flex, Text, Badge, Avatar, Heading, Stack, Button, useColorModeValue } from '@chakra-ui/react';
import { FiAlertCircle } from 'react-icons/fi';
const AnnonceItem = ({ annonce }) => {
    return (
        <Box
          maxW={'320px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'lg'}
          p={6}
          textAlign={'center'}
          position="relative" // Ajoutez position relative pour le positionnement absolu de l'icône d'annonce
        >
          {/* Icône d'annonce */}
          <Box
            position="absolute"
            top="-10px" // Ajustez la valeur top pour centrer l'icône verticalement
            right="10px" // Ajustez la valeur right pour centrer l'icône horizontalement
            bg="blue.500"
            color="white"
            borderRadius="full"
            p={3} // Ajustez la valeur p pour agrandir ou réduire la taille de l'icône
          >
            <FiAlertCircle size={18} />
          </Box>
          <Heading fontSize={'2xl'} fontFamily={'body'}>
            {annonce.title}
          </Heading>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        {annonce.tag1} | {annonce.tag2}
      </Text>
      <Text fontWeight={600} color={'gray.500'} mb={4}>
        {annonce.enterprise}
      </Text>
      <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
        {annonce.description}
      </Text>

      <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
        <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
          {annonce.localisation}
        </Badge>
        <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
          {annonce.validite}
        </Badge>
      </Stack>

      <Stack mt={8} direction={'row'} spacing={4}>
        <Button flex={1} fontSize={'sm'} rounded={'full'} _focus={{ bg: 'gray.200' }}>
          Voir l'entreprise
        </Button>
        <Button
          flex={1}
          fontSize={'sm'}
          rounded={'full'}
          bg={'blue.400'}
          color={'white'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{ bg: 'blue.500' }}
          _focus={{ bg: 'blue.500' }}>
          Voir l'offre
        </Button>
      </Stack>
    </Box>
  );
};

export default AnnonceItem;
