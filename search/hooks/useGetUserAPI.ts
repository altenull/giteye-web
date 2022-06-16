import useSWRImmutable from 'swr/immutable';
import { UseAPISharedReturn } from '../../models/use-api.model';
import { User } from '../../pages/api/models/user.model';

interface UseGetUserAPIPayload {
  userName: string;
}

interface UseGetUserAPIResposne extends UseAPISharedReturn {
  user: User | undefined;
}

export const useGetUserAPI = ({ userName }: UseGetUserAPIPayload): UseGetUserAPIResposne => {
  const { data, isValidating, error } = useSWRImmutable<User>(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/users/${userName}`
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
    isValidating,
  };
};
