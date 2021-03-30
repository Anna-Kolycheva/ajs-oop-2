import Character from '../character';

test('valid arguments', () => {
  const result = new Character('Character', 'Swordsman');
  expect(result).toEqual({
    name: 'Character',
    type: 'Swordsman',
    health: 100,
    attack: null,
    defence: null,
    level: 1,
  });
});

test('short name', () => {
  expect(() => new Character('C', 'Daemon')).toThrowError('неверное имя');
});

test('long name', () => {
  expect(() => new Character('CharacterCh', 'Daemon')).toThrowError('неверное имя');
});

test('invalid type', () => {
  expect(() => new Character('Character', '123456')).toThrowError('неверный тип');
});
