
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
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }

}


//OBJETOS DA CLASSE
const heroi1 = new Heroi('Gandalf', 300, 'mago');
heroi1.atacar();
const heroi2 = new Heroi('Aragorn', 87, 'guerreiro');
heroi2.atacar();
const heroi3 = new Heroi('Liu Kang', 25, 'monge');
heroi3.atacar();
const heroi4 = new Heroi('Naruto', 17, 'ninja');
heroi4.atacar();