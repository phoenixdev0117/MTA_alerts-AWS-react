# Project Overview 
An application that allows users to subscribe to specific MTA stations or MTA lines and receive service alerts. 

Frontend is built in React and Backend is Django with Django REST Framework. The application uses Auth Tokens for authorization. 

## Milestones

### [View Kuban for User Stories](https://github.com/users/MackHalliday/projects/3)


*Tentative Milestones as of Jan 24th, 2024*

V0. **Basic Project Setup:** Establish the foundational structure for the project.

V1. **User Login:** Enable users to log into the system.

V2. **Subscription to Station Alerts:** Allow users to subscribe to alerts from specific stations.

V3. **View Subscribed Station Alerts:** Users can view their subscribed alerts on their dashboard.

V4. **Unsubscribe from  Station Alerts:** Users can unsubscribe from alerts directly from their dashboard.

V5. **Receive Station Alerts via Twilio:** Users can receive alerts on their phone through Twilio integration.

V6. **Subscription to Specific Line Alerts:** Users can opt to receive alerts from specific lines.

V7. **Unsubscribe from Line Alerts:** Users can cancel their subscriptions to specific line alerts.

V8. **Receive Line Alerts via Twilio:** Users can get line alerts on their phone through Twilio.

V9. **Time-Specific Alerts:** Users will receive alerts only within their preferred time window.

V10. **Historical Data of Alerts:** Users may have the option to view the historical data of alerts. 





# Tech Overview
## Backend 

### Framework 
- Django
- Django REST Framework 

### Packages 
- PIP

### Auth
- Django Admin
- Django REST Framework Auth Tokens
- CORS

### Database
- Postgres
- Django ORM 

### Testing
- Pytest
- Locust (?) for performance testing

### Environment 
- Virtual Env
- DotEnv

### Typing
- Python Typing

## Frontend

### Framework 
- React with TypeScript

### CSS Framework 
- Tailwind

### Packages 
- NPM

### Javascript HTTP Client 
- ky

### Testing 
- Jest

## Infrastructure 
- AWS 
- EC2
- S3
  
## CI/CD
- Github or CodeDeploy
