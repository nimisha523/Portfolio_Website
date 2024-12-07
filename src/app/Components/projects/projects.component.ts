import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    { name: 'Attendence System', description: 'The Attendance Management System for Logipool Institute is a robust, real-time application developed to streamline attendance tracking for students and staff.Users can mark their attendance manually or automatically through biometric, RFID, or QR code scanning.Tech stack :- .Net Core, Angular Material, MySQL Database', image: 'assets/work-1.png', link: 'https://github.com/nimisha523' },
    { name: 'Student Portal System', description: 'The Student Portal Website is a comprehensive web-based application designed for educational institutions to manage and facilitate various student-related activities. Built using .NET Core MVC, the portal provides an interactive platform for students, faculty,and administrators to access and manage academic and administrative information.Tech stack :- .Net Core MVC ', image: 'assets/work-2.png', link: 'https://github.com/nimisha523' },
    { name: 'Milk Procurement Application', description: 'The Milk Procurement Application is a comprehensive web-based system designed to streamline and optimize the process of procuring milk from multiple vendors. The application simplifies vendor management, order tracking, quality assurance, and financial transactions, ensuring smooth operations for dairy businesses.', image: 'assets/work-3.png', link: 'https://github.com/nimisha523' }
  ];
  
}
