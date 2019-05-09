// tslint:disable
// @ts-nocheck
import * as React from 'react';
import { ChromePicker } from 'react-color';
// import S3SingleFileUploaderWithPreviewAndFileNameCapability from '../../PushNotifications/S3SingleFileUploaderWithPreviewAndFileNameCapability';

class CartRightSection extends React.Component<any, any> {
  navicondisplayColorPicker: any;
  navbgdisplayColorPicker: any;
  navtitledisplayColorPicker: any;
  navbgcolor: string | string[];
  naviconcolor: string | string[];
  navtitlecolor: string | string[];
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
      /*CollectionMainSectionEditOptionValue: 'none',
      navbgcolor: '#2ecc71',
      navtitlecolor: '#ffffff',
      naviconcolor: '#ffffff',
      DropDownGetIconheader: 'fa fa-bars',
      NavTitle: 'Text',*/

      ShowHideGridListView: 'block',
      navtitledisplayColorPicker: false,
      navicondisplayColorPicker: false,
      navbgdisplayColorPicker: false,
      OnCollectionEditValue: 'none',
      bannerImageUrl: '',
    };
  }

  DropDownGetCartUserNavCallback = icon => {
    this.setState({ DropDownGetIconheader: icon });
    this.props.DropDownGetIconheader(icon);
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
  }
  CollectionMainSectionEditOption() {
    this.setState({ CollectionMainSectionEditOptionValue: 'block' });
    this.setState({ ShowHideGridListView: 'none' });
  }
  navtitlehandleClose = () => {
    this.setState({ navtitledisplayColorPicker: false });
  }
  navbghandleChange(navbgcolor) {
    this.setState({ navbgcolor: navbgcolor.hex });
    this.props.navbgcolorVall(navbgcolor);
  }
  navbghandleClose = () => {
    this.setState({ navbgdisplayColorPicker: false });
  }

  CollectionCloseEditSection() {
    this.setState({ CollectionMainSectionEditOptionValue: 'none' });
    this.setState({ ShowHideGridListView: 'block' });
  }
  OnCollectionEditClick = e => {
    this.setState({ NavTitleValue: e.target.value });
    this.props.NavTitle(e.target.value);
  }

  navbghandleClick = () => {
    this.setState({ navbgdisplayColorPicker: !this.navbgdisplayColorPicker });
  }
  navtitlehandleClick = () => {
    this.setState({
      navtitledisplayColorPicker: !this.navtitledisplayColorPicker
    });
  }
  naviconhandleClose = () => {
    this.setState({ navicondisplayColorPicker: false });
  }
  swatch = {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '15px',
    top: '2px'
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
   /* const CollectionSettings = {
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      naviconcolor: this.state.naviconcolor,
      navtitlecolor: this.state.navtitlecolor,
      navbgcolor: this.state.navbgcolor,
      NavTitle: this.state.NavTitle,
      bannerImageUrl: this.state.bannerImageUrl,
    };*/

    this.setState({ CollectionMainSectionEditOptionValue: 'none' });
    this.setState({ ShowHideGridListView: 'block' });
    this.props.DisplaySaveBtn();
  }
  bannerImageUrl = (value) => {
    this.setState({ bannerImageUrl: value });
    this.props.bannerImageUrlCallBack(value);
  }

  render() {
    
    return (
      <div className="ProductcustomizeMainsection">
        <div className="Productcustomizesection">
          <div className="ProductEffectTitle">
            <label> CUSTOMIZE CART & CHECKOUT </label>
          </div>
          <div id="ProductRightBody">
            <div
              id="CollectionEffectNavBarContainer"
              style={{ backgroundColor: this.props.navbgcolorValue || '#0E7C95' }}
            >
              <div
                id="CollectionEffectnavBars"
                style={{ color: this.props.naviconcolorValue }}
              >
                <i className={this.props.DropDownGetIconheaderValue || 'fa fa-bars'} />
              </div>
              <div
                id="CollectionEffectMyStoreTitle"
                style={{ color: this.props.navtitlecolorValue }}
              >
              { this.props.NavTitleValue === 'img' &&
                <img src={this.props.bannerImageUrl} style={{maxHeight:"30px", maxWidth: "90px" }} />
              }
              { this.props.NavTitleValue === 'text' &&
                'CART'
              }
              { !this.props.NavTitleValue &&
                'CART'
              }                
              </div>
              <div
                id="CollectionEditMainSlider"
                onClick={this.CollectionMainSectionEditOption}
              >
                <div id="CollectionEditOption">
                  <i className="fa fa-pencil" />
                </div>
              </div>
            </div>

            <div id="CollectionEffectBody">
              <div
                className="CollectionMainEditOptionContainer"
                style={{
                  display: this.state.CollectionMainSectionEditOptionValue
                }}
              >
                <div className="CollectionEditSettingOptionContainer">
                  <h2>EDIT NAVIGATION BAR</h2>
                  <p>
                    *Note: Editing this navigation bar will override the theme's
                    navigation bar for this page only.
                  </p>

                  <div className="CollectionMainEditTitle">
                    <div className="col-sm-12 CollectionSettingEditTitle">
                      <label>NAVIGATION BAR TITLE</label>
                    </div>
                    <div
                      className="col-sm-12 CollectionMainEditTitleView"
                      onChange={this.OnCollectionEditClick}
                    >
                      <select
                        name=""
                        id="CollectionMainEditSelect"
                        value={this.props.NavTitleValue || 'text'}
                      >
                        <option value="img">Use Image</option>
                        <option value="text">Use Text</option>
                      </select>
                    </div>
                  </div>

                  <div className="CollectionMainEditIcon">
                    <div className="col-sm-12 CollectionSettingIcon">
                      <label>NAV BAR BACKGROUND COLOR </label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditBGIconView">
                      <input
                        type="text"
                        value={this.props.navbgcolorValue || '#0E7C95'}
                        defaultValue={this.navbgcolor}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.navbghandleClick}
                        onBlur={this.navbghandleClose}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.props.navbgcolorValue || '#0E7C95'
                          }}
                          onClick={this.navbghandleClick}
                        />
                      </div>
                      {this.state.navbgdisplayColorPicker ? (
                        <div style={this.popover}>
                          <ChromePicker
                            color={this.props.navbgcolorValue || '#0E7C95'}
                            onChange={this.navbghandleChange}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  {/* <div className="CollectionMainEditIcon">
                    <div className="col-sm-12 CollectionSettingIcon">
                      <label>NAV BAR ICON (Will be applied globally)</label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditBGIconView">
                      <IconList
                        DropDownGetCartUserNavCallback={
                          this.DropDownGetCartUserNavCallback
                        }
                        IconClassName={this.props.DropDownGetIconheaderValue}
                      />
                    </div>
                  </div> */}

                  <div className="CollectionMainEditIconColor">
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
                        onBlur={this.naviconhandleClose}
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
                          <ChromePicker
                            color={this.props.naviconcolorValue || '#fff' }
                            onChange={this.naviconhandleChange}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div
                    className="CollectionMainEditIconColor"
                    style={{
                      display:
                        this.props.NavTitleValue === 'img' ? 'none' : 'block'
                    }}
                  >
                    <div className="col-sm-12 CollectionSettingEditIconColor">
                      <label>NAV BAR TITLE COLOR</label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditIconColorView">
                      <input
                        type="text"
                        value={this.props.navtitlecolorValue || '#fff'}
                        defaultValue={this.navtitlecolor}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.navtitlehandleClick}
                        onBlur={this.navtitlehandleClose}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.props.navtitlecolorValue || '#fff'
                          }}
                          onClick={this.navtitlehandleClick}
                        />
                      </div>
                      {this.state.navtitledisplayColorPicker ? (
                        <div style={this.popover}>
                          <ChromePicker
                            color={this.props.navtitlecolorValue || '#fff' }
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
                        this.props.NavTitleValue === 'img' ? 'block' : 'none'
                    }}
                  >
                    <div className="col-sm-12 CollectionSettingEditImg">
                      <label>NAV IMAGE</label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditIconImgView">
                    {/* <S3SingleFileUploaderWithPreviewAndFileNameCapability
                        label="Choose file"
                        acceptedFiles={[ 'image/jpeg', 'image/png' ]}
                        fileName={this.props.bannerImageUrl}
                        previewImageHeight={'100px'}
                        previewImageWidth={'100px'}
                        imageFolder={"navTitleImage"}
                        onChange={ (value) => this.bannerImageUrl(value) }
                      /> */}
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
                <div
                  className="row"
                  style={{ backgroundColor: this.props.CellBGColor }}
                  id="CartFirstMain"
                >
                  <div className="col-lg-4 CartFirstFirst">
                    <div className="CartPlaceholderImage">
                      <i className="fa fa-image" />
                    </div>
                  </div>
                  <div className="col-lg-6 CartFirstSecond">
                    <h2 style={{ color: this.props.ProductTitle }}>
                      PRODUCT TITLE
                    </h2>
                    <h4 style={{ color: this.props.ProductOptionColor }}>
                      option
                    </h4>
                    <h6 style={{ color: this.props.CellPriceColor }}>PRICE</h6>
                  </div>
                  <div className="col-lg-2 CartFirstThird">
                    <div
                      className="CartMinusSquare"
                      style={{ color: this.props.QuantityIconColor }}
                    >
                      <i className="fa fa-minus-square" />
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
                      <i className="fa fa-plus-square" />
                    </div>
                  </div>
                </div>

                <div
                  className="row"
                  style={{ backgroundColor: this.props.CellBGColor }}
                  id="CartSecondMain"
                >
                  <div className="col-lg-4 CartFirstFirst">
                    <div className="CartPlaceholderImage">
                      <i className="fa fa-image" />
                    </div>
                  </div>
                  <div className="col-lg-6 CartFirstSecond">
                    <h2 style={{ color: this.props.ProductTitle }}>
                      PRODUCT TITLE
                    </h2>
                    <h4 style={{ color: this.props.ProductOptionColor }}>
                      option
                    </h4>
                    <h6 style={{ color: this.props.CellPriceColor }}>PRICE</h6>
                  </div>
                  <div className="col-lg-2 CartFirstThird">
                    <div
                      className="CartMinusSquare"
                      style={{ color: this.props.QuantityIconColor }}
                    >
                      <i className="fa fa-minus-square" />
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
                      <i className="fa fa-plus-square" />
                    </div>
                  </div>
                </div>

                <div
                  className="row"
                  id="CartThirdMain"
                  style={{ backgroundColor: this.props.ApplyBGColor }}
                >
                  <div className="CartCoupon">
                    <div className="CartDiscountApply">
                      <div
                        className="CartDiscountCutIcon"
                        style={{ color: this.props.ApplyIconColor }}
                      >
                        <i className="fa fa-cut" />
                      </div>
                      <div
                        className="CartCouponText"
                        style={{ color: this.props.ApplyTextColor }}
                      >
                        Apply Coupon Code
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="row"
                  id="CartFourthMain"
                  style={{ backgroundColor: this.props.ApplyBGColor }}
                >
                  <div className="CartCoupon">
                    <div className="CartDiscountApply">
                      <div
                        className="CartDiscountCutIcon"
                        style={{ color: this.props.ApplyIconColor }}
                      >
                        <i className="fa fa-gift" />
                      </div>
                      <div
                        className="CartCouponText"
                        style={{ color: this.props.ApplyTextColor }}
                      >
                        Apply Gift Card
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row" id="CartFifthMain">
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
                </div>

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
      </div>
    );
  }
}

export default CartRightSection;
