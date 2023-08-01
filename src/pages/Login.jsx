import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Center,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  VStack,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Icon,
  useToast,
} from '@chakra-ui/react';
import { HiOutlineEye, HiOutlineEyeOff, HiOutlineLogin,HiOutlineX ,HiLockClosed,HiMailOpen} from 'react-icons/hi';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // État pour afficher/masquer le mot de passe
  const auth = getAuth();
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    } catch (error) {
      console.log(error);
      let errorMessage = "Une erreur s'est produite lors de la connexion. Veuillez réessayer.";

      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = "L'adresse e-mail saisie est invalide. Veuillez saisir une adresse e-mail valide.";
          break;
        case 'auth/user-disabled':
          errorMessage = "Votre compte a été désactivé. Veuillez contacter l'administrateur du site.";
          break;
        case 'auth/user-not-found':
          errorMessage = "Aucun compte associé à cette adresse e-mail. Veuillez vous inscrire d'abord.";
          break;
        case 'auth/wrong-password':
          errorMessage = "Le mot de passe est incorrect. Veuillez réessayer.";
          break;
        default:
          errorMessage = "Une erreur s'est produite lors de la connexion. Veuillez réessayer.";
          break;
      }

      toast({
        title: 'Erreur lors de la connexion',
        description: errorMessage,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  // Fonction pour afficher/masquer le mot de passe
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // Fonction pour vider les champs du formulaire
  const handleClearFields = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Box bg="green.100">
      <Center h="100vh">
        <Box p={6} bg="white" shadow="md" rounded="md" w={{ base: '90%', sm: '400px' }}>
          <VStack spacing={4}>
            <Heading as="h3" size="lg">
              Connexion
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
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowPassword}>
                      {showPassword ? <Icon as={HiOutlineEyeOff} /> : <Icon as={HiOutlineEye} />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Center mt={4}>
                <Button type="submit"  leftIcon={<HiOutlineLogin />} colorScheme="blue" size="md" fontWeight="bold" width="100%">
                  Connexion
                </Button>
                <Button
                leftIcon={<HiOutlineX />}
                  ml={2}
                  colorScheme="red"
                  size="md"
                  fontWeight="bold"
                  width="100%"
                  onClick={handleClearFields}
                >
                  Annuler
                </Button>
              </Center>
            </form>
            <Box>
              Pas de compte{'   '}
              <Link to="/signup" style={{ fontWeight: 'bold', color: 'blue.600' }}>
                Creer un compte
              </Link>
            </Box>
          </VStack>
        </Box>
      </Center>
    </Box>
  );
};

export default Login;
