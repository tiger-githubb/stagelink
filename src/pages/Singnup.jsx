import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Singnup = () => {

    const [email , setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value
    //     }));
    // };
    const auth = getAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createUserWithEmailAndPassword(auth , email ,password);
            console.log(userCredential);
            const user = userCredential.user;
            localStorage.setItem('token',user.accessToken);
            localStorage.setItem('user',JSON.stringify(user));
            navigate("/");
            console.log("done");
        } catch (error) {
            console.log(error);
        }
        console.log('Formulaire soumis:');

    };

  return (
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto p-4 bg-white shadow-md rounded-md">
          <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email:
              </label>
              <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange = { (e) => setEmail(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  required
              />
          </div>
          <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                  Password:
              </label>
              <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border-gray-300 border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
                  required
              />
          </div>
          <div className="flex justify-center">
              <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                  S'inscrire
              </button>
          </div>

          <p>J'ai deja un compte <Link to="/login" >Connexion</Link></p>

      </form>
  )
}

export default Singnup