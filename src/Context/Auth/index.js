import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';

export const AuthContext = React.createContext();

const testUsers = {
  admin: {
    username: 'admin',
    password: 'ADMIN',
    email: 'admin@fakeuser.com',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZDFiMzNjZTQ5MDAxODlmMzhiNyIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIiwiZGVsZXRlIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA3OTMxLCJleHAiOjE2NTg5MTE1MzF9.bqe-52if5K50rGn30P4fheuAa2qWuxse9tWiuH4cnUM',
  },
  editor: {
    username: 'editor',
    password: 'EDITOR',
    email: 'editor@fakeuser.com',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBlZjk5MzNjZTQ5MDAxODlmMzhiYSIsImNhcGFiaWxpdGllcyI6WyJjcmVhdGUiLCJ1cGRhdGUiLCJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA4NTY5LCJleHAiOjE2NTg5MTIxNjl9.073ppQCHbplYN9befn8JElcP4zgFX6TEe_ARUQZc0KU',
  },
  user: {
    username: 'user',
    password: 'USER',
    email: 'user@fakeuser.com',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyZTBmMGZjMzNjZTQ5MDAxODlmMzhjMCIsImNhcGFiaWxpdGllcyI6WyJyZWFkIl0sInR5cGUiOiJ1c2VyIiwiaWF0IjoxNjU4OTA4OTI0LCJleHAiOjE2NTg5MTI1MjR9.t7c7k2LbaTxsdfYjx_WC3QiP4MycU8sZryVyXQqJQH',
  }
  
}

const AuthProvider = ({ children }) => {

  /* This is a React Hook. It is a way to manage state in a functional component. */
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [error, setError] = useState(null);

  const can = (capability) => {
   
    return user?.capabilities?.includes(capability);
  }

 /**
  * It takes a username and password, checks if the username exists in the testUsers object, and if it
  * does, it checks if the password matches the password in the testUsers object. If it does, it calls
  * the _validateToken function with the token from the testUsers object
  * @param username - The username of the user to authenticate.
  * @param password - The password that the user entered.
  */
  const login = (username, password) => {
   
    let authCredentials = testUsers[username];

    if(authCredentials && authCredentials.password === password){
      try {
        
        _validateToken(authCredentials.token);
      } catch (e){
        
        console.error(e);
      }
    }
  }

 /**
  * _validateToken() is a function that takes a token as an argument and decodes it using the
  * jwt_decode() function. If the token is valid, it sets the user state to the decoded token and sets
  * the isLoggedIn state to true. If the token is not valid, it sets the isLoggedIn state to false and
  * sets the error state to the error message
  * @param token - the token that we want to validate
  */
  function _validateToken(token){
    try{
      let validUser = jwt_decode(token);
      console.log('validUser: ', validUser);
      if(validUser){
        setUser(validUser);
        setIsLoggedIn(true);
        console.log('I am logged In')
        cookie.save('auth', token);
      }
    } catch (e){
      setIsLoggedIn(false);
      setError(e);
      console.error(e);
    }
  }

  /**
   * It removes the cookie from the browser.
   */
  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    setError(null); 
    cookie.remove('auth');

  }

  
 /* Checking if there is a cookie in the browser. If there is, it calls the _validateToken function
 with the token from the cookie. */
  useEffect(() => {
    let token = cookie.load('auth');
    if(token) {
      _validateToken(token)
    }
  }, []);

 
 /* Creating an object with the values that we want to pass to the AuthContext.Provider. */
  let values  = {
    isLoggedIn,
    user,
    error,
    can,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={values}>
      { children }
    </AuthContext.Provider>
  )

}

export default AuthProvider;
