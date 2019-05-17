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
class OrderHistoryOption extends React.Component {
  constructor(props) {
    super(props);

    this.onoptionBGColorChangeComplete = this.onoptionBGColorChangeComplete.bind(
      this
    );
    this.onoptionBGColorClick = this.onoptionBGColorClick.bind(this);
    this.onoptionBGColorClose = this.onoptionBGColorClose.bind(this);

    this.ontabbgColorChangeComplete = this.ontabbgColorChangeComplete.bind(
      this
    );
    this.ontabbgColorClick = this.ontabbgColorClick.bind(this);
    this.ontabbgColorClose = this.ontabbgColorClose.bind(this);

    this.ontabactiveColorChangeComplete = this.ontabactiveColorChangeComplete.bind(
      this
    );
    this.ontabactiveColorClick = this.ontabactiveColorClick.bind(this);
    this.ontabactiveColorClose = this.ontabactiveColorClose.bind(this);

    this.ontabinactiveColorChangeComplete = this.ontabinactiveColorChangeComplete.bind(
      this
    );
    this.ontabinactiveColorClick = this.ontabinactiveColorClick.bind(this);
    this.ontabinactiveColorClose = this.ontabinactiveColorClose.bind(this);

    this.onoptiontitleColorChangeComplete = this.onoptiontitleColorChangeComplete.bind(
      this
    );
    this.onoptiontitleColorClick = this.onoptiontitleColorClick.bind(this);
    this.onoptiontitleColorClose = this.onoptiontitleColorClose.bind(this);

    this.onoptionpriceColorChangeComplete = this.onoptionpriceColorChangeComplete.bind(
      this
    );
    this.onoptionpriceColorClick = this.onoptionpriceColorClick.bind(this);
    this.onoptionpriceColorClose = this.onoptionpriceColorClose.bind(this);

    this.onoptiondateColorChangeComplete = this.onoptiondateColorChangeComplete.bind(
      this
    );
    this.onoptiondateColorClick = this.onoptiondateColorClick.bind(this);
    this.onoptiondateColorClose = this.onoptiondateColorClose.bind(this);

    this.onimageborderChangeComplete = this.onimageborderChangeComplete.bind(
      this
    );
    this.onimageborderColorClick = this.onimageborderColorClick.bind(this);
    this.onimageborderColorClose = this.onimageborderColorClose.bind(this);

    this.oncellbgChangeComplete = this.oncellbgChangeComplete.bind(this);
    this.oncellbgClick = this.oncellbgClick.bind(this);
    this.oncellbgClose = this.oncellbgClose.bind(this);

    this.oncellsepratorColorChangeComplete = this.oncellsepratorColorChangeComplete.bind(
      this
    );
    this.oncellsepratorColorClick = this.oncellsepratorColorClick.bind(this);
    this.oncellsepratorColorClose = this.oncellsepratorColorClose.bind(this);
  }

  /* MENU CELL BACKGROUND COLOR */

  _onoptionBGColorClose = () => {
    this.setState({ displayBGColor: false });
  };

  get onoptionBGColorClose() {
    return this._onoptionBGColorClose;
  }

  set onoptionBGColorClose(value) {
    this._onoptionBGColorClose = value;
  }

  _onoptionBGColorClick = () => {
    this.setState({ displayBGColor: true });
  };

  get onoptionBGColorClick() {
    return this._onoptionBGColorClick;
  }

  set onoptionBGColorClick(value) {
    this._onoptionBGColorClick = value;
  }

  _onoptionBGColorChangeComplete = color => {
    this.setState({ optionBGColor: color.hex });
    this.props.onoptionBGColorChangeComplete(color);
  };

  get onoptionBGColorChangeComplete() {
    return this._onoptionBGColorChangeComplete;
  }

  set onoptionBGColorChangeComplete(value) {
    this._onoptionBGColorChangeComplete = value;
  }

  /* RATING COLOR */
  _ontabbgColorClose = () => {
    this.setState({ displaytabbgColor: false });
  };

  get ontabbgColorClose() {
    return this._ontabbgColorClose;
  }

  set ontabbgColorClose(value) {
    this._ontabbgColorClose = value;
  }

  _ontabbgColorClick = () => {
    this.setState({ displaytabbgColor: true });
  };

  get ontabbgColorClick() {
    return this._ontabbgColorClick;
  }

  set ontabbgColorClick(value) {
    this._ontabbgColorClick = value;
  }

  _ontabbgColorChangeComplete = color => {
    this.setState({ tabbgColor: color.hex });
    this.props.ontabbgColorChangeComplete(color);
  };

  get ontabbgColorChangeComplete() {
    return this._ontabbgColorChangeComplete;
  }

  set ontabbgColorChangeComplete(value) {
    this._ontabbgColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _ontabactiveColorClose = () => {
    this.setState({ displayTabActiveColor: false });
  };

  get ontabactiveColorClose() {
    return this._ontabactiveColorClose;
  }

  set ontabactiveColorClose(value) {
    this._ontabactiveColorClose = value;
  }

  _ontabactiveColorClick = () => {
    this.setState({ displayTabActiveColor: true });
  };

  get ontabactiveColorClick() {
    return this._ontabactiveColorClick;
  }

  set ontabactiveColorClick(value) {
    this._ontabactiveColorClick = value;
  }

  _ontabactiveColorChangeComplete = color => {
    this.setState({ tabactiveColor: color.hex });
    this.props.ontabactiveColorChangeComplete(color);
  };

  get ontabactiveColorChangeComplete() {
    return this._ontabactiveColorChangeComplete;
  }

  set ontabactiveColorChangeComplete(value) {
    this._ontabactiveColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _ontabinactiveColorClose = () => {
    this.setState({ displayTabInactiveColor: false });
  };

  get ontabinactiveColorClose() {
    return this._ontabinactiveColorClose;
  }

  set ontabinactiveColorClose(value) {
    this._ontabinactiveColorClose = value;
  }

  _ontabinactiveColorClick = () => {
    this.setState({ displayTabInactiveColor: true });
  };

  get ontabinactiveColorClick() {
    return this._ontabinactiveColorClick;
  }

  set ontabinactiveColorClick(value) {
    this._ontabinactiveColorClick = value;
  }

  _ontabinactiveColorChangeComplete = color => {
    this.setState({ tabinactiveColor: color.hex });
    this.props.ontabinactiveColorChangeComplete(color);
  };

  get ontabinactiveColorChangeComplete() {
    return this._ontabinactiveColorChangeComplete;
  }

  set ontabinactiveColorChangeComplete(value) {
    this._ontabinactiveColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onoptiontitleColorClose = () => {
    this.setState({ displayTabtitleColor: false });
  };

  get onoptiontitleColorClose() {
    return this._onoptiontitleColorClose;
  }

  set onoptiontitleColorClose(value) {
    this._onoptiontitleColorClose = value;
  }

  _onoptiontitleColorClick = () => {
    this.setState({ displayTabtitleColor: true });
  };

  get onoptiontitleColorClick() {
    return this._onoptiontitleColorClick;
  }

  set onoptiontitleColorClick(value) {
    this._onoptiontitleColorClick = value;
  }

  _onoptiontitleColorChangeComplete = color => {
    this.setState({ optiontitleColor: color.hex });
    this.props.onoptiontitleColorChangeComplete(color);
  };

  get onoptiontitleColorChangeComplete() {
    return this._onoptiontitleColorChangeComplete;
  }

  set onoptiontitleColorChangeComplete(value) {
    this._onoptiontitleColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onoptionpriceColorClose = () => {
    this.setState({ displayPriceColor: false });
  };

  get onoptionpriceColorClose() {
    return this._onoptionpriceColorClose;
  }

  set onoptionpriceColorClose(value) {
    this._onoptionpriceColorClose = value;
  }

  _onoptionpriceColorClick = () => {
    this.setState({ displayPriceColor: true });
  };

  get onoptionpriceColorClick() {
    return this._onoptionpriceColorClick;
  }

  set onoptionpriceColorClick(value) {
    this._onoptionpriceColorClick = value;
  }

  _onoptionpriceColorChangeComplete = color => {
    this.setState({ optionpriceColor: color.hex });
    this.props.onoptionpriceColorChangeComplete(color);
  };

  get onoptionpriceColorChangeComplete() {
    return this._onoptionpriceColorChangeComplete;
  }

  set onoptionpriceColorChangeComplete(value) {
    this._onoptionpriceColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onoptiondateColorClose = () => {
    this.setState({ displatdateColor: false });
  };

  get onoptiondateColorClose() {
    return this._onoptiondateColorClose;
  }

  set onoptiondateColorClose(value) {
    this._onoptiondateColorClose = value;
  }

  _onoptiondateColorClick = () => {
    this.setState({ displatdateColor: true });
  };

  get onoptiondateColorClick() {
    return this._onoptiondateColorClick;
  }

  set onoptiondateColorClick(value) {
    this._onoptiondateColorClick = value;
  }

  _onoptiondateColorChangeComplete = color => {
    this.setState({ optiondateColor: color.hex });
    this.props.onoptiondateColorChangeComplete(color);
  };

  get onoptiondateColorChangeComplete() {
    return this._onoptiondateColorChangeComplete;
  }

  set onoptiondateColorChangeComplete(value) {
    this._onoptiondateColorChangeComplete = value;
  }

  /* REVIEW CELL COLOR */

  _onimageborderColorClose = () => {
    this.setState({ displatimgborderColor: false });
  };

  get onimageborderColorClose() {
    return this._onimageborderColorClose;
  }

  set onimageborderColorClose(value) {
    this._onimageborderColorClose = value;
  }

  _onimageborderColorClick = () => {
    this.setState({ displatimgborderColor: true });
  };

  get onimageborderColorClick() {
    return this._onimageborderColorClick;
  }

  set onimageborderColorClick(value) {
    this._onimageborderColorClick = value;
  }

  _onimageborderChangeComplete = color => {
    this.setState({ imageborderColor: color.hex });
    this.props.onimageborderChangeComplete(color);
  };

  get onimageborderChangeComplete() {
    return this._onimageborderChangeComplete;
  }

  set onimageborderChangeComplete(value) {
    this._onimageborderChangeComplete = value;
  }

  /* REVIEW POST COLOR */

  _oncellbgClose = () => {
    this.setState({ displatcellbgcolor: false });
  };

  get oncellbgClose() {
    return this._oncellbgClose;
  }

  set oncellbgClose(value) {
    this._oncellbgClose = value;
  }

  _oncellbgClick = () => {
    this.setState({ displatcellbgcolor: true });
  };

  get oncellbgClick() {
    return this._oncellbgClick;
  }

  set oncellbgClick(value) {
    this._oncellbgClick = value;
  }

  _oncellbgChangeComplete = color => {
    this.setState({ cellBgColor: color.hex });
    this.props.oncellbgChangeComplete(color);
  };

  get oncellbgChangeComplete() {
    return this._oncellbgChangeComplete;
  }

  set oncellbgChangeComplete(value) {
    this._oncellbgChangeComplete = value;
  }

  /* REVIEW DATE COLOR */

  _oncellsepratorColorClose = () => {
    this.setState({ displaycellsepratorColor: false });
  };

  get oncellsepratorColorClose() {
    return this._oncellsepratorColorClose;
  }

  set oncellsepratorColorClose(value) {
    this._oncellsepratorColorClose = value;
  }

  _oncellsepratorColorClick = () => {
    this.setState({ displaycellsepratorColor: true });
  };

  get oncellsepratorColorClick() {
    return this._oncellsepratorColorClick;
  }

  set oncellsepratorColorClick(value) {
    this._oncellsepratorColorClick = value;
  }

  _oncellsepratorColorChangeComplete = color => {
    this.setState({ cellsepratorColor: color.hex });
    this.props.oncellsepratorColorChangeComplete(color);
  };

  get oncellsepratorColorChangeComplete() {
    return this._oncellsepratorColorChangeComplete;
  }

  set oncellsepratorColorChangeComplete(value) {
    this._oncellsepratorColorChangeComplete = value;
  }

  /* REVIEW TEXT COLOR */

  _onreviewtextColorClose = () => {
    this.setState({ displaytextColor: false });
  };

  get onreviewtextColorClose() {
    return this._onreviewtextColorClose;
  }

  set onreviewtextColorClose(value) {
    this._onreviewtextColorClose = value;
  }

  _onreviewtextColorClick = () => {
    this.setState({ displaytextColor: true });
  };

  get onreviewtextColorClick() {
    return this._onreviewtextColorClick;
  }

  set onreviewtextColorClick(value) {
    this._onreviewtextColorClick = value;
  }

  _onreviewtextColorChangeComplete = color => {
    this.setState({ reviewtextColor: color.hex });
    this.props.onreviewtextColorChangeComplete(color);
  };

  get onreviewtextColorChangeComplete() {
    return this._onreviewtextColorChangeComplete;
  }

  set onreviewtextColorChangeComplete(value) {
    this._onreviewtextColorChangeComplete = value;
  }

  /* REVIEW READMORE COLOR */

  _onreviewreadmoreColorClose = () => {
    this.setState({ displayreadmoreColor: false });
  };

  get onreviewreadmoreColorClose() {
    return this._onreviewreadmoreColorClose;
  }

  set onreviewreadmoreColorClose(value) {
    this._onreviewreadmoreColorClose = value;
  }

  _onreviewreadmoreColorClick = () => {
    this.setState({ displayreadmoreColor: true });
  };

  get onreviewreadmoreColorClick() {
    return this._onreviewreadmoreColorClick;
  }

  set onreviewreadmoreColorClick(value) {
    this._onreviewreadmoreColorClick = value;
  }

  _onreviewreadmoreColorChangeComplete = color => {
    this.setState({ reviewreadmoreColor: color.hex });
    this.props.onreviewreadmoreColorChangeComplete(color);
  };

  get onreviewreadmoreColorChangeComplete() {
    return this._onreviewreadmoreColorChangeComplete;
  }

  set onreviewreadmoreColorChangeComplete(value) {
    this._onreviewreadmoreColorChangeComplete = value;
  }

  state = {
    optionBGColor: '#ffffff',
    tabbgColor: '#ffffff',
    tabactiveColor: '#2ecc71',
    tabinactiveColor: '#cccccc',
    optiontitleColor: '#000000',
    optionpriceColor: '#333333',
    optiondateColor: '#444444',
    imageborderColor: '#ffffff',
    cellBgColor: '#ffffff',
    cellsepratorColor: '#f0f0f0',

    displayBGColor: false,
    displaytabbgColor: false,
    displayTabActiveColor: false,
    displayTabInactiveColor: false,
    displayTabtitleColor: false,
    displayButtonTitleColor: false,
    displayPriceColor: false,
    displatdateColor: false,
    displatimgborderColor: false,
    displatcellbgcolor: false,
    displaycellsepratorColor: false
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
                    value={this.props.optionBGColor}
                    defaultValue={this.props.optionBGColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onoptionBGColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.optionBGColor
                      }}
                      onClick={this.onoptionBGColorClick}
                    />
                  </div>
                  {this.state.displayBGColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onoptionBGColorClose}
                      />
                      <ChromePicker
                        color={this.props.optionBGColor}
                        onChange={this.onoptionBGColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
                <div className="noticeContainer">
                  *Note: Tab bar active, inactive, and background colors will
                  apply to both the order history list section AND the
                  favorites.
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">TITLE COLOR</div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.optiontitleColor}
                    defaultValue={this.props.optiontitleColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onoptiontitleColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.optiontitleColor
                      }}
                      // onClick={this.onreviewIButtonColorClick}
                    />
                  </div>
                  {this.state.displayTabtitleColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onoptiontitleColorClose}
                      />
                      <ChromePicker
                        color={this.props.optiontitleColor}
                        onChange={this.onoptiontitleColorChangeComplete}
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
                    value={this.props.optionpriceColor}
                    defaultValue={this.props.optionpriceColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onoptionpriceColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.optionpriceColor
                      }}
                      onClick={this.onoptionpriceColorClick}
                    />
                  </div>
                  {this.state.displayPriceColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onoptionpriceColorClose}
                      />
                      <ChromePicker
                        color={this.props.optionpriceColor}
                        onChange={this.onoptionpriceColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user"> DATE COLOR </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.optiondateColor}
                    defaultValue={this.props.optiondateColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onoptiondateColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.optiondateColor
                      }}
                      onClick={this.onoptiondateColorClick}
                    />
                  </div>
                  {this.state.displatdateColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onoptiondateColorClose}
                      />
                      <ChromePicker
                        color={this.props.optiondateColor}
                        onChange={this.onoptiondateColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  {' '}
                  IMAGE BORDER COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.imageborderColor}
                    defaultValue={this.props.imageborderColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onimageborderColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.imageborderColor
                      }}
                      onClick={this.onimageborderColorClick}
                    />
                  </div>
                  {this.state.displatimgborderColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onimageborderColorClose}
                      />
                      <ChromePicker
                        color={this.props.imageborderColor}
                        onChange={this.onimageborderChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  {' '}
                  CELL BACKGROUND COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.cellBgColor}
                    defaultValue={this.props.cellBgColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.oncellbgClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.cellBgColor
                      }}
                      onClick={this.oncellbgClick}
                    />
                  </div>
                  {this.state.displatcellbgcolor ? (
                    <div style={styles.popover}>
                      <div style={this.cover} onClick={this.oncellbgClose} />
                      <ChromePicker
                        color={this.props.cellBgColor}
                        onChange={this.oncellbgChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  {' '}
                  CELL SEPARATOR COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.cellsepratorColor}
                    defaultValue={this.props.cellsepratorColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.oncellsepratorColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.cellsepratorColor
                      }}
                      onClick={this.oncellsepratorColorClick}
                    />
                  </div>
                  {this.state.displaycellsepratorColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.oncellsepratorColorClose}
                      />
                      <ChromePicker
                        color={this.props.cellsepratorColor}
                        onChange={this.oncellsepratorColorChangeComplete}
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

export default OrderHistoryOption;
