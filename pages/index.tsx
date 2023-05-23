import Image from 'next/image'
import listingImage from '../public/listing.jpg'
import Link from 'next/link'

const listings = [
  {
    id: 1,
    name: 'Large Modern House with Big Pool.',
    href: '#',
    price: '$1500',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium illo iste dicta, repellat, odio sapiente eveniet libero praesentium, nemo voluptatem similique nam nostrum amet quos debitis odit quam ullam consequuntur!',
    imageSrc: listingImage,
    imageAlt: 'Large Modern House with Big Pool.',
  },
  {
    id: 2,
    name: 'Large Modern House with Big Pool.',
    href: '#',
    price: '$1500',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium illo iste dicta, repellat, odio sapiente eveniet libero praesentium, nemo voluptatem similique nam nostrum amet quos debitis odit quam ullam consequuntur!',
    imageSrc: listingImage,
    imageAlt: 'Large Modern House with Big Pool.',
  },
  {
    id: 3,
    name: 'Large Modern House with Big Pool.',
    href: '#',
    price: '$1500',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium illo iste dicta, repellat, odio sapiente eveniet libero praesentium, nemo voluptatem similique nam nostrum amet quos debitis odit quam ullam consequuntur!',
    imageSrc: listingImage,
    imageAlt: 'Large Modern House with Big Pool.',
  },
  {
    id: 4,
    name: 'Large Modern House with Big Pool.',
    href: '#',
    price: '$1500',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium illo iste dicta, repellat, odio sapiente eveniet libero praesentium, nemo voluptatem similique nam nostrum amet quos debitis odit quam ullam consequuntur!',
    imageSrc: listingImage,
    imageAlt: 'Large Modern House with Big Pool.',
  },
  {
    id: 5,
    name: 'Large Modern House with Big Pool.',
    href: '#',
    price: '$1500',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium illo iste dicta, repellat, odio sapiente eveniet libero praesentium, nemo voluptatem similique nam nostrum amet quos debitis odit quam ullam consequuntur!',
    imageSrc: listingImage,
    imageAlt: 'Large Modern House with Big Pool.',
  },
  {
    id: 6,
    name: 'Large Modern House with Big Pool.',
    href: '#',
    price: '$1500',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium illo iste dicta, repellat, odio sapiente eveniet libero praesentium, nemo voluptatem similique nam nostrum amet quos debitis odit quam ullam consequuntur!',
    imageSrc: listingImage,
    imageAlt: 'Large Modern House with Big Pool.',
  },
  {
    id: 7,
    name: 'Large Modern House with Big Pool.',
    href: '#',
    price: '$1500',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium illo iste dicta, repellat, odio sapiente eveniet libero praesentium, nemo voluptatem similique nam nostrum amet quos debitis odit quam ullam consequuntur!',
    imageSrc: listingImage,
    imageAlt: 'Large Modern House with Big Pool.',
  },
  {
    id: 8,
    name: 'Large Modern House with Big Pool.',
    href: '#',
    price: '$1500',
    description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium illo iste dicta, repellat, odio sapiente eveniet libero praesentium, nemo voluptatem similique nam nostrum amet quos debitis odit quam ullam consequuntur!',
    imageSrc: listingImage,
    imageAlt: 'Large Modern House with Big Pool.',
  },
]

export default function Home() {
  return (
    <div className="p-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:gap-x-8">
      {listings.map((listing) => (
        <Link key={listing.id} href={{pathname: `/listing/${listing.id}`, query: {listingName: 'test'}}} className="group">
          <div className="w-full aspect-w-1 aspect-h-1 rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-3">
            <Image
              src={listing.imageSrc}
              alt={listing.imageAlt}
              className="w-full h-full object-center object-cover group-hover:opacity-75"
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
            <h3>{listing.name}</h3>
            <p>{listing.price}</p>
          </div>
          <p className="mt-1 text-sm italic text-gray-500">{listing.description}</p>
        </Link>
      ))}
    </div>
  )
}
