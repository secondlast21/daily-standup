import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar bg-base-100">
      <div className="flex-1 px-2 lg:flex-none">
        <Link href="/" className="btn btn-ghost normal-case text-xl font-bold">
          Daily Standup
        </Link>
      </div>
      <div className="flex justify-end flex-1 px-2">
        <div className="flex items-stretch">
          <Link href="#" className="btn btn-ghost rounded-btn">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
