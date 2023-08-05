import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from '../Components/NavBarSection/NavBar';
import Sidebar from '../Components/SideBarSection/SideBar';
import ProfileForm from '../Components/ProfileSection/ProfileForm';

const Dashboard = () => {
  return (
    <Router>
      <NavBar />
      <Sidebar />
      <Switch>
        {/* Ajoutez ici d'autres routes pour les différentes pages du dashboard */}
        <Route path="/dashboard/profile" component={ProfileForm} />
        {/* Ajoutez les autres routes ici */}
      </Switch>
    </Router>
  );
};

export default Dashboard;
