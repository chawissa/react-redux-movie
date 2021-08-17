export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

export const popup = {
  hidden: {
    opacity: 0,
    y: "+100vh",
    transition: {
      duration: 0.35,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export const hover = {
  hover: {
    scale: 0.9,
    boxShadow: "0px 0px 8px rgb(255, 255, 255)",
    transition: {
      duration: 0.3,
    },
  },
};
