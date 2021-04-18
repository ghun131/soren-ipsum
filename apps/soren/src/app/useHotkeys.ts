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
    document.addEventListener('keyup', (event) => callback(event));

    return () => {
      document.removeEventListener('keyup', (event) => callback(event));
    };
  });
}
