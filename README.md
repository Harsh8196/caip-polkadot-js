# caip-polkadot [![npm version](https://badge.fury.io/js/caip.svg)](https://badge.fury.io/js/caip)

CAIP standard utils

## ChainId (CAIP-2)

### Object-oriented

```typescript
import { ChainId } from "caip-polkadot";

const chainId = new ChainId("polkadot:91b171bb158e2d3848fa23a9f1c25182");

// OR

const chainId = new ChainId({ namespace: "polkadot", reference: "91b171bb158e2d3848fa23a9f1c25182" });

// THEN

chainId.toString();
// "polkadot:91b171bb158e2d3848fa23a9f1c25182"

chainId.toJSON();
// { namespace: "polkadot", reference: "91b171bb158e2d3848fa23a9f1c25182" }
```

### Functional

```typescript
import { ChainId } from "caip-polkadot";

ChainId.parse("polkadot:91b171bb158e2d3848fa23a9f1c25182");
// { namespace: "polkadot", reference: "91b171bb158e2d3848fa23a9f1c25182" }

// AND

ChainId.format({ namespace: "polkadot", reference: "91b171bb158e2d3848fa23a9f1c25182" });
// "polkadot:91b171bb158e2d3848fa23a9f1c25182"
```

## AccountId (CAIP-10)

### Object-oriented

```typescript
import { AccountId } from "caip-polkadot";

const accountId = new AccountId(
  "polkadot:91b171bb158e2d3848fa23a9f1c25182:15rRgsWxz4H5LTnNGcCFsszfXD8oeAFd8QRsR6MbQE2f6XFF"
);

// OR

const accountId = new AccountId({
  chainId: { namespace: "polkadot", reference: "91b171bb158e2d3848fa23a9f1c25182" },
  address: "15rRgsWxz4H5LTnNGcCFsszfXD8oeAFd8QRsR6MbQE2f6XFF",
});

// ALSO

const accountId = new AccountId({
  chainId: "polkadot:91b171bb158e2d3848fa23a9f1c25182",
  address: "15rRgsWxz4H5LTnNGcCFsszfXD8oeAFd8QRsR6MbQE2f6XFF",
});

// THEN

accountId.toString();
// "polkadot:91b171bb158e2d3848fa23a9f1c25182:15rRgsWxz4H5LTnNGcCFsszfXD8oeAFd8QRsR6MbQE2f6XFF"

accountId.toJSON();
// { address: "15rRgsWxz4H5LTnNGcCFsszfXD8oeAFd8QRsR6MbQE2f6XFF", chainId: { namespace: "polkadot", reference: "91b171bb158e2d3848fa23a9f1c25182" } }
```

### Functional

```typescript
import { AccountId } from "caip-polkadot";

AccountId.parse("polkadot:91b171bb158e2d3848fa23a9f1c25182:15rRgsWxz4H5LTnNGcCFsszfXD8oeAFd8QRsR6MbQE2f6XFF");
// { address: "15rRgsWxz4H5LTnNGcCFsszfXD8oeAFd8QRsR6MbQE2f6XFF", chainId: { namespace: "polkadot", reference: "91b171bb158e2d3848fa23a9f1c25182" } }

// AND

AccountId.format({
  chainId: { namespace: "polkadot", reference: "91b171bb158e2d3848fa23a9f1c25182" },
  address: "15rRgsWxz4H5LTnNGcCFsszfXD8oeAFd8QRsR6MbQE2f6XFF",
});
//"polkadot:91b171bb158e2d3848fa23a9f1c25182:15rRgsWxz4H5LTnNGcCFsszfXD8oeAFd8QRsR6MbQE2f6XFF"

// OR

AccountId.format({
  chainId: "polkadot:91b171bb158e2d3848fa23a9f1c25182",
  address: "15rRgsWxz4H5LTnNGcCFsszfXD8oeAFd8QRsR6MbQE2f6XFF",
});
//"polkadot:91b171bb158e2d3848fa23a9f1c25182:15rRgsWxz4H5LTnNGcCFsszfXD8oeAFd8QRsR6MbQE2f6XFF"
```