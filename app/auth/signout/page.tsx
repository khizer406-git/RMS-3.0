// components/SignOutButton.tsx
'use client'
import { signOut } from 'next-auth/react';

const SignOutButton = () => {
  const handleSignOut = () => {
    signOut({ callbackUrl: '/' }); // Redirect to homepage after signout
  };

  return (
    <button onClick={handleSignOut}>
      Sign out
    </button>
  );
};

export default SignOutButton;
