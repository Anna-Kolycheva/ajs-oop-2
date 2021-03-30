import Bowman from '../bowman';

test('valid arguments', () => {
  const result = new Bowman('Character');
  expect(result).toEqual({
    name: 'Character',
    type: 'Bowman',
    health: 100,
    attack: 25,
    defence: 25,
    level: 1,
  });
});

test('invalid name', () => {
  expect(() => new Bowman('CharacterCh')).toThrowError('неверное имя');
});
