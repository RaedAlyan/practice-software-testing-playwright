# Practice Software Testing - Playwright Tests

End-to-end tests for [practicesoftwaretesting.com](https://practicesoftwaretesting.com/), written with [Playwright](https://playwright.dev/).

## Prerequisites

- Node.js
- npm

## Setup

```bash
npm install
npx playwright install
```

## Running tests

```bash
npx playwright test
```

Run in headed mode:

```bash
npx playwright test --headed
```

View the HTML report after a run:

```bash
npx playwright show-report
```

## Project structure

```
tests/            Test specs
playwright.config.ts   Playwright configuration
.github/workflows/     CI workflow
```
