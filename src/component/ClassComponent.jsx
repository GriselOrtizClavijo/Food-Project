import React, { Component } from 'react'

export default class ClassComponent extends Component {
    constructor(){
        super()
        this.state = {
            name: 'Catalina',
        }

    }


  render() {
    console.log(this);
    return (
       
      <div>ClassComponent</div>
    )
  }
}
