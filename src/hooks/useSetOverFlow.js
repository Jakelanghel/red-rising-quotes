import { useEffect, useState } from "react";

export const useSetOverFlow = (ref, quote) => {
  const [hasOverflow, setHasOverflow] = useState(false);

  useEffect(() => {
    const container = ref.current;
    if (container.scrollHeight > container.clientHeight) {
      setHasOverflow(true);
    } else {
      setHasOverflow(false);
    }
  }, [quote]);

  return hasOverflow;
};
