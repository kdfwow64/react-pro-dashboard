// tslint:disable
// @ts-nocheck
import React from 'react';
import { ChromePicker } from 'react-color';
import { DropdownList } from 'react-widgets';
import S3SingleFileUploaderWithPreviewAndFileNameCapability from '../../../../utilities/S3SingleFileUploaderWithPreviewAndFileNameCapability';

class SearchNavigationSettings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      background: '#ffffff',
      displayColorPicker: false,
      navbarBackgroundColorCode: this.props.navbarBackgroundColorValue,
      navbarIconColorCode: this.props.navbgiconcolorValue,
      navbarTitleColorCode: this.props.navbartitleValue,
      displayIconColorPicker: false,
      displayTitleColorPicker: false,
      celldisplayColorPicker: false,
      cellicondisplayColorPicker: false,
      OnCollectionEditValue: 'none',
      OnCollectionEditValueText: 'block',
      showIconsList: 'none',
      HideSettingSection: 'none',

      isEdited: false
    };

    this.handleNavbarColorChangeComplete = this.handleNavbarColorChangeComplete.bind(
      this
    );
    this.handleNavbarBackgroundColorClick = this.handleNavbarBackgroundColorClick.bind(
      this
    );
    this.handlePickerClose = this.handlePickerClose.bind(this);

    this.handleNavbarIconColorChangeComplete = this.handleNavbarIconColorChangeComplete.bind(
      this
    );
    this.handleNavbarIconColorClick = this.handleNavbarIconColorClick.bind(
      this
    );
    this.handleIconColorPickerClose = this.handleIconColorPickerClose.bind(
      this
    );

    this.handleNavbarTitleColorChangeComplete = this.handleNavbarTitleColorChangeComplete.bind(
      this
    );
    this.handleNavbarTitleColorClick = this.handleNavbarTitleColorClick.bind(
      this
    );
    this.handleTitleColorPickerClose = this.handleTitleColorPickerClose.bind(
      this
    );

    this.showIconsListValue = this.showIconsListValue.bind(this);
    this.CollectionCloseEditSection = this.CollectionCloseEditSection.bind(
      this
    );

    this.onApplyNavSettings = this.onApplyNavSettings.bind(this);

    this.onNavbarBackgroundColorChange = this.onNavbarBackgroundColorChange.bind(
      this
    );
    this.onNavbgiconcolorValueChange = this.onNavbgiconcolorValueChange.bind(
      this
    );
    this.onNavbartitleValueChange = this.onNavbartitleValueChange.bind(this);
  }

  onNavbartitleValueChange = () => {};

  onNavbgiconcolorValueChange = () => {};

  onNavbarBackgroundColorChange = () => {};

  onApplyNavSettings = e => {
    const CollectionSettings = {
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      navbarIconColorCode: this.state.navbarIconColorCode,
      navbarTitleColorCode: this.state.navbarTitleColorCode,
      navbarBackgroundColorCode: this.state.navbarBackgroundColorCode,
      NavTitle: this.state.NavTitle
    };
    this.props.onApplySettings(CollectionSettings);
    this.props.DisplySaveBtn();
    this.props.HideSettingSection(this.state.HideSettingSection);
  };

  CollectionCloseEditSection = () => {
    // this.setState({HideSettingSection: 'none'});
    this.props.HideSettingSection(this.state.HideSettingSection);
  };

  showIconsListValue = () => {
    if (this.state.showIconsList === 'none') {
      this.setState({ showIconsList: 'block' });
    } else {
      this.setState({ showIconsList: 'none' });
    }
  };

  handlePickerClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleNavbarBackgroundColorClick = () => {
    this.setState({ displayColorPicker: true });
  };

  handleNavbarColorChangeComplete = navbarBackgroundColorCode => {
    this.setState({ navbarBackgroundColorCode: navbarBackgroundColorCode.hex });
    this.props.navbarBackgroundColorCallback(navbarBackgroundColorCode);
  };

  handleIconColorPickerClose = () => {
    this.setState({ displayIconColorPicker: false });
  };

  handleNavbarIconColorClick = () => {
    this.setState({ displayIconColorPicker: true });
  };

  handleNavbarIconColorChangeComplete = navbarIconColorCode => {
    this.setState({ navbarIconColorCode: navbarIconColorCode.hex });
    this.props.navbarIconColorCallback(navbarIconColorCode);
  };

  handleTitleColorPickerClose = () => {
    this.setState({ displayTitleColorPicker: false });
  };

  handleNavbarTitleColorClick = () => {
    this.setState({ displayTitleColorPicker: true });
  };

  handleNavbarTitleColorChangeComplete = navbarTitleColorCode => {
    this.setState({ navbarTitleColorCode: navbarTitleColorCode.hex });
    this.props.navbarTitleColorCodeCallback(navbarTitleColorCode);
  };

  OnCollectionEditClick = e => {
    this.props.NavTitle(e);
  };

  swatch = {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '15px',
    top: '4px'
  };

  popover = {
    position: 'absolute',
    zIndex: 10000
  };

  cover = {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  DropDownGetIconLandingNavCallback = icon => {
    this.setState({ DropDownGetIconheader: icon });
    this.props.CollectionBarIcon(icon);
  };

  bannerImageUrl = value => {
    this.setState({ bannerImageUrl: value });
    this.props.bannerImageUrlCallBack(value);
  };

  render() {
    return (
      <div
        className="CollectionMainEditOptionContainer"
        style={{ display: this.state.CollectionMainSectionEditOptionValue }}
      >
        <div className="CollectionEditSettingOptionContainer">
          <h2>
            EDIT NAVIGATION BAR{' '}
            {this.state.CollectionMainSectionEditOptionValue} 1
          </h2>
          <p>
            *Note: Editing this navigation bar will override the theme's
            navigation bar for this page only.
          </p>

          <div className="CollectionMainEditTitle">
            <div className="col-sm-12 CollectionSettingEditTitle">
              <label>NAVIGATION BAR TITLE</label>
            </div>
            <div className="col-sm-12 CollectionMainEditTitleView">
              <DropdownList
                data={['Image', 'Text']}
                onChange={this.OnCollectionEditClick.bind(this)}
                value={this.props.NavTitleVal || 'Text'}
                textField="name"
              />
            </div>
          </div>

          <div className="CollectionMainEditIcon">
            <div className="col-sm-12 CollectionSettingIcon">
              <label>NAV BAR BACKGROUND COLOR </label>
            </div>
            <div className="col-sm-12 CollectionMainEditBGIconView">
              <input
                type="text"
                value={this.props.navbarBackgroundColorValue}
                id="CollectionDropDown"
                className="textColorCode"
                onChange={this.onNavbarBackgroundColorChange}
                onClick={this.handleNavbarBackgroundColorClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.navbarBackgroundColorValue
                  }}
                  onClick={this.handleNavbarBackgroundColorClick}
                />
              </div>
              {this.state.displayColorPicker ? (
                <div style={this.popover}>
                  <div style={this.cover} onClick={this.handlePickerClose} />
                  <ChromePicker
                    color={this.props.navbarBackgroundColorValue}
                    onChange={this.handleNavbarColorChangeComplete}
                  />
                </div>
              ) : null}
            </div>
          </div>

          {/* <div className="CollectionMainEditIconColor">
            <div className="col-sm-12 CollectionSettingEditIconColor">
              <label>NAV BAR ICON COLOR</label>
            </div>
            <div className="col-sm-12 CollectionMainEditIconColorView">
              <input
                type="text"
                value={this.props.navbgiconcolorValue}
                id="CollectionDropDown"
                className="textColorCode"
                onChange={this.onNavbgiconcolorValueChange}
                onClick={this.handleNavbarIconColorClick}
                
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.navbgiconcolorValue
                  }}
                  onClick={this.handleNavbarIconColorClick}
                />
              </div>
              {this.state.displayIconColorPicker ? (
                <div style={this.popover}>
                  <div style={ this.cover } onClick={ this.handleIconColorPickerClose }/>
                  <ChromePicker
                    color={this.props.navbgiconcolorValue}
                    onChange={this.handleNavbarIconColorChangeComplete}
                  />
                </div>
              ) : null}
            </div>
          </div> */}

          <div
            className="CollectionMainEditIconColor"
            style={{
              display: this.props.NavTitleVal === 'Image' ? 'none' : 'block'
            }}
          >
            <div className="col-sm-12 CollectionSettingEditIconColor">
              <label>NAV BAR TITLE COLOR </label>
            </div>
            <div className="col-sm-12 CollectionMainEditIconColorView">
              <input
                type="text"
                value={this.props.navbartitleValue}
                id="CollectionDropDown"
                className="textColorCode"
                onChange={this.onNavbartitleValueChange}
                onClick={this.handleNavbarTitleColorClick}
              />
              <div style={this.swatch}>
                <div
                  className="colorPickerBorder"
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: this.props.navbartitleValue
                  }}
                  onClick={this.handleNavbarTitleColorClick}
                />
              </div>
              {this.state.displayTitleColorPicker ? (
                <div style={this.popover}>
                  <div
                    style={this.cover}
                    onClick={this.handleTitleColorPickerClose}
                  />
                  <ChromePicker
                    color={this.props.navbartitleValue}
                    onChange={this.handleNavbarTitleColorChangeComplete}
                  />
                </div>
              ) : null}
            </div>
          </div>

          <div
            className="CollectionMainEditImg"
            style={{
              display: this.props.NavTitleVal === 'Image' ? 'block' : 'none'
            }}
          >
            <div className="col-sm-12 CollectionSettingEditImg">
              <label>NAV IMAGE</label>
            </div>
            <div className="col-sm-12 CollectionMainEditIconImgView">
              <S3SingleFileUploaderWithPreviewAndFileNameCapability
                label="Choose file"
                acceptedFiles={['image/jpeg', 'image/png']}
                fileName={this.props.bannerImageUrl}
                previewImageHeight="100px"
                previewImageWidth="100px"
                imageFolder="navTitleImage"
                onChange={value => this.bannerImageUrl(value)}
              />
            </div>
          </div>

          <div className="CollectionEditCancelButton CollectionEditButton">
            <span onClick={this.CollectionCloseEditSection}>CANCEL</span>
          </div>

          <div className="CollectionEditapplyButton CollectionEditButton">
            <span onClick={this.onApplyNavSettings}>APPLY</span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchNavigationSettings;
