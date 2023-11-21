import Link from 'next/link';
import AuthButton from './auth-button';

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="mx-auto max-w-7xl flex flex-row items-center justify-between py-4">
      <Link href="/">Home</Link>

      <div className="flex flex-row items-center gap-x-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/profile">Profile</Link>
        <AuthButton />
      </div>
    </nav>
  );
};

export default Navbar;
