import { useRouter } from 'next/router';
import { useCallback } from 'react';

export const useCustomRouter = () => {
  const router = useRouter();

  const navigateToSearchUser = useCallback(
    (q: string) => {
      router.push(`/search-user?q=${q}`);
    },
    [router]
  );

  const navigateToRepositories = useCallback(
    (userName: string) => {
      router.push(`/repositories?userName=${userName}`);
    },
    [router]
  );

  return {
    navigateToSearchUser,
    navigateToRepositories,
  };
};
