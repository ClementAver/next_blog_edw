import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Blog.module.scss";

export default function Blog({
  posts,
}: {
  posts: { userId: number; id: number; title: string; body: string }[];
}) {
  return (
    <>
      <Head>
        <title>Blog – EdW Next Blog</title>
        <meta
          name="description"
          content="page Blog"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <meta
          httpEquiv="X-UA-Compatible"
          content="IE=edge"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
        <section className={styles.intro}>
          <h1>Bienvenue sur le blog</h1>
          <p>Voici les articles</p>
        </section>
        <section className={styles.cardWrapper}>
          {posts.map((article, index) => (
            <article key={index}>
              <h2>{article.title}</h2>
              <p>{article.body.slice(0, 100)}</p>
              <Link href={`blog/${article.id}`}>Lire cet article</Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: { posts },
  };
}
