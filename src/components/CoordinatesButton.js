// Code CoordinatesButton Component Here

import React from 'react'

class CoordinatesButton extends React.Component {

  handleClick = (event) => {
    // console.log(event.clientX, 'eventtt', event.clientY)
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

  render() {

    return (
      <div>
        <button onClick={this.handleClick}>button</button>
      </div>
    )


  }

}

export default CoordinatesButton;