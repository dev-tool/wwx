import 'should';
import wwx from '../lib';

describe('wwx', function () {
  it('version should be 0.0.1 !', function () {
    wwx.$version.should.eql('0.0.1');
  });
});
