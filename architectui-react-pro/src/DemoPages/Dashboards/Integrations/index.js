import React, { Fragment } from 'react';
import PageTitle from '../../../Layout/AppMain/PageTitle';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';

export default class Integrations extends React.Component {

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
                        heading="Integrations"
                        subheading="Wide range of integrations in multiple categories."
                        icon="pe-7s-plugin icon-gradient bg-amy-crisp"
                    />
                    <Tabs
                        defaultActiveKey="1"
                        renderTabBar={() => <ScrollableInkTabBar/>}
                        renderTabContent={() => <TabContent/>}
                    >
                        <TabPane tab='Search' key="1">Search</TabPane>
                        <TabPane tab='Messaging' key="2">Messaging</TabPane>
                        <TabPane tab='Ratings' key="3">Ratings</TabPane>
                    </Tabs>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}
