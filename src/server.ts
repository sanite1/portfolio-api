import app from "./app";
import { env } from "./config/env";
import { verifyMailer } from "./config/mailer";

const startServer = async () => {
  await verifyMailer();

  app.listen(env.port, () => {
    console.log(`✓ Server running on http://localhost:${env.port}`);
    console.log(`  Environment: ${env.nodeEnv}`);
    console.log(`  Health check: http://localhost:${env.port}/api/v1/health`);
  });
};

startServer();
