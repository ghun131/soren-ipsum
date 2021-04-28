import { useEffect } from 'react';

export function useKeydown(callback) {
  function handleCallback(event) {
    callback(event);
  }
  useEffect(() => {
    window.addEventListener('keydown', handleCallback);

    return () => {
      window.removeEventListener('keydown', handleCallback);
    };
  });
}

export function useKeyup(callback) {
  useEffect(() => {
    window.addEventListener('keyup', (event) => callback(event));

    return () => {
      window.removeEventListener('keyup', (event) => callback(event));
    };
  });
}
