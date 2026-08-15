export { Todo };

class Todo {
    constructor(title, priority, dueDate, description) {
        this.title = title;
        this.priority = priority;
        this.dueDate = dueDate;
        this.description = description;
    }
}