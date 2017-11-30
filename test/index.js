import test from 'ava';
import { transform } from 'babel-core';
import plugin from '../src';

function trim(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

test('transforming "__DEV__" in "process.env.NODE_ENV === \'development\'"', t => {
  const code = `
if (__DEV__) {
  console.log('only in dev!');
}
  `;
  const expected = `
if (process.env.NODE_ENV === 'development') {
  console.log('only in dev!');
}
  `;
  const actual = transform(code, { plugins: [plugin] }).code;
  t.is(trim(actual), trim(expected));
});

test('transforming "__PROD__" in "process.env.NODE_ENV === \'production\'"', t => {
  const code = `
if (__PROD__) {
  console.log('only in prod!');
}
  `;
  const expected = `
if (process.env.NODE_ENV === 'production') {
  console.log('only in prod!');
}
  `;
  const actual = transform(code, { plugins: [plugin] }).code;
  t.is(trim(actual), trim(expected));
});

test('transforming "!__DEV__" in "!(process.env.NODE_ENV === \'development\')"', t => {
  const code = `
if (!__DEV__) {
  console.log('not in dev!');
}
  `;
  const expected = `
if (!(process.env.NODE_ENV === 'development')) {
  console.log('not in dev!');
}
  `;
  const actual = transform(code, { plugins: [plugin] }).code;
  t.is(trim(actual), trim(expected));
});

test('transforming "__PROD__" in "!(process.env.NODE_ENV === \'production\')"', t => {
  const code = `
if (!__PROD__) {
  console.log('not in prod!');
}
  `;
  const expected = `
if (!(process.env.NODE_ENV === 'production')) {
  console.log('not in prod!');
}
  `;
  const actual = transform(code, { plugins: [plugin] }).code;
  t.is(trim(actual), trim(expected));
});
