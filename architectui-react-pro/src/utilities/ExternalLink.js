/* tslint:disable */
import * as React from 'react';

export default class ExternalLink extends React.Component {
  render() {
    const { url, text, onClick } = this.props;

    const style = {
      style: {
        backgroundImage:
          'url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2020%2020%22%3E%3Cstyle%20type=%22text/css%22%3Ecircle,%20ellipse,%20line,%20path,%20polygon,%20polyline,%20rect,%20text%20%7B%20fill:%20%235c6ac4%20!important;%20%7D%3C/style%3E%3Cpath%20d=%22M17%202c.553%200%201%20.448%201%201v5c0%20.552-.447%201-1%201s-1-.448-1-1V5.414l-7.293%207.293c-.195.195-.45.293-.707.293s-.512-.098-.707-.293c-.39-.39-.39-1.023%200-1.414L14.586%204H12c-.553%200-1-.448-1-1s.447-1%201-1h5zm-4%209c.553%200%201%20.448%201%201v5c0%20.552-.447%201-1%201H3c-.553%200-1-.448-1-1V7c0-.552.447-1%201-1h5c.553%200%201%20.448%201%201s-.447%201-1%201H4v8h8v-4c0-.552.447-1%201-1z%22/%3E%3C/svg%3E%0A")',
        backgroundPosition: 'right top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '16px 16px',
        paddingRight: '18px'
      }
    };

    return (
      <span>
        <a href={url} target="_blank" style={style.style} onClick={onClick}>
          {text}
        </a>
      </span>
    );
  }
}
