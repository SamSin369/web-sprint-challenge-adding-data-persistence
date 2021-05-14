// build your `/api/projects` router here
const express = require("express");
const helpers = require("./model");
const router = express.Router();

router.get("/resources", (req, res, next) => {
  helpers
    .getResources()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});
router.post("/resources", (req, res, next) => {
  helpers
    .createResource(req.body)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.get("/projects", (req, res, next) => {
  helpers
    .getProjects()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/projects", (req, res, next) => {
  helpers
    .createProject(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});
router.get("/tasks", (req, res, next) => {
  helpers
    .getTasks()
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.post("/tasks", (req, res, next) => {
  if (req.body) {
    helpers
      .createTask(req.body)
      .then((resource) => {
        res.status(201).json(resource);
      })
      .catch(next);
  } else {
    res.status(400).json({
      message: "invalid syntax",
    });
  }
});
module.exports = router;
