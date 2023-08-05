import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import app from '../firebase';
import { getFirestore, collection, where, query, getDocs } from 'firebase/firestore';
import ProfileForm from '../Components/ProfileSection/ProfileForm';
import ProfileShow from '../Components/ProfileSection/ProfileShow';

const Profile = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const db = getFirestore();

  const [hasEnteredCompanyInfo, setHasEnteredCompanyInfo] = useState(false);

  // Vérifiez si l'utilisateur a déjà saisi les informations de l'entreprise lors du chargement du composant
  useEffect(() => {
    const checkCompanyInfo = async () => {
      const userId = auth.currentUser ? auth.currentUser.uid : null;
      if (!userId) return;

      const companiesRef = collection(db, 'entreprises');
      const q = query(companiesRef, where('userId', '==', userId));
      const querySnapshot = await getDocs(q);

      setHasEnteredCompanyInfo(!querySnapshot.empty);
    };
    checkCompanyInfo();
  }, [auth, db]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/login');
  };

  return (
    <div>
      <button onClick={handleLogout}>Se déconnecter</button>
      {hasEnteredCompanyInfo ? (
        // Si l'utilisateur a déjà saisi les informations de l'entreprise, affichez le composant de profil de l'entreprise
        <ProfileShow db={db}  />
      ) : (
        // Sinon, affichez le formulaire de création d'entreprise
        <ProfileForm db={db} />
      )}
    </div>
  );
};

export default Profile;
