import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PageTitle from '../../../Layout/AppMain/PageTitle';

export default class Tutorials extends Component {

    render() {
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <PageTitle
                        heading="Tutorials"
                        subheading="Example of a Dashboard page built with ArchitectUI."
                        icon="pe-7s-video icon-gradient bg-sunny-morning"
                    />
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
