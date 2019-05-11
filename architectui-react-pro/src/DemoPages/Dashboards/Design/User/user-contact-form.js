// tslint:disable
import * as React from 'react';

class CreateContactForm extends React.Component  {
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
      <div
        id="CollectionEffectMainContainer"
        className="CollectionGridListView"
      >
        <div id="SearchNavigationStyles" className="SearchNavigationSettings">
          <div className="CollectionEffectContainer">
            <div className="create_account_main">
              <div
                className="formContainer accountformcontainer"
                style={{ backgroundColor: this.props.contactBGColor }}
              >
                <div className="form_main_cont">
                  <div
                    className="FullNameContainer"
                    style={{ backgroundColor: this.props.contactinputBGColor }}
                  >
                    <div className="user_icon_cnt">
                      <i
                        style={{ color: this.props.contactinputIconColor }}
                        className="lnr-user"
                      />
                    </div>
                    <div
                      className="userEmail user_input_cnt"
                      style={{ color: this.props.contactinputTitleColor }}
                    >
                      Full Name
                    </div>
                  </div>

                  <div
                    className="FullNameContainer"
                    style={{ backgroundColor: this.props.contactinputBGColor }}
                  >
                    <div className="user_icon_cnt">
                      <i
                        style={{ color: this.props.contactinputIconColor }}
                        className="lnr-envelope"
                      />
                    </div>
                    <div
                      className="userEmail user_input_cnt"
                      style={{ color: this.props.contactinputTitleColor }}
                    >
                      Email Address
                    </div>
                  </div>

                  <div
                    className="FullNameContainer"
                    style={{
                      backgroundColor: this.props.contactinputBGColor,
                      height: '150px'
                    }}
                  >
                    <div className="user_icon_cnt">
                      <i
                        style={{ color: this.props.contactinputIconColor }}
                        className="pe-7s-comment"
                      />
                    </div>
                    <div
                      className="userEmail user_input_cnt"
                      style={{
                        color: this.props.contactinputTitleColor,
                        height: '150px'
                      }}
                    >
                      Message
                    </div>
                  </div>

                  <div
                    className="FullNameContainer"
                    style={{ backgroundColor: this.props.contactbuttonColor }}
                  >
                    <div
                      className="button_sec"
                      style={{ color: this.props.contactbuttonTitleColor }}
                    >
                      Send Message
                    </div>
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

export default CreateContactForm;
