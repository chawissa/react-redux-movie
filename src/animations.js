export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.75,
      },
    },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    y: "+100vh",
    // scale: 0.5,
    transition: {
      duration: 0.25,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    // scale: 1,
    transition: {
      duration: 0.25,
    },
  },
};
