import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
  "packages/framework/*",
  "packages/tooling/*",
  {
    test: {
      include: [
        '**/*.{test}.ts'
      ],
      name: 'test',
      environment: 'node',
    },
  }
]);
