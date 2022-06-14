// See also (https://dev.to/devlargs/nextjs-hook-for-accessing-local-or-session-storage-variables-3n0)
type UseLocalStorageReturnValue = {
  getItem: <T>(key: LocalStorageKey, initialValue: T) => T;
  setItem: <T>(key: LocalStorageKey, value: T) => boolean;
  removeItem: (key: LocalStorageKey) => void;
};

type LocalStorageKey = 'github-users-search-histories';

export const useLocalStorage = (): UseLocalStorageReturnValue => {
  const isBrowser: boolean = ((): boolean => typeof window !== 'undefined')();

  const getItem = <T>(key: LocalStorageKey, initialValue: T): T => {
    const storedValue: string | null = window.localStorage.getItem(key);

    return isBrowser && typeof storedValue === 'string' ? (JSON.parse(storedValue) as T) : initialValue;
  };

  const setItem = <T>(key: LocalStorageKey, value: T): boolean => {
    if (isBrowser) {
      window.localStorage.setItem(key, JSON.stringify(value));
      return true;
    }

    return false;
  };

  const removeItem = (key: LocalStorageKey): void => {
    window.localStorage.removeItem(key);
  };

  return {
    getItem,
    setItem,
    removeItem,
  };
};
