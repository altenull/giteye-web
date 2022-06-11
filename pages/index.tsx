import { SearchIcon } from "@chakra-ui/icons";
import { FormControl, Heading, IconButton, Input } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [queryValue, setQueryValue] = useState<string>("");
  const router = useRouter();

  const searchUsers = () => {
    router.push(`/search?q=${queryValue}`);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Heading style={{ marginBottom: "16px" }}>Giteye</Heading>
        <FormControl style={{ display: "flex" }}>
          <Input
            autoFocus
            value={queryValue}
            placeholder="Search github users.."
            onChange={(e) => setQueryValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchUsers();
              }
            }}
          />
          <IconButton
            aria-label="Search github users"
            icon={<SearchIcon />}
            onClick={() => searchUsers()}
          />
        </FormControl>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
