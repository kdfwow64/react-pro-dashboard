// tslint:disable
// @ts-nocheck
import React, { Fragment } from 'react';

class ProductSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.onTitleColorChange = this.onTitleColorChange.bind(this);
    this.state = {
      borderColor: this.props.settings.borderColor,
      cellBGColor:
        this.props.callType !== 'droppable'
          ? this.props.SearchCellBGColor
          : this.props.settings.cellBGColor,
      iconColor: this.props.settings.iconColor,
      searchBGColor: this.props.settings.searchBGColor,
      searchPlaceholder: this.props.settings.searchPlaceholder,
      titleColor: this.props.settings.titleColor
    };
  }

  onTitleColorChange = () => {};

  setAllSettingsOnApply = settings => {
    this.setState(settings);
  };

  render() {
    return (
      <div
        className="searchInput"
        style={{ backgroundColor: this.state.cellBGColor }}
      >
        <span
          className="search_edit_icon"
          style={{ color: this.state.iconColor, fontSize: '12px', top: '19px' }}
        >
          <i className="lnr-magnifier" />
        </span>
        <input
          type="text"
          className="search_input"
          name=""
          value={this.state.searchPlaceholder}
          onChange={this.onTitleColorChange}
          style={{
            color: this.state.titleColor,
            borderColor: this.state.borderColor,
            backgroundColor: this.state.searchBGColor,
            paddingLeft: '20px'
          }}
          id="search_product"
          defaultValue={this.state.searchPlaceholder}
        />
      </div>
    );
  }
}

export default ProductSearchForm;
