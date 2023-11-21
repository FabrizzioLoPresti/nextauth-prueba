'use client';

import { useSession, signIn, signOut } from 'next-auth/react';

type Props = {};

const AuthButton = (props: Props) => {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <p>{session.user?.name}</p>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => {
            signOut({
              callbackUrl: '/',
            });
          }}
        >
          Sign out
        </button>
      </>
    );
  }

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        signIn();
      }}
    >
      Sign in
    </button>
  );
};

export default AuthButton;
