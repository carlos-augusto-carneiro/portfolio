import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../core/models/project.model';

interface BinaryColumn {
  left: number;      // posição horizontal em %
  duration: number;  // duração do loop de queda em segundos
  delay: number;      // atraso negativo p/ dessincronizar as colunas
  chars: string;      // string de 0s e 1s, uma por linha
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ProjectCardComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  private projectsService = inject(ProjectsService);

  allProjects: Project[] = this.projectsService.getAll();
  showAll = signal<boolean>(false);

  // Colunas do efeito de "chuva binária" na hero section
  binaryColumns: BinaryColumn[] = this.generateBinaryColumns(28);

  toggleProjects(): void {
    this.showAll.update((prev) => !prev);
  }

  private generateBinaryColumns(count: number): BinaryColumn[] {
    const columns: BinaryColumn[] = [];
    const slice = 100 / count;

    for (let i = 0; i < count; i++) {
      // distribui as colunas uniformemente, com um leve jitter aleatório
      const jitter = (Math.random() - 0.5) * slice * 0.6;
      const left = i * slice + slice / 2 + jitter;

      const duration = 6 + Math.random() * 10; // 6s a 16s
      const delay = -Math.random() * duration;  // começa em ponto aleatório do ciclo

      const lineCount = 45 + Math.floor(Math.random() * 25); // 45 a 70 linhas
      let chars = '';
      for (let j = 0; j < lineCount; j++) {
        chars += Math.round(Math.random()).toString() + '\n';
      }

      columns.push({ left, duration, delay, chars });
    }

    return columns;
  }
}
