# Project Overview 
An application that allows users to subscribe to specific MTA stations or MTA lines and receive service alerts. 

Frontend is built in React and Backend is Django with Django REST Framework. 

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
- Code Deploy 
  
## CI/CD