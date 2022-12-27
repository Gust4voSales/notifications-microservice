<h1 align="center">
Notifications Microservice
</h1>

<p align="center">NestJS microservice for notifications developed during Ignite Lab 04 from @Rocketseat</p>

## 📜 About
This project was developed during IgniteLab 4 day course, even though the APP is very simple, the course focused a lot on building a microservice with attention to scalability by following high standard principles such as test-driven-development, clean and scalable code design.

The app allows users to:
 - Send notifications (it creates a notification instance in the DB, there's no actual notification system);
 - Read notification;
 - Unread notification;
 - Cancel a notification;
 - Get notifications from a recipient;
 - Count notifications from a recipient;
 - **Send notification when received Kafka messaging event**

If you want to test the API REST routes you can use Insomnia. Import the workspace with one click! 

<a href="https://insomnia.rest/run/?label=NotificationsMicroservice&uri=https://github.com/Gust4voSales/notifications-microservice/blob/master/notifications-consumer/Insomnia.json" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia" width="22%"></a>

## ⚙ Features
[//]: # (Add the features of your project here:)
- **Node Js** — An asynchronous event-driven JavaScript runtime
- **NestJS** — A progressive Node.js framework for building efficient, reliable and scalable server-side applications
- **Prisma** — An open source next-generation ORM
- **Kafka** — A distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications
- **Jest** — Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

## 🛠 Getting started
1. Clone this repo running on your terminal ````git clone https://github.com/Gust4voSales/notifications-microservice.git```` 
2. Create a Kafka instance (Upstash free tier recommended) and add a "notifications.send-notification" topic (https://docs.upstash.com/kafka)

### &nbsp; &nbsp;Run NotificationsConsumer (main application)
3. `cd` into `notifications-consumer`
4. Run ```yarn``` to install all dependencies
5. Run migrations with `npx prisma migrate dev`
6. Create a .env file based on the .example.env and fill it in with Kafka connections' keys
7. Lastly, `yarn start:dev` to start the server

### &nbsp; &nbsp;Optionally run the producer script* 
3. `cd` into `notifications-producer`
4. Run ```yarn``` to install all dependencies
5. Create a .env file based on the .example.env and fill it in with Kafka connections' keys
6. `node producer.js` to run the script

*A script that generates a Kafka messaging event ("notifications.send-notification") to test the `notifications-consumer` app
