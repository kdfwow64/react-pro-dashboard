// tslint:disable
import * as React from 'react';

class ProductExternalLink extends React.Component  {

    render() {

        return (
            <div id="ProductExternalLink" className="HoverEffectDragDrop"
                style={{ backgroundColor: this.props.ExternalBGColor, display: this.props.AddLinkSecShow }}>
                <div className="ProductexternalLinker"
                    style={{ color: this.props.ExternalIconColor }}>
                    <i className={this.props.ExternalIcon}></i>
                    <span style={{ color: this.props.ExternalLinkColor }} >{this.props.ExternalLinkTitle !== '' ? this.props.ExternalLinkTitle : 'External Web Link 1'}</span>
                </div>
            </div>
        );
    }
}

export default ProductExternalLink;
