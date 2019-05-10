// tslint:disable
import * as React from 'react';
import ProductcustomizePage from '../product-customize-section';

class ProducttitleAndPrice extends React.Component {

    render() {

        return (
        <div id="ProducttitleAndPrice" className="HoverEffectDragDrop" style={{ backgroundColor: this.props.ProducttitlebarBGColor }}>
        {this.props.FavButtonPosValue === 'left' &&
         <div id="productImageHeartIcon"
         style={{ display: 'block', color: this.props.FavBtnColor }} ><i className={this.props.DropDownGetIcon}></i></div>
        }
            <div className="ProductTitleText" style={{ color: this.props.ProductTitleColor, marginLeft: this.props.MarginLeftTitleSection }}> {this.props.productName || 'test'}</div>
    <div className="ProductPriceText" style={{ color: this.props.ProductPriceColor, marginLeft: this.props.MarginLeftTitleSection }}> {this.props.productRate || '$0.00'}</div> 
            {this.props.FavButtonPosValue === 'right' &&
         <div id="productImageHeartIcon"
         style={{ display: 'block', color: this.props.FavBtnColor, textAlign: 'right', width: '100%', top: '0', paddingRight: '15px' }} >
         <i className={this.props.DropDownGetIcon}></i>
         </div>
        }
        </div>
        );
    }
}

export default ProducttitleAndPrice;
