import {useCallback, useState} from 'react';

export const useInput = init => {
  const [value, setValue] = useState(init);

  const handler = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const reset = useCallback(e => {
    setValue(init);
  }, [init]);

  return [value, handler, setValue, reset];
};
