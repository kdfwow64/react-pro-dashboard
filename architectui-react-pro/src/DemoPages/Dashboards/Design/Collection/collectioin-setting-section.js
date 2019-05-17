// tslint:disable
// @ts-nocheck
import * as React from 'react';
import { ChromePicker } from 'react-color';
import reactCSS from 'reactcss';
import { Col, Row, Card, CardBody, CardTitle, CardHeader } from 'reactstrap';
import IconList from '../icon-list';

class CollectioinSettingSection extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.cellcolorhandleChange = this.cellcolorhandleChange.bind(this);
    this.cellcolorseparatorhandleChange = this.cellcolorseparatorhandleChange.bind(
      this
    );
    this.cellcoloriconhandleChange = this.cellcoloriconhandleChange.bind(this);
    this.productborderhandleChange = this.productborderhandleChange.bind(this);
    this.producttitlehandleChange = this.producttitlehandleChange.bind(this);
    this.pricetitlehandleChange = this.pricetitlehandleChange.bind(this);

    this.handleClose = this.handleClose.bind(this);
    this.cellcolorhandleClose = this.cellcolorhandleClose.bind(this);
    this.cellcolorseparatorhandleClose = this.cellcolorseparatorhandleClose.bind(
      this
    );
    this.cellcoloriconhandleClose = this.cellcoloriconhandleClose.bind(this);
    this.productborderhandleClose = this.productborderhandleClose.bind(this);
    this.producttitlehandleClose = this.producttitlehandleClose.bind(this);
    this.pricetitlehandleClose = this.pricetitlehandleClose.bind(this);

    this.cellhandleClick = this.cellhandleClick.bind(this);
    this.gridSelectOptionCallback = this.gridSelectOptionCallback.bind(this);
    this.gridSelectProductTitleCallback = this.gridSelectProductTitleCallback.bind(
      this
    );
    this.gridSelectPiceCallback = this.gridSelectPiceCallback.bind(this);

    this.state = {
      displayColorPicker: false,
      celldisplayColorPicker: false,
      cellicondisplayColorPicker: false,
      cellseparatorColorPicker: false,
      productborderColorPicker: false,
      pricetitleColorPicker: false,
      producttitleColorPicker: false,
      DropDownGetIconheader: this.props.IconAction,
      MainContainerBGColorValue: '#ff0000'
      // SelectedOption: this.props.SelectedOption,
    };
  }

  gridSelectOptionCallback = e => {
    this.setState({ SelectedOption: e.target.value });
    this.props.SelectedOption(e.target.value);
  };

  gridSelectProductTitleCallback = e => {
    this.setState({ gridSelectProductTitle: e.target.value });
    this.props.gridSelectProductTitleCall(e.target.value);
  };

  gridSelectPiceCallback = e => {
    this.props.gridSelectPriceTitleCallback(e.target.value);
  };

  DropDownGetIconCellectionListActionCallback = icon => {
    this.setState({ DropDownGetIconheader: icon });
    this.props.IconCollectionAction(icon);
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  cellcolorhandleClose = () => {
    this.setState({ celldisplayColorPicker: false });
  };

  cellcolorseparatorhandleClose = () => {
    this.setState({ cellseparatorColorPicker: false });
  };

  cellcoloriconhandleClose = () => {
    this.setState({ cellicondisplayColorPicker: false });
  };

  productborderhandleClose = () => {
    this.setState({ productborderColorPicker: false });
  };

  producttitlehandleClose = () => {
    this.setState({ producttitleColorPicker: false });
  };

  pricetitlehandleClose = () => {
    this.setState({ pricetitleColorPicker: false });
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  cellhandleClick = () => {
    this.setState({
      celldisplayColorPicker: !this.state.celldisplayColorPicker
    });
  };

  cellseparatorhandleClick = () => {
    this.setState({
      cellseparatorColorPicker: !this.state.cellseparatorColorPicker
    });
  };

  celliconhandleClick = () => {
    this.setState({
      cellicondisplayColorPicker: !this.state.cellicondisplayColorPicker
    });
  };

  productborderhandleClick = () => {
    this.setState({
      productborderColorPicker: !this.state.productborderColorPicker
    });
  };

  producttitlehandleClick = () => {
    this.setState({
      producttitleColorPicker: !this.state.producttitleColorPicker
    });
  };

  pricetitlehandleClick = () => {
    this.setState({ pricetitleColorPicker: !this.state.pricetitleColorPicker });
  };

  handleChange(color) {
    this.setState({ MainContainerBGColorValue: color.hex });
    this.props.MainContainerBGColor(color);
  }

  cellcolorhandleChange(cellcolor) {
    this.setState({ cellcolor: cellcolor.hex });
    this.props.CellBGColor(cellcolor);
  }

  cellcolorseparatorhandleChange(cellseparatorcolor) {
    this.setState({ cellseparatorcolor: cellseparatorcolor.hex });
    this.props.cellseparatorcolor(cellseparatorcolor);
  }

  cellcoloriconhandleChange(celliconcolor) {
    this.setState({ celliconcolor: celliconcolor.hex });
    this.props.celliconcolor(celliconcolor);
  }

  productborderhandleChange(productbordercolor) {
    this.setState({ productbordercolor: productbordercolor.hex });
    this.props.productbordercolor(productbordercolor);
  }

  producttitlehandleChange(producttitlecolor) {
    this.setState({ producttitlecolor: producttitlecolor.hex });
    this.props.producttitlecolor(producttitlecolor);
  }

  pricetitlehandleChange(pricetitlecolor) {
    this.setState({ pricetitlecolor: pricetitlecolor.hex });
    this.props.pricetitlecolor(pricetitlecolor);
  }

  swatch = {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '4px',
    top: '2px'
  };

  popover = {
    position: 'absolute',
    zIndex: '1'
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
      <div id="collectionContainer">
        <CardHeader style={{ marginBottom: '10px' }}>
          <h3 className="leftCardHeader"> Collection Settings </h3>{' '}
        </CardHeader>
        <div className="row CollectionPageStyle">
          <div className="CollectionViewStyle">
            <div className="CollectionFullRowContainer">
              <div className="col-sm-12 CollectionSettingtitle">
                <label>PAGE STYLE</label>
              </div>
              <div className="col-sm-12 CollectionSettingOption">
                <select
                  name=""
                  id="CollectionDropDown"
                  onChange={this.gridSelectOptionCallback}
                  value={this.props.SelectedOptionValue}
                >
                  <option value="Grid"> Grid </option>
                  <option value="List"> List </option>
                </select>
              </div>
            </div>

            <div
              className="CollectionFullRowContainer"
              style={{ display: this.props.gridSelectOptionValue }}
            >
              <div className="col-sm-12 CollectionSettingtitle">
                <label>NO. IMAGES PER ROW </label>
              </div>
              <div className="col-sm-12 CollectionSettingOption">
                <select
                  name=""
                  id="CollectionDropDown"
                  onChange={this.props.CollectionGridRowOptionCallback}
                  value={this.props.CollectionGridRowValue}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>

            <div
              className="CollectionFullRowContainer"
              style={{ display: this.props.gridSelectOptionValue }}
            >
              <div className="col-sm-12 CollectionSettingtitle">
                <label>PRODUCT TITLE </label>
              </div>
              <div className="col-sm-12 CollectionSettingOption">
                <select
                  name=""
                  id="CollectionDropDown"
                  onChange={this.gridSelectProductTitleCallback}
                  value={this.props.gridSelectProdTitleValue}
                >
                  <option value="Show">Show</option>
                  <option value="Hide">Hide</option>
                </select>
              </div>
            </div>

            <div
              className="CollectionFullRowContainer"
              style={{ display: this.props.gridSelectOptionValue }}
            >
              <div className="col-sm-12 CollectionSettingtitle">
                <label>PRODUCT PRICE</label>
              </div>
              <div className="col-sm-12 CollectionSettingOption">
                <select
                  name=""
                  id="CollectionDropDown"
                  onChange={this.gridSelectPiceCallback}
                  value={this.props.gridSelectProdPriceValue}
                >
                  <option value="Show">Show</option>
                  <option value="Hide">Hide</option>
                </select>
              </div>
            </div>

            <div
              className="CollectionFullRowContainer"
              style={{ display: this.props.gridSelectOptionValue }}
            >
              <div className="col-sm-12 CollectionSettingtitle">
                <label>TITLE & PRICE ALIGNMENT</label>
              </div>
              <div className="col-sm-12 CollectionSettingOption">
                <select
                  name=""
                  id="CollectionDropDown"
                  onChange={e =>
                    this.props.gridtitleAlignCallback(e.target.value)
                  }
                  value={this.props.gridTitleValue}
                >
                  <option value="Center">Center</option>
                  <option value="Left">Left</option>
                  <option value="Right">Right</option>
                </select>
              </div>
            </div>

            <div className="CollectionFullRowContainer">
              <div className="col-sm-12 CollectionSettingtitle">
                <label>VIEW BACKGROUND COLOR</label>
              </div>
              <div className="col-sm-12 CollectionSettingtitle">
                <input
                  type="text"
                  value={this.props.MainContainerBGColorValue}
                  id="CollectionDropDown"
                  className="textColorCode"
                  onClick={this.handleClick}
                />
                <div style={this.swatch}>
                  <div
                    className="colorPickerBorder"
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: this.props.MainContainerBGColorValue
                    }}
                    onClick={this.handleClick}
                  />
                </div>
                {this.state.displayColorPicker ? (
                  <div style={this.popover}>
                    <div style={this.cover} onClick={this.handleClose} />
                    <ChromePicker
                      color={this.props.MainContainerBGColorValue}
                      onChange={this.handleChange}
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div
              className="CollectionFullRowContainer"
              style={{ display: this.props.GridViewFieldOption }}
            >
              <div className="col-sm-12 CollectionSettingtitle">
                <label>CELL BACKGROUND COLOR</label>
              </div>
              <div className="col-sm-12 CollectionSettingtitle">
                <input
                  type="text"
                  // value={this.props.CellBGColorValue}
                  defaultValue={this.props.CellBGColorValue}
                  id="CollectionDropDown"
                  className="textColorCode"
                  onClick={this.cellhandleClick}
                />
                <div style={this.swatch}>
                  <div
                    className="colorPickerBorder"
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: this.props.CellBGColorValue
                    }}
                    onClick={this.cellhandleClick}
                  />
                </div>
                {this.state.celldisplayColorPicker ? (
                  <div style={this.popover}>
                    <div
                      style={this.cover}
                      onClick={this.cellcolorhandleClose}
                    />
                    <ChromePicker
                      color={this.props.CellBGColorValue}
                      onChange={this.cellcolorhandleChange}
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div
              className="CollectionFullRowContainer"
              style={{ display: this.props.GridViewFieldOption }}
            >
              <div className="col-sm-12 CollectionSettingtitle">
                <label>CELL SEPARATOR COLOR</label>
              </div>
              <div className="col-sm-12 CollectionSettingtitle">
                <input
                  type="text"
                  // value={this.props.CellseparatorColorValue}
                  defaultValue={this.props.CellseparatorColorValue}
                  id="CollectionDropDown"
                  className="textColorCode"
                  onClick={this.cellseparatorhandleClick}
                />
                <div style={this.swatch}>
                  <div
                    className="colorPickerBorder"
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor:
                        this.props.CellseparatorColorValue || '#f0f0f0'
                    }}
                    onClick={this.cellseparatorhandleClick}
                  />
                </div>
                {this.state.cellseparatorColorPicker ? (
                  <div style={this.popover}>
                    <div
                      style={this.cover}
                      onClick={this.cellcolorseparatorhandleClose}
                    />
                    <ChromePicker
                      color={this.props.CellseparatorColorValue}
                      onChange={this.cellcolorseparatorhandleChange}
                    />
                  </div>
                ) : null}
              </div>
            </div>

            {/* <div
              className="CollectionFullRowContainer"
              style={{ display: this.props.GridViewFieldOption }}
            >
              <div className="col-sm-12 CollectionSettingtitle">
                <label>ACTION ICON</label>
              </div>
              <div className="col-sm-12 CollectionSettingtitle">
                <IconList
                  DropDownGetIconCellectionListActionCallback={
                    this.DropDownGetIconCellectionListActionCallback
                  }
                  IconClassName={this.props.IconAction || 'lnr-chevron-right'}
                />
              </div>
            </div> */}

            <div
              className="CollectionFullRowContainer"
              style={{ display: this.props.GridViewFieldOption }}
            >
              <div className="col-sm-12 CollectionSettingtitle">
                <label>CELL ICON COLOR</label>
              </div>
              <div className="col-sm-12 CollectionSettingtitle">
                <input
                  type="text"
                  // value={this.props.CelliconColorValue}
                  defaultValue={this.props.CelliconColorValue}
                  id="CollectionDropDown"
                  className="textColorCode"
                  onClick={this.celliconhandleClick}
                />
                <div style={this.swatch}>
                  <div
                    className="colorPickerBorder"
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor:
                        this.props.CelliconColorValue || '#2ecc71'
                    }}
                    onClick={this.celliconhandleClick}
                  />
                </div>
                {this.state.cellicondisplayColorPicker ? (
                  <div style={this.popover}>
                    <div
                      style={this.cover}
                      onClick={this.cellcoloriconhandleClose}
                    />
                    <ChromePicker
                      color={this.props.CelliconColorValue}
                      onChange={this.cellcoloriconhandleChange}
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="CollectionFullRowContainer">
              <div className="col-sm-12 CollectionSettingtitle">
                <label>PRODUCT BORDER COLOR</label>
              </div>
              <div className="col-sm-12 CollectionSettingtitle">
                <input
                  type="text"
                  // value={this.props.productborderColorValue}
                  defaultValue={this.props.productborderColorValue}
                  id="CollectionDropDown"
                  className="textColorCode"
                  onClick={this.productborderhandleClick}
                />
                <div style={this.swatch}>
                  <div
                    className="colorPickerBorder"
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor: this.props.productborderColorValue
                    }}
                    onClick={this.productborderhandleClick}
                  />
                </div>
                {this.state.productborderColorPicker ? (
                  <div style={this.popover}>
                    <div
                      style={this.cover}
                      onClick={this.productborderhandleClose}
                    />
                    <ChromePicker
                      color={this.props.productborderColorValue}
                      onChange={this.productborderhandleChange}
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="CollectionFullRowContainer">
              <div className="col-sm-12 CollectionSettingtitle">
                <label>PRODUCT TITLE COLOR</label>
              </div>
              <div className="col-sm-12 CollectionSettingtitle">
                <input
                  type="text"
                  // value={this.props.producttitleColorValue}
                  defaultValue={this.props.producttitleColorValue}
                  id="CollectionDropDown"
                  className="textColorCode"
                  onClick={this.producttitlehandleClick}
                />
                <div style={this.swatch}>
                  <div
                    className="colorPickerBorder"
                    style={{
                      height: '20px',
                      width: '20px',
                      backgroundColor:
                        this.props.producttitleColorValue || '#000000'
                    }}
                    onClick={this.producttitlehandleClick}
                  />
                </div>
                {this.state.producttitleColorPicker ? (
                  <div style={this.popover}>
                    <div
                      style={this.cover}
                      onClick={this.producttitlehandleClose}
                    />
                    <ChromePicker
                      color={this.props.producttitleColorValue}
                      onChange={this.producttitlehandleChange}
                    />
                  </div>
                ) : null}
              </div>
            </div>

            <div className="CollectionFullRowContainer">
              <div className="col-sm-12 CollectionSettingtitle">
                <label>PRICE COLOR</label>
              </div>
              <div className="col-sm-12 CollectionSettingtitle">
                <input
                  type="text"
                  // value={this.props.pricetitleColorValue}
                  defaultValue={this.props.pricetitleColorValue}
                  id="CollectionDropDown"
                  className="textColorCode"
                  onClick={this.pricetitlehandleClick}
                />
                <div style={this.swatch}>
                  <div
                    className="colorPickerBorder"
                    style={{
                      width: '20px',
                      height: '20px',
                      backgroundColor:
                        this.props.pricetitleColorValue || '#333333'
                    }}
                    onClick={this.pricetitlehandleClick}
                  />
                </div>
                {this.state.pricetitleColorPicker ? (
                  <div style={this.popover}>
                    <div
                      style={this.cover}
                      onClick={this.pricetitlehandleClose}
                    />
                    <ChromePicker
                      color={this.props.pricetitleColorValue}
                      onChange={this.pricetitlehandleChange}
                    />
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CollectioinSettingSection;
