/**
 * Provides utility functions for all JavaScript modules.
 */


/**
 * Checks whether the current window is below 757px - this
 * breakpoint is known as medium small.
 * 
 * @returns {boolean} whether the current viewport is medium small
 * (ie 756px) or below.
 */
function isMediumSmallViewportAndBelow() {
  return window.innerWidth < MEDIUM_SMALL_AND_BELOW_VIEWPORT_WIDTH_PX;
}
