import React, { ReactNode } from 'react';
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

// Logo
const Logo = (props) => {
  // Votre code de logo SVG
};

// Bouton de réseau social
const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <IconButton
      as="a"
      href={href}
      bg={useColorModeValue('brand.orange', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      aria-label={label}
      icon={children}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('white', 'whiteAlpha.200'),
      }}
    />
  );
};

// En-tête de liste
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

// Composant Footer
const Footer = () => {
  // Tableau d'icônes de réseaux sociaux
  const socialIcons = [
    { label: 'Twitter', icon: FaTwitter, href: '#' },
    { label: 'YouTube', icon: FaYoutube, href: '#' },
    { label: 'Instagram', icon: FaInstagram, href: '#' },
  ];

  return (
    <Box
    bg="brand.primary"
    color={useColorModeValue('white', 'white.200')}
    >
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>© 2022 Chakra Templates. All rights reserved</Text>
            <Stack direction={'row'} spacing={6}>
              {socialIcons.map((iconData) => (
                <SocialButton key={iconData.label} label={iconData.label} href={iconData.href}>
                  <iconData.icon />
                </SocialButton>
              ))}
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Box as="a" href={'#'}>
              About us
            </Box>
            <Box as="a" href={'#'}>
              Blog
            </Box>
            <Box as="a" href={'#'}>
              Contact us
            </Box>
            <Box as="a" href={'#'}>
              Pricing
            </Box>
            <Box as="a" href={'#'}>
              Testimonials
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Support</ListHeader>
            <Box as="a" href={'#'}>
              Help Center
            </Box>
            <Box as="a" href={'#'}>
              Terms of Service
            </Box>
            <Box as="a" href={'#'}>
              Legal
            </Box>
            <Box as="a" href={'#'}>
              Privacy Policy
            </Box>
            <Box as="a" href={'#'}>
              Satus
            </Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Stay up to date</ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100brand.textcolor', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              
              <IconButton
                bg={useColorModeValue('green.400', 'green.800')}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: 'green.600',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
