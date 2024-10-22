"use client"
import { auth } from "./firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

export default function Home() {
  const googleAuth = new GoogleAuthProvider();
  const [user, setUser] = useAuthState(auth)

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, googleAuth);
    console.log(result);
  };

  console.log(user)

  return (
    <main>
      <h1>hello world</h1>
      <button onClick={signInWithGoogle}>SignIn With Google</button>
      {user ? (
        <>
          {user.displayName} - {user.email}{" "}
          <button onClick={() => auth.signOut()}>Logout</button>
        </>
      ) : ("")}
    </main>
  );
}
