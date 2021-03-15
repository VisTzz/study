class Task{
    constructor(taskName, number){
        this.taskName = taskName
        this.number = number
    }

    toHTML(){
        return `
        <tr>
            <td>${this.number}</td>
            <td>${this.taskName}</td>
        </tr>
    `
    }
}

export class Table{
    constructor(table){
        this.table = table
        this.list = [];
        this.rowCount = this.list.length;
    }  

    addRow(name){
        let task = new Task(name, this.rowCount)
        this.list.push(task)
    }
}