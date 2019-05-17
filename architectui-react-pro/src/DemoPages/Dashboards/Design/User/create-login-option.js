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
class CreateLoginOptions extends React.Component {
  constructor(props) {
    super(props);

    this.onloginBGColorChangeComplete = this.onloginBGColorChangeComplete.bind(
      this
    );
    this.onloginBGColorClick = this.onloginBGColorClick.bind(this);
    this.onloginBGColorClose = this.onloginBGColorClose.bind(this);

    this.onloginInputBGColorChangeComplete = this.onloginInputBGColorChangeComplete.bind(
      this
    );
    this.onloginInputBGColorClick = this.onloginInputBGColorClick.bind(this);
    this.onloginInputBGColorClose = this.onloginInputBGColorClose.bind(this);

    this.onloginInputIconColorChangeComplete = this.onloginInputIconColorChangeComplete.bind(
      this
    );
    this.onloginInputIconColorClick = this.onloginInputIconColorClick.bind(
      this
    );
    this.onloginInputIconColorClose = this.onloginInputIconColorClose.bind(
      this
    );

    this.onloginInputTitleColorChangeComplete = this.onloginInputTitleColorChangeComplete.bind(
      this
    );
    this.onloginInputTitleColorClick = this.onloginInputTitleColorClick.bind(
      this
    );
    this.onloginInputTitleColorClose = this.onloginInputTitleColorClose.bind(
      this
    );

    this.onloginButtonColorChangeComplete = this.onloginButtonColorChangeComplete.bind(
      this
    );
    this.onloginButtonColorClick = this.onloginButtonColorClick.bind(this);
    this.onloginButtonColorClose = this.onloginButtonColorClose.bind(this);

    this.onloginButtonTitleColorChangeComplete = this.onloginButtonTitleColorChangeComplete.bind(
      this
    );
    this.onloginButtonTitleColorClick = this.onloginButtonTitleColorClick.bind(
      this
    );
    this.onloginButtonTitleColorClose = this.onloginButtonTitleColorClose.bind(
      this
    );

    this.onloginGeneralTextColorChangeComplete = this.onloginGeneralTextColorChangeComplete.bind(
      this
    );
    this.onloginGeneralTextColorClick = this.onloginGeneralTextColorClick.bind(
      this
    );
    this.onloginGeneralTextColorClose = this.onloginGeneralTextColorClose.bind(
      this
    );

    this.onloginTextLinkColorChangeComplete = this.onloginTextLinkColorChangeComplete.bind(
      this
    );
    this.onloginTextLinkColorClick = this.onloginTextLinkColorClick.bind(this);
    this.onloginTextLinkColorClose = this.onloginTextLinkColorClose.bind(this);
  }

  /* MENU CELL BACKGROUND COLOR */

  _onloginBGColorClose = () => {
    this.setState({ displayBGColor: false });
  };

  get onloginBGColorClose() {
    return this._onloginBGColorClose;
  }

  set onloginBGColorClose(value) {
    this._onloginBGColorClose = value;
  }

  _onloginBGColorClick = () => {
    this.setState({ displayBGColor: true });
  };

  get onloginBGColorClick() {
    return this._onloginBGColorClick;
  }

  set onloginBGColorClick(value) {
    this._onloginBGColorClick = value;
  }

  _onloginBGColorChangeComplete = color => {
    this.setState({ loginBGColor: color.hex });
    this.props.onloginBGColorChangeComplete(color);
  };

  get onloginBGColorChangeComplete() {
    return this._onloginBGColorChangeComplete;
  }

  set onloginBGColorChangeComplete(value) {
    this._onloginBGColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onloginInputBGColorClose = () => {
    this.setState({ displayInputBGColor: false });
  };

  get onloginInputBGColorClose() {
    return this._onloginInputBGColorClose;
  }

  set onloginInputBGColorClose(value) {
    this._onloginInputBGColorClose = value;
  }

  _onloginInputBGColorClick = () => {
    this.setState({ displayInputBGColor: true });
  };

  get onloginInputBGColorClick() {
    return this._onloginInputBGColorClick;
  }

  set onloginInputBGColorClick(value) {
    this._onloginInputBGColorClick = value;
  }

  _onloginInputBGColorChangeComplete = color => {
    this.setState({ logininputBGColor: color.hex });
    this.props.onloginInputBGColorChangeComplete(color);
  };

  get onloginInputBGColorChangeComplete() {
    return this._onloginInputBGColorChangeComplete;
  }

  set onloginInputBGColorChangeComplete(value) {
    this._onloginInputBGColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onloginInputIconColorClose = () => {
    this.setState({ displayInputIconColor: false });
  };

  get onloginInputIconColorClose() {
    return this._onloginInputIconColorClose;
  }

  set onloginInputIconColorClose(value) {
    this._onloginInputIconColorClose = value;
  }

  _onloginInputIconColorClick = () => {
    this.setState({ displayInputIconColor: true });
  };

  get onloginInputIconColorClick() {
    return this._onloginInputIconColorClick;
  }

  set onloginInputIconColorClick(value) {
    this._onloginInputIconColorClick = value;
  }

  _onloginInputIconColorChangeComplete = color => {
    this.setState({ logininputIconColor: color.hex });
    this.props.onloginInputIconColorChangeComplete(color);
  };

  get onloginInputIconColorChangeComplete() {
    return this._onloginInputIconColorChangeComplete;
  }

  set onloginInputIconColorChangeComplete(value) {
    this._onloginInputIconColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onloginInputTitleColorClose = () => {
    this.setState({ displayInputTitleColor: false });
  };

  get onloginInputTitleColorClose() {
    return this._onloginInputTitleColorClose;
  }

  set onloginInputTitleColorClose(value) {
    this._onloginInputTitleColorClose = value;
  }

  _onloginInputTitleColorClick = () => {
    this.setState({ displayInputTitleColor: true });
  };

  get onloginInputTitleColorClick() {
    return this._onloginInputTitleColorClick;
  }

  set onloginInputTitleColorClick(value) {
    this._onloginInputTitleColorClick = value;
  }

  _onloginInputTitleColorChangeComplete = color => {
    this.setState({ logininputTitleColor: color.hex });
    this.props.onloginInputTitleColorChangeComplete(color);
  };

  get onloginInputTitleColorChangeComplete() {
    return this._onloginInputTitleColorChangeComplete;
  }

  set onloginInputTitleColorChangeComplete(value) {
    this._onloginInputTitleColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onloginButtonColorClose = () => {
    this.setState({ displayButtonColor: false });
  };

  get onloginButtonColorClose() {
    return this._onloginButtonColorClose;
  }

  set onloginButtonColorClose(value) {
    this._onloginButtonColorClose = value;
  }

  _onloginButtonColorClick = () => {
    this.setState({ displayButtonColor: true });
  };

  get onloginButtonColorClick() {
    return this._onloginButtonColorClick;
  }

  set onloginButtonColorClick(value) {
    this._onloginButtonColorClick = value;
  }

  _onloginButtonColorChangeComplete = color => {
    this.setState({ loginbuttonColor: color.hex });
    this.props.onloginButtonColorChangeComplete(color);
  };

  get onloginButtonColorChangeComplete() {
    return this._onloginButtonColorChangeComplete;
  }

  set onloginButtonColorChangeComplete(value) {
    this._onloginButtonColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onloginButtonTitleColorClose = () => {
    this.setState({ displayButtonTitleColor: false });
  };

  get onloginButtonTitleColorClose() {
    return this._onloginButtonTitleColorClose;
  }

  set onloginButtonTitleColorClose(value) {
    this._onloginButtonTitleColorClose = value;
  }

  _onloginButtonTitleColorClick = () => {
    this.setState({ displayButtonTitleColor: true });
  };

  get onloginButtonTitleColorClick() {
    return this._onloginButtonTitleColorClick;
  }

  set onloginButtonTitleColorClick(value) {
    this._onloginButtonTitleColorClick = value;
  }

  _onloginButtonTitleColorChangeComplete = color => {
    this.setState({ loginbuttonTitleColor: color.hex });
    this.props.onloginButtonTitleColorChangeComplete(color);
  };

  get onloginButtonTitleColorChangeComplete() {
    return this._onloginButtonTitleColorChangeComplete;
  }

  set onloginButtonTitleColorChangeComplete(value) {
    this._onloginButtonTitleColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onloginGeneralTextColorClose = () => {
    this.setState({ displayGeneralTextColor: false });
  };

  get onloginGeneralTextColorClose() {
    return this._onloginGeneralTextColorClose;
  }

  set onloginGeneralTextColorClose(value) {
    this._onloginGeneralTextColorClose = value;
  }

  _onloginGeneralTextColorClick = () => {
    this.setState({ displayGeneralTextColor: true });
  };

  get onloginGeneralTextColorClick() {
    return this._onloginGeneralTextColorClick;
  }

  set onloginGeneralTextColorClick(value) {
    this._onloginGeneralTextColorClick = value;
  }

  _onloginGeneralTextColorChangeComplete = color => {
    this.setState({ logingeneralTextColor: color.hex });
    this.props.onloginGeneralTextColorChangeComplete(color);
  };

  get onloginGeneralTextColorChangeComplete() {
    return this._onloginGeneralTextColorChangeComplete;
  }

  set onloginGeneralTextColorChangeComplete(value) {
    this._onloginGeneralTextColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onloginTextLinkColorClose = () => {
    this.setState({ displayTextLinkColor: false });
  };

  get onloginTextLinkColorClose() {
    return this._onloginTextLinkColorClose;
  }

  set onloginTextLinkColorClose(value) {
    this._onloginTextLinkColorClose = value;
  }

  _onloginTextLinkColorClick = () => {
    this.setState({ displayTextLinkColor: true });
  };

  get onloginTextLinkColorClick() {
    return this._onloginTextLinkColorClick;
  }

  set onloginTextLinkColorClick(value) {
    this._onloginTextLinkColorClick = value;
  }

  _onloginTextLinkColorChangeComplete = color => {
    this.setState({ logintextLinkColor: color.hex });
    this.props.onloginTextLinkColorChangeComplete(color);
  };

  get onloginTextLinkColorChangeComplete() {
    return this._onloginTextLinkColorChangeComplete;
  }

  set onloginTextLinkColorChangeComplete(value) {
    this._onloginTextLinkColorChangeComplete = value;
  }

  state = {
    loginBGColor: '#ffffff',
    logininputBGColor: '#fafafa',
    logininputIconColor: '#b8b8b8',
    logininputTitleColor: '#b8b8b8',
    loginbuttonColor: '#2ecc71',
    loginbuttonTitleColor: '#ffffff',
    logingeneralTextColor: '#444444',
    logintextLinkColor: '#8f8f8f',

    displayBGColor: false,
    displayInputBGColor: false,
    displayInputIconColor: false,
    displayInputTitleColor: false,
    displayButtonColor: false,
    displayButtonTitleColor: false,
    displayGeneralTextColor: false,
    displayTextLinkColor: false
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
                  BACKGROUND COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.loginBGColor}
                    defaultValue={this.props.loginBGColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onloginBGColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.loginBGColor
                      }}
                      onClick={this.onloginBGColorClick}
                    />
                  </div>
                  {this.state.displayBGColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onloginBGColorClose}
                      />
                      <ChromePicker
                        color={this.props.loginBGColor}
                        onChange={this.onloginBGColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  INPUT BACKGROUND COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.logininputBGColor}
                    defaultValue={this.props.logininputBGColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onloginInputBGColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.logininputBGColor
                      }}
                      onClick={this.onloginInputBGColorClick}
                    />
                  </div>
                  {this.state.displayInputBGColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onloginInputBGColorClose}
                      />
                      <ChromePicker
                        color={this.props.logininputBGColor}
                        onChange={this.onloginInputBGColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  INPUT ICON COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.logininputIconColor}
                    defaultValue={this.props.logininputIconColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onloginInputIconColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.logininputIconColor
                      }}
                      onClick={this.onloginInputIconColorClick}
                    />
                  </div>
                  {this.state.displayInputIconColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onloginInputIconColorClose}
                      />
                      <ChromePicker
                        color={this.props.logininputIconColor}
                        onChange={this.onloginInputIconColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  INPUT TITLE COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.logininputTitleColor}
                    defaultValue={this.props.logininputTitleColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onloginInputTitleColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.logininputTitleColor
                      }}
                      onClick={this.onloginInputTitleColorClick}
                    />
                  </div>
                  {this.state.displayInputTitleColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onloginInputTitleColorClose}
                      />
                      <ChromePicker
                        color={this.props.logininputTitleColor}
                        onChange={this.onloginInputTitleColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">BUTTON COLOR</div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.loginbuttonColor}
                    defaultValue={this.props.loginbuttonColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onloginButtonColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.loginbuttonColor
                      }}
                      // onClick={this.onloginIButtonColorClick}
                    />
                  </div>
                  {this.state.displayButtonColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onloginButtonColorClose}
                      />
                      <ChromePicker
                        color={this.props.loginbuttonColor}
                        onChange={this.onloginButtonColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  BUTTON TITLE COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.loginbuttonTitleColor}
                    defaultValue={this.props.loginbuttonTitleColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onloginButtonTitleColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.loginbuttonTitleColor
                      }}
                      onClick={this.onloginButtonTitleColorClick}
                    />
                  </div>
                  {this.state.displayButtonTitleColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onloginButtonTitleColorClose}
                      />
                      <ChromePicker
                        color={this.props.loginbuttonTitleColor}
                        onChange={this.onloginButtonTitleColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">GENERAL TEXT</div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.logingeneralTextColor}
                    defaultValue={this.props.logingeneralTextColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onloginGeneralTextColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.logingeneralTextColor
                      }}
                      onClick={this.onloginGeneralTextColorClick}
                    />
                  </div>
                  {this.state.displayGeneralTextColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onloginGeneralTextColorClose}
                      />
                      <ChromePicker
                        color={this.props.logingeneralTextColor}
                        onChange={this.onloginGeneralTextColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user"> TEXT LINK</div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.logintextLinkColor}
                    defaultValue={this.props.logintextLinkColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onloginTextLinkColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.logintextLinkColor
                      }}
                      onClick={this.onloginTextLinkColorClick}
                    />
                  </div>
                  {this.state.displayTextLinkColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onloginTextLinkColorClose}
                      />
                      <ChromePicker
                        color={this.props.logintextLinkColor}
                        onChange={this.onloginTextLinkColorChangeComplete}
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

export default CreateLoginOptions;
