import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule], // Adicione NgChartsModule para usar gráficos
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  // Dados do gráfico
  chartData: ChartConfiguration['data'] = {
    labels: ['2020', '2021', '2022', '2023'], 
    datasets: [
      {
        label: 'Carbon Footprint (tCO₂e)',
        data: [2.5, 3.0, 2.8, 2.2], // Dados fictícios para o gráfico
        borderColor: '#14b866', // Cor da linha do gráfico
        backgroundColor: 'rgba(20, 184, 102, 0.2)', // Cor de fundo do gráfico
        borderWidth: 2,
        tension: 0.4, // Suaviza a curva do gráfico
      },
    ],
  };

  // Opções do gráfico
  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false, // Permite que o gráfico se ajuste ao container
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#dce5e0', // Cor das linhas de grade
        },
        ticks: {
          color: '#638875', // Cor dos rótulos do eixo Y
        },
      },
      x: {
        grid: {
          color: '#dce5e0', // Cor das linhas de grade
        },
        ticks: {
          color: '#638875', // Cor dos rótulos do eixo X
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#111814', // Cor da legenda
        },
      },
    },
  };

  // Tipo de gráfico
  chartType: ChartType = 'line';

  // Dados fictícios para as métricas
  metrics = {
    carbonFootprint: '2.5t',
    carbonCredits: '4.1t',
    earnings: '$120',
  };

  // Progresso do perfil (25%)
  profileCompletion = 25;

  // Função para navegar para outras páginas
  navigateTo(route: string): void {
    console.log(`Navigating to ${route}`);
    // Aqui você pode adicionar a lógica de navegação usando o Router
  }

  // Função para calcular a pegada de carbono
  calculateFootprint(): void {
    console.log('Calculating carbon footprint...');
    // Adicione a lógica de cálculo aqui
  }

  // Função para vender créditos
  sellCredits(): void {
    console.log('Selling carbon credits...');
    // Adicione a lógica de venda aqui
  }
}
