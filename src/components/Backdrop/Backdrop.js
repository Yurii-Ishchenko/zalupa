import React, { Component } from 'react';
import s from './Backdrop.module.css';

export default class Backdrop extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };
  handlebackdropClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className={s.backdrop} onClick={this.handlebackdropClick}>
        <div className={s.modal}>{this.props.children}</div>
      </div>
    );
  }
}
