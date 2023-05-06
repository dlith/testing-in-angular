import { ReversePipe } from "./reverse.pipe";

describe('UserComponent', () => {
  it('should transform the text', () => {
    let reversePipe = new ReversePipe();
    expect(reversePipe.transform('Hello')).toEqual('olleH');
  });
});
