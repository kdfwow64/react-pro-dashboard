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
class OrderFavouriteOption extends React.Component {
  constructor(props) {
    super(props);

    this.onfavouriteColorChangeComplete = this.onfavouriteColorChangeComplete.bind(
      this
    );
    this.onfavouriteColorClick = this.onfavouriteColorClick.bind(this);
    this.onfavouriteColorClose = this.onfavouriteColorClose.bind(this);

    this.onfavouritetitleColorChangeComplete = this.onfavouritetitleColorChangeComplete.bind(
      this
    );
    this.onfavouritetitleColorClick = this.onfavouritetitleColorClick.bind(
      this
    );
    this.onfavouritetitleColorClose = this.onfavouritetitleColorClose.bind(
      this
    );

    this.onfavouritepriceColorChangeComplete = this.onfavouritepriceColorChangeComplete.bind(
      this
    );
    this.onfavouritepriceColorClick = this.onfavouritepriceColorClick.bind(
      this
    );
    this.onfavouritepriceColorClose = this.onfavouritepriceColorClose.bind(
      this
    );

    this.onfavoriteimageChangeComplete = this.onfavoriteimageChangeComplete.bind(
      this
    );
    this.onfavoriteimageColorClick = this.onfavoriteimageColorClick.bind(this);
    this.onfavoriteimageColorClose = this.onfavoriteimageColorClose.bind(this);

    this.onfavouritecellbgChangeComplete = this.onfavouritecellbgChangeComplete.bind(
      this
    );
    this.onfavouritecellbgClick = this.onfavouritecellbgClick.bind(this);
    this.onfavouritecellbgClose = this.onfavouritecellbgClose.bind(this);

    this.onfavouritecellsepratorColorChangeComplete = this.onfavouritecellsepratorColorChangeComplete.bind(
      this
    );
    this.onfavouritecellsepratorColorClick = this.onfavouritecellsepratorColorClick.bind(
      this
    );
    this.onfavouritecellsepratorColorClose = this.onfavouritecellsepratorColorClose.bind(
      this
    );
  }

  /* MENU CELL BACKGROUND COLOR */

  _onfavouriteColorClose = () => {
    this.setState({ displayfavouriteBGColor: false });
  };

  get onfavouriteColorClose() {
    return this._onfavouriteColorClose;
  }

  set onfavouriteColorClose(value) {
    this._onfavouriteColorClose = value;
  }

  _onfavouriteColorClick = () => {
    this.setState({ displayfavouriteBGColor: true });
  };

  get onfavouriteColorClick() {
    return this._onfavouriteColorClick;
  }

  set onfavouriteColorClick(value) {
    this._onfavouriteColorClick = value;
  }

  _onfavouriteColorChangeComplete = color => {
    this.setState({ favouriteColor: color.hex });
    this.props.onfavouriteColorChangeComplete(color);
  };

  get onfavouriteColorChangeComplete() {
    return this._onfavouriteColorChangeComplete;
  }

  set onfavouriteColorChangeComplete(value) {
    this._onfavouriteColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onfavouritetitleColorClose = () => {
    this.setState({ displayfavTabtitleColor: false });
  };

  get onfavouritetitleColorClose() {
    return this._onfavouritetitleColorClose;
  }

  set onfavouritetitleColorClose(value) {
    this._onfavouritetitleColorClose = value;
  }

  _onfavouritetitleColorClick = () => {
    this.setState({ displayfavTabtitleColor: true });
  };

  get onfavouritetitleColorClick() {
    return this._onfavouritetitleColorClick;
  }

  set onfavouritetitleColorClick(value) {
    this._onfavouritetitleColorClick = value;
  }

  _onfavouritetitleColorChangeComplete = color => {
    this.setState({ favouritetitleColor: color.hex });
    this.props.onfavouritetitleColorChangeComplete(color);
  };

  get onfavouritetitleColorChangeComplete() {
    return this._onfavouritetitleColorChangeComplete;
  }

  set onfavouritetitleColorChangeComplete(value) {
    this._onfavouritetitleColorChangeComplete = value;
  }

  /* MENU CELL BACKGROUND COLOR */

  _onfavouritepriceColorClose = () => {
    this.setState({ displayfavPriceColor: false });
  };

  get onfavouritepriceColorClose() {
    return this._onfavouritepriceColorClose;
  }

  set onfavouritepriceColorClose(value) {
    this._onfavouritepriceColorClose = value;
  }

  _onfavouritepriceColorClick = () => {
    this.setState({ displayfavPriceColor: true });
  };

  get onfavouritepriceColorClick() {
    return this._onfavouritepriceColorClick;
  }

  set onfavouritepriceColorClick(value) {
    this._onfavouritepriceColorClick = value;
  }

  _onfavouritepriceColorChangeComplete = color => {
    this.setState({ favouritepriceColor: color.hex });
    this.props.onfavouritepriceColorChangeComplete(color);
  };

  get onfavouritepriceColorChangeComplete() {
    return this._onfavouritepriceColorChangeComplete;
  }

  set onfavouritepriceColorChangeComplete(value) {
    this._onfavouritepriceColorChangeComplete = value;
  }

  /* REVIEW CELL COLOR */

  _onfavoriteimageColorClose = () => {
    this.setState({ displayfavimgborderColor: false });
  };

  get onfavoriteimageColorClose() {
    return this._onfavoriteimageColorClose;
  }

  set onfavoriteimageColorClose(value) {
    this._onfavoriteimageColorClose = value;
  }

  _onfavoriteimageColorClick = () => {
    this.setState({ displayfavimgborderColor: true });
  };

  get onfavoriteimageColorClick() {
    return this._onfavoriteimageColorClick;
  }

  set onfavoriteimageColorClick(value) {
    this._onfavoriteimageColorClick = value;
  }

  _onfavoriteimageChangeComplete = color => {
    this.setState({ favoriteimageColor: color.hex });
    this.props.onfavoriteimageChangeComplete(color);
  };

  get onfavoriteimageChangeComplete() {
    return this._onfavoriteimageChangeComplete;
  }

  set onfavoriteimageChangeComplete(value) {
    this._onfavoriteimageChangeComplete = value;
  }

  /* REVIEW POST COLOR */

  _onfavouritecellbgClose = () => {
    this.setState({ displayfavouritecellbgcolor: false });
  };

  get onfavouritecellbgClose() {
    return this._onfavouritecellbgClose;
  }

  set onfavouritecellbgClose(value) {
    this._onfavouritecellbgClose = value;
  }

  _onfavouritecellbgClick = () => {
    this.setState({ displayfavouritecellbgcolor: true });
  };

  get onfavouritecellbgClick() {
    return this._onfavouritecellbgClick;
  }

  set onfavouritecellbgClick(value) {
    this._onfavouritecellbgClick = value;
  }

  _onfavouritecellbgChangeComplete = color => {
    this.setState({ favouritecellBgColor: color.hex });
    this.props.onfavouritecellbgChangeComplete(color);
  };

  get onfavouritecellbgChangeComplete() {
    return this._onfavouritecellbgChangeComplete;
  }

  set onfavouritecellbgChangeComplete(value) {
    this._onfavouritecellbgChangeComplete = value;
  }

  /* REVIEW DATE COLOR */

  _onfavouritecellsepratorColorClose = () => {
    this.setState({ displayfavouritecellsepratorColor: false });
  };

  get onfavouritecellsepratorColorClose() {
    return this._onfavouritecellsepratorColorClose;
  }

  set onfavouritecellsepratorColorClose(value) {
    this._onfavouritecellsepratorColorClose = value;
  }

  _onfavouritecellsepratorColorClick = () => {
    this.setState({ displayfavouritecellsepratorColor: true });
  };

  get onfavouritecellsepratorColorClick() {
    return this._onfavouritecellsepratorColorClick;
  }

  set onfavouritecellsepratorColorClick(value) {
    this._onfavouritecellsepratorColorClick = value;
  }

  _onfavouritecellsepratorColorChangeComplete = color => {
    this.setState({ favouritecellsepratorColor: color.hex });
    this.props.onfavouritecellsepratorColorChangeComplete(color);
  };

  get onfavouritecellsepratorColorChangeComplete() {
    return this._onfavouritecellsepratorColorChangeComplete;
  }

  set onfavouritecellsepratorColorChangeComplete(value) {
    this._onfavouritecellsepratorColorChangeComplete = value;
  }

  state = {
    favouriteColor: '#ffffff',
    favouritetitleColor: '#000000',
    favouritepriceColor: '#333333',
    favoriteimageColor: '#ffffff',
    favouritecellBgColor: '#ffffff',
    favouritecellsepratorColor: '#f0f0f0',
    displayfavouriteBGColor: false,
    displayfavTabtitleColor: false,
    displayfavButtonTitleColor: false,
    displayfavPriceColor: false,
    displayfavimgborderColor: false,
    displayfavouritecellbgcolor: false,
    displayfavouritecellsepratorColor: false
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
                    value={this.props.favouriteColor}
                    defaultValue={this.props.favouriteColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onfavouriteColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.favouriteColor
                      }}
                      onClick={this.onfavouriteColorClick}
                    />
                  </div>
                  {this.state.displayfavouriteBGColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onfavouriteColorClose}
                      />
                      <ChromePicker
                        color={this.props.favouriteColor}
                        onChange={this.onfavouriteColorChangeComplete}
                      />
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="OptionContainer">
                <div className="col-sm-12 common_title_user">TITLE COLOR</div>
                <div className="col-sm-12 CollectionSettingtitle">
                  <input
                    type="text"
                    value={this.props.favouritetitleColor}
                    defaultValue={this.props.favouritetitleColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onfavouritetitleColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.favouritetitleColor
                      }}
                      // onClick={this.onreviewIButtonColorClick}
                    />
                  </div>
                  {this.state.displayfavTabtitleColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onfavouritetitleColorClose}
                      />
                      <ChromePicker
                        color={this.props.favouritetitleColor}
                        onChange={this.onfavouritetitleColorChangeComplete}
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
                    value={this.props.favouritepriceColor}
                    defaultValue={this.props.favouritepriceColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onfavouritepriceColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.favouritepriceColor
                      }}
                      onClick={this.onfavouritepriceColorClick}
                    />
                  </div>
                  {this.state.displayfavPriceColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onfavouritepriceColorClose}
                      />
                      <ChromePicker
                        color={this.props.favouritepriceColor}
                        onChange={this.onfavouritepriceColorChangeComplete}
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
                    value={this.props.favoriteimageColor}
                    defaultValue={this.props.favoriteimageColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onfavoriteimageColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.favoriteimageColor
                      }}
                      onClick={this.onfavoriteimageColorClick}
                    />
                  </div>
                  {this.state.displayfavimgborderColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onfavoriteimageColorClose}
                      />
                      <ChromePicker
                        color={this.props.favoriteimageColor}
                        onChange={this.onfavoriteimageChangeComplete}
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
                    value={this.props.favouritecellBgColor}
                    defaultValue={this.props.favouritecellBgColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onfavouritecellbgClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.favouritecellBgColor
                      }}
                      onClick={this.onfavouritecellbgClick}
                    />
                  </div>
                  {this.state.displayfavouritecellbgcolor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onfavouritecellbgClose}
                      />
                      <ChromePicker
                        color={this.props.favouritecellBgColor}
                        onChange={this.onfavouritecellbgChangeComplete}
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
                    value={this.props.favouritecellsepratorColor}
                    defaultValue={this.props.favouritecellsepratorColor}
                    id="CollectionDropDown"
                    className="textColorCode"
                    onClick={this.onfavouritecellsepratorColorClick}
                  />

                  <div style={styles.swatch}>
                    <div
                      className="colorPickerBorder"
                      style={{
                        width: '20px',
                        height: '20px',
                        backgroundColor: this.props.favouritecellsepratorColor
                      }}
                      onClick={this.onfavouritecellsepratorColorClick}
                    />
                  </div>
                  {this.state.displayfavouritecellsepratorColor ? (
                    <div style={styles.popover}>
                      <div
                        style={this.cover}
                        onClick={this.onfavouritecellsepratorColorClose}
                      />
                      <ChromePicker
                        color={this.props.favouritecellsepratorColor}
                        onChange={
                          this.onfavouritecellsepratorColorChangeComplete
                        }
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

export default OrderFavouriteOption;
