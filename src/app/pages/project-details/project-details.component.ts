import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

interface ProjectMetrics {
  jobsCreated: number;
  co2Sequestered: number;
  acresRestored: number;
}

interface Project {
  id: string;
  name: string;
  description: string;
  location: string;
  type: string;
  standards: string;
  coBenefits: string;
  vintage: string;
  totalVolume: string;
  heroImage: string;
  gallery: string[];
  video: string;
  impact: string;
  metrics: ProjectMetrics;
  locations: string[];
}

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class ProjectDetailsComponent implements OnInit {
  project: Project = {
    id: '193567890',
    name: 'Northern California Reforestation',
    description:
      'This project aims to restore and protect the biodiversity of the Northern California Coast Range. The project was located in the 6th River watershed, a region known for its high ecological value.',
    location: 'Northern California, USA',
    type: 'Reforestation',
    standards:
      'Verified Carbon Standard (VCS), Climate, Community and Biodiversity (CCB)',
    coBenefits: 'Habitat restoration, job creation, and community engagement',
    vintage: '2022',
    totalVolume: '100,000',
    heroImage: 'assets/images/project/proj01.jpg',
    gallery: [
      'assets/images/marketplace/faz07.jpg',
      'assets/images/marketplace/faz02.jpg',
      'assets/images/marketplace/faz12.jpg',
      'assets/images/marketplace/faz05.jpg',
      'assets/images/marketplace/faz09.jpg',
    ],
    video: '/assets/videos/project-video.mp4',
    impact:
      'This project will sequester over 1 million tons of CO₂e over its lifetime, and create hundreds of jobs in the local community. It will also provide critical habitat for endangered species.',
    metrics: {
      jobsCreated: 450,
      co2Sequestered: 1200000,
      acresRestored: 800,
    },
    locations: [
      'Traverse Creek Special Interest Area',
      'Meadow Brook',
      'Garden Valley',
      'Spanish Flat',
      'Kelsey',
      'Cronan Ranch Regional Trails Park',
      'Mother Lode River Center',
      'Coloma',
    ],
  };

  userAvatar = 'assets/images/avat.jpg';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      // Here you would typically fetch the project details using the ID
      const projectId = params['id'];
      // this.loadProjectDetails(projectId);
    });
  }

  private loadProjectDetails(id: string) {
    // Implement API call to fetch project details
  }
}
