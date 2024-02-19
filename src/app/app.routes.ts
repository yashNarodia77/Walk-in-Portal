import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
// import { ListingComponent } from './listing/listing.component';
// import { JobComponent } from './job/job.component';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobComponent } from './job-component/job-component.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: UserLoginComponent,
  },
  {
    path: 'registration',
    pathMatch: 'full',
    component: UserRegistrationComponent,
  },
  {
    path: 'jobs',
    pathMatch: 'full',
    component: JobListingComponent,
  },
  {
    path: 'job/:id',
    pathMatch: 'full',
    component: JobComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    component: UserLoginComponent,
  },
];
