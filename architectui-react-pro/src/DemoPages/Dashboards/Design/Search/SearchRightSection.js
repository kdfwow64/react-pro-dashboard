// tslint:disable
// @ts-nocheck
import * as React from 'react';
import { ChromePicker } from 'react-color';
import SearchListView from './SearchListView';
// import S3SingleFileUploaderWithPreviewAndFileNameCapability from '../../../Mobile/S3SingleFileUploaderWithPreviewAndFileNameCapability';

class SearchRightSection extends React.Component<any, any> {

  navtitlecolor = null;
  naviconcolor = null;
  navbgcolor = null;
  navtitledisplayColorPicker = null;
  navicondisplayColorPicker = null;
  navbgdisplayColorPicker = null;

  constructor(props) {
    super(props);
    this.navbghandleClose = this.navbghandleClose.bind(this);
    this.navbghandleChange = this.navbghandleChange.bind(this);
    this.CollectionMainSectionEditOption = this.CollectionMainSectionEditOption.bind(
      this
    );
    this.CollectionCloseEditSection = this.CollectionCloseEditSection.bind(
      this
    );
    this.navtitlehandleClose = this.navtitlehandleClose.bind(this);
    this.navtitlehandleChange = this.navtitlehandleChange.bind(this);
    this.naviconhandleChange = this.naviconhandleChange.bind(this);
    this.OnCollectionEditClick = this.OnCollectionEditClick.bind(this);
    this.navbghandleClick = this.navbghandleClick.bind(this);
    this.naviconhandleClick = this.naviconhandleClick.bind(this);
    this.navtitlehandleClick = this.navtitlehandleClick.bind(this);


    this.state = {
      CollectionMainSectionEditOptionValue: 'none',
      ShowHideGridListView: 'block',
      navtitledisplayColorPicker: false,
      navbgcolor: this.props.navbgcolor || '#2ecc71',
      navtitlecolor: this.props.navtitlecolor || '#ffffff',
      naviconcolor: this.props.naviconcolor || '#ffffff',
      DropDownGetIconheader: this.props.DropDownGetIconheader || 'fa fa-bars',
       NavTitleValue: this.props.NavTitleValue,
      //NavTitle: 'Text',
      navicondisplayColorPicker: false,
      navbgdisplayColorPicker: false,
      OnCollectionEditValue: 'none',
     
    };
  }

  ApplyNavSettings = () => {
    /*const CollectionSettings = {
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      naviconcolor: this.state.naviconcolor,
      navtitlecolor: this.state.navtitlecolor,
      navbgcolor: this.state.navbgcolor,
     // NavTitle: this.state.NavTitle,
      NavTitleValue: this.state.NavTitleValue
    };*/
    this.setState({ CollectionMainSectionEditOptionValue: 'none' });
    this.setState({ ShowHideGridListView: 'block' });
    this.props.DisplaySaveBtn();
   /* console.log("apply setting::");
    console.log(CollectionSettings);*/
  }

  DropDownGetIconSearchNavCallback = icon => {
    this.setState({ DropDownGetIconheader: icon });
    this.props.DropDownGetIconheaderCall(icon);
  }

  navtitlehandleChange(navtitlecolor) {
    this.setState({ navtitlecolor: navtitlecolor.hex });
    this.props.navtitlecolorCall(navtitlecolor);
  }
  naviconhandleChange(naviconcolor) {
    this.setState({ naviconcolor: naviconcolor.hex });
    this.props.naviconcolorCall(naviconcolor);
  }
  naviconhandleClick = () => {
    this.setState({
      navicondisplayColorPicker: true
    });
  }
  CollectionMainSectionEditOption() {
    this.setState({ CollectionMainSectionEditOptionValue: 'block' });
    this.setState({ ShowHideGridListView: 'none' });
  }
  navtitlehandleClose = () => {
    this.setState({ navtitledisplayColorPicker: false });
  }

  navbghandleClose = () => {
    this.setState({ navbgdisplayColorPicker: false });
  }

  CollectionCloseEditSection() {
    this.setState({ CollectionMainSectionEditOptionValue: 'none' });
    this.setState({ ShowHideGridListView: 'block' });
  }
  OnCollectionEditClick = e => {
    this.setState({NavTitleValue: e.target.value});
    this.props.NavTitleCall(e.target.value);
  }
  navbghandleChange(navbgcolor) {
    this.setState({ navbgcolor: navbgcolor.hex });
    this.props.navbgcolorCall(navbgcolor);
  }
  navbghandleClick = () => {
    this.setState({ navbgdisplayColorPicker: true });

  }
  navtitlehandleClick = () => {
    this.setState({
      navtitledisplayColorPicker: true
    });
  }
  naviconhandleClose = () => {
    this.setState({ navicondisplayColorPicker: false });
  }
  swatch = {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '15px',
    top: '2px'
  };

  popover = {
    position: 'absolute',
    zIndex: 2
  };

  cover = {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px'
  };

  bannerImageUrl = (value) => {
    this.setState({ bannerImageUrl: value });
    this.props.bannerImageUrlCallBack(value);
  }


  render() {
    return (
      <div className="ProductcustomizeMainsection">
        <div className="Productcustomizesection">
          <div className="ProductEffectTitle">
            <label> CUSTOMIZE SEARCH PAGE </label>
          </div>
          <div id="ProductRightBody">
            <div
              id="CollectionEffectNavBarContainer"
              style={{ backgroundColor: this.props.navbgcolor || '#0E7C95' }}
            >
              <div
                id="CollectionEffectnavBars"
                style={{ color: this.props.naviconcolor || '#fff' }}
              >
                <i className={this.props.DropDownGetIconheader || 'fa fa-bars'} />
              </div>
              <div
                id="CollectionEffectMyStoreTitle"
                style={{ color: this.props.navtitlecolor || '#fff' }}
              >
              { this.props.NavTitleValue === 'img' &&
                <img src={this.props.bannerImageUrl} style={{maxHeight:"30px", maxWidth: "90px" }} />
              }
              { this.props.NavTitleValue === 'text' &&
                'SEARCH'
              }
              { ! this.props.NavTitleValue &&
                'SEARCH'
              }
              </div>
              <div
                id="CollectionEditMainSlider"
                onClick={this.CollectionMainSectionEditOption}
              >
                <div id="CollectionEditOption">
                  <i className="fa fa-pencil" />
                </div>
              </div>
            </div>

            <div id="CollectionEffectBody">
              <div
                className="CollectionMainEditOptionContainer"
                style={{
                  display: this.state.CollectionMainSectionEditOptionValue
                }}
              >
                <div className="CollectionEditSettingOptionContainer">
                  <h2>EDIT NAVIGATION BAR</h2>
                  <p>
                    *Note: Editing this navigation bar will override the theme's
                    navigation bar for this page only.
                  </p>

                  <div className="CollectionMainEditTitle">
                    <div className="col-sm-12 CollectionSettingEditTitle">
                      <label>NAVIGATION BAR TITLE</label>
                    </div>
                    <div
                      className="col-sm-12 CollectionMainEditTitleView"
                      onChange={this.OnCollectionEditClick}
                    >
                      <select
                        name=""
                        id="CollectionMainEditSelect"
                        value={this.props.NavTitleValue || 'text'}
                      >
                        <option value="img">Use Image</option>
                        <option value="text">Use Text</option>
                      </select>
                    </div>
                  </div>

                  <div className="CollectionMainEditIcon">
                    <div className="col-sm-12 CollectionSettingIcon">
                      <label>NAV BAR BACKGROUND COLOR </label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditBGIconView">
                      <input
                        type="text"
                        value={this.props.navbgcolor || '#0E7C95'}
                        defaultValue={this.props.navbgcolor}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.navbghandleClick}
                        onBlur={this.navbghandleClose}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.props.navbgcolor || '#0E7C95'
                          }}
                          onClick={this.navbghandleClick}
                        />
                      </div>
                      {this.state.navbgdisplayColorPicker ? (
                        <div style={this.popover}>
                          <ChromePicker
                            color={this.props.navbgcolor || '#0E7C95'}
                            onChange={this.navbghandleChange}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {/* <div className="CollectionMainEditIcon">
                    <div className="col-sm-12 CollectionSettingIcon">
                      <label>NAV BAR ICON (Will be applied globally)</label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditBGIconView">
                      <IconList
                        DropDownGetIconSearchNavCallback={
                          this.DropDownGetIconSearchNavCallback
                        }
                        IconClassName={this.props.DropDownGetIconheader}
                      />
                    </div>
                  </div> */}

                  <div className="CollectionMainEditIconColor">
                    <div className="col-sm-12 CollectionSettingEditIconColor">
                      <label>NAV BAR ICON COLOR </label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditIconColorView">
                      <input
                        type="text"
                        value={this.props.naviconcolor || '#fff'}
                        defaultValue={this.props.naviconcolor || '#fff'}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.naviconhandleClick}
                        onBlur={this.naviconhandleClose}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.props.naviconcolor || '#fff'
                          }}
                          onClick={this.naviconhandleClick}
                        />
                      </div>
                      {this.state.navicondisplayColorPicker ? (
                        <div style={this.popover}>
                          <ChromePicker
                            color={this.props.naviconcolor || '#fff'}
                            onChange={this.naviconhandleChange}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div
                    className="CollectionMainEditIconColor"
                    style={{
                      display:
                        this.props.NavTitleValue === 'img' ? 'none' : 'block'
                    }}
                  >
                    <div className="col-sm-12 CollectionSettingEditIconColor">
                      <label>NAV BAR TITLE COLOR</label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditIconColorView">
                      <input
                        type="text"
                        value={this.props.navtitlecolor || '#fff'}
                        defaultValue={this.props.navtitlecolor || '#fff'}
                        id="CollectionDropDown"
                        className="textColorCode"
                        onClick={this.navtitlehandleClick}
                        onBlur={this.navtitlehandleClose}
                      />
                      <div style={this.swatch}>
                        <div
                          className="colorPickerBorder"
                          style={{
                            width: '20px',
                            height: '20px',
                            backgroundColor: this.props.navtitlecolor || '#fff'
                          }}
                          onClick={this.navtitlehandleClick}
                        />
                      </div>
                      {this.state.navtitledisplayColorPicker ? (
                        <div style={this.popover}>
                          <ChromePicker
                            color={this.props.navtitlecolor || '#fff'}
                            onChange={this.navtitlehandleChange}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div
                    className="CollectionMainEditImg"
                    style={{
                      display:
                        this.props.NavTitleValue === 'img' ? 'block' : 'none'
                    }}
                  >
                    <div className="col-sm-12 CollectionSettingEditImg">
                      <label>NAV IMAGE</label>
                    </div>
                    <div className="col-sm-12 CollectionMainEditIconImgView">
                      {/* <S3SingleFileUploaderWithPreviewAndFileNameCapability
                        label="Choose file"
                        acceptedFiles={[ 'image/jpeg', 'image/png' ]}
                        fileName={this.props.bannerImageUrl}
                        previewImageHeight={'100px'}
                        previewImageWidth={'100px'}
                        imageFolder={"navTitleImage"}
                        onChange={ (value) => this.bannerImageUrl(value) }
                      /> */}
                    </div>
                  </div>

                  <div className="CollectionEditCancelButton CollectionEditButton">
                    <span onClick={this.CollectionCloseEditSection}>
                      CANCEL
                    </span>
                  </div>

                  <div className="CollectionEditapplyButton CollectionEditButton">
                    <span onClick={this.ApplyNavSettings}>APPLY</span>
                  </div>
                </div>
              </div>

              <div
                style={{
                  display: this.state.ShowHideGridListView,
                  backgroundColor: this.props.BGColor
                }}
                id="search_right_body"
              >
                <div
                  className="SearchRightTextContainer"
                  style={{
                    backgroundColor: this.props.SearchBGColor,
                    borderBottom: `1px solid ${this.props.CellSeparatorColor}`
                  }}
                >
                  <div
                    className="SearchBox"
                    style={{
                      backgroundColor: this.props.SearchInputColor,
                      border: `1px solid ${this.props.SearchInputBorder}`,
                      color: this.props.SearchTitleColor
                    }}
                  >
                    <div
                      className="SearchTextIcon"
                      style={{ color: this.props.SearchIconColor }}
                    >
                      <i className="fa fa-search" />
                    </div>
                    SEARCH PRODUCTS
                  </div>
                </div>

                <SearchListView
                  CellSeparatorColor={this.props.CellSeparatorColor}
                  CellBGColor={this.props.CellBGColor}
                  ProductBorderColor={this.props.ProductBorderColor}
                  ProductTitleColor={this.props.ProductTitleColor}
                  PriceColor={this.props.PriceColor}
                  ProductIconColor={this.props.ProductIconColor}
                  searchAction={this.props.searchAction}
                />
                <SearchListView
                  CellSeparatorColor={this.props.CellSeparatorColor}
                  CellBGColor={this.props.CellBGColor}
                  ProductBorderColor={this.props.ProductBorderColor}
                  ProductTitleColor={this.props.ProductTitleColor}
                  PriceColor={this.props.PriceColor}
                  ProductIconColor={this.props.ProductIconColor}
                  searchAction={this.props.searchAction}
                />
                <SearchListView
                  CellSeparatorColor={this.props.CellSeparatorColor}
                  CellBGColor={this.props.CellBGColor}
                  ProductBorderColor={this.props.ProductBorderColor}
                  ProductTitleColor={this.props.ProductTitleColor}
                  PriceColor={this.props.PriceColor}
                  ProductIconColor={this.props.ProductIconColor}
                  searchAction={this.props.searchAction}
                />
                <SearchListView
                  CellSeparatorColor={this.props.CellSeparatorColor}
                  CellBGColor={this.props.CellBGColor}
                  ProductBorderColor={this.props.ProductBorderColor}
                  ProductTitleColor={this.props.ProductTitleColor}
                  PriceColor={this.props.PriceColor}
                  ProductIconColor={this.props.ProductIconColor}
                  searchAction={this.props.searchAction}
                />
                <SearchListView
                  CellSeparatorColor={this.props.CellSeparatorColor}
                  CellBGColor={this.props.CellBGColor}
                  ProductBorderColor={this.props.ProductBorderColor}
                  ProductTitleColor={this.props.ProductTitleColor}
                  PriceColor={this.props.PriceColor}
                  ProductIconColor={this.props.ProductIconColor}
                  searchAction={this.props.searchAction}
                />
                <SearchListView
                  CellSeparatorColor={this.props.CellSeparatorColor}
                  CellBGColor={this.props.CellBGColor}
                  ProductBorderColor={this.props.ProductBorderColor}
                  ProductTitleColor={this.props.ProductTitleColor}
                  PriceColor={this.props.PriceColor}
                  ProductIconColor={this.props.ProductIconColor}
                  searchAction={this.props.searchAction}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchRightSection;
