import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PageTitle from '../../../Layout/AppMain/PageTitle';

export default class PreviewApp extends React.Component {

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
                        heading="Preview Your App"
                        subheading="This is an example dashboard created using build-in elements and components."
                        icon="pe-7s-car icon-gradient bg-mean-fruit"
                    />
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
