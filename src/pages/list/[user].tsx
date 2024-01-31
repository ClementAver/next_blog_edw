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
          http-equiv="X-UA-Compatible"
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
            <h2>{user.name}</h2>
            <p>Username : {user.username}</p>
            <ul>
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
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  const id = context.params.user;
  const user = users.find((el: { id: number }) => el.id === parseInt(id));
  return {
    props: { user },
  };
}

export async function getStaticPaths() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    paths: [{ params: { user: "1" } }],
    fallback: true,
  };
}
