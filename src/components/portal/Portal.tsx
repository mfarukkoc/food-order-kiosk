import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface Props {
  children?: React.ReactNode;
}

const Portal = React.memo<Props>(({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.getElementsByTagName("body")[0])
    : null;
});
Portal.displayName = "Portal";
export default Portal;
