import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

function useHeaderFixed() {
  const [headerFixed, setHeaderFixed] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setHeaderFixed(false);
    } else {
      setHeaderFixed(true);
    }
  }, [location.pathname]);

  useScrollPosition(
    ({ currPos }) => {
      currPos.y === 0 && location.pathname === "/"
        ? setHeaderFixed(false)
        : setHeaderFixed(true);
    },
    [location.pathname],
    200
  );

  return headerFixed;
}

export default useHeaderFixed;
