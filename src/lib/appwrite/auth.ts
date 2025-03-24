import {client, account} from '@/lib/appwrite/client'
import {ID} from 'appwrite'; 

interface User {
   email: string; 
   password: string; 
   name?: string;
}

// Custom error handling
const handleAppwriteError = (error: any) => {
   if (error && error.message && error.message.includes('Rate limit')) {
      return {
         success: false,
         message: 'Too many requests. Please try again after a few moments.',
         isRateLimit: true
      };
   }
   return {
      success: false,
      message: error.message || 'Authentication failed. Please try again.',
      isRateLimit: false
   };
};

const handleSignup = async ({email, password, name}:User) => {
       try {
           const user = await account.create(
               ID.unique(),
               email,
               password,
               name as string
           );
           console.log("User Created:", user);
           return { success: true, user };
       } catch (error) {
           console.error("Signup Error:", error);
           return handleAppwriteError(error);
       }
};

const handleSignin = async ({email, password}: User) => {
   try {
       const user = await account.createEmailPasswordSession(
           email,
           password
       );
       console.log("User signed in: ", user);
       return { success: true, user };
   } catch (error) {
       console.error("User Failed Signin: ", error);
       return handleAppwriteError(error);
   }
}

export {handleSignin, handleSignup};