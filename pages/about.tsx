import type { NextPage } from 'next';
import { Page } from '@/components/Page';
import { Prose } from '@/components/Prose';

const About: NextPage = () => {
  return (
    <>
      <Page
        title='About'
        description='A software engineer who always curiosity and learn new things.'
      >
        <Prose>
          <p>💻 Node.js, Typescript, React enthusiasm. </p>
          <p>
            🌍 I&rsquo;m based in Bangkok, See my portfolio at{' '}
            <a
              href='https://github.com/xeusteerapat'
              target='_blank'
              rel='noopener noreferrer'
            >
              GitHub
            </a>
          </p>
          <p>
            🧠 I&rsquo;m also learning k8s, Go, Microservices, Distributed
            System, Software Architecture
          </p>
        </Prose>
      </Page>
    </>
  );
};

export default About;
