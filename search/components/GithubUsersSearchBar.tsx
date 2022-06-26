import { SearchIcon } from '@chakra-ui/icons';
import { Box, HStack, Input, InputGroup, InputLeftElement, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useGithubUsersSearchHistory } from '../hooks/useGithubUsersSearchHistory';

interface Props {
  initalSearchValue?: string;
}

const GithubUsersSearchBar: React.FC<Props> = ({ initalSearchValue }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');

  const { githubUserSearchHistories, searchGithubUser, removeGithubUserSearchHistory } = useGithubUsersSearchHistory();
  const router = useRouter();

  useEffect(() => {
    setSearchValue(initalSearchValue ?? '');
  }, [initalSearchValue]);

  const handleSearchValueChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      searchGithubUser(searchValue);
      router.push(`/search-user?q=${searchValue}`);
    }
  };

  const handleSearchHistoryTagClick = (githubUserSearchHistory: string) => {
    router.push(`/search-user?q=${githubUserSearchHistory}`);
  };

  return (
    <Box style={{ margin: '0 auto' }} maxW="xl">
      <InputGroup style={{ marginBottom: '12px' }}>
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

      <HStack spacing={3}>
        {githubUserSearchHistories.map((githubUserSearchHistory: string, index: number) => (
          <Tag key={`${index}_${githubUserSearchHistory}`} size="lg" borderRadius="full" variant="subtle">
            <TagLabel
              style={{ cursor: 'pointer' }}
              onClick={() => handleSearchHistoryTagClick(githubUserSearchHistory)}
            >
              {githubUserSearchHistory}
            </TagLabel>
            <TagCloseButton onClick={() => removeGithubUserSearchHistory(index)} />
          </Tag>
        ))}
      </HStack>
    </Box>
  );
};

export default GithubUsersSearchBar;
