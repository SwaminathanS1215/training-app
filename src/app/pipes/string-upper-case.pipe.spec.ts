import { StringUpperCasePipe } from './string-upper-case.pipe';

describe('StringUpperCasePipe', () => {
  it('create an instance', () => {
    const pipe = new StringUpperCasePipe();
    expect(pipe).toBeTruthy();
  });
});
