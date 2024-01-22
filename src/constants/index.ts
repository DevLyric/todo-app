// Import authentication functions from the `firebase/auth` module
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// Import `auth` and `db` from the `firebase-config` module
import { auth, db } from "../firebase-config";

// Import firestore functions from the `firebase/firestore` module
import { collection, doc, setDoc } from "firebase/firestore";

// Define the interface for user data
export interface IUserData {
  username: string;
}

// User signup function
export const signup = async (
  email: string,
  password: string,
  userData: IUserData
): Promise<boolean> => {
  try {
    // Create a new user with email and password using the Firebase function
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    // Get the ID of the newly created user
    const userId = userCredential.user.uid;

    // Reference to the users collection in Firestore
    const usersCollectionRef = collection(db, "user");

    // Reference to the user document using the ID as the document name
    const userDocRef = doc(usersCollectionRef, userId);

    // Set the user data in the newly created document
    await setDoc(userDocRef, userData);

    // Return true to indicate successful signup
    return true;
  } catch (error) {
    // If there's an error, print it to the console and return false
    console.error(error);
    return false;
  }
};

// User login function
export const login = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    // Sign in with email and password using the Firebase function
    await signInWithEmailAndPassword(auth, email, password);
    return true;
  } catch (error) {
    // If there's an error, print it to the console and return false
    console.error(error);
    return false;
  }
};

// User logout function
export const logout = async () => {
  // Sign out using the Firebase function
  await signOut(auth);
};
