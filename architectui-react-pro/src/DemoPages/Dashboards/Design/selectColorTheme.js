// tslint:disable
// @ts-nocheck
import axios from 'axios';
import * as React from 'react';
import './index.css';
import HomeTopTabs from './home-tabs';
import { API_ROOT } from '../../../../utilities/api-config';

class SelectColorTheme extends React.Component {
  constructor(props) {
    super(props);
    // this.homeTopTabsShowEditAlert = this.props.homeTopTabsShowEditAlert;
    this.state = {
      tutorial: true,
      landingTabDraggedItems: [],
      SearchCellBGColor: '',
      SingleActiveDotColor: '',
      Collection1HeaderBGColor: '',
      Collection2HeaderBGsecColor: '',
      CollectioncellSubTitleColor: '',
      BrowsefooterBGColor: '',
      displaystyle: 'none',
      displaybuild: 'block',
      displaybuildleft: 'block',
      displaystyleleft: 'none',
      SettingStoreHide: 'none',
      DragStoreDisplay: 'block',
      menuCellBGColor: '#ffffff',
      menuIconColor: '#ef4836',
      menuTitleColor: '#222222',
      menuTabActiveColor: '#cccccc',
      menuTabInactiveColor: '#cccccc',
      menuSeparatorColor: '#ebebeb',
      LandingStyleDisplay: 'none',
      LandingPreviewDisplay: 'none',
      hoverDeleteStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#000000'
      },
      openModal: false,
      allModalIds: {},
      isEdited: false,
      showMyStoreTextBox: 'none',
      NavBarTitleText: 'MY STORE',
      showMyLabel: 'block',
      ContactValue: 'CONTACT',
      HomeValue: 'HOME',
      SearchValue: 'SEARCHin',
      AccountValue: 'ACCOUNT',
      CartValue: 'MY CART',
      navbarBackgroundColorValue: '',
      NavTitle: 'text',
      showNextbtn: false,
      show_msg: false,
      themeSelected: false,
      themName: ''
    };
    this.goto_tutorial = this.goto_tutorial.bind(this);
  }

  onThemeOptionSelection = (themName, colorcode) => {
    this.setState({ showNextbtn: true });
    const landingTab = [];
    this.state.landingTabDraggedItems.map((item, index) => {
      const elementId = item.id;
      const elementtype = item.elementtype;
      if (elementtype === 'productSearchForm') {
        item.settings.cellBGColor = colorcode;
      }
      if (elementtype === 'productCollection1') {
        item.settings.HeaderBGColor = colorcode;
      }
      if (elementtype === 'productCollection2') {
        item.settings.HeaderBGColor = colorcode;
      }
      if (elementtype === 'singleProduct') {
        item.settings.pageCircleActiveColor = colorcode;
      }
      if (elementtype === 'collectionWithTitle') {
        item.settings.cellSubTitleColor = colorcode;
      }
      if (elementtype === 'collectionSet') {
        item.settings.footerBGColor = colorcode;
      }
      landingTab.push(item);
      this.setState({ landingTabDraggedItems: landingTab });
      this.setState({
        SearchCellBGColor: colorcode
      });
      this.setState({
        SingleActiveDotColor: colorcode
      });
      this.setState({
        Collection1HeaderBGColor: colorcode
      });
      this.setState({
        Collection2HeaderBGsecColor: colorcode
      });
      this.setState({
        CollectioncellSubTitleColor: colorcode
      });
      this.setState({
        BrowsefooterBGColor: colorcode
      });
      this.setState({ navbarBackgroundColorValue: colorcode });
    });
    this.setState({ themName });
  };

  goto_tutorial() {
    const LandingSettings = {
      NavBarTitleText: this.state.NavBarTitleText,
      menuCellBGColor: this.state.menuCellBGColor,
      menuIconColor: this.state.menuIconColor,
      menuTitleColor: this.state.menuTitleColor,
      menuTabActiveColor: this.state.menuTabActiveColor,
      menuTabInactiveColor: this.state.menuTabInactiveColor,
      menuSeparatorColor: this.state.menuSeparatorColor,
      ContactValue: this.state.ContactValue,
      HomeValue: this.state.HomeValue,
      SearchValue: this.state.SearchValue,
      AccountValue: this.state.AccountValue,
      CartValue: this.state.CartValue,
      DragStoreDisplay: this.state.DragStoreDisplay,
      SettingStoreHide: this.state.SettingStoreHide,
      LandingPreviewDisplay: this.state.LandingPreviewDisplay,
      LandingStyleDisplay: this.state.LandingStyleDisplay,
      displaybuildleft: this.state.displaybuildleft,
      SearchCellBGColor: this.state.SearchCellBGColor,
      SingleActiveDotColor: this.state.SingleActiveDotColor,
      Collection1HeaderBGColor: this.state.Collection1HeaderBGColor,
      Collection2HeaderBGsecColor: this.state.Collection2HeaderBGsecColor,
      CollectioncellSubTitleColor: this.state.CollectioncellSubTitleColor,
      BrowsefooterBGColor: this.state.BrowsefooterBGColor,
      navbarBackgroundColorValue: this.state.navbarBackgroundColorValue,
      showMyStoreTextBox: this.state.showMyStoreTextBox,
      NavTitle: this.state.NavTitle,
      themeSelected: true
    };
    let landingTabDraggedItems = this.state.landingTabDraggedItems;
    if (landingTabDraggedItems === undefined) {
      landingTabDraggedItems = [];
    }
    axios
      .post(`${API_ROOT}/api/v2/app-home-page`, {
        LandingSettings,
        landingTabDraggedItems
      })
      .then(res => {
        res.data && this.setState({ tutorial: false });
      });
  }

  async getData() {
    const res = await axios(`${API_ROOT}/api/v2/app-home-page`);
    return await res.data;
  }

  componentWillMount() {
    this.getData().then(data => {
      this.setState({
        landingTabDraggedItems: data.landingTabDraggedItems
      });
      this.setState({
        SearchCellBGColor: data.LandingSettings.SearchCellBGColor
      });
      this.setState({
        SingleActiveDotColor: data.LandingSettings.SingleActiveDotColor
      });
      this.setState({
        Collection1HeaderBGColor: data.LandingSettings.Collection1HeaderBGColor
      });
      this.setState({
        Collection2HeaderBGsecColor:
          data.LandingSettings.Collection2HeaderBGsecColor
      });
      this.setState({
        CollectioncellSubTitleColor:
          data.LandingSettings.CollectioncellSubTitleColor
      });
      this.setState({
        BrowsefooterBGColor: data.LandingSettings.BrowsefooterBGColor
      });
    });
  }

  render() {
    const base_url = window.location.origin;
    return (
      <div>
        <div
          className="select_theme_container"
          style={{ display: this.state.tutorial === true ? 'block' : 'none' }}
        >
          <div className="select_theme_title">
            <h2>Select a Color Scheme</h2>
            <p>Don't worry, this can be changed later.</p>
          </div>
          <ul style={{}} className="ThemeHideSection select_theme_sec">
            <li
              className={
                this.state.themName === 'default' ? 'active_theme' : ''
              }
              onClick={() => {
                this.onThemeOptionSelection('default', '#0ebed0');
              }}
            >
              <div
                className="themeCircle"
                style={{ backgroundColor: '#0ebed0' }}
              />
              <div className="SelectthemeTitle">DEFAULT</div>
            </li>
            <li
              className={this.state.themName === 'ice' ? 'active_theme' : ''}
              onClick={() => {
                this.onThemeOptionSelection('ice', '#7ee0db');
              }}
            >
              <div
                className="themeCircle"
                style={{ backgroundColor: '#7ee0db' }}
              />
              <div className="SelectthemeTitle">ICE</div>
            </li>
            <li
              className={
                this.state.themName === 'moonlight' ? 'active_theme' : ''
              }
              onClick={() => {
                this.onThemeOptionSelection('moonlight', '#CCCCCC');
              }}
            >
              <div
                className="themeCircle"
                style={{ backgroundColor: '#CCCCCC' }}
              />
              <div className="SelectthemeTitle">MOONLIGHT</div>
            </li>
            <li
              className={this.state.themName === 'bee' ? 'active_theme' : ''}
              onClick={() => {
                this.onThemeOptionSelection('bee', '#fff700');
              }}
            >
              <div
                className="themeCircle"
                style={{ backgroundColor: '#fff700' }}
              />
              <div className="SelectthemeTitle">BEE</div>
            </li>
            <li
              className={
                this.state.themName === 'lavender' ? 'active_theme' : ''
              }
              onClick={() => {
                this.onThemeOptionSelection('lavender', '#9B59B6');
              }}
            >
              <div
                className="themeCircle"
                style={{ backgroundColor: '#9B59B6' }}
              />
              <div className="SelectthemeTitle">LAVENDER</div>
            </li>
            <li
              className={this.state.themName === 'fire' ? 'active_theme' : ''}
              onClick={() => {
                this.onThemeOptionSelection('fire', '#f3234a');
              }}
            >
              <div
                className="themeCircle"
                style={{ backgroundColor: '#f3234a' }}
              />
              <div className="SelectthemeTitle">FIRE</div>
            </li>
            <li
              className={
                this.state.themName === 'emerald' ? 'active_theme' : ''
              }
              onClick={() => {
                this.onThemeOptionSelection('emerald', '#2ecc71');
              }}
            >
              <div
                className="themeCircle"
                style={{ backgroundColor: '#2ecc71' }}
              />
              <div className="SelectthemeTitle">EMERALD</div>
            </li>
            <li
              className={this.state.themName === 'night' ? 'active_theme' : ''}
              onClick={() => {
                this.onThemeOptionSelection('night', '#000000');
              }}
            >
              <div
                className="themeCircle"
                style={{ backgroundColor: '#000000' }}
              />
              <div className="SelectthemeTitle">NIGHT</div>
            </li>
            <li
              className={
                this.state.themName === 'flamingo' ? 'active_theme' : ''
              }
              onClick={() => {
                this.onThemeOptionSelection('flamingo', '#EF4836');
              }}
            >
              <div
                className="themeCircle"
                style={{ backgroundColor: '#EF4836' }}
              />
              <div className="SelectthemeTitle">FLAMINGO</div>
            </li>
          </ul>
          {this.state.showNextbtn === false && (
            <div className="select_theme_btn" style={{ cursor: 'unset' }}>
              <a
                href="javascript:void(0)"
                style={{
                  backgroundColor: '#ccc',
                  backgroundImage: 'unset',
                  border: 'unset',
                  color: '#000',
                  cursor: 'unset'
                }}
              >
                NEXT
              </a>
            </div>
          )}
          {this.state.showNextbtn === true && (
            <div className="select_theme_btn">
              <a onClick={this.goto_tutorial}>NEXT</a>
            </div>
          )}
          {this.state.showNextbtn === false && (
            <p style={{ color: 'red', marginTop: '20px' }}>
              You must select a color scheme.
            </p>
          )}
        </div>
        <div
          className="tutorial_container"
          style={{ display: this.state.tutorial === false ? 'block' : 'none' }}
        >
          <div className="select_theme_title">
            <h2>Quick Tutorial</h2>
            <p>Drag elements, and click the pencil icon to edit content.</p>
          </div>
          <div className="tutorial_vido">
            <video autoPlay style={{ height: '100%', width: '100%' }}>
              <source src="https://s3-us-west-1.amazonaws.com/appit-dashboard/OnboardingTutorial.m4v" />
            </video>
          </div>
          <div className="select_theme_btn">
            <a href={`${base_url}/mobileit/`}>DONE!</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectColorTheme;
