## Microservices architecture

In this architecture we have the 7 services (6 for backend and 1 for frontend) below :
* choreo-micro : the microservice for the choreographer
* micro-answer : the microservice for creating an answer
* micro-question : the microservice for creating a question
* micro-auth : the microservice used for authentication
* display-microservice : the microservice for displaying questions and answers
* statistics-microservice : the microservice for computing statistics
* front_end : the service used for the front end

Each of the first 6 has its specific database that contains every informaation needed and the communication between microservices is done by using the choreographer.
