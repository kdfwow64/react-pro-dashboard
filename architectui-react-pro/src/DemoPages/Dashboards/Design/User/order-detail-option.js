// tslint:disable
import * as React from 'react';
import { ChromePicker } from 'react-color';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
// import styleLeftImage from './'
/** @type {{swatch: React.CSSProperties, popover: React.CSSProperties}} */
const styles = {
  swatch: {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '3px',
    top: '4px'
  },
  popover: {
    position: 'absolute',
    zIndex: 10000
  }
};

class Orderdetailoption extends React.Component {
  constructor(props) {
    super(props);

    this.onorderdetailBgColorChangeComplete = this.onorderdetailBgColorChangeComplete.bind(
      this
    );
    this.onorderdetailBgColorClick = this.onorderdetailBgColorClick.bind(this);
    this.onorderdetailBgColorClose = this.onorderdetailBgColorClose.bind(this);

    this.onorderdetailnumberColorChangeComplete = this.onorderdetailnumberColorChangeComplete.bind(
      this
    );
    this.onorderdetailnumberColorClick = this.onorderdetailnumberColorClick.bind(
      this
    );
    this.onorderdetailnumberColorClose = this.onorderdetailnumberColorClose.bind(
      this
    );

    this.onheadertitleBGColorChangeComplete = this.onheadertitleBGColorChangeComplete.bind(
      this
    );
    this.onheadertitleBGColorClick = this.onheadertitleBGColorClick.bind(this);
    this.onheadertitleBGColorClose = this.onheadertitleBGColorClose.bind(this);

    this.onorderdetailheaderbgColorChangeComplete = this.onorderdetailheaderbgColorChangeComplete.bind(
      this
    );
    this.onorderdetailheaderbgColorClick = this.onorderdetailheaderbgColorClick.bind(
      this
    );
    this.onorderdetailheaderbgColorClose = this.onorderdetailheaderbgColorClose.bind(
      this
    );

    this.onoptionaddresstextColorChangeComplete = this.onoptionaddresstextColorChangeComplete.bind(
      this
    );
    this.onoptionaddresstextColorClick = this.onoptionaddresstextColorClick.bind(
      this
    );
    this.onoptionaddresstextColorClose = this.onoptionaddresstextColorClose.bind(
      this
    );

    this.onoptiondetailpriceColorChangeComplete = this.onoptiondetailpriceColorChangeComplete.bind(
      this
    );
    this.onoptiondetailpriceColorClick = this.onoptiondetailpriceColorClick.bind(
      this
    );
    this.onoptiondetailpriceColorClose = this.onoptiondetailpriceColorClose.bind(
      this
    );

    this.onoptiondetailsproductColorChangeComplete = this.onoptiondetailsproductColorChangeComplete.bind(
      this
    );
    this.onoptiondetailsproductColorClick = this.onoptiondetailsproductColorClick.bind(
      this
    );
    this.onoptiondetailsproductColorClose = this.onoptiondetailsproductColorClose.bind(
      this
    );

    this.onoptiondetailsopColorChangeComplete = this.onoptiondetailsopColorChangeComplete.bind(
      this
    );
    this.onoptiondetailsopColorClick = this.onoptiondetailsopColorClick.bind(
      this
    );
    this.onoptiondetailsopColorClose = this.onoptiondetailsopColorClose.bind(
      this
    );

    this.onopriondetaildescChangeComplete = this.onopriondetaildescChangeComplete.bind(
      this
    );
    this.onopriondetaildescColorClick = this.onopriondetaildescColorClick.bind(
      this
    );
    this.onopriondetaildescColorClose = this.onopriondetaildescColorClose.bind(
      this
    );

    this.onoptiondetailcellbgColorChangeComplete = this.onoptiondetailcellbgColorChangeComplete.bind(
      this
    );
    this.onoptiondetailcellbgColorClick = this.onoptiondetailcellbgColorClick.bind(
      this
    );
    this.onoptiondetailcellbgColorClose = this.onoptiondetailcellbgColorClose.bind(
      this
    );

    this.onoptiondetailcellsepColorChangeComplete = this.onoptiondetailcellsepColorChangeComplete.bind(
      this
    );
    this.onoptiondetailcellsepColorClick = this.onoptiondetailcellsepColorClick.bind(
      this
    );
    this.onoptiondetailcellsepColorClose = this.onoptiondetailcellsepColorClose.bind(
      this
    );
  }

  /* MENU CELL BACKGROUND COLOR */

  _onorderdetailBgColorClose = () => {
    this.setState({ displayoptiondetailBGcolor: false });
  };

  get onorderdetailBgColorClose() {
    return this._onorderdetailBgColorClose;
  }

  set onorderdetailBgColorClose(value) {
    this._onorderdetailBgColorClose = value;
  }

  _onorderdetailBgColorClick = () => {
    this.setState({ displayoptiondetailBGcolor: true });
  };

  get onorderdetailBgColorClick() {
    return this._onorderdetailBgColorClick;
  }

  set onorderdetailBgColorClick(value) {
    this._onorderdetailBgColorClick = value;
  }

  _onorderdetailBgColorChangeComplete = color => {
    this.setState({ orderdetailBgColor: color.hex });
    this.props.onorderdetailBgColorChangeComplete(color);
  };

  get onorderdetailBgColorChangeComplete() {
    return this._onorderdetailBgColorChangeComplete;
  }

  set onorderdetailBgColorChangeComplete(value) {
    this._onorderdetailBgColorChangeComplete = value;
  }

  /* RATING COLOR */
  _onorderdetailnumberColorClose = () => {
    this.setState({ displayorderdetailnumberColor: false });
  };

  get onorderdetailnumberColorClose() {
    return this._onorderdetailnumberColorClose;
  }

  set onorderdetailnumberColorClose(value) {
    this._onorderdetailnumberColorClose = value;
  }

  _onorderdetailnumberColorClick = () => {
    this.setState({ displayorderdetailnumberColor: true });
  };

  get onorderdetailnumberColorClick() {
    return this._onorderdetailnumberColorClick;
  }

  set onorderdetailnumberColorClick(value) {
    this._onorderdetailnumberColorClick = value;
  }

  _onorderdetailnumberColorChangeComplete = color => {
    this.setState({ orderdetailnumberColor: color.hex });
    this.props.onorderdetailnumberColorChangeComplete(color);
  };

  get onorderdetailnumberColorChangeComplete() {
    return this._onorderdetailnumberColorChangeComplete;
  }

  set onorderdetailnumberColorChangeComplete(value) {
    this._onorderdetailnumberColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onheadertitleBGColorClose = () => {
    this.setState({ displayheadertitlecolor: false });
  };

  get onheadertitleBGColorClose() {
    return this._onheadertitleBGColorClose;
  }

  set onheadertitleBGColorClose(value) {
    this._onheadertitleBGColorClose = value;
  }

  _onheadertitleBGColorClick = () => {
    this.setState({ displayheadertitlecolor: true });
  };

  get onheadertitleBGColorClick() {
    return this._onheadertitleBGColorClick;
  }

  set onheadertitleBGColorClick(value) {
    this._onheadertitleBGColorClick = value;
  }

  _onheadertitleBGColorChangeComplete = color => {
    this.setState({ headertitleBGColor: color.hex });
    this.props.onheadertitleBGColorChangeComplete(color);
  };

  get onheadertitleBGColorChangeComplete() {
    return this._onheadertitleBGColorChangeComplete;
  }

  set onheadertitleBGColorChangeComplete(value) {
    this._onheadertitleBGColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onorderdetailheaderbgColorClose = () => {
    this.setState({ displayheaderbgcolor: false });
  };

  get onorderdetailheaderbgColorClose() {
    return this._onorderdetailheaderbgColorClose;
  }

  set onorderdetailheaderbgColorClose(value) {
    this._onorderdetailheaderbgColorClose = value;
  }

  _onorderdetailheaderbgColorClick = () => {
    this.setState({ displayheaderbgcolor: true });
  };

  get onorderdetailheaderbgColorClick() {
    return this._onorderdetailheaderbgColorClick;
  }

  set onorderdetailheaderbgColorClick(value) {
    this._onorderdetailheaderbgColorClick = value;
  }

  _onorderdetailheaderbgColorChangeComplete = color => {
    this.setState({ orderdetailheaderbgColor: color.hex });
    this.props.onorderdetailheaderbgColorChangeComplete(color);
  };

  get onorderdetailheaderbgColorChangeComplete() {
    return this._onorderdetailheaderbgColorChangeComplete;
  }

  set onorderdetailheaderbgColorChangeComplete(value) {
    this._onorderdetailheaderbgColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onoptionaddresstextColorClose = () => {
    this.setState({ displayoptioaddresscolor: false });
  };

  get onoptionaddresstextColorClose() {
    return this._onoptionaddresstextColorClose;
  }

  set onoptionaddresstextColorClose(value) {
    this._onoptionaddresstextColorClose = value;
  }

  _onoptionaddresstextColorClick = () => {
    this.setState({ displayoptioaddresscolor: true });
  };

  get onoptionaddresstextColorClick() {
    return this._onoptionaddresstextColorClick;
  }

  set onoptionaddresstextColorClick(value) {
    this._onoptionaddresstextColorClick = value;
  }

  _onoptionaddresstextColorChangeComplete = color => {
    this.setState({ optionaddresstextColor: color.hex });
    this.props.onoptionaddresstextColorChangeComplete(color);
  };

  get onoptionaddresstextColorChangeComplete() {
    return this._onoptionaddresstextColorChangeComplete;
  }

  set onoptionaddresstextColorChangeComplete(value) {
    this._onoptionaddresstextColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onoptiondetailpriceColorClose = () => {
    this.setState({ displayoptionpricecolor: false });
  };

  get onoptiondetailpriceColorClose() {
    return this._onoptiondetailpriceColorClose;
  }

  set onoptiondetailpriceColorClose(value) {
    this._onoptiondetailpriceColorClose = value;
  }

  _onoptiondetailpriceColorClick = () => {
    this.setState({ displayoptionpricecolor: true });
  };

  get onoptiondetailpriceColorClick() {
    return this._onoptiondetailpriceColorClick;
  }

  set onoptiondetailpriceColorClick(value) {
    this._onoptiondetailpriceColorClick = value;
  }

  _onoptiondetailpriceColorChangeComplete = color => {
    this.setState({ optiondetailpriceColor: color.hex });
    this.props.onoptiondetailpriceColorChangeComplete(color);
  };

  get onoptiondetailpriceColorChangeComplete() {
    return this._onoptiondetailpriceColorChangeComplete;
  }

  set onoptiondetailpriceColorChangeComplete(value) {
    this._onoptiondetailpriceColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onoptiondetailsproductColorClose = () => {
    this.setState({ displayoptiondetailprocolor: false });
  };

  get onoptiondetailsproductColorClose() {
    return this._onoptiondetailsproductColorClose;
  }

  set onoptiondetailsproductColorClose(value) {
    this._onoptiondetailsproductColorClose = value;
  }

  _onoptiondetailsproductColorClick = () => {
    this.setState({ displayoptiondetailprocolor: true });
  };

  get onoptiondetailsproductColorClick() {
    return this._onoptiondetailsproductColorClick;
  }

  set onoptiondetailsproductColorClick(value) {
    this._onoptiondetailsproductColorClick = value;
  }

  _onoptiondetailsproductColorChangeComplete = color => {
    this.setState({ optiondetailsproductColor: color.hex });
    this.props.onoptiondetailsproductColorChangeComplete(color);
  };

  get onoptiondetailsproductColorChangeComplete() {
    return this._onoptiondetailsproductColorChangeComplete;
  }

  set onoptiondetailsproductColorChangeComplete(value) {
    this._onoptiondetailsproductColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onoptiondetailsopColorClose = () => {
    this.setState({ displaydetailsoption: false });
  };

  get onoptiondetailsopColorClose() {
    return this._onoptiondetailsopColorClose;
  }

  set onoptiondetailsopColorClose(value) {
    this._onoptiondetailsopColorClose = value;
  }

  _onoptiondetailsopColorClick = () => {
    this.setState({ displaydetailsoption: true });
  };

  get onoptiondetailsopColorClick() {
    return this._onoptiondetailsopColorClick;
  }

  set onoptiondetailsopColorClick(value) {
    this._onoptiondetailsopColorClick = value;
  }

  _onoptiondetailsopColorChangeComplete = color => {
    this.setState({ optiondetailsopColor: color.hex });
    this.props.onoptiondetailsopColorChangeComplete(color);
  };

  get onoptiondetailsopColorChangeComplete() {
    return this._onoptiondetailsopColorChangeComplete;
  }

  set onoptiondetailsopColorChangeComplete(value) {
    this._onoptiondetailsopColorChangeComplete = value;
  }

  /* REVIEW CELL COLOR */

  _onopriondetaildescColorClose = () => {
    this.setState({ displaypricedesccolor: false });
  };

  get onopriondetaildescColorClose() {
    return this._onopriondetaildescColorClose;
  }

  set onopriondetaildescColorClose(value) {
    this._onopriondetaildescColorClose = value;
  }

  _onopriondetaildescColorClick = () => {
    this.setState({ displaypricedesccolor: true });
  };

  get onopriondetaildescColorClick() {
    return this._onopriondetaildescColorClick;
  }

  set onopriondetaildescColorClick(value) {
    this._onopriondetaildescColorClick = value;
  }

  _onopriondetaildescChangeComplete = color => {
    this.setState({ opriondetaildescColor: color.hex });
    this.props.onopriondetaildescChangeComplete(color);
  };

  get onopriondetaildescChangeComplete() {
    return this._onopriondetaildescChangeComplete;
  }

  set onopriondetaildescChangeComplete(value) {
    this._onopriondetaildescChangeComplete = value;
  }

  /* REVIEW POST COLOR */

  _onoptiondetailcellbgColorClose = () => {
    this.setState({ displayoptiondetailcellbgColor: false });
  };

  get onoptiondetailcellbgColorClose() {
    return this._onoptiondetailcellbgColorClose;
  }

  set onoptiondetailcellbgColorClose(value) {
    this._onoptiondetailcellbgColorClose = value;
  }

  _onoptiondetailcellbgColorClick = () => {
    this.setState({ displayoptiondetailcellbgColor: true });
  };

  get onoptiondetailcellbgColorClick() {
    return this._onoptiondetailcellbgColorClick;
  }

  set onoptiondetailcellbgColorClick(value) {
    this._onoptiondetailcellbgColorClick = value;
  }

  _onoptiondetailcellbgColorChangeComplete = color => {
    this.setState({ optiondetailscellbgColor: color.hex });
    this.props.onoptiondetailcellbgColorChangeComplete(color);
  };

  get onoptiondetailcellbgColorChangeComplete() {
    return this._onoptiondetailcellbgColorChangeComplete;
  }

  set onoptiondetailcellbgColorChangeComplete(value) {
    this._onoptiondetailcellbgColorChangeComplete = value;
  }

  /* REVIEW DATE COLOR */

  _onoptiondetailcellsepColorClose = () => {
    this.setState({ displayoptiondetailcellsepColor: false });
  };

  get onoptiondetailcellsepColorClose() {
    return this._onoptiondetailcellsepColorClose;
  }

  set onoptiondetailcellsepColorClose(value) {
    this._onoptiondetailcellsepColorClose = value;
  }

  _onoptiondetailcellsepColorClick = () => {
    this.setState({ displayoptiondetailcellsepColor: true });
  };

  get onoptiondetailcellsepColorClick() {
    return this._onoptiondetailcellsepColorClick;
  }

  set onoptiondetailcellsepColorClick(value) {
    this._onoptiondetailcellsepColorClick = value;
  }

  _onoptiondetailcellsepColorChangeComplete = color => {
    this.setState({ optiondetailcellsepColor: color.hex });
    this.props.onoptiondetailcellsepColorChangeComplete(color);
  };

  get onoptiondetailcellsepColorChangeComplete() {
    return this._onoptiondetailcellsepColorChangeComplete;
  }

  set onoptiondetailcellsepColorChangeComplete(value) {
    this._onoptiondetailcellsepColorChangeComplete = value;
  }

  state = {
    orderdetailBgColor: '#ffffff',
    orderdetailnumberColor: '#000000',
    headertitleBGColor: '#000000',
    orderdetailheaderbgColor: '#2ecc71',
    optionaddresstextColor: '#444444',
    optiondetailpriceColor: '#333333',
    optiondetailsproductColor: '#444444',
    optiondetailsopColor: '#2ecc71',
    opriondetaildescColor: '#000000',
    optiondetailscellbgColor: '#ffffff',
    optiondetailcellsepColor: '#f0f0f0',

    displayoptiondetailBGcolor: false,
    displayorderdetailnumberColor: false,
    displayheadertitlecolor: false,
    displayheaderbgcolor: false,
    displayoptioaddresscolor: false,
    displayoptionpricecolor: false,
    displayoptiondetailprocolor: false,
    displaydetailsoption: false,
    displaypricedesccolor: false,
    displayoptiondetailcellbgColor: false,
    displayoptiondetailcellsepColor: false
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
      <div id="SearchNavigationSettings" className="SearchNavigationSettings">
        <div className="UserOptionsContainer">
          <div className="row">
            <div className="col-sm-12 TabCreateAccount">
              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  BACKGROUND COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.orderdetailBgColor}
                    defaultValue={this.props.orderdetailBgColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onorderdetailBgColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.orderdetailBgColor
                      }}
                      onClick={this.onorderdetailBgColorClick}
                    />
                  </div>
                  {this.state.displayoptiondetailBGcolor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onorderdetailBgColorClose}
                      />
                      <ChromePicker
                        color={this.props.orderdetailBgColor}
                        onChange={this.onorderdetailBgColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  ORDER NUMBER/DATE COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.orderdetailnumberColor}
                    defaultValue={this.props.orderdetailnumberColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onorderdetailnumberColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.orderdetailnumberColor
                      }}
                      // onClick={this.onorderdetailnumberClick}
                    />
                  </div>
                  {this.state.displayorderdetailnumberColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onorderdetailnumberColorClose}
                      />
                      <ChromePicker
                        color={this.props.orderdetailnumberColor}
                        onChange={this.onorderdetailnumberColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  HEADER TITLE COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.headertitleBGColor}
                    defaultValue={this.props.headertitleBGColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onheadertitleBGColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.headertitleBGColor
                      }}
                      onClick={this.onheadertitleBGColorClick}
                    />
                  </div>
                  {this.state.displayheadertitlecolor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onheadertitleBGColorClose}
                      />
                      <ChromePicker
                        color={this.props.headertitleBGColor}
                        onChange={this.onheadertitleBGColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  HEADER BACKGROUND COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.orderdetailheaderbgColor}
                    defaultValue={this.props.orderdetailheaderbgColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onorderdetailheaderbgColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.orderdetailheaderbgColor
                      }}
                      onClick={this.onorderdetailheaderbgColorClick}
                    />
                  </div>
                  {this.state.displayheaderbgcolor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onorderdetailheaderbgColorClose}
                      />
                      <ChromePicker
                        color={this.props.orderdetailheaderbgColor}
                        onChange={this.onorderdetailheaderbgColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  ADDRESS TEXT COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.optionaddresstextColor}
                    defaultValue={this.props.optionaddresstextColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onoptionaddresstextColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.optionaddresstextColor
                      }}
                      // onClick={this.onreviewIButtonColorClick}
                    />
                  </div>
                  {this.state.displayoptioaddresscolor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onoptionaddresstextColorClose}
                      />
                      <ChromePicker
                        color={this.props.optionaddresstextColor}
                        onChange={this.onoptionaddresstextColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">PRICE COLOR</div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.optiondetailpriceColor}
                    defaultValue={this.props.optiondetailpriceColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onoptiondetailpriceColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.optiondetailpriceColor
                      }}
                      onClick={this.onoptiondetailpriceColorClick}
                    />
                  </div>
                  {this.state.displayoptionpricecolor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onoptiondetailpriceColorClose}
                      />
                      <ChromePicker
                        color={this.props.optiondetailpriceColor}
                        onChange={this.onoptiondetailpriceColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">PRODUCT COLOR</div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.optiondetailsproductColor}
                    defaultValue={this.props.optiondetailsproductColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onoptiondetailsproductColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.optiondetailsproductColor
                      }}
                      onClick={this.onoptiondetailsproductColorClick}
                    />
                  </div>
                  {this.state.displayoptiondetailprocolor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onoptiondetailsproductColorClose}
                      />
                      <ChromePicker
                        color={this.props.optiondetailsproductColor}
                        onChange={
                          this.onoptiondetailsproductColorChangeComplete
                        }
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">OPTION COLOR</div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.optiondetailsopColor}
                    defaultValue={this.props.optiondetailsopColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onoptiondetailsopColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.optiondetailsopColor
                      }}
                      onClick={this.onoptiondetailsopColorClick}
                    />
                  </div>
                  {this.state.displaydetailsoption ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onoptiondetailsopColorClose}
                      />
                      <ChromePicker
                        color={this.props.optiondetailsopColor}
                        onChange={this.onoptiondetailsopColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  PRICING DESCRIPTOR COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.opriondetaildescColor}
                    defaultValue={this.props.opriondetaildescColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onopriondetaildescColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.opriondetaildescColor
                      }}
                      onClick={this.onopriondetaildescColorClick}
                    />
                  </div>
                  {this.state.displaypricedesccolor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onopriondetaildescColorClose}
                      />
                      <ChromePicker
                        color={this.props.opriondetaildescColor}
                        onChange={this.onopriondetaildescChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  CELL BACKGROUND COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.optiondetailscellbgColor}
                    defaultValue={this.props.optiondetailscellbgColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onoptiondetailcellbgColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.optiondetailscellbgColor
                      }}
                      onClick={this.onoptiondetailcellbgColorClick}
                    />
                  </div>
                  {this.state.displayoptiondetailcellbgColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onoptiondetailcellbgColorClose}
                      />
                      <ChromePicker
                        color={this.props.optiondetailscellbgColor}
                        onChange={this.onoptiondetailcellbgColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  CELL SEPARATOR COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.optiondetailcellsepColor}
                    defaultValue={this.props.optiondetailcellsepColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onoptiondetailcellsepColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.optiondetailcellsepColor
                      }}
                      onClick={this.onoptiondetailcellsepColorClick}
                    />
                  </div>
                  {this.state.displayoptiondetailcellsepColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onoptiondetailcellsepColorClose}
                      />
                      <ChromePicker
                        color={this.props.optiondetailcellsepColor}
                        onChange={this.onoptiondetailcellsepColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Orderdetailoption;
