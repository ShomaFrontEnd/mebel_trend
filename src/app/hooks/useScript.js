import { useEffect } from 'react';

function useScript({url}) {
  console.log(url);
  useEffect(() => {
    const script = document.createElement('script');
    script.src = url;
    // script.async = true;
    script.charset="UTF-8"
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
}

export default useScript