export default new Proxy(
  {},
  {
    get: (_, property) => {
      if (property === "__esModule") {
        return {};
      }

      throw new Error(
        `Importing from \`@robotpajamas/svelte-heroicons\` directly is not supported. Please import from either \`@robotpajamas/svelte-heroicons/mini\`, \`@robotpajamas/svelte-heroicons/outline\`, or \`@robotpajamas/svelte-heroicons/solid\` instead.`
      );
    },
  }
);
