import { Box, Heading } from '@chakra-ui/react';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../foundation/components/Layout';
import RepoCard from '../repositories/components/RepoCard';
import { pluralize } from '../utils/pluralize.util';
import { Repo } from './api/models/repo.model';

interface Props {
  repos: Repo[];
}

const Repositories: NextPage<Props> = ({ repos }) => {
  const router = useRouter();
  const { userName } = router.query;

  return (
    <>
      <Head>
        <title>Giteye | Search: {userName}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Heading style={{ margin: '16px auto', textAlign: 'right' }} as="h4" size="sm" maxW="xl">
          {repos.length} {pluralize('result', repos.length)}
        </Heading>

        <Box style={{ margin: '0 auto' }} maxW="xl">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </Box>
      </Layout>
    </>
  );
};

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const { userName } = query;

  const repos: Repo[] = await fetch(`${process.env.API_ENDPOINT}/repos/${userName}`)
    .then((res) => res.json())
    .then((data: Repo[]) => data);

  return { props: { repos } };
}

export default Repositories;
