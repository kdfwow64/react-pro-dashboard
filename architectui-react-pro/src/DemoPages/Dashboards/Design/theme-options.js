// tslint:disable
// @ts-nocheck
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAngleLeft, faAngleRight, faAngleUp, faAngry, faAnkh, faAppleAlt, faArchive, faArchway, faArrowAltCircleDown, faArrowAltCircleLeft, faArrowAltCircleRight, faArrowAltCircleUp, faArrowCircleDown, faArrowCircleLeft, faArrowCircleRight, faArrowCircleUp, faArrowDown, faArrowLeft, faCalendarAlt, faCheckSquare, faCoffee, faCog, faQuoteLeft, faSpinner, faSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import SweetAlert from 'sweetalert-react';

library.add(
    fab,
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare,
    faAngleLeft,
    faCalendarAlt,
    faAngleRight,
    faAngleUp,
    faAngry,
    faAnkh,
    faAppleAlt,
    faArchive,
    faArchway,
    faArrowAltCircleDown,
    faArrowAltCircleLeft,
    faArrowAltCircleRight,
    faArrowAltCircleUp,
    faArrowCircleDown,
    faArrowCircleLeft,
    faArrowCircleRight,
    faArrowCircleUp,
    faArrowDown,
    faArrowLeft,
);

class ThemeOptions extends React.Component  {
  //homeTopTabsShowEditAlert: React.RefObject<{}>;
  constructor(props) {
    super(props);
    this.state = {
      DisplayThemeBar: false,
    };
    this.onThemeOptionSelection = this.onThemeOptionSelection.bind(this);
    this.CloseThemeBar = this.CloseThemeBar.bind(this);
    this.OpenThemeBar = this.OpenThemeBar.bind(this);
    this.homeTopTabsShowEditAlert = React.createRef();
  }
  _onThemeOptionSelection = themName => {
    this.props.selectTheme(themName);
  }
  get onThemeOptionSelection() {
    return this._onThemeOptionSelection;
  }
  set onThemeOptionSelection(value) {
    this._onThemeOptionSelection = value;
  }

  _CloseThemeBar = () => {
    this.setState({ DisplayThemeBar: false });
  }
  get CloseThemeBar() {
    return this._CloseThemeBar;
  }
  set CloseThemeBar(value) {
    this._CloseThemeBar = value;
  }
  _OpenThemeBar = () => {
    this.setState({ DisplayThemeBar: true });
  }
  get OpenThemeBar() {
    return this._OpenThemeBar;
  }
  set OpenThemeBar(value) {
    this._OpenThemeBar = value;
  }

  render() {
    return (
      <div
        className="themeOptionContainer"
        style={{ position: 'absolute', right: 100, bottom: 0 }}
      >
        <div
          className="themeOptionInnerContainer"
          style={{ backgroundColor: this.state.imageSpacingColor }}
        >
          <div className="UndoThemebutton" onClick={() => this.setState({ reloadConfirmation: true })}>
            <i className="pe-7s-refresh" />
          </div>
          <SweetAlert
            title="Are you sure?"
            confirmButtonColor=""
            show={this.state.reloadConfirmation}
            text="Are you sure, You want to reload the page. That means your all changes are removed."
            showCancelButton
            onConfirm={() => window.location.reload()}
            onCancel={() => this.setState({ reloadConfirmation: false })}/>
          <div
            className="Fixedthemebutton"
            style={{
              display: this.state.DisplayThemeBar === false ? 'block' : 'none'
            }}
            onClick={this.OpenThemeBar}
          >
           <FontAwesomeIcon
            icon={['fas', 'cog']}
            spin
            fixedWidth={false}
            size="1x"
            />
          </div>
          <div
            className="themeContainer"
            style={{
              display: this.state.DisplayThemeBar === true ? 'block' : 'none'
            }}
          >

            <ul style={{}} className="ThemeHideSection">
              <li
                onClick={() => {
                  this.onThemeOptionSelection('default');
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: '#0ebed0' }}
                />
                <div className="themeTitle">DEFAULT</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection('ice');
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: '#7ee0db' }}
                />
                <div className="themeTitle">ICE</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection('moonlight');
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: '#CCCCCC' }}
                />
                <div className="themeTitle">MOONLIGHT</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection('bee');
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: '#fff700' }}
                />
                <div className="themeTitle">BEE</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection('lavender');
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: '#9B59B6' }}
                />
                <div className="themeTitle">LAVENDER</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection('fire');
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: '#f3234a' }}
                />
                <div className="themeTitle">FIRE</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection('emerald');
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: '#2ecc71' }}
                />
                <div className="themeTitle">EMERALD</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection('night');
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: '#000000' }}
                />
                <div className="themeTitle">NIGHT</div>
              </li>
              <li
                onClick={() => {
                  this.onThemeOptionSelection('flamingo');
                }}
              >
                <div
                  className="themeCircle"
                  style={{ backgroundColor: '#EF4836' }}
                />
                <div className="themeTitle">FLAMINGO</div>
              </li>
            </ul>
           
           
           
            <div id="closeThemeIcon" onClick={this.CloseThemeBar}>
              <i className="pe-7s-close-circle" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ThemeOptions;