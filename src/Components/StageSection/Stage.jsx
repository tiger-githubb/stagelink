import React from 'react';
import { BiTimeFive } from 'react-icons/bi';
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';
import logo1 from '../../assets/skm pepiniere.png';
import { useTheme } from '@chakra-ui/react';


const Data = [
  // ... Les données restantes restent inchangées ...
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  },
  {
    id:1,
    image: logo1,
    title: 'Developpeur Mobile',
    time: 'Now',
    location: 'Lome',
    desc:'  Lorem ipsum dolor sit, amet consectetur adipisicing elit. esse autem ex voluptas minus magni iste porro eum numquam maxime?',
    company: 'TechPro.co'
  }
];

export const Stage = () => {
  return (
    <Box>
      <Flex className='jobContainer' gap='10' justify='center' flexWrap='wrap' py='10'>
        {Data.map(({ id, image, title, time, location, desc, company }) => {
          return (
            <Box
              key={id}
              className='group group/item singleJob'
              w='250px'
              p='15px'
              bg='white'
              rounded='md'
              boxShadow='lg'
              _hover={{
                bg: 'brand.primary',
                color: 'white',
                '.company span': {
                  color: 'white',
                },
                '.group-hover/item:text-textcolor': {
                  color: 'white',
                },
              }}
            >
              <Flex justify='space-between' alignItems='center' gap='4'>
                <Text
                  className='text-[16px] font-semibold text-titlecolor'
                  _groupHover={{
                    color: 'white',
                  }}
                >
                  {title}
                </Text>
                <Flex alignItems='center' gap='1' color='#ccc'>
                  <BiTimeFive />
                  {time}
                </Flex>
              </Flex>
              <Text color='#ccc'>{location}</Text>

              <Text className='text-[13px] text-[#959595]' pt='20px' borderTop='2px' mt='20px'>
                {desc}
              </Text>

              <Flex className='company' alignItems='center' gap='2'>
                <Image src={image} alt='Company logo' w='20%' />
                <Text className='text-[14px] py-[1rem] block'>{company}</Text>
              </Flex>

              <Button
                border='2px'
                rounded='md'
                p='10px'
                w='full'
                fontSize='14px'
                fontWeight='semibold'
                color='textcolor'
                _hover={{
                  bg: 'white',
                  color: 'brand.primary',
                }}
                className='group-hover/item:text-textcolor'
              >
                Postuler maintenant
              </Button>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};

export default Stage;
