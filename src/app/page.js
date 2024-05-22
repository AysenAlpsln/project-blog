import React from 'react';

import { getBlogPostList } from '@/helpers/file-helpers';

import BlogSummaryCard from '@/components/BlogSummaryCard';

import styles from './homepage.module.css';

async function Home() {
  var blogs = await getBlogPostList();

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      {/* Since the slug value will be used as a key, we separate it and transfer the other information to the Card component. */}
      {blogs.map(({slug, ...delegated}) => (
        <BlogSummaryCard
          key={slug}
          slug={slug}
          {...delegated}
        />
      ))}
      
    </div>
  );
}

export default Home;
