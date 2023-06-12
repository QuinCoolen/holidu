import Image from 'next/image'
const listings = [
  {
    id: 1,
    title: "Great Large House",
    content: "Welcome to the best house in Minsk! You're never going to want to leave! Welcome to the best house in Minsk! You're never going to want to leave! Welcome to the best house in Minsk! You're never going to want to leave! Welcome to the best house in Minsk! You're never going to want to leave!",
  },
]

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="text-lg font-medium text-gray-900">My listings</h2>
      <div className="mt-6 pb-10 border-t border-b border-gray-200 divide-y divide-gray-200 space-y-10">
        {listings.map((listing) => (
          <div key={listing.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
            <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
              <div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
                <h3 className="text-sm font-medium text-gray-900">{listing.title}</h3>

                <p className="mt-3 space-y-6 text-sm text-gray-500">{listing.content}</p>

                <div className="mt-5 sm:mt-6 sm:flex sm:gap-3">
                  <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cyan-600 text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:col-start-2 sm:text-sm">View</button>
                  <button type="button" className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 sm:mt-0 sm:col-start-1 sm:text-sm">Edit</button>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3">
              <Image
              src="/../public/listing.jpg"
              alt="../../public/listing.jpg"
              width={0}
              height={0}
              sizes="100vw"
              className="rounded-lg w-full object-center object-cover group-hover:opacity-75"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}