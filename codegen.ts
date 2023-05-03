import "dotenv/config";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.DB_READ_ENDPOINT,
  documents: "src/**/*.tsx",
  generates: {
    "src/graphql/": {
      preset: "client",
      plugins: [],
    },
    "src/graphql/graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
