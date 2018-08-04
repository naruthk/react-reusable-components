import { Component } from 'react';
import ReactDOM from 'react-dom';

const portalRoot = document.getElementById('portal');

export default class Portal extends Component {

  constructor() {
    super();
    this.el = document.createElement('div');
  }

  // Append the <div> element when the component is mounted.
  componentDidMount = () => {
    portalRoot.appendChild(this.el);
  }

  // Remove the <div> element when the component is unmounted.
  componentWillUnmount = () => {
    portalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}