const express = require("express");
const { jobQueue } = require("./queue");

const app = express();
app.use(express.json());

// Add job
app.post("/job", async (req, res) => {
  const { type, data } = req.body;

  const job = await jobQueue.add(type, data, {
    attempts: 3
  });

  res.json({ jobId: job.id, status: "queued" });
});

// Get job status
app.get("/job/:id", async (req, res) => {
  const job = await jobQueue.getJob(req.params.id);

  if (!job) return res.status(404).send("Job not found");

  const state = await job.getState();
  res.json({ id: job.id, state });
});

app.listen(3000, () => console.log("Server running on port 3000"));
