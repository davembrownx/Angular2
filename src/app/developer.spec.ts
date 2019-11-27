import { Developer } from './developer';

describe('Developer', () => {
  it('should create an instance', () => {
    expect(new Developer(0,"D","B","C",1998)).toBeTruthy();
  });
});
