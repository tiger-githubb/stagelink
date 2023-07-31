import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { getAuth } from "firebase/auth";

export const Protected = () => {

    const token = localStorage.getItem('token');

  return (
    token ? <Outlet /> : <Navigate to="/login"/>
  )
}
