import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProjectCardComponent } from '../../shared/project-card/project-card.component';
import { ProjectsService } from '../../core/services/projects.service';
import { Project } from '../../core/models/project.model';

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

  toggleProjects(): void {
    this.showAll.update((prev) => !prev);
  }
}
