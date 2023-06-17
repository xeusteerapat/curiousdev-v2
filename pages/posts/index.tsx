import type { GetStaticProps, NextPage } from 'next';
import { getAllPosts } from '@/lib/mdx';
import { MDXFrontMatter } from '@/lib/types';
import { Page } from '@/components/Page';
import { PostList } from '@/components/PostList';

interface PostsProps {
  posts: Array<MDXFrontMatter>;
}

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      <Page
        title='Posts'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      >
        <PostList posts={posts} />
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts: posts,
    },
  };
};

export default Posts;
