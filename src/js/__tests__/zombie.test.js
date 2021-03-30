import Zombie from '../zombie';

test('valid arguments', () => {
  const result = new Zombie('Character');
  expect(result).toEqual({
    name: 'Character',
    type: 'Zombie',
    health: 100,
    attack: 25,
    defence: 25,
    level: 1,
  });
});
