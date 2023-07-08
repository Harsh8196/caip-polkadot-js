import { IdentifierSpec } from "./types";

const CAIP2: IdentifierSpec = {
  name: "chainId",
  regex: "polkadot:[0-9a-f]{32}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "polkadot",
      },
      1: {
        name: "reference",
        regex: "[0-9a-f]{32}",
      },
    },
  },
};

const CAIP10: IdentifierSpec = {
  name: "accountId",
  regex: "polkadot:[0-9a-f]{32}:[1-9A-HJ-NP-Za-km-z]{47,48}",
  parameters: {
    delimiter: ":",
    values: {
      0: {
        name: "namespace",
        regex: "polkadot",
      },
      1: {
        name: "reference",
        regex: "[0-9a-f]{32}",
      },
      2: {
        name: "address",
        regex: "[1-9A-HJ-NP-Za-km-z]{47,48}",
      },
    },
  },
};

export const CAIP = {
  "2": CAIP2,
  "10": CAIP10,
};
