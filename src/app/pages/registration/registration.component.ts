import { Component } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  employerObj: any = {
    EmployerId: 0,
    CompanyName: '',
    EmailId: '',
    MobileNo: '',
    PhoneNo: '',
    CompanyAddress: '',
    City: '',
    State: '',
    PinCode: '',
    LogoURL: '',
    GstNo: '',
  };
  JobseekerObj: any = {
    JobSeekerId: 0,
    FullName: '',
    EmailId: '',
    MobileNo: '',
    ExperienceStatus: '',
    ResumeUrl: '',
    JobSeekerSkills: [],
  };
  isJobSeeker: boolean = true;
  constructor(private job: JobService) {}

  register() {
    this.job.registerEmployer(this.employerObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }
  registeAnJobSeeker() {
    this.job.registerJobSeeker(this.JobseekerObj).subscribe((res: any) => {
      if (res.result) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    });
  }
}
