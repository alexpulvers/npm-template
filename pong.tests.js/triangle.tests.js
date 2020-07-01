import { pingpong } from './../src/ping-pong.js';

describe('pingPong', () => {

  test('should return array of numbers replacing them with ping, pong, or ping-pong', () => {
    let output = []
    expect(pingpong.).toEqual(ping);
    expect(pingpong.).toEqual(pong);
    expect(pingpong.).toEqual(ping-pong);
  });
});