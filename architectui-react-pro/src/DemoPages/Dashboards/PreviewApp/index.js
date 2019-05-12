import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PageTitle from '../../../Layout/AppMain/PageTitle';
import { Button } from 'reactstrap';

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
                        icon="pe-7s-phone icon-gradient bg-mean-fruit"
                    />
                    <p>Your app is ready to preview on your device.</p>
                    <p>Download the AppIt preview app on your device.</p>
                    <Button>Download</Button>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
