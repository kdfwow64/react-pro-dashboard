// tslint:disable
// @ts-nocheck
import React, { Fragment } from 'react';

class IconList extends React.Component  {
  constructor(props) {
    super(props);
    this.DropDownGetIcon = this.DropDownGetIcon.bind(this);

    this.state = {
      IconClassName: this.props.IconClassName,
      IconColor: '#9ea6a9', // #fff
      IconBGColor: 'unset', // '#e274d3'
      IconBorderColor: '#f2f2f2', // '#e274d3'
      showIconsList: 'none'
    };
  }

  DropDownGetIcon = e => {
    this.setState({ IconClassName: e.target.getAttribute('data-key') });
    this.setState({ showIconsList: 'none' });
    if (this.props.DropDownGetIconCellectionHederCallback) {
      this.props.DropDownGetIconCellectionHederCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetCollectionActionCallback) {
      this.props.DropDownGetCollectionActionCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconCellection2HederCallback) {
      this.props.DropDownGetIconCellection2HederCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetCollection2ActionCallback) {
      this.props.DropDownGetCollection2ActionCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconLandingNavCallback) {
      this.props.DropDownGetIconLandingNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconCellectionNavCallback) {
      this.props.DropDownGetIconCellectionNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconCellectionListActionCallback) {
      this.props.DropDownGetIconCellectionListActionCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconProductExternalCallback) {
      this.props.DropDownGetIconProductExternalCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconProductNavCallback) {
      this.props.DropDownGetIconProductNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconUserNavCallback) {
      this.props.DropDownGetIconUserNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetCartUserNavCallback) {
      this.props.DropDownGetCartUserNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconSearchNavCallback) {
      this.props.DropDownGetIconSearchNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconSearchActionNavCallback) {
      this.props.DropDownGetIconSearchActionNavCallback(
        e.target.getAttribute('data-key')
      );
    }
    if (this.props.DropDownGetIconBrowseIconCallback) {
      this.props.DropDownGetIconBrowseIconCallback(
        e.target.getAttribute('data-key')
      );
    }
  }

  getIconLists = () => {
    const IconArry = [
      { name: 'lnr-cart' },
      { name: 'pe-7s-shopbag' },
      { name: 'lnr-tag' },
      { name: 'pe-7s-cup' },
      { name: 'lnr-heart' },
      { name: 'pe-7s-user-female' },
      { name: 'pe-7s-user' },
      { name: 'lnr-star' },
      { name: 'lnr-users' },
      { name: 'lnr-file-empty' },
      { name: 'lnr-inbox' },
      { name: 'lnr-film-play' },
      { name: 'lnr-arrow-right' },
      { name: 'lnr-arrow-left' },
      { name: 'lnr-arrow-right-circle' },
      { name: 'lnr-arrow-left-circle' },
      { name: 'lnr-chevron-left' },
      { name: 'lnr-chevron-right' },
      { name: 'pe-7s-home' },
      { name: 'pe-7s-search' },
      { name: 'lnr-menu' },
      { name: 'pe-7s-link' },
      { name: 'lnr-thumbs-up' },
      { name: 'pe-7s-pin' }
    ];
    const activeIcon = this.props.IconClassName;
    const iconLists = IconArry.map((d, index) => {
      const activeClassName = activeIcon === d.name ? 'Iconactive' : '';

      const allClasses = `${activeClassName}`;

      return (
        <li
          key={d.name}
          data-key={d.name}
          className={allClasses}
          onClick={this.DropDownGetIcon}
          style={{
            color: this.state.IconColor,
            backgroundColor: this.state.IconBGColor,
            borderColor: this.state.IconBorderColor
          }}
        >
          <i className={d.name} data-key={d.name} />
        </li>
      );
    });
    return iconLists;
  }

  showIconsListValue = () => {
    if (this.state.showIconsList === 'none') {
      this.setState({ showIconsList: 'block' });
    } else {
      this.setState({ showIconsList: 'none' });
    }
  }

  render() {
    return (
      <div>
        <div className="IconPicker" onClick={this.showIconsListValue}>
          <span className="icon-selected">
            <i
              style={{
                color: '#ffffff',
                fontSize: '25px',
                position: 'relative',
                left: '8px',
                top: '5px'
              }}
              className={this.props.IconClassName}
            />
          </span>
          <span className="icon-selected">
            <i
              style={{
                color: '#ffffff',
                fontSize: '10px',
                position: 'absolute',
                right: '10px',
                top: '12px'
              }}
              className="lnr-chevron-down"
            />
          </span>
        </div>
        <div
          className="ShowIconLink"
          style={{ display: this.state.showIconsList }}
        >
          <ul id="IconList">{this.getIconLists()}</ul>
        </div>
      </div>
    );
  }
}

export default IconList;
