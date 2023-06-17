import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { MDXFrontMatter } from '@/lib/types';

const root = process.cwd();

export const postsPath = path.join(root, 'posts');

export const getMdx = (fileName: string) => {
  const fullPath = path.join(postsPath, fileName);
  const docSource = fs.readFileSync(fullPath, 'utf-8');

  const { data, content } = matter(docSource);

  return {
    frontMatter: {
      ...data,
      slug: fileName.replace('.mdx', ''),
    } as MDXFrontMatter,
    content,
  };
};

const getSubFolderAndMDXFilePaths = (dir: string): string[] => {
  const files = fs.readdirSync(dir);

  return files.flatMap(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      const subFolderFiles = getSubFolderAndMDXFilePaths(filePath);
      return subFolderFiles.map(subFile => path.join(file, subFile));
    } else if (file.endsWith('.mdx')) {
      return file;
    } else {
      return [];
    }
  });
};

export const getAllMdx = () => {
  const items = getSubFolderAndMDXFilePaths(postsPath).map(item =>
    getMdx(item)
  );

  return items.sort(
    (a, b) =>
      new Date(b.frontMatter.date).getTime() -
      new Date(a.frontMatter.date).getTime()
  );
};

export const getAllPosts = () => {
  const mdxFiles = getAllMdx()
    .map(post => post['frontMatter'])
    .filter(post => post.published);

  return mdxFiles;
};
