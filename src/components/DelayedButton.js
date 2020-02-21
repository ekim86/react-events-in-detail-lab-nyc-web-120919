// Code DelayedButton Component Here
import React from 'react';

class DelayedButton extends React.Component {

  handleDelay = (event) => {
    console.log(event.type, 'eventee')
    event.persist()
    
    setTimeout(() => {
      this.props.onDelayedClick(event)},

      this.props.delay)

  }
  render() {
 
    return(
      <div>
        hi
        <button onClick={this.handleDelay}>delayed button</button>
      </div>
    )

  }

}

export default DelayedButton;
