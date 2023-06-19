const navigation = {
    listings: [
      { name: 'Listings', href: '#' },
      { name: 'My Bookings', href: '#' },
      { name: 'My Listings', href: '#' },
      { name: 'Settings', href: '#' },
    ],
    support: [
      { name: 'Customer Support', href: '#' },
      { name: 'Listing Owner Support', href: '#' },
      { name: 'Pricing', href: '#' },
      { name: 'API Status', href: '#' },
    ],
    company: [
      { name: 'About', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Jobs', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' },
    ],
    legal: [
      { name: 'Claim', href: '#' },
      { name: 'Privacy', href: '#' },
      { name: 'Terms', href: '#' },
    ],
}
  
export default function Footer() {
    return (
      <footer className="bg-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8 xl:col-span-1">
                <h2 className="text-cyan-500 text-2xl">Holidu</h2>
                <p className="text-gray-500 text-base !mt-4">
                    Making the world a better place through affordable and luxury vacations.
                </p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 xl:text-center">&copy; 2023 Holidu, Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
}
  