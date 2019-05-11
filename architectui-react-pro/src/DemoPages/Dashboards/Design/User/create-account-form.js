// tslint:disable
import * as React from 'react';
import { ChromePicker } from 'react-color';
import { SketchPicker } from 'react-color';
import reactCSS from 'reactcss';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


class CreateAccountForm extends React.Component  {

    constructor(props) {
        super(props);

    }

    state = {

        menuCellBGColor: this.props.menuCellBGColor,
        menuIconColor: this.props.menuIconColor,
        menuTitleColor: this.props.menuTitleColor,
        menuTabActiveColor: this.props.menuTabActiveColor,
        menuTabInactiveColor: this.props.menuTabInactiveColor,
        menuSeparatorColor: this.props.menuSeparatorColor

    };

    render() {

        return (
            <div id="CollectionEffectMainContainer" className="CollectionGridListView">
            <div id="SearchNavigationStyles" className="SearchNavigationSettings">
             <div className="CollectionEffectContainer">

                    <div className="create_account_main">

                        <div className="formContainer accountformcontainer" style={{ backgroundColor: this.props.BGColor }}>
                            <div className="form_main_cont">
                            <div className="FullNameContainer" style={{ backgroundColor: this.props.inputBGColor, marginTop: '0px'}}>
                                <div className="user_icon_cnt" ><i style={{ color: this.props.inputIconColor }} className="lnr-user"></i></div>
                                <div className="userFullName user_input_cnt" style={{ color: this.props.inputTitleColor }}>Full Name</div>
                            </div>

                            <div className="FullNameContainer" style={{ backgroundColor: this.props.inputBGColor }}>
                                <div className="user_icon_cnt" ><i style={{ color: this.props.inputIconColor }} className="lnr-envelope"></i></div>
                                <div className="userEmail user_input_cnt" style={{ color: this.props.inputTitleColor }}>Email Address</div>
                            </div>

                           <div className="FullNameContainer" style={{ backgroundColor: this.props.inputBGColor }}>
                                <div className="user_icon_cnt" ><i style={{ color: this.props.inputIconColor }} className="pe-7s-key"></i></div>
                                <div className="userEmail user_input_cnt" style={{ color: this.props.inputTitleColor }}>Password</div>
                            </div>

                            <div className="FullNameContainer" style={{ backgroundColor: this.props.buttonColor }}>
                                <div className="button_sec" style={{ color: this.props.buttonTitleColor }}>Login</div>
                            </div>
                             <div className="FullNameContainer">

                                <div className="GeneralTextContainer" style={{ color: this.props.generalTextColor }}>Have an existing account?
                                <span className="TextLinkContainer" style={{ color: this.props.textLinkColor }}> Sign In</span></div>

                            </div>
                        </div>

                    </div>

                </div>

                    </div>
                    </div>
                </div>
        );
    }

}

export default CreateAccountForm;
