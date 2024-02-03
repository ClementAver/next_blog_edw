import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/List.module.scss";

export default function List({
  users,
}: {
  users: { id: number; username: string }[];
}) {
  return (
    <>
      <Head>
        <title>Liste – EdW Next Blog</title>
        <meta
          name="description"
          content="page Liste"
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
          <h1>La liste des utilisateurs</h1>
        </section>
        <section className={styles.cardWrapper}>
          {users.map((user, index) => (
            <article key={index}>
              <h2>🧑‍💻 {user.username}</h2>
              <Link href={`/list/${user.id}`}>Contacter</Link>
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return {
    props: { users },
  };
}
