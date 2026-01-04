import Countdown from 'react-countdown';
import React, { Component } from 'react';
// import { render } from 'react-dom';

const Completionist = () => <span>Now You Can Register!</span>;

class DateTime extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentDateTime: Date().toLocaleString(),
      thaggedhelee: 0
    }

    const {date, hours, minutes, seconds } = this.props.DatehoursMinSecs;
    const arr = this.state.currentDateTime.split(" ");
    // console.log(arr)

    // const date = date;
    // const hours = hours;
    // const minutes = minutes;
    // const seconds = seconds;

    const cDate = parseInt(arr[2]);
    const cHours = parseInt(arr[4].substring(0,2));
    const cMinutes = parseInt(arr[4].substring(3, 5))
    const cSeconds = parseInt(arr[4].substring(6, 8))

    // console.log(cDate, cHours, cMinutes, cSeconds)

    const oDate = (date - cDate) * 86400000;
    const oHours = Math.max(hours - cHours, cHours - hours) * 3600000;
    const oMinutes = Math.max(minutes - cMinutes, cMinutes - minutes) * 60000;
    const oSeconds = Math.max(seconds - cSeconds, cSeconds - seconds) * 1000;

    // console.log(oDate + oHours + oMinutes+ oSeconds)
    this.state.thaggedhelee = oDate + oHours + oMinutes+ oSeconds;
  }

  render() {

    return (
      <div>
        <p>
          <Countdown date={Date.now() + this.state.thaggedhelee}>
            <Completionist />
        </Countdown>
        </p>
      </div>

    );

  }

}

export default DateTime;