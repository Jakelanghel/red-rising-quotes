import { useState, useEffect } from "react";

export const useHasOverFlow = (containerRef, quote) => {
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (container.scrollHeight > container.clientHeight) {
      setHasOverflow(true);
    } else {
      setHasOverflow(false);
    }
  }, [quote]);
  return hasOverflow;
};
