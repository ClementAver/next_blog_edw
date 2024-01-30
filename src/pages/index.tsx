import Head from "next/head";

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
          http-equiv="X-UA-Compatible"
          content="IE=edge"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <main>
        <section>
          <h1>Hello, World !</h1>
        </section>
      </main>
    </>
  );
}
