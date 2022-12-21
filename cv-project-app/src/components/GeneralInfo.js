import React, { Component } from 'react';

class GeneralInfo extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        const {title} = this.props;
      return (
        <div>
            <h1>{title}</h1>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="Email" />
            <label htmlFor="phone">Phone Number</label>
            <input type="number" id="phone" />
        </div>
      );
    }
  }
  
  export default GeneralInfo;