import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

interface Props extends BoxProps {
  children: React.ReactNode;
}

const GiteyeCard: React.FC<Props> = ({ children, ...rest }: Props) => {
  return (
    <Box maxW="xl" padding="32px 40px" border="1px solid #000000" backgroundColor="#ffffff" {...rest}>
      {children}
    </Box>
  );
};

export default GiteyeCard;
