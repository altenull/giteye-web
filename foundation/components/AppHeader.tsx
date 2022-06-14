import { Heading } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';
import ThemeSwitch from './ThemeSwitch';

const AppHeader = () => {
  return (
    <StyledHost>
      <Heading as="h1" size="lg">
        Giteye
      </Heading>
      <ThemeSwitch />
    </StyledHost>
  );
};

const StyledHost = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

export default AppHeader;
