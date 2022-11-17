# Deta Micros Typescript Starter

This is my experiment using deta cli & micros

Deta micros is absolutely `FREE` runtime for nodejs & python. for me this very awesome
currently deta micros for `nodejs` only support node12.x & node4.x.
i wish in future they also support node 16.x 19.x or maybe `deno` & `bun` :D

### How to initialize?

```bash
git clone https://github.com/arisris/deta-micros-typescript.git
cd deta-micros-typescript
pnpm install
# to develop run
pnpm dev:micros
# to build & deploy. First make sure you have installed deta cli. https://docs.deta.sh/docs/cli/install
# initialize your deta micros project
pnpm build:micros && cd micros && deta new --name <myprojectname> --runtime nodejs14

# to update your micros run
pnpm deploy:micros

```

Thankyou
