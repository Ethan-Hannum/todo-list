import "./styles.css";
import { Project, Todo, manageProjects, todoCreation } from "./project.js";

const tabContainer = document.querySelector("#tab-container");
const mainContainer = document.querySelector("#main-container");

const domLogic = (() => {
    const swapProject = (key) => {
        deleteAllTodos();
        addTodos(key);
    }

    const addProjectToTab = () => {
        const projectArr = manageProjects.checkProjects();
        projectArr.forEach((item) => {
            const index = projectArr.indexOf(item);
            const tab = document.createElement("div");
            tab.classList.add("tab");
            tab.addEventListener("click", () => swapProject(index));
            tabContainer.appendChild(tab);

            const tabTitle = document.createElement("p");
            tabTitle.textContent = item.title;
            tab.appendChild(tabTitle);
        }) 
    }

    const addTodos = (key) => {
        const projectArr = manageProjects.checkProjects();
        console.log(projectArr);
        const projectTodoList = projectArr[key].todoList;
        console.log(projectTodoList);
        projectTodoList.forEach((todoItem) => {
            const todoContainer = document.createElement("div");
            const todoHeader = document.createElement("div");
            const todoCheckmark = document.createElement("input");
            const todoTitle = document.createElement("p");
            const todoDesc = document.createElement("p");
            todoContainer.classList.add("todo-container");
            todoHeader.classList.add("todo-header");
            todoCheckmark.setAttribute("type", "checkbox");
            todoTitle.classList.add("todo-title");
            todoTitle.textContent = todoItem.title;
            todoDesc.textContent = todoItem.description;
            
            mainContainer.appendChild(todoContainer);
            todoContainer.appendChild(todoHeader);
            todoHeader.appendChild(todoCheckmark);
            todoHeader.appendChild(todoTitle);
            todoContainer.appendChild(todoDesc);
        });
     
    }

    const deleteAllTodos = () => {
        const todos = document.querySelectorAll(".todo-container");
        todos.forEach((item) => {
            item.remove();
        })
    }
    return {addProjectToTab, addTodos, deleteAllTodos};
})();

domLogic.addProjectToTab();
domLogic.addTodos(0);