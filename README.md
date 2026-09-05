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

## Known CI limitation

`tests/login.spec.ts` currently fails when run in the GitHub Actions workflow (`.github/workflows/playwright.yml`). Cloudflare's bot-verification challenge blocks GitHub-hosted runners' IP addresses on `practicesoftwaretesting.com`, so the site never loads past the "Performing security verification" page — the login flow itself is not broken. The test passes reliably when run locally.

This is an IP-reputation-based block, not something fixable via retries, timeouts, or workflow configuration. Running the workflow on a self-hosted runner (with a normal, non-data-center IP) would resolve it, but requires maintaining that runner.

## Project structure

```
tests/            Test specs
playwright.config.ts   Playwright configuration
.github/workflows/     CI workflow
```
