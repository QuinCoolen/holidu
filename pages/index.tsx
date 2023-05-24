import Image from 'next/image'
import Link from 'next/link'
import { GetServerSideProps } from 'next'

interface Listing {
  id: string;
  description: string;
  imageAlt: string;
  imageSrc: string;
  name: string;
  price: number;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch('http://localhost:3000/api/listings')
  const data = await response.json()
  return {
    props: {
      listings: data
    },
  }
}

export default function Home({listings}: {listings: Listing[]}) {
  return (
    <div className="p-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
      {listings.map((listing) => (
        <Link key={listing.id} href={{pathname: `/listings/${listing.id}`}} className="group">
          <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
            <Image
              src={listing.imageSrc}
              alt={listing.imageAlt}
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>{listing.name}</h3>
            <p>${listing.price}</p>
          </div>
          <p className="mt-1 text-sm italic text-gray-500">{listing.description}</p>
        </Link>
      ))}
    </div>
  )
}
