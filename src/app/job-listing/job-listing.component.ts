import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';
import { IJobs } from '../interface';

@Component({
  selector: 'app-job-listing',
  standalone: true,
  imports: [MatIconModule, RouterLink, CommonModule],
  templateUrl: './job-listing.component.html',
  styleUrl: './job-listing.component.scss',
})
export class JobListingComponent implements OnInit {
  screenWidth: any;
  constructor(private dataService: DataService) {}
  jobs: IJobs[] = [];

  ngOnInit(): void {
    this.dataService.getJobsData().subscribe((resp: IJobs[]) => {
      this.jobs = resp;
    });
  }

  // jobs = [
  //   {
  //     id: 1,
  //     title: 'Walk In for Designer Job Role',
  //     startDate: '10-Jul-2021',
  //     endDate: '11-Jul-2021',
  //     location: 'Mumbai',
  //     job_roles: ['Instructional Designer'],
  //     isExpiring: true,
  //     isExpiringTitle: 'Expires in 5 days',
  //     isExtraTag: false,
  //     isExtraTagTitle: '',
  //   },
  //   {
  //     id: 2,
  //     title: 'Walk In for Multiple Job Roles',
  //     startDate: '03-Jul-2021',
  //     endDate: '04-Jul-2021',
  //     location: 'Mumbai',
  //     job_roles: [
  //       'Instructional Designer',
  //       'Software Engineer',
  //       'Software Quality Engineer',
  //     ],
  //     isExpiring: false,
  //     isExpiringTitle: '',
  //     isExtraTag: true,
  //     isExtraTagTitle: 'Internship Opportunity for MCA Students',
  //   },
  //   {
  //     id: 3,
  //     title: 'Walk In for Design and Development Job Role',
  //     startDate: '10-Jul-2021',
  //     endDate: '11-Jul-2021',
  //     location: 'Mumbai',
  //     job_roles: ['Instructional Designer', 'Software Engineer'],
  //     isExpiring: false,
  //     isExpiringTitle: '',
  //     isExtraTag: false,
  //     isExtraTagTitle: '',
  //   },
  // ];
}
