export function getBuffer() {
  const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

export class ArrayBufferConverter {
  constructor() {
    this.buffer = 0;
  }

  load(value) {
    this.buffer = value;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    let result = '';
    for (let i = 0; i < bufferView.length; i++) {
      result += String.fromCharCode(bufferView[i]);
    }
    return result;
  }
}