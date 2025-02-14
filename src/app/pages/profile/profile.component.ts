import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  impactData = {
    labels: ['Forest Conservation', 'Renewable Energy', 'Methane Capture'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: ['#31bd65', '#eb4b6d', '#f59e0b'],
      },
    ],
  };

  chartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  transactions = [
    {
      date: '2024-02-15',
      project: 'Amazon Rainforest Conservation',
      credits: 100,
      amount: 2500,
      status: 'completed',
    },
    {
      date: '2024-02-10',
      project: 'Wind Farm Project',
      credits: 75,
      amount: 1875,
      status: 'completed',
    },
    {
      date: '2024-02-05',
      project: 'Solar Energy Initiative',
      credits: 50,
      amount: 1250,
      status: 'pending',
    },
  ];
}
