// Need to perform this annoying workaround to get an icon library that:
// a) Works with svelte-package 2.x (https://github.com/sveltejs/kit/discussions/8825, https://github.com/sveltejs/kit/pull/8922)
// b) Has functional VSCode intellisense (https://github.com/sveltejs/kit/issues/9114#issuecomment-1437836930)
// c) Allows using subpath imports (import {} from ".../mini", ".../outline", ".../solid")
// d) Avoids the TS 4.x "subpath" nightmare (https://github.com/microsoft/TypeScript/issues/33079, https://github.com/andrewbranch/example-subpath-exports-ts-compat)
// e) Allows named imports for compat (e.g. import { XCircleIcon } from '@robotpajamas/svelte-heroicons/solid')
// f) Allows fully-qualified default imports to avoid `vite dev` loading every icon in the path (solved since https://github.com/sveltejs/kit/pull/7760)
// g) Allows fully-qualified default imports to avoid Vitest collection performance killers (https://github.com/vitest-dev/vitest/issues/579#issuecomment-1433562599)

import fs from "fs";

for (const file of ["README.md", "LICENSE", "package.json"]) {
  fs.copyFileSync(file, `./dist/${file}`);
}
