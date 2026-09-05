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

Any test that visits `practicesoftwaretesting.com` fails when run in the GitHub Actions workflow. Cloudflare's bot-verification challenge blocks GitHub-hosted runners' IP addresses site-wide, so pages never load past the "Performing security verification" screen — this happens on the very first request, regardless of which page or flow the test targets. Tests pass reliably when run locally.

This is an IP-reputation-based block, not something fixable via retries, timeouts, or workflow configuration. Running the workflow on a self-hosted runner (with a normal, non-data-center IP) would resolve it, but requires maintaining that runner.

Until then, tests that hit `practicesoftwaretesting.com` are tagged `@practicesoftwaretesting` (e.g. `tests/login.spec.ts`), and the CI workflow (`.github/workflows/playwright.yml`) excludes that tag via `--grep-invert @practicesoftwaretesting`. Tag any new test that visits the site the same way so it's skipped in CI and still runs locally:

```bash
npx playwright test --grep @practicesoftwaretesting      # only the excluded tests
npx playwright test --grep-invert @practicesoftwaretesting  # what CI runs
```

## Project structure

```
tests/            Test specs
playwright.config.ts   Playwright configuration
.github/workflows/     CI workflow
```
