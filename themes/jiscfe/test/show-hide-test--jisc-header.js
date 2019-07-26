/**
 * Tests the Jisc header JavaScript that enables users to toggle the menu
 * in viewports smaller than 757 pixels.
 */


describe('Jisc header menu toggle', function () {

	beforeEach(function() {
    // Specify fixtures path as it is different to the default 'spec/fixtures'.
    fixture.setBase('dist/components')

    // Load the fixture to test.
    this.result = fixture.load('jisc-header.html');
  });

  afterEach(function() {
    // Clear the test HTML.
    fixture.cleanup();
  });

  it('should toggle the menu and set aria attributes as appropriate', function() {
    
    const JISC_HEADER_TRIGGER_CLASS = '.jsJiscHeaderMenuTrigger';
    
    // Check that the aria-controls attribute has been added by the JS.
    let triggerElement = document.querySelector(JISC_HEADER_TRIGGER_CLASS);
    let targetID = triggerElement.getAttribute('data-toggle');
    let targetElement = document.getElementById(targetID);

    expect(triggerElement.hasAttribute('aria-controls')).toBe(true);
    expect(triggerElement.hasAttribute('aria-expanded')).toBe(true);
    expect(triggerElement.hasAttribute('aria-haspopup')).toBe(true);
    expect(targetElement.hasAttribute('aria-hidden')).toBe(true);
    expect(targetElement.hasAttribute('aria-labelledby')).toBe(true);

    // Menu should open when the trigger is clicked.
    triggerElement.click();
    expect(triggerElement.classList.contains('is-active')).toBe(true);
    expect(triggerElement.getAttribute('aria-expanded')).toBe('true');
    expect(targetElement.getAttribute('aria-hidden')).toBe('false');
    expect(targetElement.classList.contains('is-open')).toBe(true);

    // Menu should close when the trigger is clicked again.
    triggerElement.click();
    expect(triggerElement.classList.contains('is-active')).toBe(false);
    expect(targetElement.classList.contains('is-closed')).toBe(true);
    expect(triggerElement.getAttribute('aria-expanded')).toBe('false');
    expect(targetElement.getAttribute('aria-hidden')).toBe('true');
  });
});