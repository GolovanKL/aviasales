import { flightDuration } from './timeUtils';

describe('timeUtils', () =>{
  test('flightDuration transforms time into hh mm format', () => {
    expect(flightDuration(60)).toBe('1ч 0м');
    expect(flightDuration(160)).toBe('2ч 40м');
    expect(flightDuration(245)).toBe('4ч 5м');
  })
})

