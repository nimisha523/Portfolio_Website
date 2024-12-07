import { Component } from '@angular/core';
//import { SkillDialogComponent } from '../skill-dialog/skill-dialog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SkillDialogComponent } from '../skill-dialog/skill-dialog.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  skills = [
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031', description: 'Dynamic SPA development.', projects: ['IndiasTour', 'E-Marketing Website'] },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e', description: 'Frontend scripting and interaction.', projects: ['Milk Procurement System'] },
    { name: '.NET', icon: 'fas fa-code', color: '#6f42c1', description: 'Enterprise application development.', projects: ['HRMS System', 'Address Book Project'] },
    { name: 'SQL & Databases', icon: 'fas fa-database', color: '#0078d4', description: 'Database management and design.', projects: ['Student Attendance System'] }
  ];

  constructor(public dialog:MatDialog){}

  openSkillDialog(skill: any): void {
    this.dialog.open(SkillDialogComponent, {
      data: skill,
      width: '500px'
    });
  }

}
