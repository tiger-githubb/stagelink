import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import app from '../firebase';
import { getFirestore, collection, where, query, getDocs } from 'firebase/firestore';

import AnnonceForm from '../Components/AnoncesSection.jsx/AnonceForm';
import AnnonceShow from '../Components/AnoncesSection.jsx/AnonceShow';

const Annonces = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();
  const annoncesCollectionRef = collection(db, 'annonces'); // Référence à la collection "annonces"

  return (
    <div>
      <AnnonceForm db={db} annoncesCollectionRef={annoncesCollectionRef} />
      <AnnonceShow db={db} annoncesCollectionRef={annoncesCollectionRef} />
    </div>
  );
};

export default Annonces;
