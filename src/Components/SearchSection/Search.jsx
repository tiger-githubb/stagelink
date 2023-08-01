import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  Stack,
  Select,
  useColorModeValue,
} from '@chakra-ui/react';
import { AiOutlineSearch, AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { FaMapMarkerAlt } from 'react-icons/fa';

export const Search = () => {
  return (
    <Box 
    //bg={'blue.50'}
      className='searchDiv grid gap-10 bg-[#F1F4F8] rounded-[10px]'
      p={['1rem', '2rem', '3rem']}
    >
      <form action=''>
        <Stack
          direction={['column', 'row']}
          align='center'
          justify={['center', 'space-between']}
          bg={useColorModeValue('white', '#F1F4F8')}
          rounded='8px'
          p='5'
          boxShadow='lg'
        >
          <Flex gap='2' align='center'>
            <AiOutlineSearch className='text-[35px] icon' />
            <Input
              type='text'
              className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Recherche de stage ...'
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-[#252b36] icon' />
          </Flex>

          <Flex gap='2' align='center'>
            <BsHouseDoor className='text-[25px] icon' />
            <Input
              type='text'
              className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Recherche par entreprise ...'
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-[#252b36] icon' />
          </Flex>

          <Flex gap='2' align='center'>
            <FaMapMarkerAlt className='text-[25px] icon' />
            <Input
              type='text'
              className='bg-transparent text-blue-500 focus:outline-none w-[100%]'
              placeholder='Recherche par lieu ...'
            />
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-[#252b36] icon' />
          </Flex>

          <Button
            className='bg-primary rounded-[10px]'
            color='white'
            px={['8', '10']}
            py={['3', '5']}
            cursor='pointer'
            _hover={{ bg: 'blue.300' }}
          >
            Recherche
          </Button>
        </Stack>

        <Stack
        direction={['column', 'row']}
        gap='4'
        align='center'
        justify='center'
        mt='5'
        boxShadow='md'
      >
        <Stack direction={['column', 'row']} spacing='2' align='center'>
          <Text className='text-[#808080] font-semibold'>Trier</Text>
          <Select name='' id='relevance' bg='white' rounded='5px' px='2' py='1'>
            <option value=''>Pertinence</option>
            <option value=''>Inclusive</option>
            <option value=''>Commencer avec</option>
            <option value=''>Contains</option>
          </Select>
        </Stack>

        <Stack direction={['column', 'row']} spacing='2' align='center'>
          <Text className='text-[#808080] font-semibold'>Type</Text>
          <Select name='' id='type' bg='white' rounded='5px' px='2' py='1'>
            <option value=''>Temps plein</option>
            <option value=''>En ligne</option>
            <option value=''>Contrat</option>
            <option value=''>Temps partiel</option>
          </Select>
        </Stack>

        <Stack direction={['column', 'row']} spacing='2' align='center'>
          <Text className='text-[#808080] font-semibold'>Niveau</Text>
          <Select name='' id='level' bg='white' rounded='5px' px='2' py='1'>
            <option value=''>Senior</option>
            <option value=''>Debutant</option>
            <option value=''>Intermediaire</option>
            <option value=''>Avancé</option>
          </Select>
        </Stack>

        <Text className='text-[#a1a1a1]'>Réinitialiser</Text>
      </Stack>
      </form>


    </Box>
  );
};

export default Search;
