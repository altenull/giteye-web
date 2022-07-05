import { EmailIcon } from '@chakra-ui/icons';
import { Box, Img, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { differenceInDays, format } from 'date-fns';
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

  const renderJoinedDate = (createdAt: string) => {
    const createdDate: Date = new Date(createdAt);

    return (
      <Text textAlign="right" fontSize="md" fontWeight={500}>
        Joined {format(createdDate, 'yyyy MMM dd')}(+{differenceInDays(new Date(), createdDate)})
      </Text>
    );
  };

  return (
    <Box
      position="relative"
      cursor="pointer"
      transform="translateX(10px)"
      marginBottom="40px"
      onClick={() => navigateToRepositories(searchUser.login)}
    >
      <StyledBlurredBackCoverWrapper maxW="xl">
        <StyledBlurredBackCoverImage
          style={{
            backgroundImage: `url(${searchUser.avatar_url})`,
          }}
        />
      </StyledBlurredBackCoverWrapper>

      <Box maxW="xl" padding="32px 40px" border="1px solid #000000" backgroundColor="white">
        <Box display="flex" justifyContent="space-between" alignItems="flex-start">
          <StyledUsername>
            <span>{searchUser.login}</span>
            {typeof user?.name === 'string' && <span>({user.name})</span>}
          </StyledUsername>

          <Img
            style={{
              width: 56,
              height: 56,
              border: '1px solid black',
              borderRadius: '50%',
              marginTop: '8px',
            }}
            src={searchUser.avatar_url}
            alt={searchUser.login}
          />
        </Box>

        <Box>
          <Text fontSize="md">
            followers: {user?.followers_total ?? '-'} | following: {user?.following_total ?? '-'}
          </Text>
          <Text fontSize="md">company: {user?.company ?? '-'}</Text>
          <Text fontSize="md">location: {user?.location ?? '-'}</Text>
          <Text fontSize="md">
            <EmailIcon />
            email: {user?.email ?? '-'}
          </Text>
          <Text fontSize="md">bio: {user?.bio ?? '-'}</Text>

          {typeof user?.created_at === 'string' && renderJoinedDate(user.created_at)}
        </Box>
      </Box>
    </Box>
  );
});

const StyledBlurredBackCoverWrapper = styled(Box)`
  position: absolute;
  z-index: -1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border: 1px solid #000000;
  transform: translate(-20px, 20px);
  overflow: hidden;
`;

const StyledBlurredBackCoverImage = styled(Box)`
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-blend-mode: saturation;
  filter: blur(64px);
`;

const StyledUsername = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  span:nth-child(1) {
    font-size: 26px;
    font-weight: 500;
  }
  span:nth-child(2) {
    font-size: 16px;
    margin-left: 4px;
  }
`;

export default UserCard;
