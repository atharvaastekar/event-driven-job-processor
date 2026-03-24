const { Queue } = require("bullmq");
const Redis = require("ioredis");

const connection = new Redis({
  maxRetriesPerRequest: null
});

const jobQueue = new Queue("jobQueue", { connection });

module.exports = { jobQueue };
