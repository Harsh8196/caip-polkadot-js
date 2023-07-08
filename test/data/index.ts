// ChainId Data Points
export const CHAIN_ID_DELIMITER = `:`;
export const CHAIN_ID_NAMESPACE = `polkadot`;
export const CHAIN_ID_REFERENCE = `91b171bb158e2d3848fa23a9f1c25182`;
export const CHAIN_ID_STRING =
  CHAIN_ID_NAMESPACE + CHAIN_ID_DELIMITER + CHAIN_ID_REFERENCE;
export const CHAIN_ID_PARAMS = {
  namespace: CHAIN_ID_NAMESPACE,
  reference: CHAIN_ID_REFERENCE,
};

// AccountId Data Points
export const ACCOUNT_ID_DELIMITER = `:`;
export const ACCOUNT_ID_ADDRESS = `15rRgsWxz4H5LTnNGcCFsszfXD8oeAFd8QRsR6MbQE2f6XFF`;
export const ACCOUNT_ID_STRING =
  CHAIN_ID_STRING + ACCOUNT_ID_DELIMITER + ACCOUNT_ID_ADDRESS;
export const ACCOUNT_ID_PARAMS = {
  chainId: CHAIN_ID_STRING,
  address: ACCOUNT_ID_ADDRESS,
};

export const ACCOUNT_ID_NESTED_PARAMS = {
  chainId: CHAIN_ID_PARAMS,
  address: ACCOUNT_ID_ADDRESS,
};
