import { API, broadcast } from "./util";

export default class FollowToggle {
  constructor(toggleButton) {
    // Your code here
    this.toggleButton = toggleButton;
    this.handleClick = this.handleClick.bind(this)

    document.addEventListener("click", this.handleClick)
  }


  async handleClick(event) {
    event.preventDefault()
    if(this.followState === "followed"){
      this.unfollow();
    } else {
      this.follow();
    }

  }

  async follow() {
    // Your code here
    
  }

  async unfollow() {
    // Your code here
  }

  render() {
    switch (this.followState) {
      // Your code here
    }
  }

  get followState() {
    return this.toggleButton.dataset.followState;
  }

  set followState(newState) {
    this.toggleButton.dataset.followState = newState;
    this.render();
  }
}
