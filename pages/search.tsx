import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SearchUser } from './api/models/user.model';
import styles from '../styles/Home.module.css';
import AppHeader from '../foundation/components/AppHeader';
import GithubUsersSearchBar from '../search/components/GithubUsersSearchBar';

const Search: NextPage = ({ searchUsers }: any) => {
  const router = useRouter();
  const { q } = router.query;

  return (
    <>
      <Head>
        <title>Giteye | Search: {q}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppHeader />

      <main className={styles.main}>
        <GithubUsersSearchBar initalSearchValue={q as string} />
        <h1>Search: {q}</h1>
        <div>
          {searchUsers.map(({ id, login, avatar_url }) => (
            <div key={id}>
              <Image src={avatar_url} alt={login} width={80} height={80} />
              <div>id: {id}</div>
              <div>login: {login}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps({ query }: any) {
  const q = query.q;

  const searchUsers: SearchUser[] = await fetch(`http://localhost:8080/search/users/${q}`)
    .then((res) => res.json())
    .then((data: SearchUser[]) => data);

  return { props: { searchUsers } };
}

export default Search;
