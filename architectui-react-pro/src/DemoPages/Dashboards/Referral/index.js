import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Referral extends Component {
  render() {
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <iframe
            title="referal"
            width="100%"
            height="800px"
            src="https://appikon.firstpromoter.com"
            frameBorder="0"
          />
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}
