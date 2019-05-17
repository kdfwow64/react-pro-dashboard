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
class CreatecontactOptions extends React.Component {
  constructor(props) {
    super(props);

    this.oncontactBGColorChangeComplete = this.oncontactBGColorChangeComplete.bind(
      this
    );
    this.oncontactBGColorClick = this.oncontactBGColorClick.bind(this);
    this.oncontactBGColorClose = this.oncontactBGColorClose.bind(this);

    this.oncontactInputBGColorChangeComplete = this.oncontactInputBGColorChangeComplete.bind(
      this
    );
    this.oncontactInputBGColorClick = this.oncontactInputBGColorClick.bind(
      this
    );
    this.oncontactInputBGColorClose = this.oncontactInputBGColorClose.bind(
      this
    );

    this.oncontactInputIconColorChangeComplete = this.oncontactInputIconColorChangeComplete.bind(
      this
    );
    this.oncontactInputIconColorClick = this.oncontactInputIconColorClick.bind(
      this
    );
    this.oncontactInputIconColorClose = this.oncontactInputIconColorClose.bind(
      this
    );

    this.oncontactInputTitleColorChangeComplete = this.oncontactInputTitleColorChangeComplete.bind(
      this
    );
    this.oncontactInputTitleColorClick = this.oncontactInputTitleColorClick.bind(
      this
    );
    this.oncontactInputTitleColorClose = this.oncontactInputTitleColorClose.bind(
      this
    );

    this.oncontactButtonColorChangeComplete = this.oncontactButtonColorChangeComplete.bind(
      this
    );
    this.oncontactButtonColorClick = this.oncontactButtonColorClick.bind(this);
    this.oncontactButtonColorClose = this.oncontactButtonColorClose.bind(this);

    this.oncontactButtonTitleColorChangeComplete = this.oncontactButtonTitleColorChangeComplete.bind(
      this
    );
    this.oncontactButtonTitleColorClick = this.oncontactButtonTitleColorClick.bind(
      this
    );
    this.oncontactButtonTitleColorClose = this.oncontactButtonTitleColorClose.bind(
      this
    );
  }

  /* MENU CELL BACKGROUND COLOR */

  _oncontactBGColorClose = () => {
    this.setState({ displayBGColor: false });
  };

  get oncontactBGColorClose() {
    return this._oncontactBGColorClose;
  }

  set oncontactBGColorClose(value) {
    this._oncontactBGColorClose = value;
  }

  _oncontactBGColorClick = () => {
    this.setState({ displayBGColor: true });
  };

  get oncontactBGColorClick() {
    return this._oncontactBGColorClick;
  }

  set oncontactBGColorClick(value) {
    this._oncontactBGColorClick = value;
  }

  _oncontactBGColorChangeComplete = color => {
    this.setState({ contactBGColor: color.hex });
    this.props.oncontactBGColorChangeComplete(color);
  };

  get oncontactBGColorChangeComplete() {
    return this._oncontactBGColorChangeComplete;
  }

  set oncontactBGColorChangeComplete(value) {
    this._oncontactBGColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _oncontactInputBGColorClose = () => {
    this.setState({ displayInputBGColor: false });
  };

  get oncontactInputBGColorClose() {
    return this._oncontactInputBGColorClose;
  }

  set oncontactInputBGColorClose(value) {
    this._oncontactInputBGColorClose = value;
  }

  _oncontactInputBGColorClick = () => {
    this.setState({ displayInputBGColor: true });
  };

  get oncontactInputBGColorClick() {
    return this._oncontactInputBGColorClick;
  }

  set oncontactInputBGColorClick(value) {
    this._oncontactInputBGColorClick = value;
  }

  _oncontactInputBGColorChangeComplete = color => {
    this.setState({ contactinputBGColor: color.hex });
    this.props.oncontactInputBGColorChangeComplete(color);
  };

  get oncontactInputBGColorChangeComplete() {
    return this._oncontactInputBGColorChangeComplete;
  }

  set oncontactInputBGColorChangeComplete(value) {
    this._oncontactInputBGColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _oncontactInputIconColorClose = () => {
    this.setState({ displayInputIconColor: false });
  };

  get oncontactInputIconColorClose() {
    return this._oncontactInputIconColorClose;
  }

  set oncontactInputIconColorClose(value) {
    this._oncontactInputIconColorClose = value;
  }

  _oncontactInputIconColorClick = () => {
    this.setState({ displayInputIconColor: true });
  };

  get oncontactInputIconColorClick() {
    return this._oncontactInputIconColorClick;
  }

  set oncontactInputIconColorClick(value) {
    this._oncontactInputIconColorClick = value;
  }

  _oncontactInputIconColorChangeComplete = color => {
    this.setState({ contactinputIconColor: color.hex });
    this.props.oncontactInputIconColorChangeComplete(color);
  };

  get oncontactInputIconColorChangeComplete() {
    return this._oncontactInputIconColorChangeComplete;
  }

  set oncontactInputIconColorChangeComplete(value) {
    this._oncontactInputIconColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _oncontactInputTitleColorClose = () => {
    this.setState({ displayInputTitleColor: false });
  };

  get oncontactInputTitleColorClose() {
    return this._oncontactInputTitleColorClose;
  }

  set oncontactInputTitleColorClose(value) {
    this._oncontactInputTitleColorClose = value;
  }

  _oncontactInputTitleColorClick = () => {
    this.setState({ displayInputTitleColor: true });
  };

  get oncontactInputTitleColorClick() {
    return this._oncontactInputTitleColorClick;
  }

  set oncontactInputTitleColorClick(value) {
    this._oncontactInputTitleColorClick = value;
  }

  _oncontactInputTitleColorChangeComplete = color => {
    this.setState({ contactinputTitleColor: color.hex });
    this.props.oncontactInputTitleColorChangeComplete(color);
  };

  get oncontactInputTitleColorChangeComplete() {
    return this._oncontactInputTitleColorChangeComplete;
  }

  set oncontactInputTitleColorChangeComplete(value) {
    this._oncontactInputTitleColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _oncontactButtonColorClose = () => {
    this.setState({ displayButtonColor: false });
  };

  get oncontactButtonColorClose() {
    return this._oncontactButtonColorClose;
  }

  set oncontactButtonColorClose(value) {
    this._oncontactButtonColorClose = value;
  }

  _oncontactButtonColorClick = () => {
    this.setState({ displayButtonColor: true });
  };

  get oncontactButtonColorClick() {
    return this._oncontactButtonColorClick;
  }

  set oncontactButtonColorClick(value) {
    this._oncontactButtonColorClick = value;
  }

  _oncontactButtonColorChangeComplete = color => {
    this.setState({ contactbuttonColor: color.hex });
    this.props.oncontactButtonColorChangeComplete(color);
  };

  get oncontactButtonColorChangeComplete() {
    return this._oncontactButtonColorChangeComplete;
  }

  set oncontactButtonColorChangeComplete(value) {
    this._oncontactButtonColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _oncontactButtonTitleColorClose = () => {
    this.setState({ displayButtonTitleColor: false });
  };

  get oncontactButtonTitleColorClose() {
    return this._oncontactButtonTitleColorClose;
  }

  set oncontactButtonTitleColorClose(value) {
    this._oncontactButtonTitleColorClose = value;
  }

  _oncontactButtonTitleColorClick = () => {
    this.setState({ displayButtonTitleColor: true });
  };

  get oncontactButtonTitleColorClick() {
    return this._oncontactButtonTitleColorClick;
  }

  set oncontactButtonTitleColorClick(value) {
    this._oncontactButtonTitleColorClick = value;
  }

  _oncontactButtonTitleColorChangeComplete = color => {
    this.setState({ contactbuttonTitleColor: color.hex });
    this.props.oncontactButtonTitleColorChangeComplete(color);
  };

  get oncontactButtonTitleColorChangeComplete() {
    return this._oncontactButtonTitleColorChangeComplete;
  }

  set oncontactButtonTitleColorChangeComplete(value) {
    this._oncontactButtonTitleColorChangeComplete = value;
  }

  state = {
    contactBGColor: '#ffffff',
    contactinputBGColor: '#fafafa',
    contactinputIconColor: '#b8b8b8',
    contactinputTitleColor: '#b8b8b8',
    contactbuttonColor: '#2ecc71',
    contactbuttonTitleColor: '#ffffff',

    displayBGColor: false,
    displayInputBGColor: false,
    displayInputIconColor: false,
    displayInputTitleColor: false,
    displayButtonColor: false,
    displayButtonTitleColor: false
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
                    value={this.props.contactBGColor}
                    defaultValue={this.props.contactBGColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.oncontactBGColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.contactBGColor
                      }}
                      onClick={this.oncontactBGColorClick}
                    />
                  </div>
                  {this.state.displayBGColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.oncontactBGColorClose}
                      />
                      <ChromePicker
                        color={this.props.contactBGColor}
                        onChange={this.oncontactBGColorChangeComplete}
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
                    value={this.props.contactinputBGColor}
                    defaultValue={this.props.contactinputBGColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.oncontactInputBGColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.contactinputBGColor
                      }}
                      onClick={this.oncontactInputBGColorClick}
                    />
                  </div>
                  {this.state.displayInputBGColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.oncontactInputBGColorClose}
                      />
                      <ChromePicker
                        color={this.props.contactinputBGColor}
                        onChange={this.oncontactInputBGColorChangeComplete}
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
                    value={this.props.contactinputIconColor}
                    defaultValue={this.props.contactinputIconColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.oncontactInputIconColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.contactinputIconColor
                      }}
                      onClick={this.oncontactInputIconColorClick}
                    />
                  </div>
                  {this.state.displayInputIconColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.oncontactInputIconColorClose}
                      />
                      <ChromePicker
                        color={this.props.contactinputIconColor}
                        onChange={this.oncontactInputIconColorChangeComplete}
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
                    value={this.props.contactinputTitleColor}
                    defaultValue={this.props.contactinputTitleColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.oncontactInputTitleColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.contactinputTitleColor
                      }}
                      onClick={this.oncontactInputTitleColorClick}
                    />
                  </div>
                  {this.state.displayInputTitleColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.oncontactInputTitleColorClose}
                      />
                      <ChromePicker
                        color={this.props.contactinputTitleColor}
                        onChange={this.oncontactInputTitleColorChangeComplete}
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
                    value={this.props.contactbuttonColor}
                    defaultValue={this.props.contactbuttonColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.oncontactButtonColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.contactbuttonColor
                      }}
                      // onClick={this.oncontactIButtonColorClick}
                    />
                  </div>
                  {this.state.displayButtonColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.oncontactButtonColorClose}
                      />
                      <ChromePicker
                        color={this.props.contactbuttonColor}
                        onChange={this.oncontactButtonColorChangeComplete}
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
                    value={this.props.contactbuttonTitleColor}
                    defaultValue={this.props.contactbuttonTitleColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.oncontactButtonTitleColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.contactbuttonTitleColor
                      }}
                      onClick={this.oncontactButtonTitleColorClick}
                    />
                  </div>
                  {this.state.displayButtonTitleColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.oncontactButtonTitleColorClose}
                      />
                      <ChromePicker
                        color={this.props.contactbuttonTitleColor}
                        onChange={this.oncontactButtonTitleColorChangeComplete}
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

export default CreatecontactOptions;
