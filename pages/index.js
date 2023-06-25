import Image from 'next/image'
import Head from 'next/head'
import { getPosts } from '../services';
import FeaturedPosts  from '../sections/FeaturedPosts';
import Header from '../components/Header';
import PostDetail from '../components/PostDetail';
import PostCard from '../components/PostCard';
import Categories from '../components/Categories';
import PostWidget from '../components/PostWidget';
import Author from '../components/Author';
import Comments from '../components/Comments';
import CommentsForm from '../components/CommentsForm';
import Loader from '../components/Loader';

export default function Home({ posts }) {
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
        <FeaturedPosts />
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="col-span-1 lg:col-span-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post.node} />
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

// Fetch data at build time
export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}
