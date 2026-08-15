import "./styles.css";
import { Project } from "./project.js";
import { Todo } from "./todos.js";

const testProject = new Project("test");
const testTodo = new Todo("test time", "1", "dueDate", "big description");
testProject.addTodo(testTodo);
console.log(testProject);