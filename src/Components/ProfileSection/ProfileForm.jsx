// ProfileForm.js
import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import { collection, addDoc } from 'firebase/firestore'; // Import correctement la fonction collection

const ProfileForm = ({ db }) => {
    const [cfeCard, setCfeCard] = useState('');
    const [description, setDescription] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const toast = useToast();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        // Enregistrement des données dans Firebase avec clé primaire auto-générée
        const docRef = await addDoc(collection(db, 'entreprises'), {
          cfe_card: cfeCard,
          description: description,
          localisation: {
            latitude: latitude,
            longitude: longitude,
          },
          name: name,
          phone_number: phoneNumber,
        });
  
        console.log('Document ID:', docRef.id);
  
        // Message de succès
        toast({
          title: 'Profil mis à jour',
          description: 'Vos informations ont été enregistrées avec succès.',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error('Erreur lors de l\'enregistrement des données:', error);
  
        // Message d'erreur
        toast({
          title: 'Erreur',
          description: 'Une erreur s\'est produite lors de l\'enregistrement des données.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    };
  return (
    <Box>
    <Heading as="h2" size="lg" mb={4}>
      Profil de l'entreprise
    </Heading>
    <form onSubmit={handleSubmit}>
        <FormControl id="cfeCard" mb={4} isRequired>
          <FormLabel>Numéro CFE Card:</FormLabel>
          <Input
            type="text"
            value={cfeCard}
            onChange={(e) => setCfeCard(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="description" mb={4} isRequired>
          <FormLabel>Description:</FormLabel>
          <Textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="latitude" mb={4} isRequired>
          <FormLabel>Latitude:</FormLabel>
          <Input
            type="text"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="longitude" mb={4} isRequired>
          <FormLabel>Longitude:</FormLabel>
          <Input
            type="text"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="name" mb={4} isRequired>
          <FormLabel>Nom:</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="phoneNumber" mb={4} isRequired>
          <FormLabel>Numéro de téléphone:</FormLabel>
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">
          Enregistrer
        </Button>
      </form>
    </Box>
  );
};

export default ProfileForm;

