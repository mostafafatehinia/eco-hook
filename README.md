This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## How to use useSharedSimpleState hook

Just import the hook where ever you want and the hook return two thing like useState hook,
destructure it like array desctruction.
exp:
` const [user, setUser] = useSharedSimpleState();`
user is an object about user detail information and setUser is setter for changing user info.
