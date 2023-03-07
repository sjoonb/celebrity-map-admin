import { useState, useEffect } from 'react';

export function useDomLoaded() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    if (domLoaded) {
      return;
    }
    setDomLoaded(true);
  }, [domLoaded]);

  return domLoaded;
}
