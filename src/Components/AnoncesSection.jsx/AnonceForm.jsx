import React, { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast, Select } from '@chakra-ui/react';
import { collection, addDoc } from 'firebase/firestore';

const AnnonceForm = ({ db }) => {
  const [categorie, setCategorie] = useState('');
  const [compensationCarburant, setCompensationCarburant] = useState('');
  const [description, setDescription] = useState('');
  const [enterprise, setEnterprise] = useState('/enterprise/name');
  const [exigences, setExigences] = useState(['']);
  const [gratification, setGratification] = useState('');
  const [lastUpdate, setLastUpdate] = useState('');
  const [localisation, setLocalisation] = useState('');
  const [localisationPrecise, setLocalisationPrecise] = useState('/enterprise/localisation');
  const [logoEnterprise, setLogoEnterprise] = useState('');
  const [tag1, setTag1] = useState('');
  const [tag2, setTag2] = useState('');
  const [title, setTitle] = useState('');
  const [validite, setValidite] = useState('');

  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Enregistrement des données d'annonce dans Firebase avec clé primaire auto-générée
      const docRef = await addDoc(collection(db, 'annonces'), {
        categorie: categorie,
        compensation_carburant: compensationCarburant === 'true',
        description: description,
        enterprise: enterprise,
        exigences: exigences,
        gratification: gratification === 'true',
        lastUpdate: lastUpdate,
        localisation: localisation,
        localisation_precise: localisationPrecise,
        logo_enterprise: logoEnterprise,
        tag1: tag1,
        tag2: tag2,
        title: title,
        validite: parseInt(validite),
      });

      console.log('Document ID:', docRef.id);

      // Message de succès
      toast({
        title: 'Annonce enregistrée',
        description: 'Votre annonce a été enregistrée avec succès.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Erreur lors de l\'enregistrement de l\'annonce:', error);

      // Message d'erreur
      toast({
        title: 'Erreur',
        description: 'Une erreur s\'est produite lors de l\'enregistrement de l\'annonce.',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Formulaire d'annonce
      </Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="categorie" mb={4} isRequired>
          <FormLabel>Catégorie:</FormLabel>
          <Input
            type="text"
            value={categorie}
            onChange={(e) => setCategorie(e.target.value)}
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
        <FormControl id="enterprise" mb={4} isRequired>
          <FormLabel>Enterprise:</FormLabel>
          <Input
            type="text"
            value={enterprise}
            onChange={(e) => setEnterprise(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="exigences" mb={4} isRequired>
          <FormLabel>Exigences:</FormLabel>
          {/* Vous pouvez utiliser une autre approche pour gérer la liste des exigences */}
          <Textarea
            value={exigences.join('\n')}
            onChange={(e) => setExigences(e.target.value.split('\n'))}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="lastUpdate" mb={4} isRequired>
          <FormLabel>Dernière mise à jour:</FormLabel>
          <Input
            type="text"
            value={lastUpdate}
            onChange={(e) => setLastUpdate(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="localisation" mb={4} isRequired>
          <FormLabel>Localisation:</FormLabel>
          <Input
            type="text"
            value={localisation}
            onChange={(e) => setLocalisation(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="localisationPrecise" mb={4} isRequired>
          <FormLabel>Localisation précise:</FormLabel>
          <Input
            type="text"
            value={localisationPrecise}
            onChange={(e) => setLocalisationPrecise(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="logoEnterprise" mb={4} isRequired>
          <FormLabel>Logo de l'entreprise:</FormLabel>
          <Input
            type="text"
            value={logoEnterprise}
            onChange={(e) => setLogoEnterprise(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="tag1" mb={4} isRequired>
          <FormLabel>Tag 1:</FormLabel>
          <Input
            type="text"
            value={tag1}
            onChange={(e) => setTag1(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="tag2" mb={4} isRequired>
          <FormLabel>Tag 2:</FormLabel>
          <Input
            type="text"
            value={tag2}
            onChange={(e) => setTag2(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="title" mb={4} isRequired>
          <FormLabel>Titre:</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            focusBorderColor="blue.300"
            required
          />
        </FormControl>
        <FormControl id="validite" mb={4} isRequired>
          <FormLabel>Validité:</FormLabel>
          <Input
            type="number"
            value={validite}
            onChange={(e) => setValidite(e.target.value)}
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

export default AnnonceForm;
