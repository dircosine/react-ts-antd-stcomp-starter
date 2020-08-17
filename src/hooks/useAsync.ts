import { useEffect, useReducer } from 'react';

type State = {
  loading: boolean;
  data: any;
  error: any;
};
type Action = { type: 'LOADING' } | { type: 'SUCCESS'; data: any } | { type: 'ERROR'; error: any };

function reducer(state: State, action: Action): any {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null,
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error,
      };
  }
}

function useAsync(callback: () => Promise<any>, deps: any = [], skip: boolean = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      console.log(data);
      dispatch({ type: 'SUCCESS', data: data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    if (skip) return;
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [state, fetchData];
}

export default useAsync;
