export { Project };

class Project {
    constructor(title) {
        this.title = title;
        this.todoList = [];
    }

    addTodo(item) {
        this.todoList.push(item);
    }
}