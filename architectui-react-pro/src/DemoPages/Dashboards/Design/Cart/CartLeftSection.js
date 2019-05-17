// tslint:disable
// @ts-nocheck
import * as React from 'react';
import { ChromePicker } from 'react-color';
import { Col, Row, Card, CardBody, CardTitle, CardHeader } from 'reactstrap';

class CartLeftSection extends React.Component {
  constructor(props) {
    super(props);
    this.CartBGColorhandleClose = this.CartBGColorhandleClose.bind(this);
    this.CellBGColorhandleClose = this.CellBGColorhandleClose.bind(this);
    this.ProductTitlehandleClose = this.ProductTitlehandleClose.bind(this);
    this.ProductOptionColorhandleClose = this.ProductOptionColorhandleClose.bind(
      this
    );
    this.CellPriceColorhandleClose = this.CellPriceColorhandleClose.bind(this);
    this.QuantityIconColorhandleClose = this.QuantityIconColorhandleClose.bind(
      this
    );
    this.QuantityTextColorhandleClose = this.QuantityTextColorhandleClose.bind(
      this
    );
    this.ApplyBGColorhandleClose = this.ApplyBGColorhandleClose.bind(this);
    this.ApplyIconColorhandleClose = this.ApplyIconColorhandleClose.bind(this);
    this.ApplyTextColorhandleClose = this.ApplyTextColorhandleClose.bind(this);
    this.PriceTextColorhandleClose = this.PriceTextColorhandleClose.bind(this);
    this.ButtonBGColorhandleClose = this.ButtonBGColorhandleClose.bind(this);
    this.ButtonTextColorhandleClose = this.ButtonTextColorhandleClose.bind(
      this
    );

    this.CartBGColorhandleChange = this.CartBGColorhandleChange.bind(this);
    this.CellBGColorhandleChange = this.CellBGColorhandleChange.bind(this);
    this.ProductTitlehandleChange = this.ProductTitlehandleChange.bind(this);
    this.ProductOptionColorhandleChange = this.ProductOptionColorhandleChange.bind(
      this
    );
    this.CellPriceColorhandleChange = this.CellPriceColorhandleChange.bind(
      this
    );
    this.QuantityIconColorhandleChange = this.QuantityIconColorhandleChange.bind(
      this
    );
    this.QuantityTextColorhandleChange = this.QuantityTextColorhandleChange.bind(
      this
    );
    this.ApplyBGColorhandleChange = this.ApplyBGColorhandleChange.bind(this);
    this.ApplyIconColorhandleChange = this.ApplyIconColorhandleChange.bind(
      this
    );
    this.ApplyTextColorhandleChange = this.ApplyTextColorhandleChange.bind(
      this
    );
    this.PriceTextColorhandleChange = this.PriceTextColorhandleChange.bind(
      this
    );
    this.ButtonBGColorhandleChange = this.ButtonBGColorhandleChange.bind(this);
    this.ButtonTextColorhandleChange = this.ButtonTextColorhandleChange.bind(
      this
    );

    this.state = {
      CartBGColorPicker: false,
      CellBGColorPicker: false,
      ProductTitlePicker: false,
      ProductOptionColorPicker: false,
      CellPriceColorPicker: false,
      QuantityIconColorPicker: false,
      QuantityTextColorPicker: false,
      ApplyBGColorPicker: false,
      ApplyIconColorPicker: false,
      ApplyTextColorPicker: false,
      PriceTextColorPicker: false,
      ButtonBGColorPicker: false,
      ButtonTextColorPicker: false
    };
  }

  CartBGColorhandleClose = () => {
    this.setState({ CartBGColorPicker: false });
  };

  CellBGColorhandleClose = () => {
    this.setState({ CellBGColorPicker: false });
  };

  ProductTitlehandleClose = () => {
    this.setState({ ProductTitlePicker: false });
  };

  ProductOptionColorhandleClose = () => {
    this.setState({ ProductOptionColorPicker: false });
  };

  CellPriceColorhandleClose = () => {
    this.setState({ CellPriceColorPicker: false });
  };

  QuantityIconColorhandleClose = () => {
    this.setState({ QuantityIconColorPicker: false });
  };

  QuantityTextColorhandleClose = () => {
    this.setState({ QuantityTextColorPicker: false });
  };

  ApplyBGColorhandleClose = () => {
    this.setState({ ApplyBGColorPicker: false });
  };

  ApplyIconColorhandleClose = () => {
    this.setState({ ApplyIconColorPicker: false });
  };

  ApplyTextColorhandleClose = () => {
    this.setState({ ApplyTextColorPicker: false });
  };

  PriceTextColorhandleClose = () => {
    this.setState({ PriceTextColorPicker: false });
  };

  ButtonBGColorhandleClose = () => {
    this.setState({ ButtonBGColorPicker: false });
  };

  ButtonTextColorhandleClose = () => {
    this.setState({ ButtonTextColorPicker: false });
  };

  CartBGColorhandleClick = e => {
    this.setState({ CartBGColorPicker: !this.state.CartBGColorPicker });
  };

  CellBGColorhandleClick = e => {
    this.setState({ CellBGColorPicker: !this.CellBGColorPicker });
  };

  ProductTitlehandleClick = e => {
    this.setState({ ProductTitlePicker: !this.ProductTitlePicker });
  };

  ProductOptionColorhandleClick = e => {
    this.setState({ ProductOptionColorPicker: !this.ProductOptionColorPicker });
  };

  CellPriceColorhandleClick = e => {
    this.setState({ CellPriceColorPicker: !this.CellPriceColorPicker });
  };

  QuantityIconColorhandleClick = e => {
    this.setState({ QuantityIconColorPicker: !this.QuantityIconColorPicker });
  };

  QuantityTextColorhandleClick = e => {
    this.setState({ QuantityTextColorPicker: !this.QuantityTextColorPicker });
  };

  ApplyBGColorhandleClick = e => {
    this.setState({ ApplyBGColorPicker: !this.ApplyBGColorPicker });
  };

  ApplyIconColorhandleClick = e => {
    this.setState({ ApplyIconColorPicker: !this.ApplyIconColorPicker });
  };

  ApplyTextColorhandleClick = e => {
    this.setState({ ApplyTextColorPicker: !this.ApplyTextColorPicker });
  };

  PriceTextColorhandleClick = e => {
    this.setState({ PriceTextColorPicker: !this.PriceTextColorPicker });
  };

  ButtonBGColorhandleClick = e => {
    this.setState({ ButtonBGColorPicker: !this.ButtonBGColorPicker });
  };

  ButtonTextColorhandleClick = e => {
    this.setState({ ButtonTextColorPicker: !this.ButtonTextColorPicker });
  };

  CartBGColorhandleChange(CartBGColor) {
    this.setState({ CartBGColor: CartBGColor.hex });
    this.props.CartBGColorCallback(CartBGColor);
  }

  CellBGColorhandleChange(CellBGColor) {
    this.setState({ CellBGColor: CellBGColor.hex });
    this.props.CellBGColorCallback(CellBGColor);
  }

  ProductTitlehandleChange(ProductTitle) {
    this.setState({ ProductTitle: ProductTitle.hex });
    this.props.ProductTitleCallback(ProductTitle);
  }

  ProductOptionColorhandleChange(ProductOptionColor) {
    this.setState({ ProductOptionColor: ProductOptionColor.hex });
    this.props.ProductOptionColorCallback(ProductOptionColor);
  }

  CellPriceColorhandleChange(CellPriceColor) {
    this.setState({ CellPriceColor: CellPriceColor.hex });
    this.props.CellPriceColorCallback(CellPriceColor);
  }

  QuantityIconColorhandleChange(QuantityIconColor) {
    this.setState({ QuantityIconColor: QuantityIconColor.hex });
    this.props.QuantityIconColorCallback(QuantityIconColor);
  }

  QuantityTextColorhandleChange(QuantityTextColor) {
    this.setState({ QuantityTextColor: QuantityTextColor.hex });
    this.props.QuantityTextColorCallback(QuantityTextColor);
  }

  ApplyBGColorhandleChange(ApplyBGColor) {
    this.setState({ ApplyBGColor: ApplyBGColor.hex });
    this.props.ApplyBGColorCallback(ApplyBGColor);
  }

  ApplyIconColorhandleChange(ApplyIconColor) {
    this.setState({ ApplyIconColor: ApplyIconColor.hex });
    this.props.ApplyIconColorCallback(ApplyIconColor);
  }

  ApplyTextColorhandleChange(ApplyTextColor) {
    this.setState({ ApplyTextColor: ApplyTextColor.hex });
    this.props.ApplyTextColorCallback(ApplyTextColor);
  }

  PriceTextColorhandleChange(PriceTextColor) {
    this.setState({ PriceTextColor: PriceTextColor.hex });
    this.props.PriceTextColorCallback(PriceTextColor);
  }

  ButtonBGColorhandleChange(ButtonBGColor) {
    this.setState({ ButtonBGColor: ButtonBGColor.hex });
    this.props.ButtonBGColorCallback(ButtonBGColor);
  }

  ButtonTextColorhandleChange(ButtonTextColor) {
    this.setState({ ButtonTextColor: ButtonTextColor.hex });
    this.props.ButtonTextColorCallback(ButtonTextColor);
  }

  swatch = {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '4px',
    top: '40px'
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

  cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  render() {
    return (
      <Card className="mb-3">
        <CardHeader>
          <h3 className="leftCardHeader"> Cart Settings </h3>{' '}
        </CardHeader>
        <Row className="leftCenterSec">
          <div
            className="ProductSilderActiveColor"
            style={{ position: 'relative' }}
          >
            <h5>BACKGROUND COLOR</h5>
            <input
              type="text"
              value={this.props.CartBGColor}
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
                  backgroundColor: this.props.CartBGColor
                }}
                onClick={this.CartBGColorhandleClick}
              />
            </div>
            {this.state.CartBGColorPicker ? (
              <div style={this.popover}>
                <div style={this.cover} onClick={this.CartBGColorhandleClose} />
                <ChromePicker
                  color={this.props.CartBGColor}
                  onChange={this.CartBGColorhandleChange}
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
              value={this.props.CellBGColor}
              defaultValue={this.CellBGColor}
              id="CollectionDropDown"
              className="textColorCode"
              onClick={this.CellBGColorhandleClick}
            />
            <div style={this.swatch}>
              <div
                className="colorPickerBorder"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: this.props.CellBGColor
                }}
                onClick={this.CellBGColorhandleClick}
              />
            </div>
            {this.state.CellBGColorPicker ? (
              <div style={this.popover}>
                <div style={this.cover} onClick={this.CellBGColorhandleClose} />
                <ChromePicker
                  color={this.props.CellBGColor}
                  onChange={this.CellBGColorhandleChange}
                />
              </div>
            ) : null}
          </div>

          <div
            className="ProductSilderActiveColor"
            style={{ position: 'relative', marginTop: '20px' }}
          >
            <h5>PRODUCT TITLE COLOR</h5>
            <input
              type="text"
              value={this.props.ProductTitle}
              defaultValue={this.ProductTitle}
              id="CollectionDropDown"
              className="textColorCode"
              onClick={this.ProductTitlehandleClick}
            />
            <div style={this.swatch}>
              <div
                className="colorPickerBorder"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: this.props.ProductTitle
                }}
                onClick={this.ProductTitlehandleClick}
              />
            </div>
            {this.state.ProductTitlePicker ? (
              <div style={this.popover}>
                <div
                  style={this.cover}
                  onClick={this.ProductTitlehandleClose}
                />
                <ChromePicker
                  color={this.props.ProductTitle}
                  onChange={this.ProductTitlehandleChange}
                />
              </div>
            ) : null}
          </div>

          <div
            className="ProductSilderActiveColor"
            style={{ position: 'relative', marginTop: '20px' }}
          >
            <h5>OPTION COLOR</h5>
            <input
              type="text"
              value={this.props.ProductOptionColor}
              defaultValue={this.ProductOptionColor}
              id="CollectionDropDown"
              className="textColorCode"
              onClick={this.ProductOptionColorhandleClick}
            />
            <div style={this.swatch}>
              <div
                className="colorPickerBorder"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: this.props.ProductOptionColor
                }}
                onClick={this.ProductOptionColorhandleClick}
              />
            </div>
            {this.state.ProductOptionColorPicker ? (
              <div style={this.popover}>
                <div
                  style={this.cover}
                  onClick={this.ProductOptionColorhandleClose}
                />
                <ChromePicker
                  color={this.props.ProductOptionColor}
                  onChange={this.ProductOptionColorhandleChange}
                />
              </div>
            ) : null}
          </div>

          <div
            className="ProductSilderActiveColor"
            style={{ position: 'relative', marginTop: '20px' }}
          >
            <h5>CELL PRICE COLOR</h5>
            <input
              type="text"
              value={this.props.CellPriceColor}
              defaultValue={this.CellPriceColor}
              id="CollectionDropDown"
              className="textColorCode"
              onClick={this.CellPriceColorhandleClick}
            />
            <div style={this.swatch}>
              <div
                className="colorPickerBorder"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: this.props.CellPriceColor
                }}
                onClick={this.CellPriceColorhandleClick}
              />
            </div>
            {this.state.CellPriceColorPicker ? (
              <div style={this.popover}>
                <div
                  style={this.cover}
                  onClick={this.CellPriceColorhandleClose}
                />
                <ChromePicker
                  color={this.props.CellPriceColor}
                  onChange={this.CellPriceColorhandleChange}
                />
              </div>
            ) : null}
          </div>

          <div
            className="ProductSilderActiveColor"
            style={{ position: 'relative', marginTop: '20px' }}
          >
            <h5>QUANTITY ICON COLOR</h5>
            <input
              type="text"
              value={this.props.QuantityIconColor}
              defaultValue={this.QuantityIconColor}
              id="CollectionDropDown"
              className="textColorCode"
              onClick={this.QuantityIconColorhandleClick}
            />
            <div style={this.swatch}>
              <div
                className="colorPickerBorder"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: this.props.QuantityIconColor
                }}
                onClick={this.QuantityIconColorhandleClick}
              />
            </div>
            {this.state.QuantityIconColorPicker ? (
              <div style={this.popover}>
                <div
                  style={this.cover}
                  onClick={this.QuantityIconColorhandleClose}
                />
                <ChromePicker
                  color={this.props.QuantityIconColor}
                  onChange={this.QuantityIconColorhandleChange}
                />
              </div>
            ) : null}
          </div>

          <div
            className="ProductSilderActiveColor"
            style={{ position: 'relative', marginTop: '20px' }}
          >
            <h5>QUANTITY TEXT COLOR</h5>
            <input
              type="text"
              value={this.props.QuantityTextColor}
              defaultValue={this.QuantityTextColor}
              id="CollectionDropDown"
              className="textColorCode"
              onClick={this.QuantityTextColorhandleClick}
            />
            <div style={this.swatch}>
              <div
                className="colorPickerBorder"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: this.props.QuantityTextColor
                }}
                onClick={this.QuantityTextColorhandleClick}
              />
            </div>
            {this.state.QuantityTextColorPicker ? (
              <div style={this.popover}>
                <div
                  style={this.cover}
                  onClick={this.QuantityTextColorhandleClose}
                />
                <ChromePicker
                  color={this.props.QuantityTextColor}
                  onChange={this.QuantityTextColorhandleChange}
                />
              </div>
            ) : null}
          </div>

          <div
            className="ProductSilderActiveColor"
            style={{ position: 'relative', marginTop: '20px' }}
          >
            <h5>COUPON/GIFT INPUT BACKGROUND COLOR</h5>
            <input
              type="text"
              value={this.props.ApplyBGColor}
              defaultValue={this.ApplyBGColor}
              id="CollectionDropDown"
              className="textColorCode"
              onClick={this.ApplyBGColorhandleClick}
            />
            <div style={this.swatch}>
              <div
                className="colorPickerBorder"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: this.props.ApplyBGColor
                }}
                onClick={this.ApplyBGColorhandleClick}
              />
            </div>
            {this.state.ApplyBGColorPicker ? (
              <div style={this.popover}>
                <div
                  style={this.cover}
                  onClick={this.ApplyBGColorhandleClose}
                />
                <ChromePicker
                  color={this.props.ApplyBGColor}
                  onChange={this.ApplyBGColorhandleChange}
                />
              </div>
            ) : null}
          </div>

          <div
            className="ProductSilderActiveColor"
            style={{ position: 'relative', marginTop: '20px' }}
          >
            <h5>COUPON/GIFT ICON COLOR</h5>
            <input
              type="text"
              value={this.props.ApplyIconColor}
              defaultValue={this.ApplyIconColor}
              id="CollectionDropDown"
              className="textColorCode"
              onClick={this.ApplyIconColorhandleClick}
            />
            <div style={this.swatch}>
              <div
                className="colorPickerBorder"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: this.props.ApplyIconColor
                }}
                onClick={this.ApplyIconColorhandleClick}
              />
            </div>
            {this.state.ApplyIconColorPicker ? (
              <div style={this.popover}>
                <div
                  style={this.cover}
                  onClick={this.ApplyIconColorhandleClose}
                />
                <ChromePicker
                  color={this.props.ApplyIconColor}
                  onChange={this.ApplyIconColorhandleChange}
                />
              </div>
            ) : null}
          </div>

          <div
            className="ProductSilderActiveColor"
            style={{ position: 'relative', marginTop: '20px' }}
          >
            <h5>COUPON/GIFT TEXT COLOR</h5>
            <input
              type="text"
              value={this.props.ApplyTextColor}
              defaultValue={this.ApplyTextColor}
              id="CollectionDropDown"
              className="textColorCode"
              onClick={this.ApplyTextColorhandleClick}
            />
            <div style={this.swatch}>
              <div
                className="colorPickerBorder"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: this.props.ApplyTextColor
                }}
                onClick={this.ApplyTextColorhandleClick}
              />
            </div>
            {this.state.ApplyTextColorPicker ? (
              <div style={this.popover}>
                <div
                  style={this.cover}
                  onClick={this.ApplyTextColorhandleClose}
                />
                <ChromePicker
                  color={this.props.ApplyTextColor}
                  onChange={this.ApplyTextColorhandleChange}
                />
              </div>
            ) : null}
          </div>

          <div
            className="ProductSilderActiveColor"
            style={{ position: 'relative', marginTop: '20px' }}
          >
            <h5>PRICE DESCRIPTION TEXT COLOR</h5>
            <input
              type="text"
              value={this.props.PriceTextColor}
              defaultValue={this.PriceTextColor}
              id="CollectionDropDown"
              className="textColorCode"
              onClick={this.PriceTextColorhandleClick}
            />
            <div style={this.swatch}>
              <div
                className="colorPickerBorder"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: this.props.PriceTextColor
                }}
                onClick={this.PriceTextColorhandleClick}
              />
            </div>
            {this.state.PriceTextColorPicker ? (
              <div style={this.popover}>
                <div
                  style={this.cover}
                  onClick={this.PriceTextColorhandleClose}
                />
                <ChromePicker
                  color={this.props.PriceTextColor}
                  onChange={this.PriceTextColorhandleChange}
                />
              </div>
            ) : null}
          </div>

          <div
            className="ProductSilderActiveColor"
            style={{ position: 'relative', marginTop: '20px' }}
          >
            <h5>BUTTON BACKGROUND COLOR</h5>
            <input
              type="text"
              value={this.props.ButtonBGColor}
              defaultValue={this.ButtonBGColor}
              id="CollectionDropDown"
              className="textColorCode"
              onClick={this.ButtonBGColorhandleClick}
            />
            <div style={this.swatch}>
              <div
                className="colorPickerBorder"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: this.props.ButtonBGColor
                }}
                onClick={this.ButtonBGColorhandleClick}
              />
            </div>
            {this.state.ButtonBGColorPicker ? (
              <div style={this.popover}>
                <div
                  style={this.cover}
                  onClick={this.ButtonBGColorhandleClose}
                />
                <ChromePicker
                  color={this.props.ButtonBGColor}
                  onChange={this.ButtonBGColorhandleChange}
                />
              </div>
            ) : null}
          </div>

          <div
            className="ProductSilderActiveColor"
            style={{ position: 'relative', marginTop: '20px' }}
          >
            <h5>BUTTON TITLE COLOR</h5>
            <input
              type="text"
              value={this.props.ButtonTextColor}
              defaultValue={this.ButtonTextColor}
              id="CollectionDropDown"
              className="textColorCode"
              onClick={this.ButtonTextColorhandleClick}
            />
            <div style={this.swatch}>
              <div
                className="colorPickerBorder"
                style={{
                  width: '20px',
                  height: '20px',
                  backgroundColor: this.props.ButtonTextColor
                }}
                onClick={this.ButtonTextColorhandleClick}
              />
            </div>
            {this.state.ButtonTextColorPicker ? (
              <div style={this.popover}>
                <div
                  style={this.cover}
                  onClick={this.ButtonTextColorhandleClose}
                />
                <ChromePicker
                  color={this.props.ButtonTextColor}
                  onChange={this.ButtonTextColorhandleChange}
                />
              </div>
            ) : null}
          </div>
        </Row>
      </Card>
    );
  }
}

export default CartLeftSection;
