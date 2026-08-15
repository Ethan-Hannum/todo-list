import "./styles.css";
import { Project } from "./project.js";
import { Todo } from "./todos.js";

const defaultProject = new Project("default");
const testTodo = new Todo("test time", "1", "dueDate", "big description");
defaultProject.addTodo(testTodo);

const manageProjects = (() => {
    const currentProjects = [defaultProject];
})();

const todoCreation = (() => {

    function createTodo() {
        const todoTitle = "test title";
        const todoDescription = "test desc";
        const todoDuedate = "test due date";
        const todoPriority = "test priority";
    
        const newTodo = new Todo(todoTitle, todoPriority, todoDuedate, todoDescription);
    
        addToProject(newTodo, defaultProject);
    }

    const addToProject = (todo, project) => {
        project.addTodo(todo);
        console.log(defaultProject);
    }

    return { createTodo }
})();



todoCreation.createTodo();
