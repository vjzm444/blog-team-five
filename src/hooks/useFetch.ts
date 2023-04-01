import { useCallback, useEffect, useState } from 'react';
import { Post, PostList } from '@/common/types';

interface FetchProps<T> {
  getDataFunc: (category: string, num?: number) => Promise<T | null>;
  param?: string;
  nextPage?: number;
}

export const useFetch = <T extends Post[] | Post | PostList>({
  getDataFunc,
  param,
  nextPage,
}: FetchProps<T>) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async (): Promise<void> => {
    try {
      if (param) {
        const res = await getDataFunc(param, nextPage);
        setData(res);
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('Unknown error occurred');
      }

      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, [param, getDataFunc, nextPage]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
};

export default useFetch;
