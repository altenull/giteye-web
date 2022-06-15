import { Box, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { SearchUser } from '../../pages/api/models/user.model';

interface Props {
  searchUser: SearchUser;
}

// TODO: UI
const SimpleUserCard: React.FC<Props> = ({ searchUser }: Props) => {
  return (
    <Box display="flex" alignItems="center" maxW="xl" borderWidth="2px" borderRadius="lg">
      <Image src={searchUser.avatar_url} alt={searchUser.login} width={48} height={48} />
      <Text style={{ marginLeft: '12px' }} fontSize="xl">
        {searchUser.login}
      </Text>
    </Box>
  );
};

export default SimpleUserCard;
