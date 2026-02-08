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
1. Clone the repository
   git clone https://github.com/ydubinnyk/nuxtesttask.git
   cd your-repo
   
2. Create `.env` file with credentials in the root of the repository and add your credentials:
   Example .env:
   > WIKI_USERNAME=username
   > WIKI_PASSWORD=password

4. Run:
   docker-compose up --build
   > Requirements: Docker must be installed on your machine.
5. Open report:
   playwright-report/index.html
