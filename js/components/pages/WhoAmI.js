import React, {Component} from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class WhoAmI extends Component {
  render() {
    return (
      <ReactCSSTransitionGroup transitionAppear={true} transitionAppearTimeout={1500} transitionName="homepage" transitionEnterTimeout={1500} transitionLeaveTimeout={2300}>
      <div className="secondHeight whoami">
        <div className="row">
          <div className="col-md-6 col-sm-12 thirdHeight borderedBottom borderedRight padded bg3">
            <span className="h1">Ciao,</span> &nbsp;<span className="h3">sono <strong>Salvatore</strong></span>
            <p>
            E spendo quasi tutte le mie giornate nel web. Quando non lavoro o non <strong>sperimento cose nuove</strong>, probabilmente sto giocando a <strong>League of Legends</strong>.<br/>
          Sono un <strong>fumatore</strong>, amante di Android e ho <strong>21</strong> anni.
            </p>
          </div>
          <div className="col-md-2 col-sm-12 thirdHeight bg5 padded">
            <h2>Velocità</h2>
            <p>Nel web la velocità è tutto, per questo mi sono sempre presupposto di creare codice efficiente.</p>
          </div>
          <div className="col-md-2 col-sm-12 thirdHeight bg6 padded">
            <h2>Solidità</h2>
            <p>Scrivere codice pulito e facilmente mantenibile non è un optional.</p>
          </div>
          <div className="col-md-2 col-sm-12 thirdHeight bg1 padded">
            <h2>Stupire</h2>
            <p>Ogni mio singolo progetto punta a creare un valore aggiunto e osare l'inosabile.</p>
          </div>

        </div>
        <div className="row">
          <div className="col-md-3 col-sm-12 borderedRight thirdHeight bordered padded bg4">
            <h2>COSA FACCIO <i className="fa fa-arrow-right desktoponly"></i><i className="fa fa-arrow-down mobileonly"></i></h2>
          </div>
          <div className="col-md-3 col-sm-12 borderedRight thirdHeight bordered padded bg5">
            <h3>SVILUPPO SITI WEB</h3>
            <p>Che si adattano ad ogni dispositivo, usando il meglio di ogni tecnologia che conosco.</p>
          </div>
          <div className="col-md-3 col-sm-12 borderedRight thirdHeight bordered padded bg3">
            <h3>SVILUPPO FRONTEND</h3>
            <p>Creo User Interface per applicativi web, usando ReactJS.</p>
          </div>

          <div className="col-md-3 borderedRight thirdHeight bordered bg2 endpage workpastcontainer">
            <h2>Lavori:</h2>
            <div className="workpast">
              <p>Sviluppatore web <span className="text-muted">2016 - Presente</span></p>
              Freelancer
            </div>
            <div className="workpast">
              <p>Sviluppatore web <span className="text-muted">2015-2016</span></p>
              <a href="http://www.promoservice.com/" target="_blank">Promoservice | Gestionealbergo</a>
            </div>
          </div>
        </div>
      </div>
      </ReactCSSTransitionGroup>
    );
  }
}

export default WhoAmI;
