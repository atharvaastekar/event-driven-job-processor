# Event-Driven Job Processing System

A scalable backend system to process asynchronous jobs using Node.js, BullMQ, and Redis.

## Features
- Asynchronous job processing
- Retry mechanism for failed jobs
- Background worker architecture
- REST APIs for job submission and tracking

## Tech Stack
- Node.js
- Express
- BullMQ
- Redis

## How to Run
1. Start Redis:
   docker run -d -p 6379:6379 redis

2. Start server:
   node server/index.js

3. Start worker:
   node server/worker.js
