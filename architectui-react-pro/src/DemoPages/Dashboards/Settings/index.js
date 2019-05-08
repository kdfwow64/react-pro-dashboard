import React, { Component, Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Card, CardBody, CardTitle, Input } from 'reactstrap';

export default class SettingsDashboard extends Component {

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
                    <Card className="main-card mb-3">
                        <CardBody>
                            <CardTitle>Storefront Token</CardTitle>
                            <p>Your storefront token from Private app. See how to create one.</p>
                            <Input type="text"/>
                        </CardBody>
                    </Card>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
