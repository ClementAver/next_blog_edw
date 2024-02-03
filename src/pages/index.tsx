import Head from "next/head";
import Link from "next/link";
import styles from "@/styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil – EdW Next Blog</title>
        <meta
          name="description"
          content="page d'accueil du blog"
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
      <main className={styles.main}>
        <div>
          <section>
            <div className={`container ${styles.intro}`}>
              <h1>Bienvenue sur Code.io</h1>
              <p>
                Le blog communautaire des afficionados de développement web.
              </p>
            </div>
          </section>

          <section className={styles.cardWrapper}>
            <article>
              <h2>📰 Les articles</h2>
              <p>Maximisez votre culture web</p>
              <p>Exposés, trucs & astuces, témoignages.</p>
              <Link href="/blog">Visite le blog</Link>
            </article>

            <article className={styles.card}>
              <h2>🧑‍💻 Les membres</h2>
              <p>Faites-vous des amis</p>
              <p>Ajoutez, inviter et discuter avec les différents membres.</p>
              <Link href="/list">Découvrez la liste des membres</Link>
            </article>
          </section>
        </div>
      </main>
    </>
  );
}
