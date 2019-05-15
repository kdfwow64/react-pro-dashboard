import React, { Component, Fragment } from 'react';
import Tabs from 'react-responsive-tabs';
import DesignLanding from './Landing';

// Examples

const tabsContent = [
  {
    title: 'Landing',
    content: <DesignLanding />
  },
  {
    title: 'Collection',
    content: <DesignLanding />
  },
  {
    title: 'Product',
    content: <DesignLanding />
  },
  {
    title: 'Cart',
    content: <DesignLanding />
  },
  {
    title: 'User',
    content: <DesignLanding />
  },
  {
    title: 'Search',
    content: <DesignLanding />
  }
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index
  }));
}

export default class DesignApp extends Component {
  render() {
    return (
      <Fragment>
        <div className="app-inner-layout">
          {/* <div className="app-inner-layout__header-boxed p-0">
                        <div className="app-inner-layout__header page-title-icon-rounded text-white bg-premium-dark mb-4">
                            <PageTitle
                                heading="Sales Dashboard"
                                subheading="Example of a Dashboard page built with ArchitectUI."
                                icon="pe-7s-umbrella icon-gradient bg-sunny-morning"
                            />
                        </div>
                    </div> */}
          <Tabs
            tabsWrapperClass="body-tabs body-tabs-layout body-tabs-big"
            transform={false}
            showInkBar
            items={getTabs()}
          />
        </div>
      </Fragment>
    );
  }
}
