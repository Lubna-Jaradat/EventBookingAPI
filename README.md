#  Event Booking API

RESTful API for managing event discovery and ticket reservations. Built with **Node.js**, **Express**, and **Prisma ORM**, this project focuses on secure authentication, relational data integrity, and optimized database performance.


##  Key Features

* **Secure Authentication:** User registration and login powered by **JWT** (JSON Web Tokens) with a **Refresh Token** strategy for secure, long-lived sessions.
* **Role-Based Access Control (RBAC):** Distinct permissions for `USER` (booking tickets) and `ADMIN` (managing events and categories).
* **Advanced Data Modeling:** A relational MySQL schema designed with **Prisma**, featuring:
    * One-to-Many relationships (Categories to Events).
    * Many-to-Many relationships (Users to Events via Tickets).
    * Optimized Database Indexing for high-speed lookups on `ticketCode` and `categoryId`


## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Language:** TypeScript 
* **ORM:** Prisma
* **Database:** MySQL
* **Validation:** Zod 
* **Documentation:** Swagger UI 


## Database Schema

The system architecture is built around four core entities:
1.  **User:** Handles authentication and role management.
2.  **Event:** Stores event details, capacity, and pricing.
3.  **Category:** Allows for global event organization.
4.  **Ticket:** A junction model managing the relationship between users and events, including ticket status tracking (`VALID`, `USED`, `CANCELLED`).
