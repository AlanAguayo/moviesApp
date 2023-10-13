import Link from 'next/link';

const Dashboard = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/">
            <p className="text-white">Home</p>
          </Link>
        </li>
        <li>
          <Link href="/movies/popular">
            <p className="text-white">Popular Movies</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default Dashboard;