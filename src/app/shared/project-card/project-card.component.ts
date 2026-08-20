import { Component, Input } from '@angular/core';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  template: `
    <div class="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 border border-stone-300 hover:border-stone-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full overflow-hidden">
      <div>
        <!-- Imagem / Mockup do Projeto -->
        @if (project.imageUrl) {
          <div class="w-full h-44 sm:h-48 mb-5 overflow-hidden rounded-xl bg-stone-200 border border-stone-300/60 relative">
            <img
              [src]="project.imageUrl"
              [alt]="project.title"
              class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        }

        <!-- Título e Link -->
        <div class="flex items-start justify-between gap-3 mb-2.5">
          <h3 class="text-lg sm:text-xl font-bold text-stone-800 group-hover:text-stone-950 transition-colors">
            {{ project.title }}
          </h3>
          @if (project.github || project.link) {
            <a
              [href]="project.github || project.link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir repositório"
              class="p-1.5 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-all shrink-0">
              <svg class="w-4 h-4 -rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          }
        </div>

        <p class="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
          {{ project.description }}
        </p>
      </div>

      <!-- Tags / Tecnologias -->
      @if (project.tags && project.tags.length > 0) {
        <div class="flex flex-wrap gap-1.5 pt-3 border-t border-stone-200/70">
          @for (tag of project.tags; track tag) {
            <span class="px-2.5 py-1 bg-stone-200/70 text-stone-600 text-[11px] sm:text-xs rounded-md font-medium tracking-tight">
              {{ tag }}
            </span>
          }
        </div>
      }
    </div>
  `,
})
export class ProjectCardComponent {
  @Input({ required: true }) project!: Project;
}
