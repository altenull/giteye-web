import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FormControl, FormLabel, Switch, useBoolean } from '@chakra-ui/react';
import styled from '@emotion/styled';
import React from 'react';

const ThemeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useBoolean();

  return (
    <StyledFormControl>
      <Switch
        style={{ marginRight: '8px' }}
        id="theme-switch"
        size="md"
        isChecked={isDarkMode}
        onChange={setIsDarkMode.toggle}
      />
      <FormLabel htmlFor="theme-switch" mb="1">
        {isDarkMode ? <MoonIcon /> : <SunIcon />}
      </FormLabel>
    </StyledFormControl>
  );
};

const StyledFormControl = styled(FormControl)`
  display: flex;
  align-items: center;
  width: initial;
`;

export default ThemeSwitch;
