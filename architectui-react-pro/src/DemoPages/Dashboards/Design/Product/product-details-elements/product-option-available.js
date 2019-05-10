// tslint:disable
import * as React from 'react';

class ProductOptionAvailable extends React.Component {

    render() {

        return (
        <div id="ProductOptionAvailable" className="HoverEffectDragDrop" style={{ backgroundColor: this.props.ProductCellBGColor }}>
            <div id="ProductOptionAvailable1">
				<div className="productOptionsArrow" style={{ color: this.props.OptionIconColor }}><i className="lnr-chevron-down"></i></div>
				<span id="ProductOptionAvailable1Title" className="productOptionPadding" style={{ color: this.props.OptionTitleColor }}>Title</span>
				<span id="ProductOptionAvailable1Value" className="productOptionPadding" style={{ color: this.props.OptionValueColor }}>Default Title</span>
			</div>
            <div id="ProductOptionAvailable1" style={{ display: 'none' }}>
				<div className="productOptionsArrow" style={{ color: 'rgb(186, 186, 186)' }}><i className="lnr-chevron-down"></i></div>
				<span id="ProductOptionAvailable1Title" className="productOptionPadding" style={{ color: 'rgb(58, 58, 58)' }}>Title</span>
				<span id="ProductOptionAvailable1Value" className="productOptionPadding" style={{ color: 'rgb(186, 186, 186)' }}>Default Title</span>
			</div>
        </div>
        );
    }
}

export default ProductOptionAvailable;
