# UBC BIOMOD Website
Repository for the UBC BIOMOD Design Team's official landing page

Built with Next.js, Typescript, and Tailwind CSS + Preline

# Tooling

## Storybook
Storybook allows you to prototype components in isolation and create a component library with documentation. The Storybook server needs to be started separately:

```bash
npm run storybook
```

## Formatting/Linting
We are using [ESLint](https://eslint.org/) with [Prettier](https://prettier.io/) for code linting and formatting:

```bash
npm run lint

npm run format
```

We are also using `lint-staged` and `husky` to automatically format and lint code upon commit, to ensure code quality.

# Getting Started
First, install the dependencies:
```bash
npm i
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.