# Improved README.md

## Project Overview 
This application enables users to subscribe to MTA stations or lines to receive timely service alerts.

- **Frontend**: Developed using React.
- **Backend**: Utilizes Django and Django REST Framework.
- **Authorization**: Managed through Auth Tokens.

## Milestones

More detailed user stories, view the [Kuban board](https://github.acom/users/MackHalliday/projects/3).

**Current Milestones (As of Jan 24th, 2024):**

- V0: **Basic Project Setup** - Establish the foundational structure.
- V1: **User Login** - Implement user login functionality.
- V2: **Station Alert Subscription** - Enable station-specific alert subscriptions.
- V3: **View Station Alerts** - Users can view alerts from subscribed stations on their dashboard.
- V4: **Unsubscribe from Station Alerts** - Option to unsubscribe from station alerts via the dashboard.
- V5: **Station Alerts via Twilio** - Receive station alerts on mobile through Twilio integration.
- V6: **Line Alert Subscription** - Facilitate subscriptions to specific MTA lines.
- V7: **Unsubscribe from Line Alerts** - Feature to cancel line-specific alert subscriptions.
- V8: **Line Alerts via Twilio** - Get line alerts on mobile through Twilio.
- V9: **Time-Specific Alerts** - Receive alerts within a preferred time window.
- V10: **Historical Alert Data** - Access to historical alert data.

## Tech Overview

### Backend 

- **Framework**: Django, Django REST Framework.
- **Packages**: PIP.
- **Authentication**: Django Admin, Django REST Framework Auth Tokens, CORS.
- **Database**: PostgreSQL, Django ORM.
- **Testing**: Pytest, Locust (Potential for performance testing).
- **Environment**: Virtual Env, DotEnv.
- **Typing**: Python Typing.

### Frontend

- **Framework**: React with TypeScript.
- **CSS Framework**: Tailwind.
- **Packages**: NPM.
- **HTTP Client**: ky.
- **Testing**: Jest.

### Infrastructure 

- **Platforms**: AWS.
- **Services**: EC2, S3.

### CI/CD

- **Tools**: GitHub or AWS CodeDeploy.

