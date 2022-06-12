import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useState, useCallback } from 'react';

interface Props {
  initalSearchValue?: string;
}

const GithubUsersSearchBar: React.FC<Props> = ({ initalSearchValue }: Props) => {
  const [searchValue, setSearchValue] = useState<string>(initalSearchValue ?? '');
  const router = useRouter();

  const handleSearchValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.push(`/search?q=${searchValue}`);
    }
  };

  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <SearchIcon />
      </InputLeftElement>
      <Input
        autoFocus
        value={searchValue}
        placeholder="Search github users.."
        onChange={handleSearchValueChange}
        onKeyDown={handleKeyDown}
      />
    </InputGroup>
  );
};

export default GithubUsersSearchBar;
