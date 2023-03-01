const greet = (name: string) => 'Hello ' + name;

test('Greet', () => {
  expect(greet('Ayoub')).toBe('Hello Ayoub');
});
