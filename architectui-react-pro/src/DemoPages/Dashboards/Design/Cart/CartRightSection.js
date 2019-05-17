// tslint:disable
// @ts-nocheck
import React, { Fragment } from 'react';
import { ChromePicker } from 'react-color';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  CardTitle,
  Collapse,
  Fade,
  Row
} from 'reactstrap';
import Ionicon from 'react-ionicons';
import { DropdownList } from 'react-widgets';
import S3SingleFileUploaderWithPreviewAndFileNameCapability from '../../../../utilities/S3SingleFileUploaderWithPreviewAndFileNameCapability';

const iconData = ['ios-cut-outline'];

class CartRightSection extends React.Component {
  constructor(props) {
    super(props);
    this.navbghandleClose = this.navbghandleClose.bind(this);
    this.navbghandleChange = this.navbghandleChange.bind(this);
    this.CollectionMainSectionEditOption = this.CollectionMainSectionEditOption.bind(
      this
    );
    this.CollectionCloseEditSection = this.CollectionCloseEditSection.bind(
      this
    );
    this.navtitlehandleClose = this.navtitlehandleClose.bind(this);
    this.navtitlehandleChange = this.navtitlehandleChange.bind(this);
    this.naviconhandleChange = this.naviconhandleChange.bind(this);
    this.OnCollectionEditClick = this.OnCollectionEditClick.bind(this);

    this.state = {
      CollectionMainSectionEditOptionValue: 'none',
      navbgcolor: '#2ecc71',
      navtitlecolor: '#ffffff',
      naviconcolor: '#ffffff',
      NavTitle: 'Text',

      ShowHideGridListView: 'block',
      navtitledisplayColorPicker: false,
      navicondisplayColorPicker: false,
      navbgdisplayColorPicker: false,
      OnCollectionEditValue: 'none',
      bannerImageUrl: ''
    };
  }

  navtitlehandleChange(navtitlecolor) {
    this.setState({ navtitlecolor: navtitlecolor.hex });
    this.props.navtitlecolor(navtitlecolor);
  }

  naviconhandleChange(naviconcolor) {
    this.setState({ naviconcolor: naviconcolor.hex });
    this.props.naviconcolor(naviconcolor);
  }

  naviconhandleClick = () => {
    this.setState({
      navicondisplayColorPicker: !this.navicondisplayColorPicker
    });
  };

  CollectionMainSectionEditOption() {
    this.setState({ CollectionMainSectionEditOptionValue: 'block' });
    this.setState({ ShowHideGridListView: 'none' });
  }

  navtitlehandleClose = () => {
    this.setState({ navtitledisplayColorPicker: false });
  };

  navbghandleChange(navbgcolor) {
    this.setState({ navbgcolor: navbgcolor.hex });
    this.props.navbgcolorVall(navbgcolor);
  }

  navbghandleClose = () => {
    this.setState({ navbgdisplayColorPicker: false });
  };

  CollectionCloseEditSection() {
    this.setState({ CollectionMainSectionEditOptionValue: 'none' });
    this.setState({ ShowHideGridListView: 'block' });
  }

  OnCollectionEditClick = e => {
    this.setState({ NavTitleValue: e });
    this.props.NavTitle(e);
  };

  navbghandleClick = () => {
    this.setState({ navbgdisplayColorPicker: !this.navbgdisplayColorPicker });
  };

  navtitlehandleClick = () => {
    this.setState({
      navtitledisplayColorPicker: !this.navtitledisplayColorPicker
    });
  };

  naviconhandleClose = () => {
    this.setState({ navicondisplayColorPicker: false });
  };

  swatch = {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '15px',
    top: '4px'
  };

  popover = {
    position: 'absolute',
    zIndex: 2
  };

  cover = {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  ApplyNavSettings = () => {
    this.setState({ CollectionMainSectionEditOptionValue: 'none' });
    this.setState({ ShowHideGridListView: 'block' });
    this.props.DisplaySaveBtn();
  };

  bannerImageUrl = value => {
    this.setState({ bannerImageUrl: value });
    this.props.bannerImageUrlCallBack(value);
  };

  cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

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
          className="ProductcustomizeMainsection"
        >
          <div className="Productcustomizesection">
            <div id="ProductRightBody">
              <div
                id="CollectionEffectNavBarContainer"
                style={{
                  backgroundColor: this.props.navbgcolorValue || '#0E7C95'
                }}
              >
                <div
                  id="CollectionEffectMyStoreTitle"
                  style={{ color: this.props.navtitlecolorValue }}
                >
                  {this.props.NavTitleValue === 'Image' && (
                    <img
                      src={this.props.bannerImageUrl}
                      style={{ maxHeight: '30px', maxWidth: '90px' }}
                    />
                  )}
                  {this.props.NavTitleValue === 'Text' && 'CART'}
                  {this.props.NavTitleValue === undefined && 'CART'}
                </div>
                <div
                  id="CollectionEditMainSlider"
                  onClick={this.CollectionMainSectionEditOption}
                >
                  <div id="CollectionEditOption">
                    <i className="lnr-pencil" />
                  </div>
                </div>
              </div>

              <div id="CollectionEffectBody" style={{ height: '60vh' }}>
                <div
                  className="CollectionMainEditOptionContainer"
                  style={{
                    display: this.state.CollectionMainSectionEditOptionValue
                  }}
                >
                  <div className="CollectionEditSettingOptionContainer">
                    <h2>EDIT NAVIGATION BAR</h2>
                    <p>
                      *Note: Editing this navigation bar will override the
                      theme's navigation bar for this page only.
                    </p>

                    <div className="CollectionMainEditTitle">
                      <div className="col-sm-12 CollectionSettingEditTitle">
                        <label>NAVIGATION BAR TITLE</label>
                      </div>
                      <div className="col-sm-12 CollectionMainEditTitleView">
                        <DropdownList
                          data={['Image', 'Text']}
                          onChange={this.OnCollectionEditClick}
                          value={this.props.NavTitleValue || 'Text'}
                          textField="name"
                        />
                      </div>
                    </div>

                    <div className="CollectionMainEditIcon">
                      <div className="col-sm-12 CollectionSettingIcon">
                        <label>NAV BAR BACKGROUND COLOR </label>
                      </div>
                      <div className="col-sm-12 CollectionMainEditBGIconView">
                        <input
                          type="text"
                          defaultValue={this.props.navbgcolorValue || '#0E7C95'}
                          // defaultValue={this.navbgcolor}
                          id="CollectionDropDown"
                          className="textColorCode"
                          onClick={this.navbghandleClick}
                        />
                        <div style={this.swatch}>
                          <div
                            className="colorPickerBorder"
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor:
                                this.props.navbgcolorValue || '#0E7C95'
                            }}
                            onClick={this.navbghandleClick}
                          />
                        </div>
                        {this.state.navbgdisplayColorPicker ? (
                          <div style={this.popover}>
                            <div
                              style={this.cover}
                              onClick={this.navbghandleClose}
                            />
                            <ChromePicker
                              color={this.props.navbgcolorValue || '#0E7C95'}
                              onChange={this.navbghandleChange}
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>

                    {/* } <div className="CollectionMainEditIconColor">
                      <div className="col-sm-12 CollectionSettingEditIconColor">
                        <label>NAV BAR ICON COLOR</label>
                      </div>
                      <div className="col-sm-12 CollectionMainEditIconColorView">
                        <input
                          type="text"
                          value={this.props.naviconcolorValue || '#fff'}
                          defaultValue={this.naviconcolor}
                          id="CollectionDropDown"
                          className="textColorCode"
                          onClick={this.naviconhandleClick}
                          
                        />
                        <div style={this.swatch}>
                          <div
                            className="colorPickerBorder"
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor: this.props.naviconcolorValue || '#fff'
                            }}
                            onClick={this.naviconhandleClick}
                          />
                        </div>
                        {this.state.navicondisplayColorPicker ? (
                          <div style={this.popover}>
                            <div style={ this.cover } onClick={ this.naviconhandleClose }/>
                            <ChromePicker
                              color={this.props.naviconcolorValue || '#fff'}
                              onChange={this.naviconhandleChange}
                            />
                          </div>
                        ) : null}
                      </div>
                    </div> */}

                    <div
                      className="CollectionMainEditIconColor"
                      style={{
                        display:
                          this.props.NavTitleValue === 'Image'
                            ? 'none'
                            : 'block'
                      }}
                    >
                      <div className="col-sm-12 CollectionSettingEditIconColor">
                        <label>NAV BAR TITLE COLOR</label>
                      </div>
                      <div className="col-sm-12 CollectionMainEditIconColorView">
                        <input
                          type="text"
                          defaultValue={this.props.navtitlecolorValue || '#fff'}
                          // defaultValue={this.navtitlecolor}
                          id="CollectionDropDown"
                          className="textColorCode"
                          onClick={this.navtitlehandleClick}
                        />
                        <div style={this.swatch}>
                          <div
                            className="colorPickerBorder"
                            style={{
                              width: '20px',
                              height: '20px',
                              backgroundColor:
                                this.props.navtitlecolorValue || '#fff'
                            }}
                            onClick={this.navtitlehandleClick}
                          />
                        </div>
                        {this.state.navtitledisplayColorPicker ? (
                          <div style={this.popover}>
                            <div
                              style={this.cover}
                              onClick={this.navtitlehandleClose}
                            />
                            <ChromePicker
                              color={this.props.navtitlecolorValue || '#fff'}
                              onChange={this.navtitlehandleChange}
                            />
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div
                      className="CollectionMainEditImg"
                      style={{
                        display:
                          this.props.NavTitleValue === 'Image'
                            ? 'block'
                            : 'none'
                      }}
                    >
                      <div className="col-sm-12 CollectionSettingEditImg">
                        <label>NAV IMAGE</label>
                      </div>
                      <div className="col-sm-12 CollectionMainEditIconImgView">
                        <S3SingleFileUploaderWithPreviewAndFileNameCapability
                          label="Choose file"
                          acceptedFiles={['image/jpeg', 'image/png']}
                          fileName={this.props.bannerImageUrl}
                          previewImageHeight="100px"
                          previewImageWidth="100px"
                          imageFolder="navTitleImage"
                          onChange={value => this.bannerImageUrl(value)}
                        />
                      </div>
                    </div>

                    <div className="CollectionEditCancelButton CollectionEditButton">
                      <span onClick={this.CollectionCloseEditSection}>
                        CANCEL
                      </span>
                    </div>

                    <div className="CollectionEditapplyButton CollectionEditButton">
                      <span onClick={this.ApplyNavSettings}>APPLY</span>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: this.state.ShowHideGridListView,
                    backgroundColor: this.props.CartBGColor
                  }}
                  id="cart_right_body"
                >
                  <Row
                    className="row"
                    style={{ backgroundColor: this.props.CellBGColor }}
                    id="CartFirstMain"
                  >
                    <Col md={4} className="CartFirstFirst">
                      <div className="CartPlaceholderImage">
                        <i className="pe-7s-photo" />
                      </div>
                    </Col>
                    <Col md={6} className="CartFirstSecond">
                      <h2 style={{ color: this.props.ProductTitle }}>
                        PRODUCT TITLE
                      </h2>
                      <h4 style={{ color: this.props.ProductOptionColor }}>
                        option
                      </h4>
                      <h6 style={{ color: this.props.CellPriceColor }}>
                        PRICE
                      </h6>
                    </Col>
                    <Col md={2} className="CartFirstThird">
                      <div
                        className="CartMinusSquare"
                        style={{ color: this.props.QuantityIconColor }}
                      >
                        <i className="lnr-circle-minus" />
                      </div>
                      <div
                        className="CartQuantityMiddle"
                        style={{ color: this.props.QuantityTextColor }}
                      >
                        1
                      </div>
                      <div
                        className="CartPlusSquare"
                        style={{ color: this.props.QuantityIconColor }}
                      >
                        <i className="lnr-plus-circle" />
                      </div>
                    </Col>
                  </Row>

                  <Row
                    style={{ backgroundColor: this.props.CellBGColor }}
                    id="CartSecondMain"
                  >
                    <Col md={4} className="CartFirstFirst">
                      <div className="CartPlaceholderImage">
                        <i className="pe-7s-photo" />
                      </div>
                    </Col>
                    <Col md={6} className="CartFirstSecond">
                      <h2 style={{ color: this.props.ProductTitle }}>
                        PRODUCT TITLE
                      </h2>
                      <h4 style={{ color: this.props.ProductOptionColor }}>
                        option
                      </h4>
                      <h6 style={{ color: this.props.CellPriceColor }}>
                        PRICE
                      </h6>
                    </Col>
                    <Col md={2} className="CartFirstThird">
                      <div
                        className="CartMinusSquare"
                        style={{ color: this.props.QuantityIconColor }}
                      >
                        <i className="lnr-circle-minus" />
                      </div>
                      <div
                        className="CartQuantityMiddle"
                        style={{ color: this.props.QuantityTextColor }}
                      >
                        1
                      </div>
                      <div
                        className="CartPlusSquare"
                        style={{ color: this.props.QuantityIconColor }}
                      >
                        <i className="lnr-plus-circle" />
                      </div>
                    </Col>
                  </Row>

                  <Row
                    id="CartThirdMain"
                    style={{ backgroundColor: this.props.ApplyBGColor }}
                  >
                    <div className="CartCoupon">
                      <div className="CartDiscountApply">
                        <div className="CartDiscountCutIcon">
                          <Ionicon
                            fontSize="17px"
                            icon="ios-cut-outline"
                            style={{ color: this.props.ApplyIconColor }}
                          />
                        </div>
                        <div
                          className="CartCouponText"
                          style={{ color: this.props.ApplyTextColor }}
                        >
                          Apply Coupon Code
                        </div>
                      </div>
                    </div>
                  </Row>

                  <Row
                    id="CartFourthMain"
                    style={{ backgroundColor: this.props.ApplyBGColor }}
                  >
                    <div className="CartCoupon">
                      <div className="CartDiscountApply">
                        <div
                          className="CartDiscountCutIcon"
                          style={{ color: this.props.ApplyIconColor }}
                        >
                          <i className="lnr-gift" />
                        </div>
                        <div
                          className="CartCouponText"
                          style={{ color: this.props.ApplyTextColor }}
                        >
                          Apply Gift Card
                        </div>
                      </div>
                    </div>
                  </Row>

                  <Row id="CartFifthMain">
                    <div className="CartTotalDetails">
                      <div
                        className="CartTotalPriceDetail"
                        style={{ color: this.props.PriceTextColor }}
                      >
                        Subtotal (2 items): $0.00
                      </div>
                      <div
                        className="CartTotalPriceDetail"
                        style={{ color: this.props.PriceTextColor }}
                      >
                        Discounts Applied: $0.00
                      </div>
                      <div
                        className="CartTotalPriceDetail"
                        style={{ color: this.props.PriceTextColor }}
                      >
                        Subtotal: $0.00
                      </div>
                    </div>
                  </Row>

                  <div id="CartSixthMain">
                    <div
                      className="CartProcessCheckoutButton"
                      style={{
                        backgroundColor: this.props.ButtonBGColor,
                        color: this.props.ButtonTextColor
                      }}
                    >
                      Proceed to Checkout
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </Fragment>
    );
  }
}

export default CartRightSection;
