module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      animation: {
        increase: "increase 2s infinite",
        decrease: "decrease 2s .5s infinite",
      },
      keyframes: {
        increase: {
          from: {
            width: "5%",
            left: "-5%",
          },
          to: {
            width: "100%",
            left: "125%",
          },
        },
        decrease: {
          from: {
            width: "80%",
            left: "-80%",
          },
          to: {
            width: "10%",
            left: "110%",
          },
        },
      },
    },
  },
};
