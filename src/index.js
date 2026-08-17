import "./styles.css";
import { Project, Todo, manageProjects, todoCreation } from "./project.js";

const tabContainer = document.querySelector("#tab-container");
const mainContainer = document.querySelector("#main-container");

const domLogic = (() => {
    const addProjectToTab = () => {
        const projectArr = manageProjects.checkProjects();
        projectArr.forEach((item) => {
            const tab = document.createElement("div");
            tab.classList.add("tab");
            tabContainer.appendChild(tab);

            const tabTitle = document.createElement("p");
            tabTitle.textContent = item.title;
            tab.appendChild(tabTitle);
        }) 
    }

    const addTodos = () => {
        const projectArr = manageProjects.checkProjects();
        console.log(projectArr);
        const projectTodoList = projectArr[0].todoList;
        console.log(projectTodoList);
        projectTodoList.forEach((todoItem) => {
            const todoContainer = document.createElement("div");
            const todoTitle = document.createElement("p");
            todoContainer.classList.add("todo-container");
            todoTitle.classList.add("todo-title");
            todoTitle.textContent = todoItem.title;
            
            mainContainer.appendChild(todoContainer);
            todoContainer.appendChild(todoTitle);  
        })

     
    }
    return {addProjectToTab, addTodos};
})();

domLogic.addProjectToTab();
domLogic.addTodos();