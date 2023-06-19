import { Fragment, useEffect, useState } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon
} from '@heroicons/react/24/solid'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import logoSVG from '../public/plane-svgrepo-com.svg'
import Link from 'next/link'
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import firebaseConfig from '../utils/db/firebaseConfig.json';
import Link from 'next/link'

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let navigation = [
  { name: 'Listings', href: '/' },
  { name: 'About Holidu', href: '#' },
]

export default function Page() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  
  if (user){
    navigation = [
      { name: 'Listings', href: '/' },
      { name: 'My Bookings', href: '#' },
      { name: 'My Listings', href: '/user/listings' },
      { name: 'About Holidu', href: '#' },
    ]
  }

  return (
    <Popover className="relative bg-cyan-600">
      <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-10">
        <div>
          <Link href="/">
            <span className="sr-only">Holidu</span>
            <Image
            className="h-10 w-auto"
            src={logoSVG}
            alt='Holidu Logo' />
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Popover.Button className="bg-cyan-600 rounded-md p-2 inline-flex items-center justify-center text-white hover:text-cyan-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>
        <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
          <div className='hidden md:gap-10 md:flex md:items-center md:justify-between'>
            {navigation.map((link) => (
              <Link key={link.name} href={link.href} className="text-base font-medium text-white hover:text-cyan-50">
                {link.name}
              </Link>
            ))}
          </div>
          {user ? (
              <UserCircleIcon className="text-white h-8 w-8"></UserCircleIcon>
            ) : (
            <div className="ml-10 space-x-4">
              <Link
                href="/auth/login"
                className="inline-block bg-cyan-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Sign in
              </Link>
              <Link
                href="/auth/signup"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-cyan-600 hover:bg-cyan-50"
              >
                Sign up
              </Link>
            </div>
            )}
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="py-6 px-5">
              <div className="grid grid-cols-2 gap-4">
                {navigation.map((link) => (
                  <Link key={link.name} href={link.href} className="text-base font-medium text-gray-900 hover:text-gray-700">
                    {link.name}
                  </Link>
                ))}
              </div>
              {user ? (
                <div className="mt-6">
                  <UserCircleIcon className="h-6 w-6"></UserCircleIcon>
                </div>
              ) : (
              <div className="mt-6">
                <Link
                  href="/auth/signup"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-cyan-600 hover:bg-cyan-700"
                >
                  Sign up
                </Link>
                <p className="mt-6 text-center text-base font-medium text-gray-500">
                  Existing customer?{' '}
                  <Link href="/auth/login" className="text-cyan-600 hover:text-cyan-500">
                    Sign in
                  </Link>
                </p>
              </div>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}