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

class CreateAccountOptions extends React.Component {
  constructor(props) {
    super(props);

    this.onBGColorChangeComplete = this.onBGColorChangeComplete.bind(this);
    this.onBGColorClick = this.onBGColorClick.bind(this);
    this.onBGColorClose = this.onBGColorClose.bind(this);

    this.onInputBGColorChangeComplete = this.onInputBGColorChangeComplete.bind(
      this
    );
    this.onInputBGColorClick = this.onInputBGColorClick.bind(this);
    this.onInputBGColorClose = this.onInputBGColorClose.bind(this);

    this.onInputIconColorChangeComplete = this.onInputIconColorChangeComplete.bind(
      this
    );
    this.onInputIconColorClick = this.onInputIconColorClick.bind(this);
    this.onInputIconColorClose = this.onInputIconColorClose.bind(this);

    this.onInputTitleColorChangeComplete = this.onInputTitleColorChangeComplete.bind(
      this
    );
    this.onInputTitleColorClick = this.onInputTitleColorClick.bind(this);
    this.onInputTitleColorClose = this.onInputTitleColorClose.bind(this);

    this.onButtonColorChangeComplete = this.onButtonColorChangeComplete.bind(
      this
    );
    this.onButtonColorClick = this.onButtonColorClick.bind(this);
    this.onButtonColorClose = this.onButtonColorClose.bind(this);

    this.onButtonTitleColorChangeComplete = this.onButtonTitleColorChangeComplete.bind(
      this
    );
    this.onButtonTitleColorClick = this.onButtonTitleColorClick.bind(this);
    this.onButtonTitleColorClose = this.onButtonTitleColorClose.bind(this);

    this.onGeneralTextColorChangeComplete = this.onGeneralTextColorChangeComplete.bind(
      this
    );
    this.onGeneralTextColorClick = this.onGeneralTextColorClick.bind(this);
    this.onGeneralTextColorClose = this.onGeneralTextColorClose.bind(this);

    this.onTextLinkColorChangeComplete = this.onTextLinkColorChangeComplete.bind(
      this
    );
    this.onTextLinkColorClick = this.onTextLinkColorClick.bind(this);
    this.onTextLinkColorClose = this.onTextLinkColorClose.bind(this);
  }

  /* MENU CELL BACKGROUND COLOR */

  _onBGColorClose = () => {
    this.setState({ displayBGColor: false });
  };

  get onBGColorClose() {
    return this._onBGColorClose;
  }

  set onBGColorClose(value) {
    this._onBGColorClose = value;
  }

  _onBGColorClick = () => {
    this.setState({ displayBGColor: true });
  };

  get onBGColorClick() {
    return this._onBGColorClick;
  }

  set onBGColorClick(value) {
    this._onBGColorClick = value;
  }

  _onBGColorChangeComplete = color => {
    this.setState({ BGColor: color.hex });
    this.props.onBGColorChangeComplete(color);
  };

  get onBGColorChangeComplete() {
    return this._onBGColorChangeComplete;
  }

  set onBGColorChangeComplete(value) {
    this._onBGColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onInputBGColorClose = () => {
    this.setState({ displayInputBGColor: false });
  };

  get onInputBGColorClose() {
    return this._onInputBGColorClose;
  }

  set onInputBGColorClose(value) {
    this._onInputBGColorClose = value;
  }

  _onInputBGColorClick = () => {
    this.setState({ displayInputBGColor: true });
  };

  get onInputBGColorClick() {
    return this._onInputBGColorClick;
  }

  set onInputBGColorClick(value) {
    this._onInputBGColorClick = value;
  }

  _onInputBGColorChangeComplete = color => {
    this.setState({ inputBGColor: color.hex });
    this.props.onInputBGColorChangeComplete(color);
  };

  get onInputBGColorChangeComplete() {
    return this._onInputBGColorChangeComplete;
  }

  set onInputBGColorChangeComplete(value) {
    this._onInputBGColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onInputIconColorClose = () => {
    this.setState({ displayInputIconColor: false });
  };

  get onInputIconColorClose() {
    return this._onInputIconColorClose;
  }

  set onInputIconColorClose(value) {
    this._onInputIconColorClose = value;
  }

  _onInputIconColorClick = () => {
    this.setState({ displayInputIconColor: true });
  };

  get onInputIconColorClick() {
    return this._onInputIconColorClick;
  }

  set onInputIconColorClick(value) {
    this._onInputIconColorClick = value;
  }

  _onInputIconColorChangeComplete = color => {
    this.setState({ inputIconColor: color.hex });
    this.props.onInputIconColorChangeComplete(color);
  };

  get onInputIconColorChangeComplete() {
    return this._onInputIconColorChangeComplete;
  }

  set onInputIconColorChangeComplete(value) {
    this._onInputIconColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onInputTitleColorClose = () => {
    this.setState({ displayInputTitleColor: false });
  };

  get onInputTitleColorClose() {
    return this._onInputTitleColorClose;
  }

  set onInputTitleColorClose(value) {
    this._onInputTitleColorClose = value;
  }

  _onInputTitleColorClick = () => {
    this.setState({ displayInputTitleColor: true });
  };

  get onInputTitleColorClick() {
    return this._onInputTitleColorClick;
  }

  set onInputTitleColorClick(value) {
    this._onInputTitleColorClick = value;
  }

  _onInputTitleColorChangeComplete = color => {
    this.setState({ inputTitleColor: color.hex });
    this.props.onInputTitleColorChangeComplete(color);
  };

  get onInputTitleColorChangeComplete() {
    return this._onInputTitleColorChangeComplete;
  }

  set onInputTitleColorChangeComplete(value) {
    this._onInputTitleColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onButtonColorClose = () => {
    this.setState({ displayButtonColor: false });
  };

  get onButtonColorClose() {
    return this._onButtonColorClose;
  }

  set onButtonColorClose(value) {
    this._onButtonColorClose = value;
  }

  _onButtonColorClick = () => {
    this.setState({ displayButtonColor: true });
  };

  get onButtonColorClick() {
    return this._onButtonColorClick;
  }

  set onButtonColorClick(value) {
    this._onButtonColorClick = value;
  }

  _onButtonColorChangeComplete = color => {
    this.setState({ buttonColor: color.hex });
    this.props.onButtonColorChangeComplete(color);
  };

  get onButtonColorChangeComplete() {
    return this._onButtonColorChangeComplete;
  }

  set onButtonColorChangeComplete(value) {
    this._onButtonColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onButtonTitleColorClose = () => {
    this.setState({ displayButtonTitleColor: false });
  };

  get onButtonTitleColorClose() {
    return this._onButtonTitleColorClose;
  }

  set onButtonTitleColorClose(value) {
    this._onButtonTitleColorClose = value;
  }

  _onButtonTitleColorClick = () => {
    this.setState({ displayButtonTitleColor: true });
  };

  get onButtonTitleColorClick() {
    return this._onButtonTitleColorClick;
  }

  set onButtonTitleColorClick(value) {
    this._onButtonTitleColorClick = value;
  }

  _onButtonTitleColorChangeComplete = color => {
    this.setState({ buttonTitleColor: color.hex });
    this.props.onButtonTitleColorChangeComplete(color);
  };

  get onButtonTitleColorChangeComplete() {
    return this._onButtonTitleColorChangeComplete;
  }

  set onButtonTitleColorChangeComplete(value) {
    this._onButtonTitleColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onGeneralTextColorClose = () => {
    this.setState({ displayGeneralTextColor: false });
  };

  get onGeneralTextColorClose() {
    return this._onGeneralTextColorClose;
  }

  set onGeneralTextColorClose(value) {
    this._onGeneralTextColorClose = value;
  }

  _onGeneralTextColorClick = () => {
    this.setState({ displayGeneralTextColor: true });
  };

  get onGeneralTextColorClick() {
    return this._onGeneralTextColorClick;
  }

  set onGeneralTextColorClick(value) {
    this._onGeneralTextColorClick = value;
  }

  _onGeneralTextColorChangeComplete = color => {
    this.setState({ generalTextColor: color.hex });
    this.props.onGeneralTextColorChangeComplete(color);
  };

  get onGeneralTextColorChangeComplete() {
    return this._onGeneralTextColorChangeComplete;
  }

  set onGeneralTextColorChangeComplete(value) {
    this._onGeneralTextColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onTextLinkColorClose = () => {
    this.setState({ displayTextLinkColor: false });
  };

  get onTextLinkColorClose() {
    return this._onTextLinkColorClose;
  }

  set onTextLinkColorClose(value) {
    this._onTextLinkColorClose = value;
  }

  _onTextLinkColorClick = () => {
    this.setState({ displayTextLinkColor: true });
  };

  get onTextLinkColorClick() {
    return this._onTextLinkColorClick;
  }

  set onTextLinkColorClick(value) {
    this._onTextLinkColorClick = value;
  }

  _onTextLinkColorChangeComplete = color => {
    this.setState({ textLinkColor: color.hex });
    this.props.onTextLinkColorChangeComplete(color);
  };

  get onTextLinkColorChangeComplete() {
    return this._onTextLinkColorChangeComplete;
  }

  set onTextLinkColorChangeComplete(value) {
    this._onTextLinkColorChangeComplete = value;
  }

  state = {
    BGColor: '#ffffff',
    inputBGColor: '#fafafa',
    inputIconColor: '#b8b8b8',
    inputTitleColor: '#b8b8b8',
    buttonColor: '#2ecc71',
    buttonTitleColor: '#ffffff',
    generalTextColor: '#444444',
    textLinkColor: '#8f8f8f',

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
                  BACKGROUND COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.UserAccountBGColor}
                    defaultValue={this.props.BGColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onBGColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.UserAccountBGColor
                      }}
                      onClick={this.onBGColorClick}
                    />
                  </div>
                  {this.state.displayBGColor ? (
                    <div style={styles.popover}>
                      <div style={this.cover} onClick={this.onBGColorClose} />
                      <ChromePicker
                        color={this.props.UserAccountBGColor}
                        onChange={this.onBGColorChangeComplete}
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
                    value={this.props.UserAccountinputBGColor}
                    defaultValue={this.props.inputBGColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onInputBGColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.UserAccountinputBGColor
                      }}
                      onClick={this.onInputBGColorClick}
                    />
                  </div>
                  {this.state.displayInputBGColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onInputBGColorClose}
                      />
                      <ChromePicker
                        color={this.props.UserAccountinputBGColor}
                        onChange={this.onInputBGColorChangeComplete}
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
                    value={this.props.UserAccountinputIconColor}
                    defaultValue={this.props.inputIconColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onInputIconColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.UserAccountinputIconColor
                      }}
                      onClick={this.onInputIconColorClick}
                    />
                  </div>
                  {this.state.displayInputIconColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onInputIconColorClose}
                      />
                      <ChromePicker
                        color={this.props.UserAccountinputIconColor}
                        onChange={this.onInputIconColorChangeComplete}
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
                    value={this.props.UserAccountinputTitleColor}
                    defaultValue={this.props.inputTitleColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onInputTitleColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.UserAccountinputTitleColor
                      }}
                      onClick={this.onInputTitleColorClick}
                    />
                  </div>
                  {this.state.displayInputTitleColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onInputTitleColorClose}
                      />
                      <ChromePicker
                        color={this.props.UserAccountinputTitleColor}
                        onChange={this.onInputTitleColorChangeComplete}
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
                    value={this.props.UserAccountbuttonColor}
                    defaultValue={this.props.buttonColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onButtonColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.UserAccountbuttonColor
                      }}
                      // onClick={this.onIButtonColorClick}
                    />
                  </div>
                  {this.state.displayButtonColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onButtonColorClose}
                      />
                      <ChromePicker
                        color={this.props.UserAccountbuttonColor}
                        onChange={this.onButtonColorChangeComplete}
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
                    value={this.props.UserAccountbuttonTitleColor}
                    defaultValue={this.props.buttonTitleColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onButtonTitleColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.UserAccountbuttonTitleColor
                      }}
                      onClick={this.onButtonTitleColorClick}
                    />
                  </div>
                  {this.state.displayButtonTitleColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onButtonTitleColorClose}
                      />
                      <ChromePicker
                        color={this.props.UserAccountbuttonTitleColor}
                        onChange={this.onButtonTitleColorChangeComplete}
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
                    value={this.props.UserAccountgeneralTextColor}
                    defaultValue={this.props.generalTextColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onGeneralTextColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.UserAccountgeneralTextColor
                      }}
                      onClick={this.onGeneralTextColorClick}
                    />
                  </div>
                  {this.state.displayGeneralTextColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onGeneralTextColorClose}
                      />
                      <ChromePicker
                        color={this.props.UserAccountgeneralTextColor}
                        onChange={this.onGeneralTextColorChangeComplete}
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
                    value={this.props.UserAccounttextLinkColor}
                    defaultValue={this.props.textLinkColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onTextLinkColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.UserAccounttextLinkColor
                      }}
                      onClick={this.onTextLinkColorClick}
                    />
                  </div>
                  {this.state.displayTextLinkColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onTextLinkColorClose}
                      />
                      <ChromePicker
                        color={this.props.UserAccounttextLinkColor}
                        onChange={this.onTextLinkColorChangeComplete}
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

export default CreateAccountOptions;
