import Head from "next/head";
import styles from "@/styles/Blog.module.scss";

export default function Article({
  post,
}: {
  post: { userId: number; id: number; title: string; body: string };
}) {
  console.log(post);
  return (
    <>
      <Head>
        <title>Article – EdW Next Blog</title>
        <meta
          name="description"
          content="page article"
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
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps(context: { params: { article: string } }) {
  const id = context.params.article;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const post = await response.json();

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    paths: posts.map((post: { id: number }) => ({
      params: { article: post.id.toString() },
    })),
    fallback: false,
  };
}
