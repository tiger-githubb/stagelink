import React, { useEffect, useState } from 'react';
import { Box, Heading ,Grid,} from '@chakra-ui/react';

import { getFirestore, collection, getDocs } from 'firebase/firestore';
import AnnonceItem from './AnnonceItem'; // Assurez-vous que le chemin d'accès à AnnonceItem est correct

const Stage = () => {
  const [annonces, setAnnonces] = useState([]);

  useEffect(() => {
    // Récupérer les données des annonces depuis Firestore
    const fetchAnnonces = async () => {
      const db = getFirestore();
      const annoncesRef = collection(db, 'annonces');
      const querySnapshot = await getDocs(annoncesRef);
      const annoncesData = querySnapshot.docs.map((doc) => doc.data());
      setAnnonces(annoncesData);
    };

    fetchAnnonces();
  }, []);

  return (
<Box mx="auto" maxW={{ base: '90%', md: '80%', xl: '1200px' }} display="flex" justifyContent="center">
      <Grid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' }}
        gap={6}
      >
        {annonces.map((annonce) => (
          <AnnonceItem key={annonce.id} annonce={annonce} />
        ))}
      </Grid>
    </Box>
  );
};

export default Stage;
