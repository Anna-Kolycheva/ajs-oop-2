import Character from './character';

export default class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 25;
    this.defence = 25;
  }
}
