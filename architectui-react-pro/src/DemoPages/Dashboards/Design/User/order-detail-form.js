// tslint:disable
import * as React from 'react';
import { ChromePicker } from 'react-color';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    menuCellBGColor: this.props.menuCellBGColor,
    menuIconColor: this.props.menuIconColor,
    menuTitleColor: this.props.menuTitleColor,
    menuTabActiveColor: this.props.menuTabActiveColor,
    menuTabInactiveColor: this.props.menuTabInactiveColor,
    menuSeparatorColor: this.props.menuSeparatorColor
  };

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
                style={{ backgroundColor: this.props.orderdetailBgColor }}
              >
                <div id="orderDetailsPage">
                  <div
                    className="order_PageTitles"
                    style={{ color: this.props.orderdetailnumberColor }}
                  >
                    Order #1005
                  </div>
                  <div
                    className="order_PageTitles"
                    style={{ color: this.props.orderdetailnumberColor }}
                  >
                    Order placed July 13, 2018 at 3:04am
                  </div>
                  <div
                    className="order_SectionTitles"
                    style={{
                      color: this.props.headertitleBGColor,
                      backgroundColor:
                        this.props.orderdetailheaderbgColor || '#0e7c95'
                    }}
                  >
                    Order Summary
                  </div>
                  <div
                    className="order_cellHolder"
                    style={{
                      backgroundColor: this.props.optiondetailscellbgColor,
                      borderBottom: `1px solid${
                        this.props.optiondetailcellsepColor
                      }`
                    }}
                  >
                    <div className="detail_image_sec">
                      <div className="detail_image">
                        <i className="pe-7s-photo" />
                      </div>
                    </div>
                    <div
                      className="order_productColors"
                      style={{ color: this.props.optiondetailsproductColor }}
                    >
                      {' '}
                      PRODUCT NAME x1
                    </div>
                    <div
                      className="order_optionColors"
                      style={{ color: this.props.optiondetailsopColor }}
                    >
                      {' '}
                      OPTION
                    </div>
                    <div
                      className="order_priceColors"
                      style={{ color: this.props.optiondetailpriceColor }}
                    >
                      $29.99
                    </div>
                  </div>
                  <div
                    className="order_cellHolder"
                    style={{
                      backgroundColor: this.props.optiondetailscellbgColor,
                      borderBottom: `1px solid${
                        this.props.optiondetailcellsepColor
                      }`
                    }}
                  >
                    <div className="detail_image_sec">
                      <div className="detail_image">
                        <i className="pe-7s-photo" />
                      </div>
                    </div>
                    <div
                      className="order_productColors"
                      style={{ color: this.props.optiondetailsproductColor }}
                    >
                      {' '}
                      PRODUCT NAME x1
                    </div>
                    <div
                      className="order_optionColors"
                      style={{ color: this.props.optiondetailsopColor }}
                    >
                      {' '}
                      OPTION
                    </div>
                    <div
                      className="order_priceColors"
                      style={{ color: this.props.optiondetailpriceColor }}
                    >
                      $29.99
                    </div>
                  </div>
                  <div
                    className="order_cellHolder"
                    style={{
                      backgroundColor: this.props.optiondetailscellbgColor,
                      borderBottom: `1px solid${
                        this.props.optiondetailcellsepColor
                      }`
                    }}
                  >
                    <div className="detail_image_sec">
                      <div className="detail_image">
                        <i className="pe-7s-photo" />
                      </div>
                    </div>
                    <div
                      className="order_productColors"
                      style={{ color: this.props.optiondetailsproductColor }}
                    >
                      {' '}
                      PRODUCT NAME x1
                    </div>
                    <div
                      className="order_optionColors"
                      style={{ color: this.props.optiondetailsopColor }}
                    >
                      {' '}
                      OPTION
                    </div>
                    <div
                      className="order_priceColors"
                      style={{ color: this.props.optiondetailpriceColor }}
                    >
                      $29.99
                    </div>
                  </div>

                  <div
                    className="cell_sep"
                    style={{
                      borderBottom: `1px solid${
                        this.props.optiondetailcellsepColor
                      }`
                    }}
                  >
                    <div>
                      <div
                        className="order_priceDescriptor"
                        style={{ color: this.props.opriondetaildescColor }}
                      >
                        Subtotal
                      </div>
                      <div
                        className="order_priceColorssec"
                        style={{ color: this.props.optiondetailpriceColor }}
                      >
                        $29.99
                      </div>
                    </div>
                    <div>
                      <div
                        className="order_priceDescriptor"
                        style={{ color: this.props.opriondetaildescColor }}
                      >
                        Shipping
                      </div>
                      <div
                        className="order_priceColorssec"
                        style={{ color: this.props.optiondetailpriceColor }}
                      >
                        $1.99
                      </div>
                    </div>
                    <div>
                      <div
                        className="order_priceDescriptor"
                        style={{ color: this.props.opriondetaildescColor }}
                      >
                        Discounts
                      </div>
                      <div
                        className="order_priceColorssec"
                        style={{ color: this.props.optiondetailpriceColor }}
                      >
                        $0.00
                      </div>
                    </div>
                    <div>
                      <div
                        className="order_priceDescriptor"
                        style={{ color: this.props.opriondetaildescColor }}
                      >
                        Taxes
                      </div>
                      <div
                        className="order_priceColorssec"
                        style={{ color: this.props.optiondetailpriceColor }}
                      >
                        $0.00
                      </div>
                    </div>
                    <div>
                      <div
                        className="order_priceDescriptor"
                        style={{ color: this.props.opriondetaildescColor }}
                      >
                        Total
                      </div>
                      <div
                        className="order_priceColorssec"
                        style={{ color: this.props.optiondetailpriceColor }}
                      >
                        $31.99
                      </div>
                    </div>
                  </div>

                  <div
                    className="order_SectionTitles"
                    style={{
                      color: this.props.headertitleBGColor,
                      backgroundColor:
                        this.props.orderdetailheaderbgColor || '#0e7c95'
                    }}
                  >
                    Billing Address
                  </div>
                  <div>
                    <div
                      className="order_generalText"
                      style={{ color: this.props.optionaddresstextColor }}
                    >
                      Mary Jane
                      <br />
                      123 Main Street
                      <br />
                      Chicago, IL, 12345
                    </div>
                  </div>
                  <div
                    className="order_SectionTitles"
                    style={{
                      color: this.props.headertitleBGColor,
                      backgroundColor:
                        this.props.orderdetailheaderbgColor || '#0e7c95'
                    }}
                  >
                    Shipping Address
                  </div>
                  <div>
                    <div
                      className="order_generalText"
                      style={{ color: this.props.optionaddresstextColor }}
                    >
                      Mary Jane
                      <br />
                      123 Main Street
                      <br />
                      Chicago, IL, 12345
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

export default OrderDetails;
