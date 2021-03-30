// import Character from '../character';
import Bowman from '../bowman';

test('level up helth=100', () => {
  const hero = new Bowman('Character');
  hero.levelUp();
  expect(hero).toEqual({
    name: 'Character',
    type: 'Bowman',
    health: 100,
    attack: 30,
    defence: 30,
    level: 2,
  });
});

test('level up helth=0', () => {
  const hero = new Bowman('Character');
  hero.health = 0;
  expect(() => {
    hero.levelUp();
  }).toThrowError('герой умер');
});

test('damage, helth=100, points=20', () => {
  const hero = new Bowman('Character');
  hero.damage(20);
  expect(hero).toEqual({
    name: 'Character',
    type: 'Bowman',
    health: 85,
    attack: 25,
    defence: 25,
    level: 1,
  });
});

test('damage, helth=10, points=20', () => {
  const hero = new Bowman('Character');
  hero.health = 10;
  hero.damage(20);
  expect(hero).toEqual({
    name: 'Character',
    type: 'Bowman',
    health: 0,
    attack: 25,
    defence: 25,
    level: 1,
  });
});
