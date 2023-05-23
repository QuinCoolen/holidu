import Image from 'next/image';
import Link from 'next/link';
import logoSVG from '../public/plane-svgrepo-com.svg'

const navigation = [
    { name: 'Listings', href: '/' },
    { name: 'About Holidu', href: '#' },
    { name: 'My Bookings', href: '#' },
    { name: 'My Listings', href: '#' },
]
  
export default function Example() {
    return (
      <header className="bg-cyan-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-6 flex items-center justify-between border-b border-cyan-500 lg:border-none">
            <div className="flex items-center">
              <a href="/">
                <span className="sr-only">Holidu</span>
                <Image
                className="h-10 w-auto"
                src={logoSVG}
                alt='Holidu Logo' />
              </a>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <Link key={link.name} href={link.href} className="text-base font-medium text-white hover:text-cyan-50">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <Link
                href="#"
                className="inline-block bg-cyan-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </Link>
              <Link
                href="#"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-cyan-600 hover:bg-cyan-50"
              >
                Sign up
              </Link>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-cyan-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
}
  