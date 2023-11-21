import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/service/job.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
})
export class JobsComponent implements OnInit {
  jobList: any[] = [];
  constructor(private jobService: JobService) {}
  ngOnInit(): void {
    this.loadJobs();
  }
  loadJobs() {
    this.jobService.getActiveJobs().subscribe((res: any) => {
      this.jobList = res.data;
      console.log(res.data);
    });
  }
}
