// tslint:disable
import * as React from 'react';

class Orderhistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      menuCellBGColor: this.props.menuCellBGColor,
      menuIconColor: this.props.menuIconColor,
      menuTitleColor: this.props.menuTitleColor,
      menuTabActiveColor: this.props.menuTabActiveColor,
      menuTabInactiveColor: this.props.menuTabInactiveColor,
      menuSeparatorColor: this.props.menuSeparatorColor
    };
  }

  render() {
    return (
      <div
        id="CollectionEffectMainContainer"
        className="CollectionGridListView"
      >
        <div id="SearchNavigationStyles" className="SearchNavigationSettings">
          <div className="CollectionEffectContainer">
            <div className="create_account_main">
              <div
                className="formContainer accountformcontainer"
                style={{ backgroundColor: this.props.optionBGColor }}
              >
                <div
                  className="ordersContainer"
                  style={{
                    backgroundColor: this.props.cellBgColor,
                    borderBottom: `1px solid${this.props.cellsepratorColor}`
                  }}
                >
                  <div className="ordersIconContainer">
                    <div
                      className="ordersPicture"
                      style={{
                        border: `1px solid${this.props.imageborderColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
                    </div>
                  </div>
                  <div className="ordersTitleContainer">
                    <div
                      className="ordersTitle"
                      style={{ color: this.props.optiontitleColor }}
                    >
                      PRODUCT(s)
                    </div>
                    <div
                      className="ordersPrice"
                      style={{ color: this.props.optionpriceColor }}
                    >
                      ORDER TOTAL
                    </div>
                    <div
                      className="ordersDate"
                      style={{ color: this.props.optiondateColor }}
                    >
                      DATE OF ORDER
                    </div>
                  </div>
                </div>
                <div
                  className="ordersContainer"
                  style={{
                    backgroundColor: this.props.cellBgColor,
                    borderBottom: `1px solid${this.props.cellsepratorColor}`
                  }}
                >
                  <div className="ordersIconContainer">
                    <div
                      className="ordersPicture"
                      style={{
                        border: `1px solid${this.props.imageborderColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
                    </div>
                  </div>
                  <div className="ordersTitleContainer">
                    <div
                      className="ordersTitle"
                      style={{ color: this.props.optiontitleColor }}
                    >
                      PRODUCT(s)
                    </div>
                    <div
                      className="ordersPrice"
                      style={{ color: this.props.optionpriceColor }}
                    >
                      ORDER TOTAL
                    </div>
                    <div
                      className="ordersDate"
                      style={{ color: this.props.optiondateColor }}
                    >
                      DATE OF ORDER
                    </div>
                  </div>
                </div>
                <div
                  className="ordersContainer"
                  style={{
                    backgroundColor: this.props.cellBgColor,
                    borderBottom: `1px solid${this.props.cellsepratorColor}`
                  }}
                >
                  <div className="ordersIconContainer">
                    <div
                      className="ordersPicture"
                      style={{
                        border: `1px solid${this.props.imageborderColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
                    </div>
                  </div>
                  <div className="ordersTitleContainer">
                    <div
                      className="ordersTitle"
                      style={{ color: this.props.optiontitleColor }}
                    >
                      PRODUCT(s)
                    </div>
                    <div
                      className="ordersPrice"
                      style={{ color: this.props.optionpriceColor }}
                    >
                      ORDER TOTAL
                    </div>
                    <div
                      className="ordersDate"
                      style={{ color: this.props.optiondateColor }}
                    >
                      DATE OF ORDER
                    </div>
                  </div>
                </div>
                <div
                  className="ordersContainer"
                  style={{
                    backgroundColor: this.props.cellBgColor,
                    borderBottom: `1px solid${this.props.cellsepratorColor}`
                  }}
                >
                  <div className="ordersIconContainer">
                    <div
                      className="ordersPicture"
                      style={{
                        border: `1px solid${this.props.imageborderColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
                    </div>
                  </div>
                  <div className="ordersTitleContainer">
                    <div
                      className="ordersTitle"
                      style={{ color: this.props.optiontitleColor }}
                    >
                      PRODUCT(s)
                    </div>
                    <div
                      className="ordersPrice"
                      style={{ color: this.props.optionpriceColor }}
                    >
                      ORDER TOTAL
                    </div>
                    <div
                      className="ordersDate"
                      style={{ color: this.props.optiondateColor }}
                    >
                      DATE OF ORDER
                    </div>
                  </div>
                </div>
                <div
                  className="ordersContainer"
                  style={{
                    backgroundColor: this.props.cellBgColor,
                    borderBottom: `1px solid${this.props.cellsepratorColor}`
                  }}
                >
                  <div className="ordersIconContainer">
                    <div
                      className="ordersPicture"
                      style={{
                        border: `1px solid${this.props.imageborderColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
                    </div>
                  </div>
                  <div className="ordersTitleContainer">
                    <div
                      className="ordersTitle"
                      style={{ color: this.props.optiontitleColor }}
                    >
                      PRODUCT(s)
                    </div>
                    <div
                      className="ordersPrice"
                      style={{ color: this.props.optionpriceColor }}
                    >
                      ORDER TOTAL
                    </div>
                    <div
                      className="ordersDate"
                      style={{ color: this.props.optiondateColor }}
                    >
                      DATE OF ORDER
                    </div>
                  </div>
                </div>
                <div
                  className="ordersContainer"
                  style={{
                    backgroundColor: this.props.cellBgColor,
                    borderBottom: `1px solid${this.props.cellsepratorColor}`
                  }}
                >
                  <div className="ordersIconContainer">
                    <div
                      className="ordersPicture"
                      style={{
                        border: `1px solid${this.props.imageborderColor}`
                      }}
                    >
                      <i className="pe-7s-photo" />
                    </div>
                  </div>
                  <div className="ordersTitleContainer">
                    <div
                      className="ordersTitle"
                      style={{ color: this.props.optiontitleColor }}
                    >
                      PRODUCT(s)
                    </div>
                    <div
                      className="ordersPrice"
                      style={{ color: this.props.optionpriceColor }}
                    >
                      ORDER TOTAL
                    </div>
                    <div
                      className="ordersDate"
                      style={{ color: this.props.optiondateColor }}
                    >
                      DATE OF ORDER
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orderhistory;
