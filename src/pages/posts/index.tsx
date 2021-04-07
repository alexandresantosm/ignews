import { GetStaticProps } from 'next';
import Head from 'next/head';
import Prismic from '@prismicio/client';

import { getPrismicClient } from '../../services/prismic';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a>
            <time>12 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>

          <a>
            <time>08 de março de 2021</time>
            <strong>How Stripe Designs Beautiful Websites</strong>
            <p>Examining the tips and tricks used to make Stripe's website design a notch above the rest.</p>
          </a>

          <a>
            <time>04 de março de 2021</time>
            <strong>Past, Present, and Future of React State Management</strong>
            <p>Learn about the history of state management in React and what the preferred solutions are today.</p>
          </a>

          <a>
            <time>03 de março de 2021</time>
            <strong>Creating a Monorepo with Lerna & Yarn Workspaces</strong>
            <p>In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process.</p>
          </a>
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.predicates.at('document.type', 'post')
  ], {
    fetch: ['post.title', 'post.content'],
    pageSize: 100,
  });

  console.log(JSON.stringify(response, null, 2));
  
  return {
    props: {}
  }
}