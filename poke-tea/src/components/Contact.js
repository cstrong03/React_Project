import React, { Component } from 'react'

class Contact extends Component{

  handleOnSubmit(){
    return(
    alert('Thank you for you feed back!')
    )
  }



  render(){
  return(
      <div>

      <div class="field">
    <label class="label">Name</label>
    <div class="control">
      <input class="input" type="text" placeholder="Enter Your Name" />
    </div>
  </div>

  <div class="field">
    <label class="label">Username</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="text" placeholder="Enter your username" />
      <span class="icon is-small is-left">
        <i class="fas fa-user"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-check"></i>
      </span>
    </div>
  </div>

  <div class="field">
    <label class="label">Email</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" type="email" placeholder="Email input"  />
      <span class="icon is-small is-left">
        <i class="fas fa-envelope"></i>
      </span>
      <span class="icon is-small is-right">
        <i class="fas fa-exclamation-triangle"></i>
      </span>
    </div>
  </div>

  <div class="field">
    <label class="label">Message</label>
    <div class="control">
      <textarea class="textarea" placeholder="Write a message here"></textarea>
    </div>
  </div>

  <div class="field is-grouped" >
    <div class="control">
      <button class="button is-link" onclick={this.handleOnSubmit()}>Submit</button>
    </div>
    <div class="control">
      <button class="button is-text">Cancel</button>
    </div>
  </div>

  </div>
    )
  }
}

export default Contact
