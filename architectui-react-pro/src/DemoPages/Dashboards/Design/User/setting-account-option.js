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

class SettingAccountOption extends React.Component {
  constructor(props) {
    super(props);

    this.onsettingBGColorChangeComplete = this.onsettingBGColorChangeComplete.bind(
      this
    );
    this.onsettingBGColorClick = this.onsettingBGColorClick.bind(this);
    this.onsettingBGColorClose = this.onsettingBGColorClose.bind(this);

    this.onsettingInputBGColorChangeComplete = this.onsettingInputBGColorChangeComplete.bind(
      this
    );
    this.onsettingInputBGColorClick = this.onsettingInputBGColorClick.bind(
      this
    );
    this.onsettingInputBGColorClose = this.onsettingInputBGColorClose.bind(
      this
    );

    this.onsettingInputIconColorChangeComplete = this.onsettingInputIconColorChangeComplete.bind(
      this
    );
    this.onsettingInputIconColorClick = this.onsettingInputIconColorClick.bind(
      this
    );
    this.onsettingInputIconColorClose = this.onsettingInputIconColorClose.bind(
      this
    );

    this.onsettingInputTitleColorChangeComplete = this.onsettingInputTitleColorChangeComplete.bind(
      this
    );
    this.onsettingInputTitleColorClick = this.onsettingInputTitleColorClick.bind(
      this
    );
    this.onsettingInputTitleColorClose = this.onsettingInputTitleColorClose.bind(
      this
    );

    this.onsettingButtonColorChangeComplete = this.onsettingButtonColorChangeComplete.bind(
      this
    );
    this.onsettingButtonColorClick = this.onsettingButtonColorClick.bind(this);
    this.onsettingButtonColorClose = this.onsettingButtonColorClose.bind(this);

    this.onsettingButtonTitleColorChangeComplete = this.onsettingButtonTitleColorChangeComplete.bind(
      this
    );
    this.onsettingButtonTitleColorClick = this.onsettingButtonTitleColorClick.bind(
      this
    );
    this.onsettingButtonTitleColorClose = this.onsettingButtonTitleColorClose.bind(
      this
    );

    this.onsettingGeneralTextColorChangeComplete = this.onsettingGeneralTextColorChangeComplete.bind(
      this
    );
    this.onsettingGeneralTextColorClick = this.onsettingGeneralTextColorClick.bind(
      this
    );
    this.onsettingGeneralTextColorClose = this.onsettingGeneralTextColorClose.bind(
      this
    );
  }

  /* MENU CELL BACKGROUND COLOR */

  _onsettingBGColorClose = () => {
    this.setState({ displayBGColor: false });
  };

  get onsettingBGColorClose() {
    return this._onsettingBGColorClose;
  }

  set onsettingBGColorClose(value) {
    this._onsettingBGColorClose = value;
  }

  _onsettingBGColorClick = () => {
    this.setState({ displayBGColor: true });
  };

  get onsettingBGColorClick() {
    return this._onsettingBGColorClick;
  }

  set onsettingBGColorClick(value) {
    this._onsettingBGColorClick = value;
  }

  _onsettingBGColorChangeComplete = color => {
    this.setState({ settingBGColor: color.hex });
    this.props.onsettingBGColorChangeComplete(color);
  };

  get onsettingBGColorChangeComplete() {
    return this._onsettingBGColorChangeComplete;
  }

  set onsettingBGColorChangeComplete(value) {
    this._onsettingBGColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onsettingInputBGColorClose = () => {
    this.setState({ displayInputBGColor: false });
  };

  get onsettingInputBGColorClose() {
    return this._onsettingInputBGColorClose;
  }

  set onsettingInputBGColorClose(value) {
    this._onsettingInputBGColorClose = value;
  }

  _onsettingInputBGColorClick = () => {
    this.setState({ displayInputBGColor: true });
  };

  get onsettingInputBGColorClick() {
    return this._onsettingInputBGColorClick;
  }

  set onsettingInputBGColorClick(value) {
    this._onsettingInputBGColorClick = value;
  }

  _onsettingInputBGColorChangeComplete = color => {
    this.setState({ settinginputBGColor: color.hex });
    this.props.onsettingInputBGColorChangeComplete(color);
  };

  get onsettingInputBGColorChangeComplete() {
    return this._onsettingInputBGColorChangeComplete;
  }

  set onsettingInputBGColorChangeComplete(value) {
    this._onsettingInputBGColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onsettingInputIconColorClose = () => {
    this.setState({ displayInputIconColor: false });
  };

  get onsettingInputIconColorClose() {
    return this._onsettingInputIconColorClose;
  }

  set onsettingInputIconColorClose(value) {
    this._onsettingInputIconColorClose = value;
  }

  _onsettingInputIconColorClick = () => {
    this.setState({ displayInputIconColor: true });
  };

  get onsettingInputIconColorClick() {
    return this._onsettingInputIconColorClick;
  }

  set onsettingInputIconColorClick(value) {
    this._onsettingInputIconColorClick = value;
  }

  _onsettingInputIconColorChangeComplete = color => {
    this.setState({ settinginputIconColor: color.hex });
    this.props.onsettingInputIconColorChangeComplete(color);
  };

  get onsettingInputIconColorChangeComplete() {
    return this._onsettingInputIconColorChangeComplete;
  }

  set onsettingInputIconColorChangeComplete(value) {
    this._onsettingInputIconColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onsettingInputTitleColorClose = () => {
    this.setState({ displayInputTitleColor: false });
  };

  get onsettingInputTitleColorClose() {
    return this._onsettingInputTitleColorClose;
  }

  set onsettingInputTitleColorClose(value) {
    this._onsettingInputTitleColorClose = value;
  }

  _onsettingInputTitleColorClick = () => {
    this.setState({ displayInputTitleColor: true });
  };

  get onsettingInputTitleColorClick() {
    return this._onsettingInputTitleColorClick;
  }

  set onsettingInputTitleColorClick(value) {
    this._onsettingInputTitleColorClick = value;
  }

  _onsettingInputTitleColorChangeComplete = color => {
    this.setState({ settinginputTitleColor: color.hex });
    this.props.onsettingInputTitleColorChangeComplete(color);
  };

  get onsettingInputTitleColorChangeComplete() {
    return this._onsettingInputTitleColorChangeComplete;
  }

  set onsettingInputTitleColorChangeComplete(value) {
    this._onsettingInputTitleColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onsettingButtonColorClose = () => {
    this.setState({ displayButtonColor: false });
  };

  get onsettingButtonColorClose() {
    return this._onsettingButtonColorClose;
  }

  set onsettingButtonColorClose(value) {
    this._onsettingButtonColorClose = value;
  }

  _onsettingButtonColorClick = () => {
    this.setState({ displayButtonColor: true });
  };

  get onsettingButtonColorClick() {
    return this._onsettingButtonColorClick;
  }

  set onsettingButtonColorClick(value) {
    this._onsettingButtonColorClick = value;
  }

  _onsettingButtonColorChangeComplete = color => {
    this.setState({ settingbuttonColor: color.hex });
    this.props.onsettingButtonColorChangeComplete(color);
  };

  get onsettingButtonColorChangeComplete() {
    return this._onsettingButtonColorChangeComplete;
  }

  set onsettingButtonColorChangeComplete(value) {
    this._onsettingButtonColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onsettingButtonTitleColorClose = () => {
    this.setState({ displayButtonTitleColor: false });
  };

  get onsettingButtonTitleColorClose() {
    return this._onsettingButtonTitleColorClose;
  }

  set onsettingButtonTitleColorClose(value) {
    this._onsettingButtonTitleColorClose = value;
  }

  _onsettingButtonTitleColorClick = () => {
    this.setState({ displayButtonTitleColor: true });
  };

  get onsettingButtonTitleColorClick() {
    return this._onsettingButtonTitleColorClick;
  }

  set onsettingButtonTitleColorClick(value) {
    this._onsettingButtonTitleColorClick = value;
  }

  _onsettingButtonTitleColorChangeComplete = color => {
    this.setState({ settingbuttonTitleColor: color.hex });
    this.props.onsettingButtonTitleColorChangeComplete(color);
  };

  get onsettingButtonTitleColorChangeComplete() {
    return this._onsettingButtonTitleColorChangeComplete;
  }

  set onsettingButtonTitleColorChangeComplete(value) {
    this._onsettingButtonTitleColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onsettingGeneralTextColorClose = () => {
    this.setState({ displayGeneralTextColor: false });
  };

  get onsettingGeneralTextColorClose() {
    return this._onsettingGeneralTextColorClose;
  }

  set onsettingGeneralTextColorClose(value) {
    this._onsettingGeneralTextColorClose = value;
  }

  _onsettingGeneralTextColorClick = () => {
    this.setState({ displayGeneralTextColor: true });
  };

  get onsettingGeneralTextColorClick() {
    return this._onsettingGeneralTextColorClick;
  }

  set onsettingGeneralTextColorClick(value) {
    this._onsettingGeneralTextColorClick = value;
  }

  _onsettingGeneralTextColorChangeComplete = color => {
    this.setState({ settinggeneralTextColor: color.hex });
    this.props.onsettingGeneralTextColorChangeComplete(color);
  };

  get onsettingGeneralTextColorChangeComplete() {
    return this._onsettingGeneralTextColorChangeComplete;
  }

  set onsettingGeneralTextColorChangeComplete(value) {
    this._onsettingGeneralTextColorChangeComplete = value;
  }

  state = {
    settingBGColor: '#ffffff',
    settinginputBGColor: '#fafafa',
    settinginputIconColor: '#b8b8b8',
    settinginputTitleColor: '#b8b8b8',
    settingbuttonColor: '#2ecc71',
    settingbuttonTitleColor: '#ffffff',
    settinggeneralTextColor: '#444444',

    displayBGColor: false,
    displayInputBGColor: false,
    displayInputIconColor: false,
    displayInputTitleColor: false,
    displayButtonColor: false,
    displayButtonTitleColor: false,
    displayGeneralTextColor: false
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
                    value={this.props.settingBGColor}
                    defaultValue={this.props.settingBGColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onsettingBGColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.settingBGColor
                      }}
                      onClick={this.onsettingBGColorClick}
                    />
                  </div>
                  {this.state.displayBGColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onsettingBGColorClose}
                      />
                      <ChromePicker
                        color={this.props.settingBGColor}
                        onChange={this.onsettingBGColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  CELL BACKGROUND COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.settinginputBGColor}
                    defaultValue={this.props.settinginputBGColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onsettingInputBGColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.settinginputBGColor
                      }}
                      onClick={this.onsettingInputBGColorClick}
                    />
                  </div>
                  {this.state.displayInputBGColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onsettingInputBGColorClose}
                      />
                      <ChromePicker
                        color={this.props.settinginputBGColor}
                        onChange={this.onsettingInputBGColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  CELL SEPARATOR COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.settinginputIconColor}
                    defaultValue={this.props.settinginputIconColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onsettingInputIconColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.settinginputIconColor
                      }}
                      onClick={this.onsettingInputIconColorClick}
                    />
                  </div>
                  {this.state.displayInputIconColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onsettingInputIconColorClose}
                      />
                      <ChromePicker
                        color={this.props.settinginputIconColor}
                        onChange={this.onsettingInputIconColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">TEXT COLOR</div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.settinginputTitleColor}
                    defaultValue={this.props.settinginputTitleColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onsettingInputTitleColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.settinginputTitleColor
                      }}
                      onClick={this.onsettingInputTitleColorClick}
                    />
                  </div>
                  {this.state.displayInputTitleColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onsettingInputTitleColorClose}
                      />
                      <ChromePicker
                        color={this.props.settinginputTitleColor}
                        onChange={this.onsettingInputTitleColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  SWITCH SELECTED COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.settingbuttonColor}
                    defaultValue={this.props.settingbuttonColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onsettingButtonColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.settingbuttonColor
                      }}
                      // onClick={this.onsettingIButtonColorClick}
                    />
                  </div>
                  {this.state.displayButtonColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onsettingButtonColorClose}
                      />
                      <ChromePicker
                        color={this.props.settingbuttonColor}
                        onChange={this.onsettingButtonColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  SWITCH NOT SELECTED COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.settingbuttonTitleColor}
                    defaultValue={this.props.settingbuttonTitleColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onsettingButtonTitleColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.settingbuttonTitleColor
                      }}
                      onClick={this.onsettingButtonTitleColorClick}
                    />
                  </div>
                  {this.state.displayButtonTitleColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onsettingButtonTitleColorClose}
                      />
                      <ChromePicker
                        color={this.props.settingbuttonTitleColor}
                        onChange={this.onsettingButtonTitleColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">SWITCH THUMB</div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.settinggeneralTextColor}
                    defaultValue={this.props.settinggeneralTextColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onsettingGeneralTextColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.settinggeneralTextColor
                      }}
                      onClick={this.onsettingGeneralTextColorClick}
                    />
                  </div>
                  {this.state.displayGeneralTextColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onsettingGeneralTextColorClose}
                      />
                      <ChromePicker
                        color={this.props.settinggeneralTextColor}
                        onChange={this.onsettingGeneralTextColorChangeComplete}
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

export default SettingAccountOption;
