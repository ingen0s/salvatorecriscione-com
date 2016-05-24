import React,{Component} from 'react';

class Tag extends Component{

  render() {
    let cs = "sixtyHeight bordered bg" + this.props.color;
    return (
    <a className="tag " href={this.props.href} target="_blank">
    <div className={cs}>
        <h2>{this.props.text}</h2>
        <h6>{this.props.moretext}</h6>
    </div></a>);
  }
}
export default Tag;
