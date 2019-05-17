// tslint:disable
// @ts-nocheck
import React, { Fragment } from 'react';
import { ChromePicker } from 'react-color';
import { Button, CardFooter, Card, CardText, CardBody } from 'reactstrap';

class ModalSearchContent extends React.Component {
  constructor(props) {
    super(props);

    this.onTitleColorClick = this.onTitleColorClick.bind(this);
    this.onTitleColorClose = this.onTitleColorClose.bind(this);
    this.onTitleColorClickComplete = this.onTitleColorClickComplete.bind(this);

    this.onBorderColorClick = this.onBorderColorClick.bind(this);
    this.onBorderColorClose = this.onBorderColorClose.bind(this);
    this.onBorderColorClickComplete = this.onBorderColorClickComplete.bind(
      this
    );

    this.onSearchBGClick = this.onSearchBGClick.bind(this);
    this.onSearchBGClose = this.onSearchBGClose.bind(this);
    this.onSearchBGClickComplete = this.onSearchBGClickComplete.bind(this);

    this.onSearchIconClick = this.onSearchIconClick.bind(this);
    this.onSearchIconClose = this.onSearchIconClose.bind(this);
    this.onSearchIconClickComplete = this.onSearchIconClickComplete.bind(this);

    this.onCellBGColorClick = this.onCellBGColorClick.bind(this);
    this.onCellBGColorClose = this.onCellBGColorClose.bind(this);
    this.onCellBGColorClickComplete = this.onCellBGColorClickComplete.bind(
      this
    );

    this.onTextPlaceholderClick = this.onTextPlaceholderClick.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onApplySetting = this.onApplySetting.bind(this);

    this.state = {
      titleColor: this.props.defaultSettings.titleColor,
      displayTitleColor: false,

      borderColor: this.props.defaultSettings.borderColor,
      displayBorderColor: false,

      searchBGColor: this.props.defaultSettings.searchBGColor,
      displaySearchBG: false,

      iconColor: this.props.defaultSettings.iconColor,
      displayIconColor: false,

      cellBGColor: this.props.defaultSettings.cellBGColor,
      displayCellBGColor: false,

      searchPlaceholder: this.props.defaultSettings.searchPlaceholder
    };
  }

  onCloseModal = () => {
    this.props.onCloseModal(this.props.modalId);
  };

  onApplySetting = e => {
    e.preventDefault();
    const allSettings = {
      titleColor: this.state.titleColor,
      borderColor: this.state.borderColor,
      searchBGColor: this.state.searchBGColor,
      iconColor: this.state.iconColor,
      cellBGColor: this.state.cellBGColor,
      searchPlaceholder: this.state.searchPlaceholder,
      modalId: this.props.modalId,
      itemId: this.props.itemId
    };

    this.props.onApply(allSettings);
    this.props.onCloseModal(this.props.modalId);
  };

  applyAppliedSetting = settings => {};

  onTitleColorClick = () => {
    this.setState({ displayTitleColor: true });
  };

  onTitleColorClose = () => {
    this.setState({ displayTitleColor: false });
  };

  onTitleColorClickComplete = color => {
    this.setState({ titleColor: color.hex });
  };

  onBorderColorClick = () => {
    this.setState({ displayBorderColor: true });
  };

  onBorderColorClose = () => {
    this.setState({ displayBorderColor: false });
  };

  onBorderColorClickComplete = color => {
    this.setState({ borderColor: color.hex });
  };

  onSearchBGClick = () => {
    this.setState({ displaySearchBG: true });
  };

  onSearchBGClose = () => {
    this.setState({ displaySearchBG: false });
  };

  onSearchBGClickComplete = color => {
    this.setState({ searchBGColor: color.hex });
  };

  onSearchIconClick = () => {
    this.setState({ displayiconColor: true });
  };

  onSearchIconClose = () => {
    this.setState({ displayiconColor: false });
  };

  onSearchIconClickComplete = color => {
    this.setState({ iconColor: color.hex });
  };

  onCellBGColorClick = () => {
    this.setState({ displaycellBGColor: true });
  };

  onCellBGColorClose = () => {
    this.setState({ displaycellBGColor: false });
  };

  onCellBGColorClickComplete = color => {
    this.setState({ cellBGColor: color.hex });
  };

  onTextPlaceholderClick = e => {
    this.setState({ searchPlaceholder: e.target.value });
  };

  swatch = {
    padding: '5px',
    display: 'inline-block',
    position: 'absolute',
    left: '2px',
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

  render() {
    // let placehoder = this.state.searchPlaceholder;
    return (
      <div className="row">
        <div className="col-lg-12 Search-form-settings">
          <div className="col-lg-4 col-sm-4 setting_left_col setting_comman_col">
            <div className="setting_fields">
              <div
                className="searchInput HoverEffectDragDrop"
                style={{ backgroundColor: this.state.cellBGColor }}
              >
                <span
                  className="search_edit_icon"
                  style={{ color: this.state.iconColor }}
                >
                  <i className="lnr-magnifier" />
                </span>
                <input
                  type="text"
                  className="search_input"
                  name=""
                  style={{
                    paddingLeft: '25px',
                    color: this.state.titleColor,
                    border: `1px solid${this.state.borderColor}`,
                    backgroundColor: this.state.searchBGColor
                  }}
                  id="search_product"
                  defaultValue={this.state.searchPlaceholder}
                  value={this.state.searchPlaceholder}
                />
              </div>
            </div>
          </div>

          <div className="col-lg-8 col-sm-8 setting_right_col setting_comman_col">
            <div className="setting_right_main" style={{ float: 'none' }}>
              <div className="setting_title">CUSTOMIZE SEARCH BAR</div>
              <div
                className="fixSettingScrollSection"
                style={{ padding: '20px' }}
              >
                <div className="CollectionMainEditIcon">
                  <div className="CollectionSettingIcon">
                    <label>TITLE COLOR </label>
                  </div>
                  <div className="CollectionMainEditBGIconView">
                    <input
                      type="text"
                      value={this.state.titleColor}
                      defaultValue={this.state.titleColor}
                      id="CollectionDropDown"
                      className="textColorCode"
                      onClick={this.onTitleColorClick}
                    />
                    <div style={this.swatch}>
                      <div
                        className="colorPickerBorder"
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: this.state.titleColor
                        }}
                        onClick={this.onTitleColorClick}
                      />
                    </div>
                    {this.state.displayTitleColor ? (
                      <div style={this.popover}>
                        <div
                          style={this.cover}
                          onClick={this.onTitleColorClose}
                        />
                        <ChromePicker
                          color={this.state.titleColor}
                          onChange={this.onTitleColorClickComplete}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="CollectionMainEditIcon">
                  <div className="CollectionSettingIcon">
                    <label>SEARCH BOX BORDER COLOR</label>
                  </div>
                  <div className="CollectionMainEditBGIconView">
                    <input
                      type="text"
                      value={this.state.borderColor}
                      defaultValue={this.state.borderColor}
                      id="CollectionDropDown"
                      className="textColorCode"
                      onClick={this.onBorderColorClick}
                    />
                    <div style={this.swatch}>
                      <div
                        className="colorPickerBorder"
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: this.state.borderColor
                        }}
                        onClick={this.onBorderColorClick}
                      />
                    </div>
                    {this.state.displayBorderColor ? (
                      <div style={this.popover}>
                        <div
                          style={this.cover}
                          onClick={this.onBorderColorClose}
                        />
                        <ChromePicker
                          color={this.state.borderColor}
                          onChange={this.onBorderColorClickComplete}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="CollectionMainEditIcon">
                  <div className="CollectionSettingIcon">
                    <label>SEARCH BOX BACKGROUND COLOR</label>
                  </div>
                  <div className="CollectionMainEditBGIconView">
                    <input
                      type="text"
                      value={this.state.searchBGColor}
                      defaultValue={this.state.searchBGColor}
                      id="CollectionDropDown"
                      className="textColorCode"
                      onClick={this.onSearchBGClick}
                    />
                    <div style={this.swatch}>
                      <div
                        className="colorPickerBorder"
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: this.state.searchBGColor
                        }}
                        onClick={this.onSearchBGClick}
                      />
                    </div>
                    {this.state.displaySearchBG ? (
                      <div style={this.popover}>
                        <div
                          style={this.cover}
                          onClick={this.onSearchBGClose}
                        />
                        <ChromePicker
                          color={this.state.searchBGColor}
                          onChange={this.onSearchBGClickComplete}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="CollectionMainEditIcon">
                  <div className="CollectionSettingIcon">
                    <label>ICON COLOR</label>
                  </div>
                  <div className="CollectionMainEditBGIconView">
                    <input
                      type="text"
                      value={this.state.iconColor}
                      defaultValue={this.state.iconColor}
                      id="CollectionDropDown"
                      className="textColorCode"
                      onClick={this.onSearchIconClick}
                    />
                    <div style={this.swatch}>
                      <div
                        className="colorPickerBorder"
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: this.state.iconColor
                        }}
                        onClick={this.onSearchIconClick}
                      />
                    </div>
                    {this.state.displayiconColor ? (
                      <div style={this.popover}>
                        <div
                          style={this.cover}
                          onClick={this.onSearchIconClose}
                        />
                        <ChromePicker
                          color={this.state.iconColor}
                          onChange={this.onSearchIconClickComplete}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="CollectionMainEditIcon">
                  <div className="CollectionSettingIcon">
                    <label>CELL BACKGROUND COLOR</label>
                  </div>
                  <div className="CollectionMainEditBGIconView">
                    <input
                      type="text"
                      value={this.state.cellBGColor}
                      defaultValue={this.state.cellBGColor}
                      id="CollectionDropDown"
                      className="textColorCode"
                      onClick={this.onCellBGColorClick}
                    />
                    <div style={this.swatch}>
                      <div
                        className="colorPickerBorder"
                        style={{
                          width: '20px',
                          height: '20px',
                          backgroundColor: this.state.cellBGColor
                        }}
                        onClick={this.onCellBGColorClick}
                      />
                    </div>
                    {this.state.displaycellBGColor ? (
                      <div style={this.popover}>
                        <div
                          style={this.cover}
                          onClick={this.onCellBGColorClose}
                        />
                        <ChromePicker
                          color={this.state.cellBGColor}
                          onChange={this.onCellBGColorClickComplete}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="CollectionMainEditIcon">
                  <div className="CollectionSettingIcon">
                    <label>SEARCH BAR TEXT PLACEHOLDER</label>
                  </div>
                  <div className="CollectionMainEditBGIconView">
                    <input
                      type="text"
                      defaultValue={this.state.searchPlaceholder}
                      id="CollectionDropDown"
                      style={{ color: '#000', fontWeight: 600 }}
                      onChange={this.onTextPlaceholderClick}
                      value={this.state.searchPlaceholder}
                    />
                  </div>
                </div>
              </div>
              <CardFooter className="d-block text-right">
                <Button
                  size="sm"
                  className="mr-2"
                  color="link"
                  onClick={this.onCloseModal}
                >
                  Cancel
                </Button>
                <Button
                  className="btn-wide btn-shadow"
                  color="primary"
                  onClick={this.onApplySetting}
                >
                  Apply
                </Button>
              </CardFooter>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ModalSearchContent;
