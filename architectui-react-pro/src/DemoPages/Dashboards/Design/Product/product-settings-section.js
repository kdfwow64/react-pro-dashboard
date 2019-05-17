// tslint:disable
// @ts-nocheck
import * as React from 'react';
import { ChromePicker } from 'react-color';
import { Button, Card, CardHeader, Collapse } from 'reactstrap';

class ProductSettingsSection extends React.Component {
  constructor(props) {
    super(props);
    this.SilderActiveColorhandleChange = this.SilderActiveColorhandleChange.bind(
      this
    );
    this.SilderDotColorhandleChange = this.SilderDotColorhandleChange.bind(
      this
    );
    this.SilderBGColorhandleChange = this.SilderBGColorhandleChange.bind(this);
    this.FavButtonPos = this.FavButtonPos.bind(this);
    this.FavBtnColorhandleChange = this.FavBtnColorhandleChange.bind(this);
    this.ProductTitleColorhandleChange = this.ProductTitleColorhandleChange.bind(
      this
    );
    this.ProductPriceColorhandleChange = this.ProductPriceColorhandleChange.bind(
      this
    );
    this.ProductRatingColorhandleChange = this.ProductRatingColorhandleChange.bind(
      this
    );
    this.ProducttitlebarBGColorhandleChange = this.ProducttitlebarBGColorhandleChange.bind(
      this
    );
    this.ExternalBGColorhandleChange = this.ExternalBGColorhandleChange.bind(
      this
    );
    this.ExternalLinkColorhandleChange = this.ExternalLinkColorhandleChange.bind(
      this
    );
    this.ExternalIconColorhandleChange = this.ExternalIconColorhandleChange.bind(
      this
    );
    this.ProductCellBGColorhandleChange = this.ProductCellBGColorhandleChange.bind(
      this
    );
    this.OptionTitleColorhandleChange = this.OptionTitleColorhandleChange.bind(
      this
    );
    this.OptionValueColorhandleChange = this.OptionValueColorhandleChange.bind(
      this
    );
    this.OptionIconColorhandleChange = this.OptionIconColorhandleChange.bind(
      this
    );
    this.DescTitleColorhandleChange = this.DescTitleColorhandleChange.bind(
      this
    );
    this.DescTitleTexthandleChange = this.DescTitleTexthandleChange.bind(this);
    this.DescHeaderBGColorhandleChange = this.DescHeaderBGColorhandleChange.bind(
      this
    );
    this.DescBGColorhandleChange = this.DescBGColorhandleChange.bind(this);
    this.DescTextColorhandleChange = this.DescTextColorhandleChange.bind(this);
    this.CartTitleTexthandleChange = this.CartTitleTexthandleChange.bind(this);
    this.CartTitleColorhandleChange = this.CartTitleColorhandleChange.bind(
      this
    );
    this.CartButtonColorhandleChange = this.CartButtonColorhandleChange.bind(
      this
    );
    this.CartBGColorhandleChange = this.CartBGColorhandleChange.bind(this);

    this.SilderActiveColorhandleClose = this.SilderActiveColorhandleClose.bind(
      this
    );
    this.SilderDotColorhandleClose = this.SilderDotColorhandleClose.bind(this);
    this.SilderBGColorhandleClose = this.SilderBGColorhandleClose.bind(this);
    this.FavBtnColorhandleClose = this.FavBtnColorhandleClose.bind(this);
    this.ProductTitleColorhandleClose = this.ProductTitleColorhandleClose.bind(
      this
    );
    this.ProductPriceColorhandleClose = this.ProductPriceColorhandleClose.bind(
      this
    );
    this.ProductRatingColorhandleClose = this.ProductRatingColorhandleClose.bind(
      this
    );
    this.ProducttitlebarBGColorhandleClose = this.ProducttitlebarBGColorhandleClose.bind(
      this
    );
    this.ExternalIconColorhandleClose = this.ExternalIconColorhandleClose.bind(
      this
    );
    this.ExternalLinkColorhandleClose = this.ExternalLinkColorhandleClose.bind(
      this
    );
    this.ExternalBGColorhandleClose = this.ExternalBGColorhandleClose.bind(
      this
    );
    this.OptionTitleColorhandleClose = this.OptionTitleColorhandleClose.bind(
      this
    );
    this.OptionValueColorhandleClose = this.OptionValueColorhandleClose.bind(
      this
    );
    this.OptionIconColorhandleClose = this.OptionIconColorhandleClose.bind(
      this
    );
    this.DescTitleColorhandleClose = this.DescTitleColorhandleClose.bind(this);
    this.DescHeaderBGColorhandleClose = this.DescHeaderBGColorhandleClose.bind(
      this
    );
    this.DescBGColorhandleClose = this.DescBGColorhandleClose.bind(this);
    this.DescTextColorhandleClose = this.DescTextColorhandleClose.bind(this);
    this.CartTitleColorhandleClose = this.CartTitleColorhandleClose.bind(this);
    this.CartButtonColorhandleClose = this.CartButtonColorhandleClose.bind(
      this
    );
    this.CartBGColorhandleClose = this.CartBGColorhandleClose.bind(this);
    this.CartButtonLink = this.CartButtonLink.bind(this);
    this.AddLinkClick = this.AddLinkClick.bind(this);
    this.HideExternalSec = this.HideExternalSec.bind(this);
    this.DropDownGetIcon = this.DropDownGetIcon.bind(this);
    this.ExternalLinkUrlChange = this.ExternalLinkUrlChange.bind(this);
    this.ExternalLinkTitleChange = this.ExternalLinkTitleChange.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);

    this.state = {
      accordion: [true, false, false, false, false],
      showIconsList: 'none',
      SilderActiveColorPicker: false,
      SilderDotColorPicker: false,
      SilderBGColorPicker: false,
      FavBtnColorPicker: false,
      ProductTitleColorPicker: false,
      ProductPriceColorPicker: false,
      ProductRatingColorPicker: false,
      ProducttitlebarBGColorPicker: false,
      ProductCellBGColorPicker: false,
      OptionTitleColorPicker: false,
      OptionValueColorPicker: false,
      OptionIconColorPicker: false,
      DescTitleColorPicker: false,
      DescHeaderBGColorPicker: false,
      DescBGColorPicker: false,
      DescTextColorPicker: false,
      CartTitleColorPicker: false,
      CartButtonColorPicker: false,
      CartBGColorPicker: false
    };
  }

  showIconsListValue = () => {
    if (this.state.showIconsList === 'none') {
      this.setState({ showIconsList: 'block' });
    } else {
      this.setState({ showIconsList: 'none' });
    }
  };

  HideExternalSec = () => {
    this.setState({ AddLinkSecShow: 'none' });
    this.props.AddLinkSecCallback('none');
    this.props.RemoveLinkDetail();
  };

  AddLinkClick = () => {
    this.setState({ AddLinkSecShow: 'block' });
    this.props.AddLinkSecCallback('block');
  };

  ExternalLinkTitleChange = e => {
    this.setState({ ExternalLinkTitle: e.target.value });
    this.props.ExternalLinkTitleCallback(e.target.value);
  };

  ExternalLinkUrlChange = e => {
    this.setState({ ExternalLinkUrl: e.target.value });
    this.props.ExternalLinkUrlCallback(e.target.value);
  };

  SilderActiveColorhandleClose = () => {
    this.setState({ SilderActiveColorPicker: false });
  };

  SilderDotColorhandleClose = () => {
    this.setState({ SilderDotColorPicker: false });
  };

  SilderBGColorhandleClose = () => {
    this.setState({ SilderBGColorPicker: false });
  };

  FavBtnColorhandleClose = () => {
    this.setState({ FavBtnColorPicker: false });
  };

  ProductTitleColorhandleClose = () => {
    this.setState({ ProductTitleColorPicker: false });
  };

  ProductPriceColorhandleClose = () => {
    this.setState({ ProductPriceColorPicker: false });
  };

  ProductRatingColorhandleClose = () => {
    this.setState({ ProductRatingColorPicker: false });
  };

  ProducttitlebarBGColorhandleClose = () => {
    this.setState({ ProducttitlebarBGColorPicker: false });
  };

  ExternalIconColorhandleClose = () => {
    this.setState({ ExternalIconColorPicker: false });
  };

  ExternalLinkColorhandleClose = () => {
    this.setState({ ExternalLinkColorPicker: false });
  };

  ExternalBGColorhandleClose = () => {
    this.setState({ ExternalBGColorPicker: false });
  };

  ProductCellBGColorhandleClose = () => {
    this.setState({ ProductCellBGColorPicker: false });
  };

  OptionTitleColorhandleClose = () => {
    this.setState({ OptionTitleColorPicker: false });
  };

  OptionValueColorhandleClose = () => {
    this.setState({ OptionValueColorPicker: false });
  };

  OptionIconColorhandleClose = () => {
    this.setState({ OptionIconColorPicker: false });
  };

  DescTitleColorhandleClose = () => {
    this.setState({ DescTitleColorPicker: false });
  };

  DescHeaderBGColorhandleClose = () => {
    this.setState({ DescHeaderBGColorPicker: false });
  };

  DescBGColorhandleClose = () => {
    this.setState({ DescBGColorPicker: false });
  };

  DescTextColorhandleClose = () => {
    this.setState({ DescTextColorPicker: false });
  };

  CartTitleColorhandleClose = () => {
    this.setState({ CartTitleColorPicker: false });
  };

  CartButtonColorhandleClose = () => {
    this.setState({ CartButtonColorPicker: false });
  };

  CartBGColorhandleClose = () => {
    this.setState({ CartBGColorPicker: false });
  };

  SilderActiveColorhandleClick = e => {
    this.setState({
      SilderActiveColorPicker: !this.state.SilderActiveColorPicker
    });
  };

  SilderDotColorhandleClick = e => {
    this.setState({ SilderDotColorPicker: !this.state.SilderDotColorPicker });
  };

  SilderBGColorhandleClick = e => {
    this.setState({ SilderBGColorPicker: !this.state.SilderBGColorPicker });
  };

  FavBtnColorhandleClick = e => {
    this.setState({ FavBtnColorPicker: !this.state.FavBtnColorPicker });
  };

  ProductTitleColorhandleClick = e => {
    this.setState({
      ProductTitleColorPicker: !this.state.ProductTitleColorPicker
    });
  };

  ProductPriceColorhandleClick = e => {
    this.setState({
      ProductPriceColorPicker: !this.state.ProductPriceColorPicker
    });
  };

  ProductRatingColorhandleClick = e => {
    this.setState({
      ProductRatingColorPicker: !this.state.ProductRatingColorPicker
    });
  };

  ProducttitlebarBGColorhandleClick = e => {
    this.setState({
      ProducttitlebarBGColorPicker: !this.state.ProducttitlebarBGColorPicker
    });
  };

  ExternalIconColorhandleClick = e => {
    this.setState({
      ExternalIconColorPicker: !this.state.ExternalIconColorPicker
    });
  };

  ExternalLinkColorhandleClick = e => {
    this.setState({
      ExternalLinkColorPicker: !this.state.ExternalLinkColorPicker
    });
  };

  ExternalBGColorhandleClick = e => {
    this.setState({ ExternalBGColorPicker: !this.state.ExternalBGColorPicker });
  };

  ProductCellBGColorhandleClick = e => {
    this.setState({
      ProductCellBGColorPicker: !this.state.ProductCellBGColorPicker
    });
  };

  OptionTitleColorhandleClick = e => {
    this.setState({ OptionTitleColorPicker: !this.OptionTitleColorPicker });
  };

  OptionValueColorhandleClick = e => {
    this.setState({ OptionValueColorPicker: !this.OptionValueColorPicker });
  };

  OptionIconColorhandleClick = e => {
    this.setState({ OptionIconColorPicker: !this.OptionIconColorPicker });
  };

  DescTitleColorhandleClick = e => {
    this.setState({ DescTitleColorPicker: !this.DescTitleColorPicker });
  };

  DescHeaderBGColorhandleClick = e => {
    this.setState({ DescHeaderBGColorPicker: !this.DescHeaderBGColorPicker });
  };

  DescBGColorhandleClick = e => {
    this.setState({ DescBGColorPicker: !this.DescBGColorPicker });
  };

  DescTextColorhandleClick = e => {
    this.setState({ DescTextColorPicker: !this.DescTextColorPicker });
  };

  CartTitleColorhandleClick = e => {
    this.setState({ CartTitleColorPicker: !this.CartTitleColorPicker });
  };

  CartButtonColorhandleClick = e => {
    this.setState({ CartButtonColorPicker: !this.CartButtonColorPicker });
  };

  CartBGColorhandleClick = e => {
    this.setState({ CartBGColorPicker: !this.CartBGColorPicker });
  };

  SilderActiveColorhandleChange(SilderActiveColor) {
    this.setState({ SilderActiveColor: SilderActiveColor.hex });
    this.props.SilderActiveColorCallback(SilderActiveColor);
  }

  SilderDotColorhandleChange(SilderDotColor) {
    this.setState({ SilderDotColor: SilderDotColor.hex });
    this.props.SilderDotColorCallback(SilderDotColor);
  }

  SilderBGColorhandleChange(SilderBGColor) {
    this.setState({ SilderBGColor: SilderBGColor.hex });
    this.props.SilderBGColorCallback(SilderBGColor);
  }

  FavBtnColorhandleChange(FavBtnColor) {
    this.setState({ FavBtnColor: FavBtnColor.hex });
    this.props.FavBtnColorCallback(FavBtnColor);
  }

  ProductTitleColorhandleChange(ProductTitleColor) {
    this.setState({ ProductTitleColor: ProductTitleColor.hex });
    this.props.ProductTitleColorCallback(ProductTitleColor);
  }

  ProductPriceColorhandleChange(ProductPriceColor) {
    this.setState({ ProductPriceColor: ProductPriceColor.hex });
    this.props.ProductPriceColorCallback(ProductPriceColor);
  }

  ProductRatingColorhandleChange(ProductRatingColor) {
    this.setState({ ProductRatingColor: ProductRatingColor.hex });
    this.props.ProductRatingColorCallback(ProductRatingColor);
  }

  ProducttitlebarBGColorhandleChange(ProducttitlebarBGColor) {
    this.setState({ ProducttitlebarBGColor: ProducttitlebarBGColor.hex });
    this.props.ProducttitlebarBGColorCallback(ProducttitlebarBGColor);
  }

  ExternalIconColorhandleChange(ExternalIconColor) {
    this.setState({ ExternalIconColor: ExternalIconColor.hex });
    this.props.ExternalIconColorCallback(ExternalIconColor);
  }

  ExternalLinkColorhandleChange(ExternalLinkColor) {
    this.setState({ ExternalLinkColor: ExternalLinkColor.hex });
    this.props.ExternalLinkColorCallback(ExternalLinkColor);
  }

  ExternalBGColorhandleChange(ExternalBGColor) {
    this.setState({ ExternalBGColor: ExternalBGColor.hex });
    this.props.ExternalBGColorCallback(ExternalBGColor);
  }

  ProductCellBGColorhandleChange(ProductCellBGColor) {
    this.setState({ ProductCellBGColor: ProductCellBGColor.hex });
    this.props.ProductCellBGColorCallback(ProductCellBGColor);
  }

  OptionTitleColorhandleChange(OptionTitleColor) {
    this.setState({ OptionTitleColor: OptionTitleColor.hex });
    this.props.OptionTitleColorCallback(OptionTitleColor);
  }

  OptionValueColorhandleChange(OptionValueColor) {
    this.setState({ OptionValueColor: OptionValueColor.hex });
    this.props.OptionValueColorCallback(OptionValueColor);
  }

  OptionIconColorhandleChange(OptionIconColor) {
    this.setState({ OptionIconColor: OptionIconColor.hex });
    this.props.OptionIconColorCallback(OptionIconColor);
  }

  DescTitleColorhandleChange(DescTitleColor) {
    this.setState({ DescTitleColor: DescTitleColor.hex });
    this.props.DescTitleColorCallback(DescTitleColor);
  }

  DescTitleTexthandleChange(DescTitleText) {
    this.setState({ DescTitleText });
    this.props.DescTitleTextCallback(DescTitleText);
  }

  DescHeaderBGColorhandleChange(DescHeaderBGColor) {
    this.setState({ DescHeaderBGColor: DescHeaderBGColor.hex });
    this.props.DescHeaderBGColorCallback(DescHeaderBGColor);
  }

  DescBGColorhandleChange(DescBGColor) {
    this.setState({ DescBGColor: DescBGColor.hex });
    this.props.DescBGColorCallback(DescBGColor);
  }

  DescTextColorhandleChange(DescTextColor) {
    this.setState({ DescTextColor: DescTextColor.hex });
    this.props.DescTextColorCallback(DescTextColor);
  }

  CartTitleTexthandleChange(CartTitleText) {
    this.setState({ CartTitleText });
    this.props.CartTitleTextCallback(CartTitleText);
  }

  CartTitleColorhandleChange(CartTitleColor) {
    this.setState({ CartTitleColor: CartTitleColor.hex });
    this.props.CartTitleColorCallback(CartTitleColor);
  }

  CartButtonColorhandleChange(CartButtonColor) {
    this.setState({ CartButtonColor: CartButtonColor.hex });
    this.props.CartButtonColorCallback(CartButtonColor);
  }

  CartBGColorhandleChange(CartBGColor) {
    this.setState({ CartBGColor: CartBGColor.hex });
    this.props.CartBGColorCallback(CartBGColor);
  }

  CartButtonLink(e) {
    // this.setState({CartButtonLink: e.target.value});
    this.props.CartButtonAction(e.target.value);
  }

  FavButtonPos = e => {
    if (e.target.value === 'bottomright') {
      this.props.FavButtonBottom('30px');
      this.props.FavButtonTop('unset');
      this.props.FavButtonRight('5px');
      this.props.FavButtonLeft('unset');
      this.props.MarginLeftTitleSection('unset');
    }
    if (e.target.value === 'bottomleft') {
      this.props.FavButtonBottom('30px');
      this.props.FavButtonTop('unset');
      this.props.FavButtonRight('unset');
      this.props.FavButtonLeft('5px');
      this.props.MarginLeftTitleSection('unset');
    }
    if (e.target.value === 'topleft') {
      this.props.FavButtonBottom('unset');
      this.props.FavButtonTop('5px');
      this.props.FavButtonRight('unset');
      this.props.FavButtonLeft('5px');
      this.props.MarginLeftTitleSection('unset');
    }
    if (e.target.value === 'topright') {
      this.props.FavButtonBottom('unset');
      this.props.FavButtonTop('5px');
      this.props.FavButtonRight('5px');
      this.props.FavButtonLeft('unset');
      this.props.MarginLeftTitleSection('unset');
    }
    if (e.target.value === 'right') {
      this.props.FavButtonBottom('-62px');
      this.props.FavButtonTop('unset');
      this.props.FavButtonRight('5px');
      this.props.FavButtonLeft('unset');
      this.props.MarginLeftTitleSection('unset'); // margin-left: 50px !important; margin-left: unset;
    }
    if (e.target.value === 'left') {
      this.props.FavButtonBottom('-62px');
      this.props.FavButtonTop('unset');
      this.props.FavButtonRight('unset');
      this.props.FavButtonLeft('5px');
      this.props.MarginLeftTitleSection('50px');
    }
    this.props.FavButtonPos(e.target.value);
  };

  swatch = {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '2px',
    top: '40px'
  };

  popover = {
    position: 'absolute',
    zIndex: 99999
  };

  cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  DropDownGetIcon = e => {
    this.setState({ IconClassName: e.target.getAttribute('data-key') });
    this.props.DropDownGetIconCallback(e.target.getAttribute('data-key'));
    this.setState({ showIconsList: 'none' });
    // this.setState({IconColor: '#fff'});
  };

  CloseIconDrop() {
    if (this.state.showIconsList === 'block') {
      this.setState({ showIconsList: 'none' });
    }
  }

  DropDownGetIconProductExternalCallback = icon => {
    this.setState({ DropDownGetIconheader: icon });
    this.props.ExternalIcon(icon);
  };

  cartBtnPhoneValue = e => {
    this.props.cartBtnPhoneValue(e.target.value);
  };

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state
    });
  }

  render() {
    const IconArry = [
      { name: 'lnr-heart' },
      { name: 'lnr-star' },
      { name: 'pe-7s-cup' },
      { name: 'lnr-thumbs-up' },
      { name: 'lnr-pushpin' }
    ];
    const activeIcon = this.props.DropDownGetIcon;
    const listItems = IconArry.map((d, index) => {
      const activeClassName = activeIcon === d.name ? 'Iconactive' : '';

      const allClasses = `${activeClassName}`;

      return (
        <li
          key={d.name}
          data-key={d.name}
          className={allClasses}
          onClick={this.DropDownGetIcon}
          style={{
            color: this.state.IconColor,
            backgroundColor: this.state.IconBGColor,
            borderColor: this.state.IconBorderColor
          }}
        >
          <i className={d.name} data-key={d.name} />
        </li>
      );
    });

    return (
      <div id="accordion" className="accordion-wrapper mb-3">
        <CardHeader style={{ marginBottom: '10px' }}>
          <h3 className="leftCardHeader"> Product Settings </h3>{' '}
        </CardHeader>

        <Card>
          <CardHeader id="headingOne" onClick={() => this.toggleAccordion(0)}>
            <Button
              className="m-0 p-0"
              color="link"
              onClick={() => this.toggleAccordion(0)}
              aria-expanded={this.state.accordion[0]}
              aria-controls="exampleAccordion1"
            >
              PRODUCT IMAGES
            </Button>
          </CardHeader>
          <Collapse
            isOpen={this.state.accordion[0]}
            data-parent="#accordion"
            id="exampleAccordion1"
            className="proPaddBtm"
          >
            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative' }}
            >
              <h5>CIRCLE PAGE ACTIVE COLOR</h5>
              <input
                type="text"
                value={this.props.SilderActiveColorValue}
                defaultValue={this.SilderActiveColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.SilderActiveColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.SilderActiveColorValue
                  }}
                  onClick={this.SilderActiveColorhandleClick}
                />
              </div>
              {this.state.SilderActiveColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.SilderActiveColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.SilderActiveColorValue}
                    onChange={this.SilderActiveColorhandleChange}
                  />
                </div>
              ) : null}
            </div>
            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>CIRCLE PAGE INACTIVE COLOR</h5>
              <input
                type="text"
                value={this.props.SilderDotColorValue}
                defaultValue={this.SilderDotColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.SilderDotColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.SilderDotColorValue
                  }}
                  onClick={this.SilderDotColorhandleClick}
                />
              </div>
              {this.state.SilderDotColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.SilderDotColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.SilderDotColorValue}
                    onChange={this.SilderDotColorhandleChange}
                  />
                </div>
              ) : null}
            </div>
            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>PAGE CONTROL BACKGROUND</h5>
              <input
                type="text"
                value={this.props.SilderBGColorValue}
                defaultValue={this.SilderBGColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.SilderBGColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.SilderBGColorValue
                  }}
                  onClick={this.SilderBGColorhandleClick}
                />
              </div>
              {this.state.SilderBGColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.SilderBGColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.SilderBGColorValue}
                    onChange={this.SilderBGColorhandleChange}
                  />
                </div>
              ) : null}
            </div>
          </Collapse>
        </Card>

        <Card>
          <CardHeader
            className="b-radius-0"
            id="headingTwo"
            onClick={() => this.toggleAccordion(1)}
          >
            <Button
              className="m-0 p-0"
              color="link"
              onClick={() => this.toggleAccordion(1)}
              aria-expanded={this.state.accordion[1]}
              aria-controls="exampleAccordion2"
            >
              TITLE & PRICE
            </Button>
          </CardHeader>
          <Collapse
            isOpen={this.state.accordion[1]}
            data-parent="#accordion"
            id="exampleAccordion2"
            className="proPaddBtm"
          >
            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>TITLE COLOR</h5>
              <input
                type="text"
                value={this.props.ProductTitleColorValue}
                defaultValue={this.ProductTitleColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.ProductTitleColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.ProductTitleColorValue
                  }}
                  onClick={this.ProductTitleColorhandleClick}
                />
              </div>
              {this.state.ProductTitleColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.ProductTitleColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.ProductTitleColorValue}
                    onChange={this.ProductTitleColorhandleChange}
                  />
                </div>
              ) : null}
            </div>
            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>PRICE COLOR</h5>
              <input
                type="text"
                value={this.props.ProductPriceColorValue}
                defaultValue={this.ProductPriceColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.ProductPriceColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.ProductPriceColorValue
                  }}
                  onClick={this.ProductPriceColorhandleClick}
                />
              </div>
              {this.state.ProductPriceColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.ProductPriceColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.ProductPriceColorValue}
                    onChange={this.ProductPriceColorhandleChange}
                  />
                </div>
              ) : null}
            </div>
            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>CELL BACKGROUND</h5>
              <input
                type="text"
                value={this.props.ProducttitlebarBGColorValue}
                defaultValue={this.ProducttitlebarBGColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.ProducttitlebarBGColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.ProducttitlebarBGColorValue
                  }}
                  onClick={this.ProducttitlebarBGColorhandleClick}
                />
              </div>
              {this.state.ProducttitlebarBGColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.ProducttitlebarBGColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.ProducttitlebarBGColorValue}
                    onChange={this.ProducttitlebarBGColorhandleChange}
                  />
                </div>
              ) : null}
            </div>
          </Collapse>
        </Card>

        <Card>
          <CardHeader
            className="b-radius-0"
            id="headingThree"
            onClick={() => this.toggleAccordion(2)}
          >
            <Button
              className="m-0 p-0"
              color="link"
              onClick={() => this.toggleAccordion(2)}
              aria-expanded={this.state.accordion[2]}
              aria-controls="exampleAccordion3"
            >
              PRODUCT OPTIONS
            </Button>
          </CardHeader>
          <Collapse
            isOpen={this.state.accordion[2]}
            data-parent="#accordion"
            id="exampleAccordion3"
            className="proPaddBtm"
          >
            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>CELL BACKGROUND COLOR</h5>
              <input
                type="text"
                value={this.props.ProductCellBGColorValue}
                defaultValue={this.ProductCellBGColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.ProductCellBGColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.ProductCellBGColorValue
                  }}
                  onClick={this.ProductCellBGColorhandleClick}
                />
              </div>
              {this.state.ProductCellBGColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.ProductCellBGColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.ProductCellBGColorValue}
                    onChange={this.ProductCellBGColorhandleChange}
                  />
                </div>
              ) : null}
            </div>

            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>OPTION TITLE COLOR</h5>
              <input
                type="text"
                value={this.props.OptionTitleColorValue}
                defaultValue={this.OptionTitleColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.OptionTitleColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.OptionTitleColorValue
                  }}
                  onClick={this.OptionTitleColorhandleClick}
                />
              </div>
              {this.state.OptionTitleColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.OptionTitleColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.OptionTitleColorValue}
                    onChange={this.OptionTitleColorhandleChange}
                  />
                </div>
              ) : null}
            </div>

            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>OPTION VALUE COLOR</h5>
              <input
                type="text"
                value={this.props.OptionValueColorValue}
                defaultValue={this.OptionValueColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.OptionValueColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.OptionValueColorValue
                  }}
                  onClick={this.OptionValueColorhandleClick}
                />
              </div>
              {this.state.OptionValueColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.OptionValueColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.OptionValueColorValue}
                    onChange={this.OptionValueColorhandleChange}
                  />
                </div>
              ) : null}
            </div>

            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>OPTION ICON COLOR</h5>
              <input
                type="text"
                value={this.props.OptionIconColorValue}
                defaultValue={this.OptionIconColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.OptionIconColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.OptionIconColorValue
                  }}
                  onClick={this.OptionIconColorhandleClick}
                />
              </div>
              {this.state.OptionIconColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.OptionIconColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.OptionIconColorValue}
                    onChange={this.OptionIconColorhandleChange}
                  />
                </div>
              ) : null}
            </div>
          </Collapse>
        </Card>

        <Card>
          <CardHeader
            className="b-radius-0"
            id="headingFour"
            onClick={() => this.toggleAccordion(3)}
          >
            <Button
              className="m-0 p-0"
              color="link"
              onClick={() => this.toggleAccordion(3)}
              aria-expanded={this.state.accordion[3]}
              aria-controls="exampleAccordion4"
            >
              DESCRIPTION
            </Button>
          </CardHeader>
          <Collapse
            isOpen={this.state.accordion[3]}
            data-parent="#accordion"
            id="exampleAccordion4"
            className="proPaddBtm"
          >
            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>HEADER TITLE</h5>
              <input
                type="text"
                defaultValue={this.props.DescTitleTextValue}
                onChange={this.DescTitleTexthandleChange}
              />
            </div>

            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>HEADER TITLE COLOR</h5>
              <input
                type="text"
                value={this.props.DescTitleColorValue}
                defaultValue={this.DescTitleColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.DescTitleColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.DescTitleColorValue
                  }}
                  onClick={this.DescTitleColorhandleClick}
                />
              </div>
              {this.state.DescTitleColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.DescTitleColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.DescTitleColorValue}
                    onChange={this.DescTitleColorhandleChange}
                  />
                </div>
              ) : null}
            </div>

            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>HEADER BACKGROUND COLOR</h5>
              <input
                type="text"
                value={this.props.DescHeaderBGColorValue}
                defaultValue={this.DescHeaderBGColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.DescHeaderBGColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.DescHeaderBGColorValue
                  }}
                  onClick={this.DescHeaderBGColorhandleClick}
                />
              </div>
              {this.state.DescHeaderBGColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.DescHeaderBGColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.DescHeaderBGColorValue}
                    onChange={this.DescHeaderBGColorhandleChange}
                  />
                </div>
              ) : null}
            </div>

            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>DESCRIPTION BACKGROUND COLOR</h5>
              <input
                type="text"
                value={this.props.DescBGColorValue}
                defaultValue={this.DescBGColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.DescBGColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.DescBGColorValue
                  }}
                  onClick={this.DescBGColorhandleClick}
                />
              </div>
              {this.state.DescBGColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.DescBGColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.DescBGColorValue}
                    onChange={this.DescBGColorhandleChange}
                  />
                </div>
              ) : null}
            </div>

            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>DESCRIPTION TEXT COLOR</h5>
              <input
                type="text"
                value={this.props.DescTextColorValue}
                defaultValue={this.DescTextColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.DescTextColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.DescTextColorValue
                  }}
                  onClick={this.DescTextColorhandleClick}
                />
              </div>
              {this.state.DescTextColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.DescTextColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.DescTextColorValue}
                    onChange={this.DescTextColorhandleChange}
                  />
                </div>
              ) : null}
            </div>
          </Collapse>
        </Card>

        <Card>
          <CardHeader
            className="b-radius-0"
            id="headingFive"
            onClick={() => this.toggleAccordion(4)}
          >
            <Button
              className="m-0 p-0"
              color="link"
              onClick={() => this.toggleAccordion(4)}
              aria-expanded={this.state.accordion[4]}
              aria-controls="exampleAccordion5"
            >
              ADD TO CART
            </Button>
          </CardHeader>
          <Collapse
            isOpen={this.state.accordion[4]}
            data-parent="#accordion"
            id="exampleAccordion5"
            style={{ paddingBottom: '15px' }}
          >
            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>TITLE</h5>
              <input
                type="text"
                defaultValue={this.props.CartTitleTextValue}
                onChange={this.CartTitleTexthandleChange}
              />
            </div>

            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>TITLE COLOR</h5>
              <input
                type="text"
                value={this.props.CartTitleColorValue}
                defaultValue={this.CartTitleColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.CartTitleColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.CartTitleColorValue
                  }}
                  onClick={this.CartTitleColorhandleClick}
                />
              </div>
              {this.state.CartTitleColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.CartTitleColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.CartTitleColorValue}
                    onChange={this.CartTitleColorhandleChange}
                  />
                </div>
              ) : null}
            </div>

            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>BUTTON COLOR</h5>
              <input
                type="text"
                value={this.props.CartButtonColorValue}
                defaultValue={this.CartButtonColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.CartButtonColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.CartButtonColorValue
                  }}
                  onClick={this.CartButtonColorhandleClick}
                />
              </div>
              {this.state.CartButtonColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.CartButtonColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.CartButtonColorValue}
                    onChange={this.CartButtonColorhandleChange}
                  />
                </div>
              ) : null}
            </div>

            <div
              className="ProductSilderActiveColor"
              style={{ position: 'relative', marginTop: '20px' }}
            >
              <h5>CELL BACKGROUND COLOR</h5>
              <input
                type="text"
                value={this.props.CartBGColorValue}
                defaultValue={this.CartBGColor}
                id="CollectionDropDown"
                className="textColorCode"
                onClick={this.CartBGColorhandleClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.CartBGColorValue
                  }}
                  onClick={this.CartBGColorhandleClick}
                />
              </div>
              {this.state.CartBGColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.CartBGColorhandleClose}
                  />
                  <ChromePicker
                    color={this.props.CartBGColorValue}
                    onChange={this.CartBGColorhandleChange}
                  />
                </div>
              ) : null}
            </div>
          </Collapse>
        </Card>
      </div>
    );
  }
}

export default ProductSettingsSection;
