import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import logo1 from '../../assets/skm pepiniere.png';
import {
  Heading,
  Avatar,
  Center,
  Stack,
  Link,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { color } from 'framer-motion';

const data = [
  {
    id: 1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co',
    subcompany: 'techio'
  },
  {
    id: 1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co',
    subcompany: 'techio'
  },
  {
    id: 1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co',
    subcompany: 'techio'
  },
  {
    id: 1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co',
    subcompany: 'techio'
  },
  {
    id: 1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co',
    subcompany: 'techio'
  },
  {
    id: 1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co',
    subcompany: 'techio'
  },
  {
    id: 1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co',
    subcompany: 'techio'
  },
  {
    id: 1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co',
    subcompany: 'techio'
  },
  // Ajoutez ici d'autres objets de données si nécessaire
];

export const Stage = () => {
  return (
    <Box >
      <Flex className='jobContainer' gap='10' justify='center' flexWrap='wrap' py='10' >
        {data.map(({ id, image, title, time, location, desc, company, subcompany }) => {
          return (
            <Center key={id} py={6} >
              <Box
              _hover={{ bg: '#CAC9B8' }} // Arrière-plan au survol
              transition="background-color 0.3s ease"
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}
              >
                <Avatar
                  size={'xl'}
                  src={image}
                  mb={4}
                  pos={'relative'}
                  _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                  }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                  {company}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                  {subcompany}
                </Text>
                <Text textAlign={'center'} color={useColorModeValue('gray.700', 'gray.400')} px={3}>
                  {desc}
                </Text>
        
                <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                  
                  <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                    {location}
                  </Badge>
                  <Badge px={2} py={1} bg={useColorModeValue('gray.50', 'gray.800')} fontWeight={'400'}>
                    {time}
                  </Badge>
                </Stack>
        
                <Stack mt={8} direction={'row'} spacing={4}>
                  <Button flex={1} fontSize={'sm'} rounded={'full'} _focus={{ bg: 'gray.200' }}>
                    Consulte
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
                    Follow
                  </Button>
                </Stack>
              </Box>
            </Center>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Stage;
