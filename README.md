# Subscribe to MTA Alerts



### Milestones

V1. **Basic Project Setup:** Establish the foundational structure for the project.
V2. **User Login:** Enable users to log into the system.
V3. **Subscription to Station Alerts:** Allow users to subscribe to alerts from specific stations.
V4. **View Subscribed Station Alerts:** Users can view their subscribed alerts on their dashboard.
V5. **Unsubscribe from  Station Alerts:** Users can unsubscribe from alerts directly from their dashboard.
V6. **Receive Station Alerts via Twilio:** Users can receive alerts on their phone through Twilio integration.
V7. **Subscription to Specific Line Alerts:** Users can opt to receive alerts from specific lines.
V8. **Unsubscribe from Line Alerts:** Users can cancel their subscriptions to specific line alerts.
V9. **Receive Line Alerts via Twilio:** Users can get line alerts on their phone through Twilio.
V10. **Time-Specific Alerts:** Users will receive alerts only within their preferred time window.
V11. **Historical Data of Alerts:** Users may have the option to view the historical data of alerts. 







## Project Overview 
This application enables users to subscribe to MTA stations or lines to receive timely service alerts.


### Packages 
- PIP

### Auth
- Django Admin
- Django REST Framework Auth Tokens
- CORS

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


### Framework 
- React with TypeScript

### CSS Framework 
- Tailwind

### Packages 
- NPM


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