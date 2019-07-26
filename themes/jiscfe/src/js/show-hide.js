/**
 * Provides users with the ability to toggle the visibility of target
 * content (eg a menu) via a trigger (eg a button). The 
 * show/hide functionality is available for viewports up to 756px.
 * 
 * To use this feature, add the following code in the 
 * HTML body, after the all.min.body.js is loaded:
 * 
 * <script>
 *   const showHide = new ShowHide('.jsShowHideHook');
 *   showHide.init();
 * </script>
 * 
 * This creates a new instance of the show hide, and attaches it
 * to the HTML class (ie jsShowHideHook).
 */


'use strict';

/**
 * Enables users to toggle the visibility of
 * HTML content in viewports up to 756px.
 */
class ShowHide {

  /**
   * Creates a new instance of the ShowHide class.
   * @param {string} triggerEl the name of the class to attach the
   * show/hide to.
   */
  constructor(triggerEl) {

    if(!triggerEl) {
      return;
    }

    // Class hook to trigger the show/hide.
    this.triggerElement = document.querySelector(triggerEl);
  }


  /**
   * Triggers the show/hide up to a viewport size of 756px.
   */
  contentTriggerClick() {

    // Toggle the active class for the content trigger.
    this.triggerElement.classList.toggle(this.CONTENT_TRIGGER_ACTIVE_CLASS);

    // Check current aria-hidden state of the content.
    let isAriaHidden = this.toggleTargetElement
      .getAttribute('aria-hidden') === 'true';

    // Check current aria-expanded state of the content.
    let isAriaExpanded = this.triggerElement
      .getAttribute('aria-expanded') === 'true';

    // Toggle aria-hidden, aria-expanded attributes, and toggle between 
    // open and closed states for the content.
    this.toggleTargetElement.setAttribute('aria-hidden', !isAriaHidden);
    this.triggerElement.setAttribute('aria-expanded', !isAriaExpanded);

    if(this.toggleTargetElement.classList.contains(
      this.CONTENT_TARGET_CLOSED_CLASS
    )) {
      this.toggleTargetElement.classList.remove(this.CONTENT_TARGET_CLOSED_CLASS);
      this.toggleTargetElement.classList.add(this.CONTENT_TARGET_OPEN_CLASS);      
    }
    else {
      this.toggleTargetElement.classList.add(this.CONTENT_TARGET_CLOSED_CLASS);
      this.toggleTargetElement.classList.remove(this.CONTENT_TARGET_OPEN_CLASS);
    }
  }


  /**
   * Handles ARIA attribute values when the window is resized.
   */
  handleWindowResize() {

    clearTimeout(this._resizeTimer);

    let that = this;

    this._resizeTimer = setTimeout(function() {
      if(!isMediumSmallViewportAndBelow()) {
        // Set aria-hidden attribute to false when viewport is
        // medium and above.
        that.toggleTargetElement.setAttribute('aria-hidden', false);          
      }
      else {
        // Set aria-hidden state to reflect the content state.
        let ariaState = that.toggleTargetElement.classList
          .contains(that.CONTENT_TARGET_CLOSED_CLASS);
          that.toggleTargetElement.setAttribute('aria-hidden', ariaState);
      }
    }, that.RESIZE_TIMER_INTERVAL);
  }
  
  
  /**
   * Declares key variables and attributes, and initialises event listeners.
   */
  init() {

    // Class that sets the styling when the content trigger is pressed.
    this.CONTENT_TRIGGER_ACTIVE_CLASS = 'is-active';
    
    // Class that sets the styling when the content target is open.
    this.CONTENT_TARGET_OPEN_CLASS = 'is-open';
    
    // Class that sets the styling when the content target is closed.
    this.CONTENT_TARGET_CLOSED_CLASS = 'is-closed';
    
    // Throttle value when listening for resize events.
    this.RESIZE_TIMER_INTERVAL = 100;

    // Viewport resize timer variable.
    this._resizeTimer = null;   

    // Get the ID of the content trigger.
    let triggerID = this.triggerElement.getAttribute('id');

    // Get the target ID of the content trigger.
    let toggleTargetID = this.triggerElement.getAttribute('data-toggle');

     // If the toggle target ID is not set, we cannot perform any 
     // toggle operations.
     if(!toggleTargetID) {
      return;
    }
    
    // Get the element with the target ID.
    this.toggleTargetElement = document.getElementById(toggleTargetID);

    // Add aria attributes to content trigger.
    this.triggerElement.setAttribute('aria-controls', toggleTargetID);
    this.triggerElement.setAttribute('aria-expanded', false);
    this.triggerElement.setAttribute('aria-haspopup', true);

    // Add aria attributes to the content target.
    this.toggleTargetElement.setAttribute('aria-hidden', true);
    this.toggleTargetElement.setAttribute('aria-labelledby', triggerID);

    // When the content trigger is pressed.
    this.triggerElement.addEventListener(
      'click', () => this.contentTriggerClick()
    );

    // Handle window resize events.
    window.addEventListener('resize', () => this.handleWindowResize());
  }
}
