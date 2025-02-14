import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  currentStep = 1;
  transportation = {
    mileage: 0,
    vehicleType: 'gasoline',
  };
  energy = {
    electricity: 0,
    gas: 0,
  };

  nextStep() {
    if (this.currentStep < 3) {
      this.currentStep++;
    }
  }

  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  calculateTotal() {
    const transportationEmissions = this.transportation.mileage * 0.404;
    const energyEmissions =
      this.energy.electricity * 0.0005 + this.energy.gas * 0.005;
    return (transportationEmissions + energyEmissions).toFixed(2);
  }

  offsetEmissions() {
    console.log('Offsetting emissions...');
  }
}
