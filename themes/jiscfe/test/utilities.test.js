/**
 * Tests the utility functions.
 */


describe('utility functions', function () {
  it('should return the size of the viewport', function() {
    expect(isMediumSmallViewportAndBelow()).toBe(false);
  });
});
