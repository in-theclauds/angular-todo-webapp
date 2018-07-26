import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  todoArray = [] ;

 addTodo(value) {
     this.todoArray.push(value);
     console.log(this.todoArray);
   }

   deleteItem(todo) {
    for (let i = 0 ; i <= this.todoArray.length ; i++) {
     if (todo === this.todoArray[i]) {
      this.todoArray.splice(i, 1);
     }
    }
  }

  todoSubmit(value:any) {
    // tslint:disable-next-line:no-non-null-assertion
    if (value ! === '') {
   this.todoArray.push(value.todo);
    // this.todoForm.reset()
   } else {
     alert('Field required **');

 }
 }
}
