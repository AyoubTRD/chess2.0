import { getIndexFromSquare, getSquareFromIndex } from '../src';

test('Test square to index conversion', () => {
  expect(getIndexFromSquare('a1')).toBe(0);
  expect(getIndexFromSquare('b1')).toBe(1);
  expect(getIndexFromSquare('c1')).toBe(2);
  expect(getIndexFromSquare('d1')).toBe(3);
  expect(getIndexFromSquare('e1')).toBe(4);
  expect(getIndexFromSquare('f1')).toBe(5);
  expect(getIndexFromSquare('g1')).toBe(6);
  expect(getIndexFromSquare('h1')).toBe(7);

  expect(getIndexFromSquare('b3')).toBe(17);
  expect(getIndexFromSquare('c4')).toBe(26);
  expect(getIndexFromSquare('h8')).toBe(63);

  expect(getIndexFromSquare('b1')).toBe(1);
  expect(getIndexFromSquare('b2')).toBe(9);
  expect(getIndexFromSquare('b3')).toBe(17);
  expect(getIndexFromSquare('b4')).toBe(25);
  expect(getIndexFromSquare('b5')).toBe(33);
  expect(getIndexFromSquare('b6')).toBe(41);
  expect(getIndexFromSquare('b7')).toBe(49);
});

test('Test index to square conversion', () => {
  expect(getSquareFromIndex(0)).toBe('a1');
  expect(getSquareFromIndex(1)).toBe('b1');
  expect(getSquareFromIndex(2)).toBe('c1');
  expect(getSquareFromIndex(3)).toBe('d1');
  expect(getSquareFromIndex(4)).toBe('e1');
  expect(getSquareFromIndex(5)).toBe('f1');
  expect(getSquareFromIndex(6)).toBe('g1');
  expect(getSquareFromIndex(7)).toBe('h1');

  expect(getSquareFromIndex(17)).toBe('b3');
  expect(getSquareFromIndex(26)).toBe('c4');
  expect(getSquareFromIndex(63)).toBe('h8');

  expect(getSquareFromIndex(1)).toBe('b1');
  expect(getSquareFromIndex(9)).toBe('b2');
  expect(getSquareFromIndex(17)).toBe('b3');
  expect(getSquareFromIndex(25)).toBe('b4');
  expect(getSquareFromIndex(33)).toBe('b5');
  expect(getSquareFromIndex(41)).toBe('b6');
  expect(getSquareFromIndex(49)).toBe('b7');
});
