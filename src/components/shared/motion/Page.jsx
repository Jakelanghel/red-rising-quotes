import { motion } from "framer-motion";

import React from "react";

const pageVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 4,
    },
  },
};

const Page = ({ children, customClass }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial={"initial"}
      animate={"animate"}
      className={`${customClass} d-flex flex-column align-items-center p-3`}
    >
      {children}
    </motion.div>
  );
};

export default Page;
