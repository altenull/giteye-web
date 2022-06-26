import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { useCustomRouter } from '../../hooks/useCustomRouter';
import { SearchUser } from '../../pages/api/models/user.model';
import { useGetUserAPI } from '../hooks/useGetUserAPI';

interface Props {
  searchUser: SearchUser;
}

const UserCard: React.FC<Props> = React.memo(({ searchUser }) => {
  const { user, isLoading, isError } = useGetUserAPI({ userName: searchUser.login });
  const { navigateToRepositories } = useCustomRouter();

  return (
    <Box
      cursor="pointer"
      display="flex"
      alignItems="center"
      maxW="xl"
      borderWidth="2px"
      borderRadius="lg"
      onClick={() => navigateToRepositories(searchUser.login)}
    >
      <Image src={searchUser.avatar_url} alt={searchUser.login} width={48} height={48} />
      <Text style={{ marginLeft: '12px' }} fontSize="xl">
        {searchUser.login}
      </Text>

      <Box>
        <Text fontSize="md">followers_total: {user?.followers_total ?? '-'}</Text>
        <Text fontSize="md">following_total: {user?.following_total ?? '-'}</Text>
        <Text fontSize="md">created_at: {user?.created_at ?? '-'}</Text>
        <Text fontSize="md">name: {user?.name ?? '-'}</Text>
        <Text fontSize="md">company: {user?.company ?? '-'}</Text>
        <Text fontSize="md">location: {user?.location ?? '-'}</Text>
        <Text fontSize="md">email: {user?.email ?? '-'}</Text>
        <Text fontSize="md">bio: {user?.bio ?? '-'}</Text>
      </Box>
    </Box>
  );
});

export default UserCard;
