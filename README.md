# nuxtesttask

# Wikipedia Language Change Automation

This project is a test automation solution created as part of an AQA test assignment.

## Automated test case
Authorized user changes interface language via Preferences → User profile → Internationalisation.

Preconditions

User has a valid Wikipedia account

User is authorized (logged in)

Steps

Open https://www.wikipedia.org

Log in using valid credentials

Open Preferences from the user menu

Navigate to User profile tab

In Internationalisation section select another interface language

Save changes

Expected Result

Interface language is changed to the selected language

UI elements are displayed in the chosen language

## Tech stack
- Playwright
- TypeScript
- Docker
- dotenv

## How to run
1. Create `.env` file with credentials
2. Run:
   docker-compose up --build
3. Open report:
   playwright-report/index.html
