const { Worker } = require("bullmq");
const Redis = require("ioredis");

const connection = new Redis({
  maxRetriesPerRequest: null
});


const worker = new Worker(
  "jobQueue",
  async job => {
    console.log(`Processing job ${job.id}`);

    // Simulate processing
    await new Promise(res => setTimeout(res, 2000));

    if (Math.random() < 0.2) {
      throw new Error("Random failure");
    }

    return { success: true };
  },
  { connection }
);

worker.on("completed", job => {
  console.log(`Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.log(`Job ${job.id} failed: ${err.message}`);
});
