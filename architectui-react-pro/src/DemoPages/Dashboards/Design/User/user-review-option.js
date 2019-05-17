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

class ReviewOptions extends React.Component {
  constructor(props) {
    super(props);

    this.onreviewBgColorChangeComplete = this.onreviewBgColorChangeComplete.bind(
      this
    );
    this.onreviewBgColorClick = this.onreviewBgColorClick.bind(this);
    this.onreviewBgColorClose = this.onreviewBgColorClose.bind(this);

    this.onreviewRatingColorChangeComplete = this.onreviewRatingColorChangeComplete.bind(
      this
    );
    this.onreviewRatingColorClick = this.onreviewRatingColorClick.bind(this);
    this.onreviewRatingColorClose = this.onreviewRatingColorClose.bind(this);

    this.onreviewInputBGColorChangeComplete = this.onreviewInputBGColorChangeComplete.bind(
      this
    );
    this.onreviewInputBGColorClick = this.onreviewInputBGColorClick.bind(this);
    this.onreviewInputBGColorClose = this.onreviewInputBGColorClose.bind(this);

    this.onreviewInputTitleColorChangeComplete = this.onreviewInputTitleColorChangeComplete.bind(
      this
    );
    this.onreviewInputTitleColorClick = this.onreviewInputTitleColorClick.bind(
      this
    );
    this.onreviewInputTitleColorClose = this.onreviewInputTitleColorClose.bind(
      this
    );

    this.onreviewButtonColorChangeComplete = this.onreviewButtonColorChangeComplete.bind(
      this
    );
    this.onreviewButtonColorClick = this.onreviewButtonColorClick.bind(this);
    this.onreviewButtonColorClose = this.onreviewButtonColorClose.bind(this);

    this.onreviewButtonTitleColorChangeComplete = this.onreviewButtonTitleColorChangeComplete.bind(
      this
    );
    this.onreviewButtonTitleColorClick = this.onreviewButtonTitleColorClick.bind(
      this
    );
    this.onreviewButtonTitleColorClose = this.onreviewButtonTitleColorClose.bind(
      this
    );

    this.onreviewGeneralTextColorChangeComplete = this.onreviewGeneralTextColorChangeComplete.bind(
      this
    );
    this.onreviewGeneralTextColorClick = this.onreviewGeneralTextColorClick.bind(
      this
    );
    this.onreviewGeneralTextColorClose = this.onreviewGeneralTextColorClose.bind(
      this
    );

    this.onreviewTextLinkColorChangeComplete = this.onreviewTextLinkColorChangeComplete.bind(
      this
    );
    this.onreviewTextLinkColorClick = this.onreviewTextLinkColorClick.bind(
      this
    );
    this.onreviewTextLinkColorClose = this.onreviewTextLinkColorClose.bind(
      this
    );

    this.onreviewcellChangeComplete = this.onreviewcellChangeComplete.bind(
      this
    );
    this.onreviewcellColorClick = this.onreviewcellColorClick.bind(this);
    this.onreviewcellColorClose = this.onreviewcellColorClose.bind(this);

    this.onreviewpostColorChangeComplete = this.onreviewpostColorChangeComplete.bind(
      this
    );
    this.onreviewpostColorClick = this.onreviewpostColorClick.bind(this);
    this.onreviewpostColorClose = this.onreviewpostColorClose.bind(this);

    this.onreviewdateColorChangeComplete = this.onreviewdateColorChangeComplete.bind(
      this
    );
    this.onreviewdateColorClick = this.onreviewdateColorClick.bind(this);
    this.onreviewdateColorClose = this.onreviewdateColorClose.bind(this);

    this.onreviewtextColorChangeComplete = this.onreviewtextColorChangeComplete.bind(
      this
    );
    this.onreviewtextColorClick = this.onreviewtextColorClick.bind(this);
    this.onreviewtextColorClose = this.onreviewtextColorClose.bind(this);

    this.onreviewreadmoreColorChangeComplete = this.onreviewreadmoreColorChangeComplete.bind(
      this
    );
    this.onreviewreadmoreColorClick = this.onreviewreadmoreColorClick.bind(
      this
    );
    this.onreviewreadmoreColorClose = this.onreviewreadmoreColorClose.bind(
      this
    );
  }

  /* MENU CELL BACKGROUND COLOR */

  _onreviewBgColorClose = () => {
    this.setState({ displayBGColor: false });
  };

  get onreviewBgColorClose() {
    return this._onreviewBgColorClose;
  }

  set onreviewBgColorClose(value) {
    this._onreviewBgColorClose = value;
  }

  _onreviewBgColorClick = () => {
    this.setState({ displayBGColor: true });
  };

  get onreviewBgColorClick() {
    return this._onreviewBgColorClick;
  }

  set onreviewBgColorClick(value) {
    this._onreviewBgColorClick = value;
  }

  _onreviewBgColorChangeComplete = color => {
    this.setState({ reviewBgColor: color.hex });
    this.props.onreviewBgColorChangeComplete(color);
  };

  get onreviewBgColorChangeComplete() {
    return this._onreviewBgColorChangeComplete;
  }

  set onreviewBgColorChangeComplete(value) {
    this._onreviewBgColorChangeComplete = value;
  }

  /* RATING COLOR */
  _onreviewRatingColorClose = () => {
    this.setState({ displayreviewRatingColor: false });
  };

  get onreviewRatingColorClose() {
    return this._onreviewRatingColorClose;
  }

  set onreviewRatingColorClose(value) {
    this._onreviewRatingColorClose = value;
  }

  _onreviewRatingColorClick = () => {
    this.setState({ displayreviewRatingColor: true });
  };

  get onreviewRatingColorClick() {
    return this._onreviewRatingColorClick;
  }

  set onreviewRatingColorClick(value) {
    this._onreviewRatingColorClick = value;
  }

  _onreviewRatingColorChangeComplete = color => {
    this.setState({ reviewRatingColor: color.hex });
    this.props.onreviewRatingColorChangeComplete(color);
  };

  get onreviewRatingColorChangeComplete() {
    return this._onreviewRatingColorChangeComplete;
  }

  set onreviewRatingColorChangeComplete(value) {
    this._onreviewRatingColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onreviewInputBGColorClose = () => {
    this.setState({ displayInputBGColor: false });
  };

  get onreviewInputBGColorClose() {
    return this._onreviewInputBGColorClose;
  }

  set onreviewInputBGColorClose(value) {
    this._onreviewInputBGColorClose = value;
  }

  _onreviewInputBGColorClick = () => {
    this.setState({ displayInputBGColor: true });
  };

  get onreviewInputBGColorClick() {
    return this._onreviewInputBGColorClick;
  }

  set onreviewInputBGColorClick(value) {
    this._onreviewInputBGColorClick = value;
  }

  _onreviewInputBGColorChangeComplete = color => {
    this.setState({ reviewinputBGColor: color.hex });
    this.props.onreviewInputBGColorChangeComplete(color);
  };

  get onreviewInputBGColorChangeComplete() {
    return this._onreviewInputBGColorChangeComplete;
  }

  set onreviewInputBGColorChangeComplete(value) {
    this._onreviewInputBGColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onreviewInputTitleColorClose = () => {
    this.setState({ displayInputTitleColor: false });
  };

  get onreviewInputTitleColorClose() {
    return this._onreviewInputTitleColorClose;
  }

  set onreviewInputTitleColorClose(value) {
    this._onreviewInputTitleColorClose = value;
  }

  _onreviewInputTitleColorClick = () => {
    this.setState({ displayInputTitleColor: true });
  };

  get onreviewInputTitleColorClick() {
    return this._onreviewInputTitleColorClick;
  }

  set onreviewInputTitleColorClick(value) {
    this._onreviewInputTitleColorClick = value;
  }

  _onreviewInputTitleColorChangeComplete = color => {
    this.setState({ reviewinputTitleColor: color.hex });
    this.props.onreviewInputTitleColorChangeComplete(color);
  };

  get onreviewInputTitleColorChangeComplete() {
    return this._onreviewInputTitleColorChangeComplete;
  }

  set onreviewInputTitleColorChangeComplete(value) {
    this._onreviewInputTitleColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onreviewButtonColorClose = () => {
    this.setState({ displayButtonColor: false });
  };

  get onreviewButtonColorClose() {
    return this._onreviewButtonColorClose;
  }

  set onreviewButtonColorClose(value) {
    this._onreviewButtonColorClose = value;
  }

  _onreviewButtonColorClick = () => {
    this.setState({ displayButtonColor: true });
  };

  get onreviewButtonColorClick() {
    return this._onreviewButtonColorClick;
  }

  set onreviewButtonColorClick(value) {
    this._onreviewButtonColorClick = value;
  }

  _onreviewButtonColorChangeComplete = color => {
    this.setState({ reviewbuttonColor: color.hex });
    this.props.onreviewButtonColorChangeComplete(color);
  };

  get onreviewButtonColorChangeComplete() {
    return this._onreviewButtonColorChangeComplete;
  }

  set onreviewButtonColorChangeComplete(value) {
    this._onreviewButtonColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onreviewButtonTitleColorClose = () => {
    this.setState({ displayButtonTitleColor: false });
  };

  get onreviewButtonTitleColorClose() {
    return this._onreviewButtonTitleColorClose;
  }

  set onreviewButtonTitleColorClose(value) {
    this._onreviewButtonTitleColorClose = value;
  }

  _onreviewButtonTitleColorClick = () => {
    this.setState({ displayButtonTitleColor: true });
  };

  get onreviewButtonTitleColorClick() {
    return this._onreviewButtonTitleColorClick;
  }

  set onreviewButtonTitleColorClick(value) {
    this._onreviewButtonTitleColorClick = value;
  }

  _onreviewButtonTitleColorChangeComplete = color => {
    this.setState({ reviewbuttonTitleColor: color.hex });
    this.props.onreviewButtonTitleColorChangeComplete(color);
  };

  get onreviewButtonTitleColorChangeComplete() {
    return this._onreviewButtonTitleColorChangeComplete;
  }

  set onreviewButtonTitleColorChangeComplete(value) {
    this._onreviewButtonTitleColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onreviewGeneralTextColorClose = () => {
    this.setState({ displayGeneralTextColor: false });
  };

  get onreviewGeneralTextColorClose() {
    return this._onreviewGeneralTextColorClose;
  }

  set onreviewGeneralTextColorClose(value) {
    this._onreviewGeneralTextColorClose = value;
  }

  _onreviewGeneralTextColorClick = () => {
    this.setState({ displayGeneralTextColor: true });
  };

  get onreviewGeneralTextColorClick() {
    return this._onreviewGeneralTextColorClick;
  }

  set onreviewGeneralTextColorClick(value) {
    this._onreviewGeneralTextColorClick = value;
  }

  _onreviewGeneralTextColorChangeComplete = color => {
    this.setState({ reviewgeneralTextColor: color.hex });
    this.props.onreviewGeneralTextColorChangeComplete(color);
  };

  get onreviewGeneralTextColorChangeComplete() {
    return this._onreviewGeneralTextColorChangeComplete;
  }

  set onreviewGeneralTextColorChangeComplete(value) {
    this._onreviewGeneralTextColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onreviewTextLinkColorClose = () => {
    this.setState({ displayTextLinkColor: false });
  };

  get onreviewTextLinkColorClose() {
    return this._onreviewTextLinkColorClose;
  }

  set onreviewTextLinkColorClose(value) {
    this._onreviewTextLinkColorClose = value;
  }

  _onreviewTextLinkColorClick = () => {
    this.setState({ displayTextLinkColor: true });
  };

  get onreviewTextLinkColorClick() {
    return this._onreviewTextLinkColorClick;
  }

  set onreviewTextLinkColorClick(value) {
    this._onreviewTextLinkColorClick = value;
  }

  _onreviewTextLinkColorChangeComplete = color => {
    this.setState({ reviewtextLinkColor: color.hex });
    this.props.onreviewTextLinkColorChangeComplete(color);
  };

  get onreviewTextLinkColorChangeComplete() {
    return this._onreviewTextLinkColorChangeComplete;
  }

  set onreviewTextLinkColorChangeComplete(value) {
    this._onreviewTextLinkColorChangeComplete = value;
  }

  /* REVIEW CELL COLOR */

  _onreviewcellColorClose = () => {
    this.setState({ displaycellColor: false });
  };

  get onreviewcellColorClose() {
    return this._onreviewcellColorClose;
  }

  set onreviewcellColorClose(value) {
    this._onreviewcellColorClose = value;
  }

  _onreviewcellColorClick = () => {
    this.setState({ displaycellColor: true });
  };

  get onreviewcellColorClick() {
    return this._onreviewcellColorClick;
  }

  set onreviewcellColorClick(value) {
    this._onreviewcellColorClick = value;
  }

  _onreviewcellChangeComplete = color => {
    this.setState({ reviewtextLinkColor: color.hex });
    this.props.onreviewcellChangeComplete(color);
  };

  get onreviewcellChangeComplete() {
    return this._onreviewcellChangeComplete;
  }

  set onreviewcellChangeComplete(value) {
    this._onreviewcellChangeComplete = value;
  }

  /* REVIEW POST COLOR */

  _onreviewpostColorClose = () => {
    this.setState({ displayreviewpostColor: false });
  };

  get onreviewpostColorClose() {
    return this._onreviewpostColorClose;
  }

  set onreviewpostColorClose(value) {
    this._onreviewpostColorClose = value;
  }

  _onreviewpostColorClick = () => {
    this.setState({ displayreviewpostColor: true });
  };

  get onreviewpostColorClick() {
    return this._onreviewpostColorClick;
  }

  set onreviewpostColorClick(value) {
    this._onreviewpostColorClick = value;
  }

  _onreviewpostColorChangeComplete = color => {
    this.setState({ reviewpostedColor: color.hex });
    this.props.onreviewpostColorChangeComplete(color);
  };

  get onreviewpostColorChangeComplete() {
    return this._onreviewpostColorChangeComplete;
  }

  set onreviewpostColorChangeComplete(value) {
    this._onreviewpostColorChangeComplete = value;
  }

  /* REVIEW DATE COLOR */

  _onreviewdateColorClose = () => {
    this.setState({ displayreviewdateColor: false });
  };

  get onreviewdateColorClose() {
    return this._onreviewdateColorClose;
  }

  set onreviewdateColorClose(value) {
    this._onreviewdateColorClose = value;
  }

  _onreviewdateColorClick = () => {
    this.setState({ displayreviewdateColor: true });
  };

  get onreviewdateColorClick() {
    return this._onreviewdateColorClick;
  }

  set onreviewdateColorClick(value) {
    this._onreviewdateColorClick = value;
  }

  _onreviewdateColorChangeComplete = color => {
    this.setState({ reviewdateColor: color.hex });
    this.props.onreviewdateColorChangeComplete(color);
  };

  get onreviewdateColorChangeComplete() {
    return this._onreviewdateColorChangeComplete;
  }

  set onreviewdateColorChangeComplete(value) {
    this._onreviewdateColorChangeComplete = value;
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
    reviewBgColor: '#ffffff',
    reviewRatingColor: '#2ecc71',
    reviewinputBGColor: '#fafafa',
    reviewinputTitleColor: '#b8b8b8',
    reviewbuttonColor: '#2ecc71',
    reviewbuttonTitleColor: '#ffffff',
    reviewgeneralTextColor: '#2ecc71',
    reviewtextLinkColor: '#ffffff',
    reviewcellColor: '#f0f0f0',
    reviewpostedColor: '#000000',
    reviewdateColor: '#2ecc71',
    reviewtextColor: '#444444',
    reviewreadmoreColor: '#8f8f8f',

    displayBGColor: false,
    displayreviewRatingColor: false,
    displayInputBGColor: false,

    displayInputTitleColor: false,
    displayButtonColor: false,
    displayButtonTitleColor: false,
    displayGeneralTextColor: false,
    displayTextLinkColor: false,
    displaycellColor: false,
    displayreviewpostColor: false,
    displayreviewdateColor: false,
    displaytextColor: false,
    displayreadmoreColor: false
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
                    value={this.props.reviewBgColor}
                    defaultValue={this.state.reviewBgColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewBgColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewBgColor
                      }}
                      onClick={this.onreviewBgColorClick}
                    />
                  </div>
                  {this.state.displayBGColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewBgColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewBgColor}
                        onChange={this.onreviewBgColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">RATING COLOR</div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.reviewRatingColor}
                    defaultValue={this.props.reviewRatingColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewRatingColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewRatingColor
                      }}
                    />
                  </div>
                  {this.state.displayreviewRatingColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewRatingColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewRatingColor}
                        onChange={this.onreviewRatingColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  INPUT BACKGROUND COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.reviewinputBGColor}
                    defaultValue={this.props.reviewinputBGColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewInputBGColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewinputBGColor
                      }}
                      onClick={this.onreviewInputBGColorClick}
                    />
                  </div>
                  {this.state.displayInputBGColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewInputBGColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewinputBGColor}
                        onChange={this.onreviewInputBGColorChangeComplete}
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
                    value={this.props.reviewinputTitleColor}
                    defaultValue={this.props.reviewinputTitleColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewInputTitleColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewinputTitleColor
                      }}
                      onClick={this.onreviewInputTitleColorClick}
                    />
                  </div>
                  {this.state.displayInputTitleColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewInputTitleColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewinputTitleColor}
                        onChange={this.onreviewInputTitleColorChangeComplete}
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
                    value={this.props.reviewbuttonColor}
                    defaultValue={this.props.reviewbuttonColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewButtonColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewbuttonColor
                      }}
                      // onClick={this.onreviewIButtonColorClick}
                    />
                  </div>
                  {this.state.displayButtonColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewButtonColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewbuttonColor}
                        onChange={this.onreviewButtonColorChangeComplete}
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
                    value={this.props.reviewbuttonTitleColor}
                    defaultValue={this.props.reviewbuttonTitleColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewButtonTitleColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewbuttonTitleColor
                      }}
                      onClick={this.onreviewButtonTitleColorClick}
                    />
                  </div>
                  {this.state.displayButtonTitleColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewButtonTitleColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewbuttonTitleColor}
                        onChange={this.onreviewButtonTitleColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  REVIEW HEADER BACKGROUND COLOR
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.reviewgeneralTextColor}
                    defaultValue={this.props.reviewgeneralTextColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewGeneralTextColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewgeneralTextColor
                      }}
                      onClick={this.onreviewGeneralTextColorClick}
                    />
                  </div>
                  {this.state.displayGeneralTextColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewGeneralTextColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewgeneralTextColor}
                        onChange={this.onreviewGeneralTextColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  {' '}
                  REVIEW CELL BACKGROUND COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.reviewtextLinkColor}
                    defaultValue={this.props.reviewtextLinkColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewTextLinkColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewtextLinkColor
                      }}
                      onClick={this.onreviewTextLinkColorClick}
                    />
                  </div>
                  {this.state.displayTextLinkColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewTextLinkColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewtextLinkColor}
                        onChange={this.onreviewTextLinkColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  {' '}
                  REVIEW CELL SEPARATOR COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.reviewcellColor}
                    defaultValue={this.props.reviewcellColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewcellColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewcellColor
                      }}
                      onClick={this.onreviewcellColorClick}
                    />
                  </div>
                  {this.state.displaycellColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewcellColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewcellColor}
                        onChange={this.onreviewcellChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  {' '}
                  REVIEW POSTED BY COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.reviewpostedColor}
                    defaultValue={this.props.reviewpostedColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewpostColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewpostedColor
                      }}
                      onClick={this.onreviewpostColorClick}
                    />
                  </div>
                  {this.state.displayreviewpostColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewpostColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewpostedColor}
                        onChange={this.onreviewpostColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  {' '}
                  REVIEW DATE & VERIFIED COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.reviewdateColor}
                    defaultValue={this.props.reviewdateColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewdateColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewdateColor
                      }}
                      onClick={this.onreviewdateColorClick}
                    />
                  </div>
                  {this.state.displayreviewdateColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewdateColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewdateColor}
                        onChange={this.onreviewdateColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  {' '}
                  REVIEW TEXT COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.reviewtextColor}
                    defaultValue={this.props.reviewtextColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewtextColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewtextColor
                      }}
                      onClick={this.onreviewtextColorClick}
                    />
                  </div>
                  {this.state.displaytextColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewtextColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewtextColor}
                        onChange={this.onreviewtextColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">
                  {' '}
                  REVIEW READ MORE COLOR{' '}
                </div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.reviewreadmoreColor}
                    defaultValue={this.props.reviewreadmoreColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onreviewreadmoreColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.reviewreadmoreColor
                      }}
                      onClick={this.onreviewreadmoreColorClick}
                    />
                  </div>
                  {this.state.displayreadmoreColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onreviewreadmoreColorClose}
                      />
                      <ChromePicker
                        color={this.props.reviewreadmoreColor}
                        onChange={this.onreviewreadmoreColorChangeComplete}
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

export default ReviewOptions;
