import { useNavigate  } from 'react-router-dom';
import  validator from 'validator'
import React, {createContext, useEffect, useState} from 'react';
import  Request  from '../API/api';
import { successToast,errorToast } from "../components/Toaster";
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({}); 
  const [isLoading, setIsLoading] = useState(false);
  const Signup = async (data) => {
    setIsLoading(true)
    try {
      const response = await Request.post('users/signup', data);
      if(response){
        successToast('Account Created Successfully');
        setTimeout(() => {
          setIsLoading(false);
         }, 2000)
         navigate('/')
        return response.data;
      }
    } catch (error) {
      setIsLoading(false);
      console.error('Error creating a Meet:', error);
      errorToast(`${error}`)
    }
  }
  const login = async (email,password) => {
    
    if (email == "") {
        errorToast('Email Field is empty')
      }
      else if (password == "") {
        errorToast('Password Field is Empty')
      }
      else if(!validator.isEmail(email)){
        errorToast('Please Enter a Valide Email Address');
        setIsLoading(false);
      }
      else { 
        setIsLoading(true)
        const data ={email, password}
    try {
        const response = await Request.post('users/login', data);
      if(response){

        console.log('Good',response)
        let userInfo = response.data.user;
        let sessionId = response.data.session_id; // Retrieve the session ID from the response

        setTimeout(() => {
       
          successToast("Login Successful");
    
            setIsLoading(false);
            document.cookie = `session_id=${sessionId}; path=/; max-age=${60 *  60 *  24 *  7}`
            document.cookie = `id=${userInfo.id}; path=/; max-age=${60 *  60 *  24 *  7}`
            localStorage.setItem('userdetail', userInfo);
            localStorage.setItem('user', userInfo.id);
            navigate('/')
        }, 3000);
      }
    } catch (error) {
        setIsLoading(false);
        errorToast(`${error}`)
        
      console.error('Failed to fetch all users:', error);
    //   throw error;
    }}
  };

 
  const logout = async () => {
    try {
        const response = await Request.get('user_logout');
      if(response){
        console.log(response.data);
        localStorage.removeItem('userdetail');
        localStorage.removeItem('userInfo');
        localStorage.removeItem('user');
        setUserInfo({});
        navigate('/')
      }
    } catch (error) {
        errorToast(`${error}`)
        setIsLoading(false);
      console.error('Failed to fetch all users:', error);
      throw error;
    }
  };


  const isLoggedIn = async () => {
    try {
      //setSplashLoading(true);

      let userInfo = JSON.stringify(localStorage.getItem('userdetail'));
      userInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserInfo(userInfo);
      }else if(!userInfo){
        // navigate('/login')
      }

      //setSplashLoading(false);
    } catch (e) {
      //setSplashLoading(false);
     
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);


  
  return (
    <AuthContext.Provider
      value={{
    
        login,
        logout,
        isLoading,
        Signup
      }}>
      {children}
    </AuthContext.Provider>
  );
};


