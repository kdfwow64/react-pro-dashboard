// tslint:disable
// @ts-nocheck
import React, { Fragment } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

class SearchNavigationStyles extends React.Component {
  constructor(props) {
    super(props);

    this.changeMyStoreName1 = this.changeMyStoreName1.bind(this);
    this.changeMyStoreLabel1 = this.changeMyStoreLabel1.bind(this);
    this.showStoreNameLable1 = this.showStoreNameLable1.bind(this);
    this.hideTextshowLabel1 = this.hideTextshowLabel1.bind(this);

    this.changeMyStoreName2 = this.changeMyStoreName2.bind(this);
    this.changeMyStoreLabel2 = this.changeMyStoreLabel2.bind(this);
    this.showStoreNameLable2 = this.showStoreNameLable2.bind(this);
    this.hideTextshowLabel2 = this.hideTextshowLabel2.bind(this);

    this.changeMyStoreName3 = this.changeMyStoreName3.bind(this);
    this.changeMyStoreLabel3 = this.changeMyStoreLabel3.bind(this);
    this.showStoreNameLable3 = this.showStoreNameLable3.bind(this);
    this.hideTextshowLabel3 = this.hideTextshowLabel3.bind(this);

    this.changeMyStoreName4 = this.changeMyStoreName4.bind(this);
    this.changeMyStoreLabel4 = this.changeMyStoreLabel4.bind(this);
    this.showStoreNameLable4 = this.showStoreNameLable4.bind(this);
    this.hideTextshowLabel4 = this.hideTextshowLabel4.bind(this);

    this.changeMyStoreName5 = this.changeMyStoreName5.bind(this);
    this.changeMyStoreLabel5 = this.changeMyStoreLabel5.bind(this);
    this.showStoreNameLable5 = this.showStoreNameLable5.bind(this);
    this.hideTextshowLabel5 = this.hideTextshowLabel5.bind(this);

    this.state = {
      menuCellBGColor: this.props.menuCellBGColor,
      menuIconColor: this.props.menuIconColor,
      menuTitleColor: this.props.menuTitleColor,
      menuTabActiveColor: this.props.menuTabActiveColor,
      menuTabInactiveColor: this.props.menuTabInactiveColor,
      menuSeparatorColor: this.props.menuSeparatorColor,
      allMenuItem: this.getAllMenuItems(),
      showMyStoreTextBox1: 'none',
      NavBarTitleText1: '',
      showMyLabel1: 'inline-block',

      showMyStoreTextBox2: 'none',
      NavBarTitleText2: '',
      showMyLabel2: 'inline-block',

      showMyStoreTextBox3: 'none',
      NavBarTitleText3: '',
      showMyLabel3: 'inline-block',

      showMyStoreTextBox4: 'none',
      NavBarTitleText4: '',
      showMyLabel4: 'inline-block',

      showMyStoreTextBox5: 'none',
      NavBarTitleText5: '',
      showMyLabel5: 'inline-block',

      homeText: 'HOME',
      searchin: 'SEARCHin',
      account: 'ACCOUNT',
      myCart: 'MY CART',
      contact: 'CONTACT'
    };
  }

  getAllMenuItems = () => {
    const allMenuItem = [
      {
        id: '1',
        icon: 'pe-7s-home',
        defaultText: 'HOME'
      },
      {
        id: '2',
        icon: 'lnr-magnifier',
        defaultText: 'SEARCHin'
      },
      {
        id: '3',
        icon: 'pe-7s-user',
        defaultText: 'ACCOUNT'
      },
      {
        id: '4',
        icon: 'lnr-cart',
        defaultText: 'MY CART'
      },
      {
        id: '5',
        icon: 'lnr-envelope',
        defaultText: 'CONTACT'
      }
    ];

    return allMenuItem;
  };

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  onDragEnd = result => {
    const { source, destination } = result;
    // dropped outside the list
    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = this.reorder(
        this.state.allMenuItem,
        source.index,
        destination.index
      );
      let state = { items };
      if (source.droppableId === 'droppable') {
        state = { allMenuItem: items };
      }
      this.setState(state);
    }
    this.props.DisplaySaveBtn();
  };

  getNavigationContent = e => {
    if (e.id === 1) {
      return (
        <div
          className="iconContainer"
          onClick={this.changeMyStoreLabel1}
          style={{
            backgroundColor: this.props.menuCellBGColor,
            borderBottom: `2px solid ${this.props.menuSeparatorColor}`,
            padding: '20px 5px'
          }}
        >
          <span>
            {' '}
            <i
              className="pe-7s-home"
              style={{ color: this.props.menuIconColor }}
            />
          </span>
          <span
            style={{
              color: this.props.menuTitleColor,
              display: this.state.showMyLabel1
            }}
          >
            {this.props.HomeVal}
          </span>
          <div className="NavReminderName" style={{ display: 'none' }}>
            HOME
          </div>
          <input
            onBlur={this.showStoreNameLable1}
            onChange={this.changeMyStoreName1}
            className="NavTextEdit"
            onKeyPress={this.hideTextshowLabel1}
            style={{
              display: this.state.showMyStoreTextBox1,
              position: 'relative',
              top: '0',
              left: '0'
            }}
            type="text"
            defaultValue={this.props.HomeVal}
          />
        </div>
      );
    }
    if (e.id === 2) {
      return (
        <div
          className="iconContainer"
          onClick={this.changeMyStoreLabel2}
          style={{
            backgroundColor: this.props.menuCellBGColor,
            borderBottom: `1px solid ${this.props.menuSeparatorColor}`,
            padding: '20px 5px'
          }}
        >
          <span>
            {' '}
            <i
              className="lnr-magnifier"
              style={{ color: this.props.menuIconColor }}
            />
          </span>
          <span
            style={{
              color: this.props.menuTitleColor,
              display: this.state.showMyLabel2
            }}
          >
            {this.props.SearchVal}
          </span>
          <div className="NavReminderName" style={{ display: 'none' }}>
            SEARCH
          </div>
          <input
            onBlur={this.showStoreNameLable2}
            onChange={this.changeMyStoreName2}
            className="NavTextEdit"
            onKeyPress={this.hideTextshowLabel2}
            style={{
              display: this.state.showMyStoreTextBox2,
              position: 'relative',
              top: '0',
              left: '0'
            }}
            type="text"
            defaultValue={this.props.SearchVal}
          />
        </div>
      );
    }
    if (e.id === 3) {
      return (
        <div
          className="iconContainer"
          onClick={this.changeMyStoreLabel3}
          style={{
            backgroundColor: this.props.menuCellBGColor,
            borderBottom: `1px solid ${this.props.menuSeparatorColor}`,
            padding: '20px 5px'
          }}
        >
          <span>
            {' '}
            <i
              className="pe-7s-user"
              style={{ color: this.props.menuIconColor }}
            />
          </span>
          <span
            style={{
              color: this.props.menuTitleColor,
              display: this.state.showMyLabel3
            }}
          >
            {this.props.AccountVal}
          </span>
          <div className="NavReminderName" style={{ display: 'none' }}>
            ACCOUNT
          </div>
          <input
            onBlur={this.showStoreNameLable3}
            onChange={this.changeMyStoreName3}
            className="NavTextEdit"
            onKeyPress={this.hideTextshowLabel3}
            style={{
              display: this.state.showMyStoreTextBox3,
              position: 'relative',
              top: '0',
              left: '0'
            }}
            type="text"
            defaultValue={this.props.AccountVal}
          />
        </div>
      );
    }
    if (e.id === 4) {
      return (
        <div
          className="iconContainer"
          onClick={this.changeMyStoreLabel4}
          style={{
            backgroundColor: this.props.menuCellBGColor,
            borderBottom: `1px solid ${this.props.menuSeparatorColor}`,
            padding: '20px 5px'
          }}
        >
          <span>
            {' '}
            <i
              className="lnr-cart"
              style={{ color: this.props.menuIconColor }}
            />
          </span>
          <span
            style={{
              color: this.props.menuTitleColor,
              display: this.state.showMyLabel4
            }}
          >
            {this.props.CartVal}
          </span>
          <div className="NavReminderName" style={{ display: 'none' }}>
            CART
          </div>
          <input
            onBlur={this.showStoreNameLable4}
            onChange={this.changeMyStoreName4}
            className="NavTextEdit"
            onKeyPress={this.hideTextshowLabel4}
            style={{
              display: this.state.showMyStoreTextBox4,
              position: 'relative',
              top: '0',
              left: '0'
            }}
            type="text"
            defaultValue={this.props.CartVal}
          />
        </div>
      );
    }
    if (e.id === 5) {
      return (
        <div
          className="iconContainer"
          onClick={this.changeMyStoreLabel5}
          style={{
            backgroundColor: this.props.menuCellBGColor,
            borderBottom: `1px solid ${this.props.menuSeparatorColor}`,
            padding: '20px 5px'
          }}
        >
          <span>
            {' '}
            <i
              className="lnr-envelope"
              style={{ color: this.props.menuIconColor }}
            />
          </span>
          <span
            style={{
              color: this.props.menuTitleColor,
              display: this.state.showMyLabel5
            }}
          >
            {this.props.ContactVal}
          </span>
          <div className="NavReminderName" style={{ display: 'none' }}>
            CONTACT
          </div>
          <input
            onBlur={this.showStoreNameLable5}
            onChange={this.changeMyStoreName5}
            className="NavTextEdit"
            onKeyPress={this.hideTextshowLabel5}
            name="changeMyStoreLabel5"
            autoFocus
            style={{
              display: this.state.showMyStoreTextBox5,
              position: 'relative',
              top: '0',
              left: '0'
            }}
            type="text"
            defaultValue={this.props.ContactVal}
          />
        </div>
      );
    }
  };

  changeMyStoreLabel1 = () => {
    this.setState({ showMyStoreTextBox1: 'inline-block' });
    this.setState({ showMyLabel1: 'none' });
  };

  changeMyStoreName1 = e => {
    this.setState({ homeText: e.target.value });
    this.props.HomeValue(e.target.value);
  };

  hideTextshowLabel1 = e => {
    if (e.key === 'Enter') {
      this.setState({ showMyStoreTextBox1: 'none' });
      this.setState({ showMyLabel1: 'inline-block' });
    }
  };

  showStoreNameLable1 = () => {
    this.setState({ showMyStoreTextBox1: 'none' });
    this.setState({ showMyLabel1: 'inline-block' });
  };

  changeMyStoreLabel2 = () => {
    this.setState({ showMyStoreTextBox2: 'inline-block' });
    this.setState({ showMyLabel2: 'none' });
  };

  changeMyStoreName2 = e => {
    this.setState({ searchin: e.target.value });
    this.props.SearchValue(e.target.value);
  };

  hideTextshowLabel2 = e => {
    if (e.key === 'Enter') {
      this.setState({ showMyStoreTextBox2: 'none' });
      this.setState({ showMyLabel2: 'inline-block' });
    }
  };

  showStoreNameLable2 = () => {
    this.setState({ showMyStoreTextBox2: 'none' });
    this.setState({ showMyLabel2: 'inline-block' });
  };

  changeMyStoreLabel3 = () => {
    this.setState({ showMyStoreTextBox3: 'inline-block' });
    this.setState({ showMyLabel3: 'none' });
  };

  changeMyStoreName3 = e => {
    this.setState({ account: e.target.value });
    this.props.AccountValue(e.target.value);
  };

  hideTextshowLabel3 = e => {
    if (e.key === 'Enter') {
      this.setState({ showMyStoreTextBox3: 'none' });
      this.setState({ showMyLabel3: 'inline-block' });
    }
  };

  showStoreNameLable3 = () => {
    this.setState({ showMyStoreTextBox3: 'none' });
    this.setState({ showMyLabel3: 'inline-block' });
  };

  changeMyStoreLabel4 = () => {
    this.setState({ showMyStoreTextBox4: 'inline-block' });
    this.setState({ showMyLabel4: 'none' });
  };

  changeMyStoreName4 = e => {
    this.setState({ myCart: e.target.value });
    this.props.CartValue(e.target.value);
  };

  hideTextshowLabel4 = e => {
    if (e.key === 'Enter') {
      this.setState({ showMyStoreTextBox4: 'none' });
      this.setState({ showMyLabel4: 'inline-block' });
    }
  };

  showStoreNameLable4 = () => {
    this.setState({ showMyStoreTextBox4: 'none' });
    this.setState({ showMyLabel4: 'inline-block' });
  };

  changeMyStoreLabel5 = () => {
    this.setState({ showMyStoreTextBox5: 'inline-block' });
    this.setState({ showMyLabel5: 'none' });
  };

  changeMyStoreName5 = e => {
    this.setState({ contact: e.target.value });
    this.props.ContactValue(e.target.value);
  };

  hideTextshowLabel5 = e => {
    if (e.key === 'Enter') {
      this.setState({ showMyStoreTextBox5: 'none' });
      this.setState({ showMyLabel5: 'inline-block' });
    }
  };

  showStoreNameLable5 = () => {
    this.setState({ showMyStoreTextBox5: 'none' });
    this.setState({ showMyLabel5: 'inline-block' });
  };

  render() {
    return (
      <div id="SearchNavigationStyles" className="SearchNavigationSettings">
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <DragDropContext onDragEnd={this.onDragEnd}>
              <div className="HomeRightLeftContainer col-lg-12 col-sm-12 rakesh">
                <div className="">
                  <div className="navigationStyle">
                    <Droppable droppableId="droppable">
                      {(provided, snapshot) => (
                        <div
                          ref={provided.innerRef}
                          className="HomePageLeftBlock"
                        >
                          {this.state.allMenuItem.map((item, index) => (
                            <Draggable
                              key={item.id}
                              draggableId={item.id}
                              index={index}
                            >
                              {(provided, snapshot) => (
                                <div
                                  style={{ lineHeight: '100px' }}
                                  className="menu-item menu-item HoverEffectDragDrop"
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  {this.getNavigationContent(item)}
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>
                </div>
              </div>
            </DragDropContext>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchNavigationStyles;
