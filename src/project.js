export { Project, Todo, manageProjects, todoCreation };

class Project {
    constructor(title) {
        this.title = title;
        this.todoList = [];
    }

    addTodo(item) {
        this.todoList.push(item);
    }
}

class Todo {
    constructor(title, priority, dueDate, description) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
        this.tabStatus = 0;
    }
}

const manageProjects = (() => {
    const currentProjects = [];

    const checkProjects = () => currentProjects;

    const createProject = (projectTitle) => {
        const newProject = new Project(projectTitle);
        currentProjects.push(newProject);
    }

    return { checkProjects, createProject };
})();

manageProjects.createProject("default");

const todoCreation = (() => {
    const addToProject = (todo, project) => {
        project.addTodo(todo);
    }

    function createTodo() {
        const projectArr = manageProjects.checkProjects();

        const todoTitle = "test title";
        const todoDescription = "test desc";
        const todoDuedate = "test due date";
        const todoPriority = "test priority";
    
        const newTodo = new Todo(todoTitle, todoPriority, todoDuedate, todoDescription);
        addToProject(newTodo, projectArr[0]);
    }
    return { createTodo }
})();

todoCreation.createTodo();
