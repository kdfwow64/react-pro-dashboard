// tslint:disable
// @ts-nocheck
import React, { Fragment } from 'react';

class CustomBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerImageUrl: this.props.settings.bannerImageUrl,
      DisplayCollectionValue: this.props.settings.DisplayCollectionValue,
      DisplayProductValue: this.props.settings.DisplayProductValue,
      Bannerselectoption: this.props.settings.Bannerselectoption,
      BannerUrl: this.props.settings.BannerUrl,
      BannerPhone: this.props.settings.BannerPhone,
      BannerEmail: this.props.settings.BannerEmail
    };
  }

  setAllSettingsOnApply = settings => {
    this.setState(settings);
  };

  render() {
    return (
      <div
        className="HoverEffectDragDrop bgImag"
        id="SixthDropContainer"
        style={{ height: 'auto' }}
      >
        <div
          className="HoverEffectDragDrop"
          id="FourthDropContainer"
          style={{ paddingTop: this.state.bannerImageUrl === '' ? '20%' : '0' }}
        >
          {this.state.bannerImageUrl === '' ? (
            ' CUSTOM BANNER '
          ) : (
            <img
              style={{ maxWidth: '100%', maxHeight: '100%', height: '100%' }}
              src={this.state.bannerImageUrl}
            />
          )}
        </div>
      </div>
    );
  }
}

export default CustomBanner;
