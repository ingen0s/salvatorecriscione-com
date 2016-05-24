import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return (
      <div className="col-md-12 secondHeight" style={{paddingTop: '50px'}}>
      <center>
        <i className="fa fa-spinner fa-4x animatedloading"></i>
      </center>
      </div>
    )
  }
}

export default Loading;
