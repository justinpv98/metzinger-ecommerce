import { useState, useLayoutEffect } from "react";

function useMatchMedia(query) {
  const [matches, setMatches] = useState(true);
  useLayoutEffect(() => {
    const media = window.matchMedia(query);

    mediaMatchListener();

    window.addEventListener("resize", mediaMatchListener);
    return () => window.removeEventListener("resize", mediaMatchListener);

    function mediaMatchListener() {
      setMatches(media.matches);
    }
  }, [query]);

  return matches;
}

export default useMatchMedia;
