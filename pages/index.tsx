import type { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { getAllMdx } from '@/lib/mdx';
import { MDXFrontMatter } from '@/lib/types';
import { Page } from '@/components/Page';
import { PostList } from '@/components/PostList';
import { ArrowRight } from 'react-feather';

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Page
        title='Hello, World 👋'
        description={
          <>
            <p>
              My name is Teerapat, a skilled software engineer proficient in
              Node.js, React.js, JavaScript, and TypeScript. I have a passion
              for solving complex problems and am constantly expanding my
              knowledge of software design and architecture. Join me on this
              journey as I share the experiences on{' '}
              <span>
                <Link href='/posts'>my blog</Link>
              </span>
            </p>
          </>
        }
      >
        <PostList posts={posts} />
        <div className='mt-8'>
          <Link
            passHref
            href='/posts'
            className='inline-flex items-center gap-2 text-pink-600 group'
          >
            View more posts{' '}
            <ArrowRight
              className='group-hover:translate-x-0.5 transition-transform'
              width={'.9em'}
            />
          </Link>
        </div>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx()
    .map(post => post['frontMatter'])
    .filter(post => post.published);
  return {
    props: {
      posts: mdxFiles.slice(0, 5),
    },
  };
};

export default Home;
