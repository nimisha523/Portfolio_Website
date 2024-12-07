import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-skill-dialog',
  standalone: true,
  imports: [CommonModule,MatDialogModule,MatButtonModule],
  templateUrl: './skill-dialog.component.html',
  styleUrl: './skill-dialog.component.css'
})
export class SkillDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any){}

}
