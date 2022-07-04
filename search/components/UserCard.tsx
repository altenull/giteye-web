import { EmailIcon } from '@chakra-ui/icons';
import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
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
      position="relative"
      cursor="pointer"
      marginBottom="40px"
      onClick={() => navigateToRepositories(searchUser.login)}
    >
      <StyledBlurredBackCover
        maxW="xl"
        style={{
          backgroundImage: `url(${searchUser.avatar_url})`,
        }}
      />

      <Box
        position="relative"
        display="flex"
        alignItems="center"
        maxW="xl"
        padding="16px"
        border="1px solid #000000"
        backgroundColor="white"
      >
        <StyledUsername>
          <span>{searchUser.login}</span>
          {typeof user?.name === 'string' && <span>({user.name})</span>}
        </StyledUsername>

        <StyledAvatar
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            border: '1px solid #000000',
          }}
          src={searchUser.avatar_url}
          alt={searchUser.login}
          width={72}
          height={72}
        />

        <Box>
          <Text fontSize="md">followers: {user?.followers_total ?? '-'}</Text>
          <Text fontSize="md">following: {user?.following_total ?? '-'}</Text>
          <Text fontSize="md">created_at: {user?.created_at ?? '-'}</Text>
          <Text fontSize="md">company: {user?.company ?? '-'}</Text>
          <Text fontSize="md">location: {user?.location ?? '-'}</Text>
          <Text fontSize="md">
            <EmailIcon />
            email: {user?.email ?? '-'}
          </Text>
          <Text fontSize="md">bio: {user?.bio ?? '-'}</Text>
        </Box>
      </Box>
    </Box>
  );
});

const StyledBlurredBackCover = styled(Box)`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #000000;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: saturation;
  transform: translate(-16px, 16px);
  /* filter: blur(88px); */
`;

const StyledAvatar = styled(Image)`
  position: absolute;
  right: 0;
  top: 0;
  border-radius: 50%;
  border: 1px solid #000000;
`;

const StyledUsername = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span:nth-child(1) {
    font-size: 20px;
  }
  span:nth-child(2) {
    font-size: 14px;
    margin-left: 4px;
  }
`;

export default UserCard;
