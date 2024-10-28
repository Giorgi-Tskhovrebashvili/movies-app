"use client";
import { auth } from "./common/config/firebase";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const googleAuth = new GoogleAuthProvider();
  const [user, setUser] = useAuthState(auth);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main>
      <h1>hello world</h1>
      <button onClick={signInWithGoogle}>SignIn With Google</button>
      {user ? (
        <>
          {user.displayName} - {user.email}{" "}
          <button onClick={logOut}>Logout</button>
        </>
      ) : (
        ""
      )}
    </main>
  );
}
