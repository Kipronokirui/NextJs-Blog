import React, { useContext } from 'react'
import Link from 'next/link'

const categories = [
    {
        name: "Django",
        slug:"django"
    },
    {
        name: "Django Rest API",
        slug:"django-rest-api"
    },
    {
        name: "Django Flask",
        slug:"django-flask"
    },
]
const Header = () => {
  return (
      <div className='container mx-auto px-10 mb-8'>
          <div className='border-b w-full inline-block border-blue-400 py-8'>
              <div className='md:float-left block'>
                  <Link href="/">
                      <span className='cursor-pointer font-bold text-4xl text-white'>
                          GraphBlog
                      </span>
                  </Link>
              </div>
              <div className="hidden md:float-left md:contents">
                  {categories.map((category, index) => (
                      <Link key={index} href={`/category/${category.slug}`} >
                          <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                              {category.slug}
                          </span>
                      </Link>
                  ))}
              </div>
         </div>
      </div>
  )
}

export default Header