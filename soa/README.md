## SOA architecture

In this architecture we have the 6 services (5 for backend and 1 for frontend) below :
* service-bus : the service for the ESB
* run-service : the service used for creating a question, creating an answer and displaying questions and answers
* authentication-service : the microservice used for authentication
* statistics-service : the service for computing statistics
* data-layer : the service that consists of the database
* front_end : the service used for the front end

The communication between ervices is done by using the service bus.
