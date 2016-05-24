import React,{Component} from 'react';

class Sidebar extends Component {
  shouldComponentUpdate() {
    return false;
  }
  
  render() {
    return (
      <div className="col-md-4 col-sm-12 secondHeight sidebar">
        <h2>Contatti</h2>
        <p>Vuoi collaborare con me? o semplicemente scrivermi <b>ciao</b>? Puoi trovarmi qui!</p>
        <ul className="list-group">
          <li className="list-item">
            <h6><i className="fa fa-phone fa-2x" aria-hidden="true"></i>&nbsp;<a href="tel:+393479734773">3479734773</a></h6>
          </li>
          <li className="list-item">
            <h6 className="sidebar-email"><i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>&nbsp;<a href="mailto:hello@salvatorecriscione.com">hello@salvatorecriscione.com</a></h6></li>
          <li className="list-item">
            <h6><i className="fa fa-facebook fa-2x" aria-hidden="true"></i>&nbsp;<a href="https://www.facebook.com/salvatorecriscioneweb/" target="_blank">salvatorecriscioneweb</a></h6></li>
          <li className="list-item">
            <h6><i className="fa fa-github fa-2x" aria-hidden="true"></i>&nbsp;<a href="https://github.com/salvatorecriscioneweb" target="_blank">salvatorecriscioneweb</a></h6></li>
          <li className="list-item">
            <h6><i className="fa fa-twitter fa-2x" aria-hidden="true"></i>&nbsp;<a href="https://twitter.com/Salvaa0123" target="_blank">Salva0123</a></h6></li>
          <li className="list-item">
            <h6><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i>&nbsp;<a href="https://it.linkedin.com/in/salvatore-criscione-66319b86" target="_blank">Salvatore Criscione</a></h6></li>
          <li className="list-item">
            <h6><i className="fa fa-pinterest fa-2x" aria-hidden="true"></i>&nbsp;<a href="https://it.pinterest.com/salvatoreweb" target="_blank">salvatoreweb</a></h6></li>
      </ul>
      </div>
    );
  }
}

export default Sidebar;
