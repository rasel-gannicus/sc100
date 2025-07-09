"use client" ;
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const template = ({ children }) => {
  const pathname = usePathname();
  

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin Sidebar */}
      <div className="fixed left-0 top-0 h-full w-64 bg-gray-800 text-white">
        <div className="p-4 border-b border-gray-700">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link 
                href="/admin" 
                className={`block p-2 rounded ${pathname === '/admin' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/admin/notice" 
                className={`block p-2 rounded ${pathname === '/admin/notice' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
              >
                Notice Management
              </Link>
            </li>


            <li>
              <Link 
                href="/admin/gallery" 
                className={`block p-2 rounded ${pathname === '/admin/gallery' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
              >
                Gallery Management
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        {children}
      </div>
    </div>
  );
};

export default template;
