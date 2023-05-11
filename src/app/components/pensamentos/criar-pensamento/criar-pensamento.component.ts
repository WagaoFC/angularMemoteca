import { Component } from '@angular/core';
import { Pensamento } from '../pensamento.model';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent {

  pensamento: Pensamento = {
    id: 0,
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'Modelo1'
  }

  criarPensamento() {
    alert('Novo pensamento criado')
  }

  cancelarPensamento() {
    alert('Pensamento cancelado')
  }
}
