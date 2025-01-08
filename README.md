# MTA Alerts with React + Django on AWS

## steps

- **Basic Project Setup:** Establish the foundational structure for the project.
- **User Login:** Enable users to log into the system.
- **Subscription to Station Alerts:** Allow users to subscribe to alerts from specific stations.
- **View Subscribed Station Alerts:** Users can view their subscribed alerts on their dashboard.
- **Unsubscribe from  Station Alerts:** Users can unsubscribe from alerts directly from their dashboard.
- **Receive Station Alerts via Twilio:** Users can receive alerts on their phone through Twilio integration.
- **Subscription to Specific Line Alerts:** Users can opt to receive alerts from specific lines.
- **Unsubscribe from Line Alerts:** Users can cancel their subscriptions to specific line alerts.
- **Receive Line Alerts via Twilio:** Users can get line alerts on their phone through Twilio.
- **Time-Specific Alerts:** Users will receive alerts only within their preferred time window.
- **Historical Data of Alerts:** Users may have the option to view the historical data of alerts. 

## Project Overview 
This application enables users to subscribe to MTA stations or lines to receive timely service alerts.


## Project Structure

- **Frontend**: Developed using React with TypeScript
- **Backend**: Utilizes Django and Django REST Framework with Python Typing
- **Hosting**: AWS
- **Authorization**: Managed through Auth Tokens
- **Third-Party API**: MTA API

### Frontend

- **Framework**: React with TypeScript
- **CSS Framework**: Tailwind
- **Package Management**: NPM
- **HTTP Client**: ky
- **Formatting and Linting** ESLint, Prettier
- Run `npx eslint .` and `npm run prettier`
- **Testing**: Jest
- **Misc**: Flexbox, AwesomeFont

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


## Infrastructure 

- **Platforms**: AWS
- **Services**: EC2, S3, IAM, EBS

## CI/CD
 **Tools**: GitHub or AWS CodeDeploy
