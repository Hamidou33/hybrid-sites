import { Component, EventEmitter, OnChanges, OnDestroy, Output, SimpleChanges } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-projet-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projet-selector.component.html',
  styleUrl: './projet-selector.component.css'
})
export class ProjetSelectorComponent {
  @Output() projetSelectionne = new EventEmitter<number>();

  projets = [
    { id: 1, nom: 'Application mobile myCv' },
    { id: 2, nom: 'Site de réservation' },
    { id: 3, nom: 'Site e-commerce' }
  ];

  selectProjet(event: any) {
    const selectedProjetId = parseInt(event.target.value, 10);
    this.projetSelectionne.emit(selectedProjetId);
  }
}
