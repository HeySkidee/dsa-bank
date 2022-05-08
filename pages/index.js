import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import questionList from "../staticData/questionList";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>DSA Frontend Army</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://frontend.army">Frontend Army</a>
        </h1>

        <p className={styles.description}>
          <code className={styles.code}> Getting regular with DSA!</code>
        </p>

        <div className={styles.grid}>
          {questionList.map((topic) => (
            <a
              href={`/topic/${topic.id}`}
              className={styles.card}
              id={topic.id}
            >
              <h2>{topic.topicName} &rarr;</h2>
              <p>Must do questions related to {topic.topicName}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
           Frontend army
          </span>
        </a>
      </footer>
    </div>
  );
}
