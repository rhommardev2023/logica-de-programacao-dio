
//criacao dda clase 
class Heroi {
    constructor(nome, idade, tipo ){
    this.nome =nome;
    this.idade =idade;
    this.tipo =tipo;
    }

    atacar() {
      let ataque;
      switch (this.tipo) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;

          case 'ninja':
            ataque = 'shuriken';
            break;
        default:
          ataque = 'Ataque desconhecido';
      }
    }

}