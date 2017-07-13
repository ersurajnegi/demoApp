export class Todo {
    id: Number;
    description: string;
    status: string;
}


export const mockData: Todo[] = [
    { id: 1, description: "Task Created Today 1", status: "inprogress" },
    { id: 2, description: "Task Created Today 2", status: "new" },
    { id: 3, description: "Task Created Today 3", status: "done" },
    { id: 4, description: "Task Created Today 4", status: "new" },
    { id: 5, description: "Task Created Today 5", status: "inprogress" },
    { id: 6, description: "Task Created Today 6", status: "done" }
];