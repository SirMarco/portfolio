import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogTemplateComponent } from '../templates/dialog-template/dialog-template.component';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MatDialog) {}

  openDialog(title: string, message: string) {
    let dialogRef = this.dialog.open(DialogTemplateComponent, {
      width: '300px',
      data: { title: title, message: message },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('Der Dialog wurde geschlossen' + result);
    });
  }
}
