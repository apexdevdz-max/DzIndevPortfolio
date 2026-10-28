import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    context: { queryClient },
    // Disabled: scroll restoration fights with the sticky scrollytelling
    // section and causes upward-scroll jumps at section boundaries.
    scrollRestoration: false,
    hashScrollIntoView: false,
    defaultPreloadStaleTime: 0,
  });

  return router;
};
