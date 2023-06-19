import Image from 'next/image'
import db from '../../utils/db';
import { GetServerSideProps } from 'next'
import { Fragment } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { Tab } from '@headlessui/react'

interface Listing {
    id: string;
    description: string;
    imageAlt: string;
    imageSrc: string;
    name: string;
    price: number;
    highlights: {[key: string]: number};
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const id = context.params?.id;
    if (typeof id !== 'string') {
        throw new Error('ID is not a string');
    }
    const snapshot = db.collection('listings').doc(id)
    const listing = await snapshot.get();
    const data = listing.data()

    if (data?.owner && typeof data.owner === 'object' && data.owner.path) {
      data.owner = data.owner.path;
    }
    
    return {
        props: {
            listing: data
        },
    }
}

const reviews = {
    average: 4,
    featured: [
      {
        id: 1,
        rating: 5,
        content: `
          <p>Absolutely breathtaking! This vacation house exceeded all our expectations. From the stunning panoramic views to the luxurious amenities, every detail was meticulously designed for a truly unforgettable experience.</p>
        `,
        date: 'July 16, 2021',
        datetime: '2021-07-16',
        author: 'Emily Selman',
        avatarSrc:
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      },
      {
        id: 2,
        rating: 5,
        content: `
          <p>Paradise found! This vacation house is a true gem. The tranquil surroundings, immaculate landscaping, and stylish interior made it the perfect retreat. We didn't want to leave!</p>
        `,
        date: 'July 12, 2021',
        datetime: '2021-07-12',
        author: 'Hector Gibbons',
        avatarSrc:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
      },
      // More reviews...
    ],
}
const faqs = [
  {
    question: 'How big is the house?',
    answer:
      'Very Big!',
  },
  {
    question: 'Can I throw big parties here?',
    answer:
      "Yes.",
  },
]
const license = {
  href: '#',
  summary:
    'For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.',
  content: `
    <h4>Overview</h4>
    
    <p>For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.</p>
    
    <ul role="list">
    <li>You\'re allowed to use the icons in unlimited projects.</li>
    <li>Attribution is not required to use the icons.</li>
    </ul>
    
    <h4>What you can do with it</h4>
    
    <ul role="list">
    <li>Use them freely in your personal and professional work.</li>
    <li>Make them your own. Change the colors to suit your project or brand.</li>
    </ul>
    
    <h4>What you can\'t do with it</h4>
    
    <ul role="list">
    <li>Don\'t be greedy. Selling or distributing these icons in their original or modified state is prohibited.</li>
    <li>Don\'t be evil. These icons cannot be used on websites or applications that promote illegal or immoral beliefs or activities.</li>
    </ul>
  `,
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}  

export default function Page({listing}: {listing: Listing}) {
    return (
        <div className="bg-white">
          <div className="mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-rows-1 lg:grid-cols-7 lg:gap-x-8 lg:gap-y-10 xl:gap-x-16">
              <div className="lg:row-end-1 lg:col-span-4">
                <div className="aspect-w-4 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden">
                    <Image
                        src={listing.imageSrc}
                        alt={listing.imageAlt}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full object-center object-cover"
                    />
                </div>
              </div>
              <div className="max-w-2xl mx-auto mt-14 sm:mt-16 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 lg:col-span-3">
                <div className="flex flex-col-reverse">
                  <div className="mt-4">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{listing.name}</h1>
    
                    <h2 id="information-heading" className="sr-only">
                      Listing information
                    </h2>
                  </div>
    
                  <div>
                    <h3 className="sr-only">Reviews</h3>
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <StarIcon
                          key={rating}
                          className={classNames(
                            reviews.average > rating ? 'text-yellow-400' : 'text-gray-300',
                            'h-5 w-5 flex-shrink-0'
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="sr-only">{reviews.average} out of 5 stars</p>
                  </div>
                </div>
    
                <p className="text-gray-500 mt-2">{listing.description}</p>
    
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
                  <button
                    type="button"
                    className="w-full bg-cyan-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-cyan-500"
                  >
                    ${listing.price} Per Night
                  </button>
                  <button
                    type="button"
                    className="w-full bg-cyan-50 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-cyan-700 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-cyan-500"
                  >
                    Contact
                  </button>
                </div>
    
                <div className="border-t border-gray-200 mt-10 pt-10">
                  <h3 className="text-sm font-medium text-gray-900">Highlights</h3>
                  <div className="mt-4 prose prose-sm text-gray-500">
                    <ul role="list">
                      {Object.entries(listing.highlights).map(([key, value]) => (
                        <li className='capitalize' key={key}>{key}: {value}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
    
              <div className="w-full max-w-2xl mx-auto mt-16 lg:max-w-none lg:mt-0 lg:col-span-4">
                <Tab.Group as="div">
                  <div className="border-b border-gray-200">
                    <Tab.List className="-mb-px flex space-x-8">
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'border-cyan-600 text-cyan-600'
                              : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                            'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                          )
                        }
                      >
                        Customer Reviews
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'border-cyan-600 text-cyan-600'
                              : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                            'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                          )
                        }
                      >
                        FAQ
                      </Tab>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'border-cyan-600 text-cyan-600'
                              : 'border-transparent text-gray-700 hover:text-gray-800 hover:border-gray-300',
                            'whitespace-nowrap py-6 border-b-2 font-medium text-sm'
                          )
                        }
                      >
                        License
                      </Tab>
                    </Tab.List>
                  </div>
                  <Tab.Panels as={Fragment}>
                    <Tab.Panel className="-mb-10">
                      <h3 className="sr-only">Customer Reviews</h3>
    
                      {reviews.featured.map((review, reviewIdx) => (
                        <div key={review.id} className="flex text-sm text-gray-500 space-x-4">
                          <div className="flex-none py-10">
                            <img src={review.avatarSrc} alt="" className="w-10 h-10 bg-gray-100 rounded-full" />
                          </div>
                          <div className={classNames(reviewIdx === 0 ? '' : 'border-t border-gray-200', 'py-10')}>
                            <h3 className="font-medium text-gray-900">{review.author}</h3>
                            <p>
                              <time dateTime={review.datetime}>{review.date}</time>
                            </p>
    
                            <div className="flex items-center mt-4">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    review.rating > rating ? 'text-yellow-400' : 'text-gray-300',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">{review.rating} out of 5 stars</p>
    
                            <div
                              className="mt-4 prose prose-sm max-w-none text-gray-500"
                              dangerouslySetInnerHTML={{ __html: review.content }}
                            />
                          </div>
                        </div>
                      ))}
                    </Tab.Panel>

                    <Tab.Panel as="dl" className="text-sm text-gray-500">
                  <h3 className="sr-only">Frequently Asked Questions</h3>

                  {faqs.map((faq) => (
                    <Fragment key={faq.question}>
                      <dt className="mt-10 font-medium text-gray-900">{faq.question}</dt>
                      <dd className="mt-2 prose prose-sm max-w-none text-gray-500">
                        <p>{faq.answer}</p>
                      </dd>
                    </Fragment>
                  ))}
                </Tab.Panel>

                <Tab.Panel className="pt-10">
                  <h3 className="sr-only">License</h3>

                  <div
                    className="prose prose-sm max-w-none text-gray-500"
                    dangerouslySetInnerHTML={{ __html: license.content }}
                  />
                </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </div>
    )
}