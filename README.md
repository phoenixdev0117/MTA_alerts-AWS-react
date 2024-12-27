# Subscribe to MTA Alerts

🚧 MVP In Progress 🚧

## Project Overview 
This application enables users to subscribe to MTA stations or lines to receive timely service alerts.

- **Frontend**: Developed using React with TypeScript
- **Backend**: Utilizes Django and Django REST Framework with Python Typing
- **Hosting**: AWS
- **Authorization**: Managed through Auth Tokens
- **Third-Party API**: MTA API

## Milestones

For more detailed user stories, view the [Kanban board](https://github.acom/users/MackHalliday/projects/3).

**Current Milestones (As of Jan 24th, 2024):**

**MVP**
- 🛠️ V0: **Basic Project Setup** - Establish the foundational structure
- 🛠️ V1: **User Login** - Implement user login functionality
- V2: **Users Types** - Create basic and admin user
- V3: **User Sign Up** - Create basic sign up via email
- V4: **Station Alert Subscription** - Enable station-specific alert subscriptions
- V5: **View Station Alerts** - Users can view alerts from subscribed stations on their dashboard
- V6: **Unsubscribe from Station Alerts** - Option to unsubscribe from station alerts via the dashboard
- V7: **Station Alerts via Twilio** - Receive station alerts on mobile through Twilio integration

**Additional Alerts** 
- V8: **Admin User Controls** - Admin user controls overs users and alerts
- V9: **Line Alert Subscription** - Facilitate subscriptions to specific MTA lines
- V10: **Unsubscribe from Line Alerts** - Feature to cancel line-specific alert subscriptions
- V11: **Line Alerts via Twilio** - Get line alerts on mobile through Twilio

**Stretch Goals** 
- V12: **User Login with Google** - User can login with Google
- V13: **Time-Specific Alerts** - Receive alerts within a preferred time window
- V14: **Historical Alert Data** - Access to historical alert data

## Tech Overview

### Backend 

- **Framework**: Django, Django REST Framework
- **Package Management**: PIP
- **Authentication**: Django Admin, Django REST Framework Auth Tokens, CORS
- **Database**: PostgreSQL, Django ORM
- **Testing**: Pytest, Locust (Potential for performance testing)
- **Environment**: Virtual Env, DotEnv
- **Formatting and Linting**: PyLint, MyPy, Black
  - Run `pylint *.py`, `mypy .`, and `black .` in `backend/`
- **Typing**: Python Typing

### Frontend

- **Framework**: React with TypeScript
- **CSS Framework**: Tailwind
- **Package Management**: NPM
- **HTTP Client**: ky
- **Formatting and Linting** ESLint, Prettier
  - Run `npx eslint .` and `npm run prettier`
- **Testing**: Jest
- **Misc**: Flexbox, AwesomeFont

### Infrastructure 

- **Platforms**: AWS
- **Services**: EC2, S3, IAM, EBS

### CI/CD

- **Tools**: GitHub or AWS CodeDeploy
  
## Project Resources 
- [**Awesome Django**](https://github.com/shahraizali/awesome-django?tab=readme-ov-file#crm): For Django Packages
- [**Black, MyPy, and Pylint**](https://lynn-kwong.medium.com/use-black-mypy-and-pylint-to-make-your-python-code-more-professional-b594512f4362): Article on how to setup Black, MyPy, and Pylint for project
- [**Django-Docker-Quickstart**](https://github.com/godd0t/django-docker-quickstart): Github repo example of Django and Docker
- [**Vite**](https://vitejs.dev/guide/): Vite documentation