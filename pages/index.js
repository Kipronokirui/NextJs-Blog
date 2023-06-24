import Image from 'next/image'
import Head from 'next/head'
import { PostCard, Categories, PostWidget, Header } from '../components/'

const posts = [
  {
    title: "React Testing1",
    excerpt:"Hello engineer to your own blog application"
  },
  {
    title: "React Testing2",
    excerpt:"Hello engineer to your own blog application"
  },
  {
    title: "React Testing3",
    excerpt:"Hello engineer to your own blog application"
  },
  {
    title: "React Testing4",
    excerpt:"Hello engineer to your own blog application"
  },
]

export default function Home() {
  return (
    <>
      <Header />
    <div
      className="container mx-auto px-10 mb-8"
    >
      <Head>
        <title>My Blog Application</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post) => (
            <PostCard post={post} key={post.title}/>
          ))}
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className='lg:sticky relative top-8'>
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
