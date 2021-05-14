// build your `Project` model here
const db = require("../../data/dbConfig");

function getResources() {
  return db("resources");
}

function getTasks() {
  return db("tasks");
}
function getProjects() {
  return db("projects");
}

async function createResource(resource) {
  const [resource_id] = await db("resources").insert(resource);
  return getResources().where({ resource_id }).first();
}
async function createTask(task) {
  const [task_id] = await db("tasks").insert(task);
  return getTasks().where({ task_id }).first();
}
async function createProject(project) {
  const [project_id] = await db("projects").insert(project);
  return getProjects().where({ project_id }).first();
}

module.exports = {
  getProjects,
  getResources,
  getTasks,
  createResource,
  createTask,
  createProject,
};
