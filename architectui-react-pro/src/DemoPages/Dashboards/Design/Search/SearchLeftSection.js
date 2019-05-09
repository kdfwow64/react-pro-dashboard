// tslint:disable
// @ts-nocheck
import * as React from 'react';
import { ChromePicker } from 'react-color';
import IconList from '../icon-list';

class SearchLeftSection extends React.Component<any, any> {

  SearchInputColorPicker = null;
  SearchIconColorPicker = null;
  SearchBGColorPicker = null;
  BGColorPicker: any;
  SearchInputBorderPicker: any;
  SearchTitleColorPicker: any;
  CellSeparatorColorPicker: any;
  CellBGColorPicker: any;
  ProductBorderColorPicker: any;
  ProductTitleColorPicker: any;
  PriceColorPicker: any;
  ProductIconColorPicker: any;
  BGColor: string | string[];
  SearchInputColor: string | string[];
  SearchInputBorder: string | string[];
  SearchIconColor: string | string[];
  SearchTitleColor: string | string[];
  SearchBGColor: string | string[];
  CellSeparatorColor: string | string[];
  CellBGColor: string | string[];
  ProductBorderColor: string | string[];
  ProductTitleColor: string | string[];
  PriceColor: string | string[];
  ProductIconColor: string | string[];

  constructor(props) {
    super(props);
    this.BGColorhandleChange = this.BGColorhandleChange.bind(this);
    this.SearchInputColorhandleChange = this.SearchInputColorhandleChange.bind(
      this
    );
    this.SearchInputBorderhandleChange = this.SearchInputBorderhandleChange.bind(
      this
    );
    this.SearchIconColorhandleChange = this.SearchIconColorhandleChange.bind(
      this
    );
    this.SearchTitleColorhandleChange = this.SearchTitleColorhandleChange.bind(
      this
    );
    this.SearchBGColorhandleChange = this.SearchBGColorhandleChange.bind(this);
    this.CellSeparatorColorhandleChange = this.CellSeparatorColorhandleChange.bind(
      this
    );
    this.CellBGColorhandleChange = this.CellBGColorhandleChange.bind(this);
    this.ProductBorderColorhandleChange = this.ProductBorderColorhandleChange.bind(
      this
    );
    this.ProductTitleColorhandleChange = this.ProductTitleColorhandleChange.bind(
      this
    );
    this.PriceColorhandleChange = this.PriceColorhandleChange.bind(this);
    this.ProductIconColorhandleChange = this.ProductIconColorhandleChange.bind(
      this
    );

    this.BGColorhandleClose = this.BGColorhandleClose.bind(this);
    this.SearchInputColorhandleClose = this.SearchInputColorhandleClose.bind(
      this
    );
    this.SearchInputBorderhandleClose = this.SearchInputBorderhandleClose.bind(
      this
    );
    this.SearchIconColorhandleClose = this.SearchIconColorhandleClose.bind(
      this
    );
    this.SearchTitleColorhandleClose = this.SearchTitleColorhandleClose.bind(
      this
    );
    this.SearchBGColorhandleClose = this.SearchBGColorhandleClose.bind(this);
    this.CellSeparatorColorhandleClose = this.CellSeparatorColorhandleClose.bind(
      this
    );
    this.CellBGColorhandleClose = this.CellBGColorhandleClose.bind(this);
    this.ProductBorderColorhandleClose = this.ProductBorderColorhandleClose.bind(
      this
    );
    this.ProductTitleColorhandleClose = this.ProductTitleColorhandleClose.bind(
      this
    );
    this.PriceColorhandleClose = this.PriceColorhandleClose.bind(this);
    this.ProductIconColorhandleClose = this.ProductIconColorhandleClose.bind(
      this
    );
  }
  state = {
    BGColor: '#ffffff',
    BGColorPicker: false,
    SearchInputColor: '#fafafa',
    SearchInputColorPicker: false,
    SearchInputBorder: '#d6d6d6',
    SearchInputBorderPicker: false,
    SearchIconColor: '#b8b8b8',
    SearchIconColorPicker: false,
    SearchTitleColor: '#b8b8b8',
    SearchTitleColorPicker: false,
    SearchBGColor: '#ffffff',
    SearchBGColorPicker: false,
    CellSeparatorColor: '#f0f0f0',
    CellSeparatorColorPicker: false,
    CellBGColor: '#ffffff',
    CellBGColorPicker: false,
    ProductBorderColor: '#ffffff',
    ProductBorderColorPicker: false,
    ProductTitleColor: '#000000',
    ProductTitleColorPicker: false,
    PriceColor: '#333333',
    PriceColorPicker: false,
    ProductIconColor: '#2ecc71',
    ProductIconColorPicker: false,
    DropDownGetSearchActionIconheader: 'fa fa-arrow-right'
  };

  BGColorhandleChange(BGColor) {
    this.setState({ BGColor: BGColor.hex });
    this.props.BGColorCallback(BGColor);
  }
  SearchInputColorhandleChange(SearchInputColor) {
    this.setState({ SearchInputColor: SearchInputColor.hex });
    this.props.SearchInputColorCallback(SearchInputColor);
  }
  SearchInputBorderhandleChange(SearchInputBorder) {
    this.setState({ SearchInputBorder: SearchInputBorder.hex });
    this.props.SearchInputBorderCallback(SearchInputBorder);
  }
  SearchIconColorhandleChange(SearchIconColor) {
    this.setState({ SearchIconColor: SearchIconColor.hex });
    this.props.SearchIconColorCallback(SearchIconColor);
  }
  SearchTitleColorhandleChange(SearchTitleColor) {
    this.setState({ SearchTitleColor: SearchTitleColor.hex });
    this.props.SearchTitleColorCallback(SearchTitleColor);
  }
  SearchBGColorhandleChange(SearchBGColor) {
    this.setState({ SearchBGColor: SearchBGColor.hex });
    this.props.SearchBGColorCallback(SearchBGColor);
  }
  CellSeparatorColorhandleChange(CellSeparatorColor) {
    this.setState({ CellSeparatorColor: CellSeparatorColor.hex });
    this.props.CellSeparatorColorCallback(CellSeparatorColor);
  }
  CellBGColorhandleChange(CellBGColor) {
    this.setState({ CellBGColor: CellBGColor.hex });
    this.props.CellBGColorCallback(CellBGColor);
  }
  ProductBorderColorhandleChange(ProductBorderColor) {
    this.setState({ ProductBorderColor: ProductBorderColor.hex });
    this.props.ProductBorderColorCallback(ProductBorderColor);
  }
  ProductTitleColorhandleChange(ProductTitleColor) {
    this.setState({ ProductTitleColor: ProductTitleColor.hex });
    this.props.ProductTitleColorCallback(ProductTitleColor);
  }
  PriceColorhandleChange(PriceColor) {
    this.setState({ PriceColor: PriceColor.hex });
    this.props.PriceColorCallback(PriceColor);
  }
  ProductIconColorhandleChange(ProductIconColor) {
    this.setState({ ProductIconColor: ProductIconColor.hex });
    this.props.ProductIconColorCallback(ProductIconColor);
  }

  BGColorhandleClick = e => {
    this.setState({ BGColorPicker: !this.BGColorPicker });
  }
  SearchInputColorhandleClick = e => {
    this.setState({ SearchInputColorPicker: !this.SearchInputColorPicker });
  }
  SearchInputBorderhandleClick = e => {
    this.setState({ SearchInputBorderPicker: !this.SearchInputBorderPicker });
  }
  SearchIconColorhandleClick = e => {
    this.setState({ SearchIconColorPicker: !this.SearchIconColorPicker });
  }
  SearchTitleColorhandleClick = e => {
    this.setState({ SearchTitleColorPicker: !this.SearchTitleColorPicker });
  }
  SearchBGColorhandleClick = e => {
    this.setState({ SearchBGColorPicker: !this.SearchBGColorPicker });
  }
  CellSeparatorColorhandleClick = e => {
    this.setState({ CellSeparatorColorPicker: !this.CellSeparatorColorPicker });
  }
  CellBGColorhandleClick = e => {
    this.setState({ CellBGColorPicker: !this.CellBGColorPicker });
  }
  ProductBorderColorhandleClick = e => {
    this.setState({ ProductBorderColorPicker: !this.ProductBorderColorPicker });
  }
  ProductTitleColorhandleClick = e => {
    this.setState({ ProductTitleColorPicker: !this.ProductTitleColorPicker });
  }
  PriceColorhandleClick = e => {
    this.setState({ PriceColorPicker: !this.PriceColorPicker });
  }
  ProductIconColorhandleClick = e => {
    this.setState({ ProductIconColorPicker: !this.ProductIconColorPicker });
  }

  BGColorhandleClose = () => {
    this.setState({ BGColorPicker: false });
  }
  SearchInputColorhandleClose = () => {
    this.setState({ SearchInputColorPicker: false });
  }
  SearchInputBorderhandleClose = () => {
    this.setState({ SearchInputBorderPicker: false });
  }
  SearchIconColorhandleClose = () => {
    this.setState({ SearchIconColorPicker: false });
  }
  SearchTitleColorhandleClose = () => {
    this.setState({ SearchTitleColorPicker: false });
  }
  SearchBGColorhandleClose = () => {
    this.setState({ SearchBGColorPicker: false });
  }
  CellSeparatorColorhandleClose = () => {
    this.setState({ CellSeparatorColorPicker: false });
  }
  CellBGColorhandleClose = () => {
    this.setState({ CellBGColorPicker: false });
  }
  ProductBorderColorhandleClose = () => {
    this.setState({ ProductBorderColorPicker: false });
  }
  ProductTitleColorhandleClose = () => {
    this.setState({ ProductTitleColorPicker: false });
  }
  PriceColorhandleClose = () => {
    this.setState({ PriceColorPicker: false });
  }
  ProductIconColorhandleClose = () => {
    this.setState({ ProductIconColorPicker: false });
  }

  DropDownGetIconSearchActionNavCallback = icon => {
    this.setState({ DropDownGetSearchActionIconheader: icon });
    this.props.searchAction(icon);
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

  render() {
    return (
      <div className="ProductSettingsMainContainer" id="ProductSettingsBody">
        <div
          className="ProductSilderActiveColor"
          style={{ position: 'relative' }}
        >
          <h5>VIEW BACKGROUND COLOR</h5>
          <input
            type="text"
            value={this.props.BGColor}
            defaultValue={this.BGColor}
            id="CollectionDropDown"
            className="textColorCode"
            onClick={this.BGColorhandleClick}
            onBlur={this.BGColorhandleClose}
          />
          <div style={this.swatch}>
            <div
              className="colorPickerBorder"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: this.props.BGColor
              }}
              onClick={this.BGColorhandleClick}
            />
          </div>
          {this.state.BGColorPicker ? (
            <div style={this.popover}>
              <ChromePicker
                color={this.props.BGColor}
                onChange={this.BGColorhandleChange}
              />
            </div>
          ) : null}
        </div>

        <div
          className="ProductSilderActiveColor"
          style={{ position: 'relative', marginTop: '20px' }}
        >
          <h5>SEARCH INPUT BACKGROUND</h5>
          <input
            type="text"
            value={this.props.SearchInputColor}
            defaultValue={this.SearchInputColor}
            id="CollectionDropDown"
            className="textColorCode"
            onClick={this.SearchInputColorhandleClick}
            onBlur={this.SearchInputColorhandleClose}
          />
          <div style={this.swatch}>
            <div
              className="colorPickerBorder"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: this.props.SearchInputColor
              }}
              onClick={this.SearchInputColorhandleClick}
            />
          </div>
          {this.state.SearchInputColorPicker ? (
            <div style={this.popover}>
              <ChromePicker
                color={this.props.SearchInputColor}
                onChange={this.SearchInputColorhandleChange}
              />
            </div>
          ) : null}
        </div>

        <div
          className="ProductSilderActiveColor"
          style={{ position: 'relative', marginTop: '20px' }}
        >
          <h5>SEARCH INPUT BORDER</h5>
          <input
            type="text"
            value={this.props.SearchInputBorder}
            defaultValue={this.SearchInputBorder}
            id="CollectionDropDown"
            className="textColorCode"
            onClick={this.SearchInputBorderhandleClick}
            onBlur={this.SearchInputBorderhandleClose}
          />
          <div style={this.swatch}>
            <div
              className="colorPickerBorder"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: this.props.SearchInputBorder
              }}
              onClick={this.SearchInputBorderhandleClick}
            />
          </div>
          {this.state.SearchInputBorderPicker ? (
            <div style={this.popover}>
              <ChromePicker
                color={this.props.SearchInputBorder}
                onChange={this.SearchInputBorderhandleChange}
              />
            </div>
          ) : null}
        </div>

        <div
          className="ProductSilderActiveColor"
          style={{ position: 'relative', marginTop: '20px' }}
        >
          <h5>SEARCH ICON COLOR</h5>
          <input
            type="text"
            value={this.props.SearchIconColor}
            defaultValue={this.SearchIconColor}
            id="CollectionDropDown"
            className="textColorCode"
            onClick={this.SearchIconColorhandleClick}
            onBlur={this.SearchIconColorhandleClose}
          />
          <div style={this.swatch}>
            <div
              className="colorPickerBorder"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: this.props.SearchIconColor
              }}
              onClick={this.SearchIconColorhandleClick}
            />
          </div>
          {this.state.SearchIconColorPicker ? (
            <div style={this.popover}>
              <ChromePicker
                color={this.props.SearchIconColor}
                onChange={this.SearchIconColorhandleChange}
              />
            </div>
          ) : null}
        </div>

        <div
          className="ProductSilderActiveColor"
          style={{ position: 'relative', marginTop: '20px' }}
        >
          <h5>SEARCH TITLE COLOR</h5>
          <input
            type="text"
            value={this.props.SearchTitleColor}
            defaultValue={this.SearchTitleColor}
            id="CollectionDropDown"
            className="textColorCode"
            onClick={this.SearchTitleColorhandleClick}
            onBlur={this.SearchTitleColorhandleClose}
          />
          <div style={this.swatch}>
            <div
              className="colorPickerBorder"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: this.props.SearchTitleColor
              }}
              onClick={this.SearchTitleColorhandleClick}
            />
          </div>
          {this.state.SearchTitleColorPicker ? (
            <div style={this.popover}>
              <ChromePicker
                color={this.props.SearchTitleColor}
                onChange={this.SearchTitleColorhandleChange}
              />
            </div>
          ) : null}
        </div>

        <div
          className="ProductSilderActiveColor"
          style={{ position: 'relative', marginTop: '20px' }}
        >
          <h5>SEARCH CELL COLOR</h5>
          <input
            type="text"
            value={this.props.SearchBGColor}
            defaultValue={this.SearchBGColor}
            id="CollectionDropDown"
            className="textColorCode"
            onClick={this.SearchBGColorhandleClick}
            onBlur={this.SearchBGColorhandleClose}
          />
          <div style={this.swatch}>
            <div
              className="colorPickerBorder"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: this.props.SearchBGColor
              }}
              onClick={this.SearchBGColorhandleClick}
            />
          </div>
          {this.state.SearchBGColorPicker ? (
            <div style={this.popover}>
              <ChromePicker
                color={this.props.SearchBGColor}
                onChange={this.SearchBGColorhandleChange}
              />
            </div>
          ) : null}
        </div>

        <div
          className="ProductSilderActiveColor"
          style={{ position: 'relative', marginTop: '20px' }}
        >
          <h5>CELL SEPARATOR COLOR</h5>
          <input
            type="text"
            value={this.props.CellSeparatorColor}
            defaultValue={this.CellSeparatorColor}
            id="CollectionDropDown"
            className="textColorCode"
            onClick={this.CellSeparatorColorhandleClick}
            onBlur={this.CellSeparatorColorhandleClose}
          />
          <div style={this.swatch}>
            <div
              className="colorPickerBorder"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: this.props.CellSeparatorColor
              }}
              onClick={this.CellSeparatorColorhandleClick}
            />
          </div>
          {this.state.CellSeparatorColorPicker ? (
            <div style={this.popover}>
              <ChromePicker
                color={this.props.CellSeparatorColor}
                onChange={this.CellSeparatorColorhandleChange}
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
            onBlur={this.CellBGColorhandleClose}
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
          <h5>PRODUCT BORDER COLOR</h5>
          <input
            type="text"
            value={this.props.ProductBorderColor}
            defaultValue={this.ProductBorderColor}
            id="CollectionDropDown"
            className="textColorCode"
            onClick={this.ProductBorderColorhandleClick}
            onBlur={this.ProductBorderColorhandleClose}
          />
          <div style={this.swatch}>
            <div
              className="colorPickerBorder"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: this.props.ProductBorderColor
              }}
              onClick={this.ProductBorderColorhandleClick}
            />
          </div>
          {this.state.ProductBorderColorPicker ? (
            <div style={this.popover}>
              <ChromePicker
                color={this.props.ProductBorderColor}
                onChange={this.ProductBorderColorhandleChange}
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
            value={this.props.ProductTitleColor}
            defaultValue={this.ProductTitleColor}
            id="CollectionDropDown"
            className="textColorCode"
            onClick={this.ProductTitleColorhandleClick}
            onBlur={this.ProductTitleColorhandleClose}
          />
          <div style={this.swatch}>
            <div
              className="colorPickerBorder"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: this.props.ProductTitleColor
              }}
              onClick={this.ProductTitleColorhandleClick}
            />
          </div>
          {this.state.ProductTitleColorPicker ? (
            <div style={this.popover}>
              <ChromePicker
                color={this.props.ProductTitleColor}
                onChange={this.ProductTitleColorhandleChange}
              />
            </div>
          ) : null}
        </div>

        <div
          className="ProductSilderActiveColor"
          style={{ position: 'relative', marginTop: '20px' }}
        >
          <h5>PRODUCT PRICE COLOR</h5>
          <input
            type="text"
            value={this.props.PriceColor}
            defaultValue={this.PriceColor}
            id="CollectionDropDown"
            className="textColorCode"
            onClick={this.PriceColorhandleClick}
            onBlur={this.PriceColorhandleClose}
          />
          <div style={this.swatch}>
            <div
              className="colorPickerBorder"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: this.props.PriceColor
              }}
              onClick={this.PriceColorhandleClick}
            />
          </div>
          {this.state.PriceColorPicker ? (
            <div style={this.popover}>
              <ChromePicker
                color={this.props.PriceColor}
                onChange={this.PriceColorhandleChange}
              />
            </div>
          ) : null}
        </div>

        <div
          className="ProductSilderActiveColor"
          id="SearchAction"
          style={{ position: 'relative', marginTop: '20px' }}
        >
          <h5>ACTION ICON</h5>
          <IconList
            DropDownGetIconSearchActionNavCallback={
              this.DropDownGetIconSearchActionNavCallback
            }
            IconClassName={this.props.searchActionValue}
          />
        </div>

        <div
          className="ProductSilderActiveColor"
          style={{ position: 'relative', marginTop: '20px' }}
        >
          <h5>ACTION ICON COLOR</h5>
          <input
            type="text"
            value={this.props.ProductIconColor}
            defaultValue={this.ProductIconColor}
            id="CollectionDropDown"
            className="textColorCode"
            onClick={this.ProductIconColorhandleClick}
            onBlur={this.ProductIconColorhandleClose}
          />
          <div style={this.swatch}>
            <div
              className="colorPickerBorder"
              style={{
                width: '20px',
                height: '20px',
                backgroundColor: this.props.ProductIconColor
              }}
              onClick={this.ProductIconColorhandleClick}
            />
          </div>
          {this.state.ProductIconColorPicker ? (
            <div style={this.popover}>
              <ChromePicker
                color={this.props.ProductIconColor}
                onChange={this.ProductIconColorhandleChange}
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default SearchLeftSection;
