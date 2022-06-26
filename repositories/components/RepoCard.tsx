import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { Repo } from '../../pages/api/models/repo.model';

interface Props {
  repo: Repo;
}

const RepoCard: React.FC<Props> = React.memo(({ repo }) => {
  return (
    <Box maxW="xl" borderWidth="2px" borderRadius="lg">
      <Text style={{ marginBottom: '12px' }} fontSize="xl">
        {repo.name}
      </Text>

      <Box>
        <Text fontSize="md">description: {repo?.description ?? '-'}</Text>
        <Text fontSize="md">html_url: {repo?.html_url ?? '-'}</Text>
        <Text fontSize="md">stargazers_count: {repo?.stargazers_count ?? '-'}</Text>
        <Text fontSize="md">watchers_count: {repo?.watchers_count ?? '-'}</Text>
        <Text fontSize="md">topics: {repo?.topics ?? '-'}</Text>
        <Text fontSize="md">size: {repo?.size ?? '-'}</Text>
        <Text fontSize="md">archived: {repo?.archived ?? '-'}</Text>
        <Text fontSize="md">fork: {repo?.fork ?? '-'}</Text>
        <Text fontSize="md">pushed_at: {repo?.pushed_at ?? '-'}</Text>
        <Text fontSize="md">created_at: {repo?.created_at ?? '-'}</Text>
        <Text fontSize="md">updated_at: {repo?.updated_at ?? '-'}</Text>
        <Text fontSize="md">homepage: {repo?.homepage ?? '-'}</Text>
        <Text fontSize="md">language: {repo?.language ?? '-'}</Text>
      </Box>
    </Box>
  );
});

export default RepoCard;
