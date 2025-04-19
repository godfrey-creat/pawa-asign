import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/">
            <a className="font-bold text-xl text-blue-600">Pawa Q&A</a>
          </Link>
          
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/">
                  <a className={`text-gray-700 hover:text-blue-600 ${router.pathname === '/' ? 'font-semibold text-blue-600' : ''}`}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/history">
                  <a className={`text-gray-700 hover:text-blue-600 ${router.pathname === '/history' ? 'font-semibold text-blue-600' : ''}`}>
                    History
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}