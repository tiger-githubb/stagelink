import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import {
  Box,
  Center,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  Text,
  useToast,
  InputGroup,
  InputLeftElement,
  Icon,
} from '@chakra-ui/react';
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineUser, HiOutlineX,HiLockClosed, HiMailOpen } from 'react-icons/hi';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const auth = getAuth();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      let errorMessage = "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.";

      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = "Cette adresse e-mail est déjà associée à un compte. Veuillez vous connecter ou utiliser une autre adresse e-mail.";
          break;
        case 'auth/invalid-email':
          errorMessage = "L'adresse e-mail saisie est invalide. Veuillez saisir une adresse e-mail valide.";
          break;
        case 'auth/weak-password':
          errorMessage = "Le mot de passe doit comporter au moins 6 caractères.";
          break;
        default:
          errorMessage = "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.";
          break;
      }

      toast({
        title: 'Erreur lors de l\'inscription',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box bg="blue.100">
      <Center h="100vh">
        <Box p={6} bg="white" shadow="md" rounded="md" w={{ base: '90%', sm: '400px' }}>
          <VStack spacing={4}>
            <Heading as="h3" size="lg">
              Inscription
            </Heading>
            <form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <FormControl isRequired>
                <FormLabel>Email:</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={HiMailOpen} color="black" />
                  </InputLeftElement>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    focusBorderColor="blue.300"
                    required
                  />
                </InputGroup>
              </FormControl>
              <FormControl mt={4} isRequired>
                <FormLabel>Password:</FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <Icon as={HiLockClosed} color="black" />
                  </InputLeftElement>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    focusBorderColor="blue.300"
                    required
                  />
                  <InputLeftElement width="4.5rem" pointerEvents="none">
                    {/* <Icon as={showPassword ? HiOutlineEyeOff : HiOutlineEye} color="gray.400" /> */}
                  </InputLeftElement>
                </InputGroup>
              </FormControl>
              <Center mt={4}>
                <Button type="submit" leftIcon={<HiOutlineUser />} colorScheme="blue" size="md" fontWeight="bold" width="100%">
                  S'inscrire
                </Button>
                <Button
                  leftIcon={<HiOutlineX />}
                  ml={2}
                  colorScheme="red"
                  size="md"
                  fontWeight="bold"
                  width="100%"
                  onClick={() => {
                    setEmail('');
                    setPassword('');
                  }}
                >
                  Annuler
                </Button>
              </Center>
            </form>
            <Text>
              J'ai déjà un compte{' '}
              <Link to="/login" style={{ fontWeight: 'bold', color: 'blue.600' }}>
                Connexion
              </Link>
            </Text>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Signup;
