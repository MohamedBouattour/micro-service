import { ApiService } from './../api.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  todos: any[] = [];

  constructor(private apiService: ApiService) { }
  ngOnInit(): void {
    this.apiService.getTodos()
      .subscribe((todos: any) => {
        this.todos = todos;
      });
  }
  title: string = '';
  description: string = '';
  completed: boolean = false;
  addTodo() {
    const todo = { "title": this.title, "description": this.description, "completed": this.completed };
    console.log(todo);
    this.apiService.addTodo(todo).subscribe(response => {


      console.log(response);
      this.title = '';
      this.description = '';
      this.completed = false;
    });
  }
}
