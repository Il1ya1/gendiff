/* eslint-disable no-undef */
import path from 'path';
import fs from 'fs';
import genDiff from '../src/index';

test('flat yaml comparisons', () => {
  const beforeFile = path.join(`${__dirname}`, '../', '__fixtures__/before.yml');
  const afterFIle = path.join(`${__dirname}`, '../', '__fixtures__/after.yml');
  const expected = fs.readFileSync(path.join(`${__dirname}`, '../', '__fixtures__/diffFlat'), 'utf-8');

  expect(genDiff(beforeFile, afterFIle)).toEqual(expected);
});

test('flat json comparisons', () => {
  const beforeFile = path.join(`${__dirname}`, '../', '__fixtures__/before.json');
  const afterFIle = path.join(`${__dirname}`, '../', '__fixtures__/after.json');
  const expected = fs.readFileSync(path.join(`${__dirname}`, '../', '__fixtures__/diffFlat'), 'utf-8');

  expect(genDiff(beforeFile, afterFIle)).toEqual(expected);
});
