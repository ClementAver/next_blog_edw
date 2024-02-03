import Head from "next/head";
import styles from "@/styles/List.module.scss";

export default function User({
  user,
}: {
  user: {
    name: string;
    username: string;
    email: string;
    website: string;
    phone: string;
  };
}) {
  console.log(user);
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
        <section className={styles.cardWrapper}>
          <article className={styles.userCard}>
            <h2>🧑‍💻 {user.name}</h2>
            <ul>
              <li>Username : {user.username}</li>
              <li>{user.email}</li>
              <li>{user.website}</li>
              <li>{user.phone}</li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps(context: { params: { user: string } }) {
  const id = context.params.user;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user = await response.json();

  return {
    props: { user },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    paths: users.map((user: { id: number }) => ({
      params: { user: user.id.toString() },
    })),
    fallback: false,
  };
}
