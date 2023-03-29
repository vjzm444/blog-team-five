import { useCallback, useEffect, useState } from 'react';
import { Post } from '@/common/types';

export const useFetch = <T extends Post[] | Post>(
  param: string | undefined,
  getDataFunc: (category: string) => Promise<T | null>,
) => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = useCallback(async (): Promise<void> => {
    try {
      if (param) {
        const res = await getDataFunc(param);
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
  }, [param, getDataFunc]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error, loading };
};

export default useFetch;
