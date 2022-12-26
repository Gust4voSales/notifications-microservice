import { Kafka } from "kafkajs";
import { randomUUID } from "node:crypto";
import dotenv from "dotenv";

dotenv.config();

async function bootstrap() {
  const kafka = new Kafka({
    clientId: "notifications-producer-test",
    brokers: [process.env.KAFKA_BROKERS],
    sasl: {
      mechanism: "scram-sha-256",
      username: process.env.KAFKA_USERNAME,
      password: process.env.KAFKA_PASSWORD,
    },
    ssl: true,
  });

  // create and connect producer
  const producer = kafka.producer();
  await producer.connect();

  // send message to "notifications.send-notificationt" topic
  await producer.send({
    topic: "notifications.send-notification",
    messages: [
      {
        value: JSON.stringify({
          content: "Nova solicitação de amizade",
          category: "social",
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  // disconnect
  await producer.disconnect();
}

bootstrap();
