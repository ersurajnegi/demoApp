import { mockData, Todo } from './../../mockData/data';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'demo-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  private tasksData = mockData;
  constructor() { }

  ngOnInit() { }
  taskEdited(event: any) {
    alert("Task no Edited :" + event.id);
  }

  taskDeleted(event: any) {
    alert("Task no Deleted :" + event.id);
  }
}
