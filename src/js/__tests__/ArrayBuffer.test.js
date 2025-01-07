import { getBuffer, ArrayBufferConverter } from '../ArrayBuffer.js';

test('', () => {
  const ArrayBuffer = new ArrayBufferConverter();
  ArrayBuffer.load(getBuffer());
  expect(ArrayBuffer.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});