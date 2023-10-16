import Link from 'next/link';

const Dashboard = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/movies/popular">
            <p>Popular Movies</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
};


export default Dashboard;