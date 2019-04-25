import { Component } from '@angular/core';

export type EditorType = 'user'|'groups'|'message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';

  editor: EditorType = 'user';
  

  get showUser() {
    return this.editor === 'user';
  }

  get showGroups() {
    return this.editor === 'groups';
  }

  get showMessage() {
    return this.editor === 'message';
  }

  toggleEditor(type: EditorType) {
    this.editor = type;
  }
}
