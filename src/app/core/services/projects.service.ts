import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  private projects: Project[] = [
    {
      id: 'fintech-bank',
      title: 'Fintech Bank Microservice',
      description: 'Microsserviços bancários escaláveis construídos com ecossistema Spring Boot, mensageria e persistência relacional.',
      tags: ['Java 17', 'Spring Boot', 'Microservices', 'Docker'],
      github: 'https://github.com/carlos-augusto-carneiro/fintech-bank-microservice',
      imageUrl: 'https://raw.githubusercontent.com/carlos-augusto-carneiro/fintech-bank-microservice/refs/heads/main/identity-service/assets/C4FintechBank-P%C3%A1gina-1.drawio.png',
    },
    {
      id: 'bankcore-legacy',
      title: 'BankCore Legacy Modernization',
      description: 'Modernização de arquitetura legada para microsserviços modernos, decoupling de regras de negócio e resiliência.',
      tags: ['Java 8', 'Spring Cloud', 'Legacy Migration', 'PostgreSQL'],
      github: 'https://github.com/carlos-augusto-carneiro/BankCore-Legacy-Modernization',
      imageUrl: 'https://imgs.search.brave.com/0cOcp0XE2hwlf3JdjHeRI3k6gr56tVLLBiIsvQB9KTE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zZW1w/cmV1cGRhdGUuY29t/LmJyL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzA3L2pha2Fy/dGEtZWUtamF2YS0x/MDI0eDU3Ny5qcGc',
    },
    {
      id: 'picpay-challenge',
      title: 'PicPay Desafio Backend',
      description: 'Implementação de transferência monetária, validação de autorizador externo e notificações resilientes.',
      tags: ['PHP', 'Laravel', 'Clean Architecture'],
      github: 'https://github.com/carlos-augusto-carneiro/picpay-desafio-backend',
      imageUrl: 'https://imgs.search.brave.com/xTMbVSshBlxVZxS2WnxeAXJrWr4TMcix_zwEQoK0NwU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9maWxl/cy50ZWNub2Jsb2cu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIyLzAzL3BpY3Bh/eS1jYXBhLTM0MHgx/OTEucG5n',
    },
    {
      id: 'mbt',
      title: 'Automated Candlestick Pattern Recognition (EUR/USD)',
      description: 'Automação para download de dados históricos, processamento e classificação de padrões técnicos (engolfo, martelo, médias móveis) no par EUR/USD para análise quantitativa e uso de LLM.',
      tags: ['Python', 'Data Processing', 'Technical Analysis', 'Automation', 'LLM'],
      github: 'https://github.com/carlos-augusto-carneiro/MBT',
      imageUrl: 'https://imgs.search.brave.com/NiCARC_aVMOoKKmsWJIq6rueevGIer7m0nwcQ5wsXPo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mb3hi/aXQuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzA0/L2dyYWZpY28tY2Fu/ZGxlcy5qcGc',
    },
    {
      id: 'recupera-item-backend',
      title: 'Recupera Item (Backend)',
      description: 'API REST para rastreamento, catalogação e recuperação de itens perdidos com autenticação e filtros avançados.',
      tags: ['Java', 'Spring Boot', 'REST API', 'PostgreSQL'],
      github: 'https://github.com/carlos-augusto-carneiro/Web-Back-End-Recupera-item',
      imageUrl: 'back_recuperaitem.png',
    },
    {
      id: 'recupera-item-frontend',
      title: 'Recupera Item (Frontend)',
      description: 'Interface web SPA integrada para gerenciamento visual, cadastro e busca de pertences perdidos.',
      tags: ['Frontend', 'JavaScript', 'SPA', 'Tailwind'],
      github: 'https://github.com/carlos-augusto-carneiro/Web-Front-Recupera-item',
      imageUrl: '/front_recuperaitem.png',
    },
    {
      id: 'microservice-perdidos',
      title: 'Microservice Perdidos',
      description: 'Microsserviço desacoplado para mensageria e processamento assíncrono do ecossistema de achados.',
      tags: ['Microservices', 'Docker', 'Spring Boot'],
      github: 'https://github.com/carlos-augusto-carneiro/Microservice-Perdidos',
      imageUrl: 'microservice_recuperaitem.png',
    },
    {
      id: 'jantar-filosofos',
      title: 'Jantar dos Filósofos',
      description: 'Solução clássica de concorrência com semáforos, threads e prevenção de deadlock e starvation.',
      tags: ['Concorrência', 'Threads', 'Sistemas Operacionais'],
      github: 'https://github.com/carlos-augusto-carneiro/JantarDosFilosofos',
      imageUrl: 'https://imgs.search.brave.com/zxrqLpuUIKOsU_sV9H4nneXUjte_5kEelKqmhODl-cs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93aWtp/LmluZi51ZnByLmJy/L21hemllcm8vbGli/L2V4ZS9mZXRjaC5w/aHA_bWVkaWE9c286/amFudGFyLWZpbG9z/b2Zvcy5qcGc',
    },
    {
      id: 'logica-satplan',
      title: 'Lógica SatPlan',
      description: 'Planejador de Inteligência Artificial usando lógica proposicional e algoritmos SAT solvers.',
      tags: ['Inteligência Artificial', 'SAT Solver', 'Lógica'],
      github: 'https://github.com/carlos-augusto-carneiro/LogicaSatPlan',
      imageUrl: 'https://imgs.search.brave.com/gdUbBYmBKb2wpaJ4DjRBz2DPGeHNADobKnZB0iS_3Yg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91c2Vy/LWltYWdlcy5naXRo/dWJ1c2VyY29udGVu/dC5jb20vODY5OTU3/ODIvMTk4ODk3ODE0/LWQ3ZmJiODY2LWQ2/NTItNDk3OS1iNGJj/LTNlYTFhYjdlYzhm/Mi5wbmc',
    },
  ];

  getAll(): Project[] {
    return this.projects;
  }
}
