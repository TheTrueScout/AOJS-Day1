class ToggleVisibility {
  constructor() {

    this.toggleButton = document.querySelector('.toggle-visibility');
    this.wrapper = document.querySelector('.wrapper');
    this.passwordInput = document.querySelector('.password-input');


    this.toggleButton.addEventListener('click', () => {
      this.toggleStatus();
      this.changeInputType();
    })
  }

  toggleStatus() {
    if (this.wrapper.dataset.visible === 'true') {
      this.wrapper.dataset.visible = 'false'
    } else {
      this.wrapper.dataset.visible = 'true'
    }
  }

  changeInputType() {
    if (this.passwordInput.type === 'password') {
      this.passwordInput.type = 'text'
    } else {
      this.passwordInput.type = 'password'
    }
  }

}

class MouseTracker {
  constructor() {
    this.pupil = document.getElementById('pupil');
    this.anchor = document.getElementById('anchor');
    
    document.addEventListener('mousemove', this.trackMouse.bind(this));
  }

  trackMouse(e) {
    const rekt = this.anchor.getBoundingClientRect();
    const anchorCenterX = rekt.left + rekt.width / 2;
    const anchorCenterY = rekt.top + rekt.height / 2;

    const mouseX = e.clientX - anchorCenterX;
    const mouseY = e.clientY - anchorCenterY;

    const maxMovementY = 10;
    const maxMovementX = 15;
    const limitedX = this.clamp(mouseX, -maxMovementX, maxMovementX);
    const limitedY = this.clamp(mouseY, -maxMovementY, maxMovementY);

    this.pupil.style.transform = `translate(${limitedX}px, ${limitedY}px)`;
  }

  clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new ToggleVisibility();
  const tracker = new MouseTracker();
})