import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {
  Box,
  Center,
  Heading,
  VStack,
  Text,
} from '@chakra-ui/react';

const ProfileShow = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les données à partir de Firebase
    const fetchData = async () => {
      const db = getFirestore();
      const dataCollection = collection(db, 'entreprises'); // Remplacez "votre_collection" par le nom de votre collection dans Firebase
      const dataSnapshot = await getDocs(dataCollection);
      const dataArray = dataSnapshot.docs.map(doc => doc.data());
      setData(dataArray);
    };

    fetchData();
  }, []);

  return (
    <Box>
      <Center>
        <VStack spacing={4}>
          <Heading as="h3" size="lg">
            Profil de l'entreprise
          </Heading>
          {data.map((item, index) => (
            <Box key={index} p={4} bg="white" shadow="md" rounded="md">
              <Text>CFE Card Number: {item.cfe_card}</Text>
              <Text>Description: {item.description}</Text>
              <Text>Localisation: {item.localisation.latitude}, {item.localisation.longitude}</Text>
              <Text>Nom: {item.name}</Text>
              <Text>Numéro de téléphone: {item.phone_number}</Text>
              {/* Vous pouvez afficher d'autres données ici en fonction de votre structure */}
            </Box>
          ))}
        </VStack>
      </Center>
    </Box>
  );
};

export default ProfileShow;
