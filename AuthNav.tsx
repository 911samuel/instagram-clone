import React, { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { SignedInStack, SignedOutStack } from "./Navigation";

const AuthNav = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  return <>{currentUser ? <SignedInStack /> : <SignedOutStack />}</>;
};

export default AuthNav;
