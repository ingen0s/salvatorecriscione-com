import React, { Component } from 'react';
import { Link } from 'react-router';

class NotFound extends Component {
  render() {
    return (
      <div className="notfound">
        <h1>:(</h1>
        <p>Questa pagina non esiste, o almeno cosi mi ha riferito il mio server. Se sei sicuro che eri nel giusto, contattatami <a href="mailto:me@salvatorecriscione.com">qui</a> altrimenti torna pure al sicuro <Link to="/"> premendo qui.</Link></p>
      </div>
    );
  }
}

export default NotFound;
