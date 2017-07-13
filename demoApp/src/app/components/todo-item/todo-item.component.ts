import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'demo-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() taskData: any = new Object;
  @Output() editTask: EventEmitter<any> = new EventEmitter();
  @Output() deleteTask: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  taskDelete(id : number){
    this.deleteTask.emit({
      id : id
    });
  }

  taskEdit(id : number){
    this.editTask.emit({
      id : id
    });
  }
}
