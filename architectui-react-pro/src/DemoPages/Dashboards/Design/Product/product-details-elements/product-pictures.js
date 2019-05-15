// tslint:disable
import * as React from 'react';

class ProductPicture extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    FavIconTop: '5px',
    FavIconBottom: 'unset',
    FavIconLeft: 'unset',
    FavIconRight: '5px'
  };

  render() {
    return (
      <div id="ProductPictureContainer" className="HoverEffectDragDrop">
        <div className="ProductPictureMain">
          {this.props.productImage && (
            <img
              src={this.props.productImage}
              style={{ width: '100%', height: '100%' }}
            />
          )}
        </div>
        {this.props.FavButtonPosValue !== 'left' &&
          this.props.FavButtonPosValue !== 'right' && (
            <div
              id="productImageHeartIcon"
              style={{
                display: 'block',
                color: this.props.FavBtnColor,
                top: this.props.FavButtonTop,
                bottom: this.props.FavButtonBottom,
                left: this.props.FavButtonLeft,
                right: this.props.FavButtonRight
              }}
            >
              <i className={this.props.DropDownGetIcon} />
            </div>
          )}
        <div
          id="ProductPicture"
          style={{ backgroundColor: this.props.SilderBGColor }}
        >
          <ul id="productPictureCircleContainer">
            <li
              className="ProductPictureCircle"
              style={{ backgroundColor: this.props.SilderDotColor }}
            />
            <li
              className="ProductPictureCircle ProductPictureCircleHighlighted"
              style={{ backgroundColor: this.props.SilderActiveColor }}
            />
            <li
              className="ProductPictureCircle"
              style={{ backgroundColor: this.props.SilderDotColor }}
            />
            <li
              className="ProductPictureCircle"
              style={{ backgroundColor: this.props.SilderDotColor }}
            />
            <li
              className="ProductPictureCircle"
              style={{ backgroundColor: this.props.SilderDotColor }}
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default ProductPicture;
