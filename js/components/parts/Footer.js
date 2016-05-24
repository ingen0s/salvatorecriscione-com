import React, {Component} from 'react';

class Footer extends Component {
  render() {
    return (<div className="col-md-8 thirdHeight footer">
      <h2>Capacità</h2>
      <div className="row">
        <div className="col-md-6  col-sm-6">
          <h4><strong>Tecnologie</strong></h4>
          <div className="row">
            <ul className="col-md-6">
              <li>REACTJS</li>
              <li>WEBPACK</li>
              <li>JQUERY</li>
              <li>SASS</li>
            </ul>
            <ul className="col-md-6">
              <li>GIT</li>
              <li>WORDPRESS</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="row">
            <div className="col-md-6">
              <h4><strong>Architetture</strong></h4>
              <ul>
                <li>REDUX</li>
                <li>FLUX</li>
              </ul>
            </div>
            <div className="col-md-6">
              <h4><strong>Linguaggi</strong></h4>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JAVASCRIPT</li>
                <li>PHP</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default Footer;
