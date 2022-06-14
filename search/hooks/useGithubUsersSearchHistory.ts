import { atom, useRecoilState } from 'recoil';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const githubUserSearchHistoriesState = atom<string[]>({
  key: 'useSearchHistory/githubUserSearchHistoriesState',
  default: [],
});

const MAX_SEARCH_RESULT_TOTAL = 5;

export const useGithubUsersSearchHistory = () => {
  const [githubUserSearchHistories, setGithubUserSearchHistories] = useRecoilState(githubUserSearchHistoriesState);

  const { getItem, setItem } = useLocalStorage();

  const initGithubUsersSearchHistory = () => {
    const githubUserSearchHistoriesFromLocalStorage: string[] = getItem<string[]>('github-users-search-histories', []);

    setGithubUserSearchHistories(githubUserSearchHistoriesFromLocalStorage);
  };

  const searchGithubUser = (searchedGithubUser: string) => {
    const newGithubUserSearchHistories: string[] = [searchedGithubUser, ...githubUserSearchHistories].slice(
      0,
      MAX_SEARCH_RESULT_TOTAL
    );

    setGithubUserSearchHistories(newGithubUserSearchHistories);
    setItem<string[]>('github-users-search-histories', newGithubUserSearchHistories);
  };

  const removeGithubUserSearchHistory = (index: number) => {
    const copiedGithubUserSearchHistories: string[] = [...githubUserSearchHistories];
    copiedGithubUserSearchHistories.splice(index, 1);

    setGithubUserSearchHistories(copiedGithubUserSearchHistories);
    setItem<string[]>('github-users-search-histories', copiedGithubUserSearchHistories);
  };

  return {
    githubUserSearchHistories,
    initGithubUsersSearchHistory,
    searchGithubUser,
    removeGithubUserSearchHistory,
  };
};
