import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const AnnonceShow = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();
  const annoncesCollectionRef = collection(db, 'annonces'); // Référence à la collection "annonces"
  const [annonces, setAnnonces] = useState([]);

  // Fonction pour récupérer les annonces depuis Firestore
  const fetchAnnonces = async () => {
    const q = query(annoncesCollectionRef);
    const querySnapshot = await getDocs(q);
    const annoncesData = querySnapshot.docs.map((doc) => doc.data());
    setAnnonces(annoncesData);
  };

  // Charger les annonces au chargement du composant
  useEffect(() => {
    fetchAnnonces();
  }, []);

  return (
    <div>
      <h2>Annonces</h2>
      {annonces.length === 0 ? (
        <p>Aucune annonce disponible</p>
      ) : (
        <ul>
          {annonces.map((annonce) => (
            <li key={annonce.id}>
              <h3>{annonce.title}</h3>
              <p>Catégorie: {annonce.categorie}</p>
              <p>Description: {annonce.description}</p>
              {/* Ajoutez d'autres informations sur l'annonce ici */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AnnonceShow;
