import preprocess from "svelte-preprocess";
import svg from "@poppanator/sveltekit-svg";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    vite: {
      plugins: [
        svg({
          svgoOptions: {
            plugins: [
              {
                name: "removeDimensions",
                active: true,
              },
              {
                name: "addAttributesToSVGElement",
                params: {
                  attributes: [{ width: "100%" }, { height: "100%" }],
                },
              },
            ],
          },
        }),
      ],
    },
  },
};

export default config;
