import React, { Component } from "react";

class Event extends Component {
  state = {
    hide: true,
  };

  handleItemClicked = () => {
    this.setState((prevState) => ({
      hide: !prevState.hide,
    }));
    console.log(this.state.hide);
  };

  render() {
    const { event } = this.props;
    return (
      <div className='event'>
        <b className='title'>Summary: {event.summary}</b>
        {this.state.hide === false && (
          <ul className='details'>
            <li>Description: {event.description}</li>
            <li>Location: {event.location}</li>
            <li>Start: {new Date(event.start.dateTime).toISOString()}</li>
            <li>End: {new Date(event.end.dateTime).toISOString()}</li>
          </ul>
        )}
        <br />
        <button
          className='detailsButton'
          onClick={() => this.handleItemClicked()}
        >
          Details
        </button>
      </div>
    );
  }
}

export default Event;
