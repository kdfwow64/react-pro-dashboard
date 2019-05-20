// tslint:disable
// @ts-nocheck
import axios from 'axios';
import React, { Fragment } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Loader from 'react-loaders';
import Rodal from 'rodal';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Modal from 'react-responsive-modal';
import { CardHeader, Col, Row } from 'reactstrap';
import { API_ROOT } from '../../../../utilities/api-config';
// import { getDaysFromToday } from "../../../../../../../shared/util/date-utils";
import '../index.css';
import { themeColorFromName } from '../mobile-theme-utils';
import ThemeOptions from '../theme-options';
import BrowseCollection from './browse-collection';
import CollectionTitle from './collection-title';
import CustomBanner from './custom-banner';
import ModalBrowseProductCollections from './modal-browse-product-collections';
import ModalCollectionContent from './modal-collection-content';
import ModalSearchContentSec from './modal-collection-content-sec';
import ModalCollectionWithTitleContent from './modal-collection-with-title-content';
import ModalCustomBanner from './modal-cutom-banner';
import ModalSearchContent from './modal-search-content';
import ModalSingleProduct from './modal-single-product';
import ProductCollection1 from './product-collection-1';
import ProductCollection2 from './product-collection-2';
import ProductSearchForm from './search-form';
import SearchNavigationSettings from './search-navigation-settings';
import SearchNavigationStyles from './search-navigation-styles';
import SingleProduct from './single-product';

const Placeholder = './Placeholder.png';

const homeLandingAllSettings = {
  landingBuildNavigationBarInitialSettings: {
    navbarTitleColor: '#ffff00',
    navbartitleValue: '#ffffff',
    navbarBackgroundColorValue: '#0E7C95',
    navbgiconcolorValue: '#ffffff',
    BuildStyleColor: '#ff0000',
    StyleStyleColor: '#ff0000'
  },
  HomeElementSettings: [
    {
      id: 'productCollection10',
      content: 'item productCollection12',
      elementtype: 'productCollection1',
      settings: {
        IconColor: '#ffffff',
        HeaderText: 'COLLECTION',
        HeaderTitle: '#ffffff',
        HeaderBGColor: '#0E7C95',
        productBorderColor: '#000000',
        ActionColor: '#ffffff',
        ActionText: 'SHOP',
        ActionTitleColor: '#ffffff',
        CollectionCellBG: '#ffffff',
        CollectionProductTitle: '#000000',
        value: 10,
        DropDownGetIconheader: 'pe-7s-plugin',
        DropDownGetIconaction: 'lnr-arrow-right',
        selectedProductName: 111,
        prodCollectionname: '',
        SelectedCollectionId: '111'
      }
    },
    {
      id: 'productCollection20',
      content: 'item productCollection12',
      elementtype: 'productCollection2',
      settings: {
        IconColor: '#ffffff',
        HeaderText: 'COLLECTION',
        HeaderTitle: '#ffffff',
        HeaderBGColor: '#0E7C95',
        productBorderColor: '#000000',
        ActionColor: '#ffffff',
        ActionText: 'SHOP',
        ActionTitleColor: '#ffffff',
        CollectionCellBG: '#ffffff',
        CollectionProductTitle: '#000000',
        value: 5,
        DropDownGetIconheader: 'lnr-bookmark',
        DropDownGetIconaction: 'lnr-arrow-right',
        selectedProductName: 111,
        prodCollectionname: '',
        SelectedCollectionId: '111'
      }
    },
    {
      id: 'singleProduct0',
      content: 'item productCollection12',
      elementtype: 'singleProduct',
      settings: {
        titleColor: '#000000',
        priceColor: '#333333',
        productBorderColor: '#ffffff',
        cellBGColor: '#ffffff',
        pageCircleActiveColor: '#0E7C95',
        pageCircleInactiveColor: '#cccccc',
        customTitle: 'PRODUCT',
        isChecked: true,
        displayTitleColor: false,
        displayPriceColor: false,
        displayProductBorderColor: false,
        displayCellBGColor: false,
        displayPageCircleActiveColor: false,
        displayPageCircleInactiveColor: false,
        DisplayCollectionValue: 'none',
        ProductDisplay: 'none',
        CollectionDisplay: 'none',
        ShowCollectionProduct: 'none',
        postVal: '',
        isCheckedFirst: true,
        counterOfPicture: 2,
        selectedProductName: 111,
        prodcollection: 'default',
        prodCollectionname: ''
      }
    },
    {
      elementtype: 'customBanner',
      id: 'customBanner0',
      content: 'item productCollection12',
      settings: {
        bannerImageUrl: '',
        DisplayCollectionValue: 'none',
        DisplayProductValue: 'none',
        Bannerselectoption: 'none',
        BannerUrl: '',
        BannerPhone: '',
        BannerEmail: '',
        prodCollectionname: '',
        selectedProductName: '111',
        BannerOptionValue: ''
      }
    },
    {
      id: 'collectionWithTitle0',
      content: 'item productCollection12',
      elementtype: 'collectionWithTitle',

      settings: {
        cellStyle: 'Grid',
        cellTitleStyle: 'center',
        subTitleStyle: 'Please Set',
        leftcellContentsType: 'Vertical',
        cellTitle: 'Collection Title',
        cellSubTitle: 'Collection Description',
        cellTitleColor: '#000000',
        cellSubTitleColor: '#0E7C95',
        productTitleColor: '#000000',
        priceColor: '#333333',
        imageCellSubTitleColor: '#ffffff',
        cellBGColor: '#ffffff',
        productList: '',
        ProductDisplay: 'none',
        CollectionDisplay: 'none',
        ShowCollectionProduct: 'none',
        ProductTitleValue: 'PRODUCT',
        DisplayCollectionValue: 'none',
        CellVertical: 'block',
        Cellhorizontal: 'none',
        HideTitleSection: 'block',
        ShowHideSubTitle: 'block',
        isChecked: true,
        Subtitle: 'show'
      }
    },
    {
      id: 'collectionset0',
      content: 'item productCollection12',
      elementtype: 'collectionSet',
      settings: {
        iconColor: '#ffffff',
        titleColor: '#ffffff',
        footerBGColor: '#0E7C95',
        imageSpacingColor: '#ffffff',
        title: 'BROWSE COLLECTION',
        DropDownGetIconheader: 'lnr-chevron-right',
        prodCollectionname: '',
        selectedProductName: '111',
        ProductsCollections: {
          collections: [
            {
              id: '111',

              name: 'Default',
              image: Placeholder,
              products: [
                {
                  id: '234',
                  image: Placeholder
                },
                {
                  id: '2343',
                  image: Placeholder
                },
                {
                  id: '2324',
                  image: Placeholder
                },
                {
                  id: '23334',
                  image: Placeholder
                }
              ]
            },
            {
              id: '123',
              name: 'Under $50',
              image:
                'https://cdn.shopify.com/s/files/1/0015/4655/1384/collections/mens-SUNGLASSES-banner-right.jpg',
              products: [
                {
                  id: '234',
                  image:
                    'https://cdn.shopify.com/s/files/1/0015/4655/1384/products/product-image-408740517.jpg'
                },

                {
                  id: '2343',
                  image:
                    'https://cdn.shopify.com/s/files/1/0015/4655/1384/products/product-image-408740517.jpg'
                },
                {
                  id: '2324',
                  image:
                    'https://cdn.shopify.com/s/files/1/0015/4655/1384/products/product-image-408740517.jpg'
                },
                {
                  id: '23334',
                  image:
                    'https://cdn.shopify.com/s/files/1/0015/4655/1384/products/product-image-408740517.jpg'
                }
              ]
            },
            {
              id: '1233',
              name: 'All',
              image:
                'https://cdn.shopify.com/s/files/1/0015/4655/1384/collections/womens-SUNGLASSES-banner-left.jpg',
              products: [
                {
                  id: '2345',
                  image:
                    'https://cdn.shopify.com/s/files/1/0015/4655/1384/products/product-image-694525306.jpg'
                },

                {
                  id: '23435',
                  image:
                    'https://cdn.shopify.com/s/files/1/0015/4655/1384/products/product-image-694525306.jpg'
                },
                {
                  id: '23245',
                  image:
                    'https://cdn.shopify.com/s/files/1/0015/4655/1384/products/product-image-694525306.jpg'
                },
                {
                  id: '233345',
                  image:
                    'https://cdn.shopify.com/s/files/1/0015/4655/1384/products/product-image-694525306.jpg'
                }
              ]
            }
          ],

          SelectedCollectionId: '111'
        }
      }
    }
  ]
};
const draggableElements = [
  {
    id: 2,
    elementtype: 'productCollection1'
  },
  {
    id: 3,
    elementtype: 'productCollection2'
  },
  {
    id: 4,
    elementtype: 'singleProduct'
  },
  {
    id: 5,
    elementtype: 'customBanner'
  },
  {
    id: 6,
    elementtype: 'collectionWithTitle'
  },
  {
    id: 7,
    elementtype: 'collectionSet'
  }
];

const themeSettings = {
  productSearchForm: {
    default: {
      cellBGColor: '#0ebed0'
    },
    ice: {
      cellBGColor: '#7ee0db'
    },
    moonlight: {
      cellBGColor: '#CCCCCC'
    },
    bee: {
      cellBGColor: '#fff700'
    },
    lavender: {
      cellBGColor: '#9B59B6'
    },
    fire: {
      cellBGColor: '#f3234a'
    },
    emerald: {
      cellBGColor: '#2ecc71'
    },
    night: {
      cellBGColor: '#000000'
    },
    flamingo: {
      cellBGColor: '#EF4836'
    }
  },
  productCollection1: {
    default: {
      HeaderBGColor: '#0ebed0'
    },
    ice: {
      HeaderBGColor: '#7ee0db'
    },
    moonlight: {
      HeaderBGColor: '#CCCCCC'
    },
    bee: {
      HeaderBGColor: '#fff700'
    },
    lavender: {
      HeaderBGColor: '#9B59B6'
    },
    fire: {
      HeaderBGColor: '#f3234a'
    },
    emerald: {
      HeaderBGColor: '#2ecc71'
    },
    night: {
      HeaderBGColor: '#000000'
    },
    flamingo: {
      HeaderBGColor: '#EF4836'
    }
  },
  productCollection2: {
    default: {
      HeaderBGColor: '#0ebed0'
    },
    ice: {
      HeaderBGColor: '#7ee0db'
    },
    moonlight: {
      HeaderBGColor: '#CCCCCC'
    },
    bee: {
      HeaderBGColor: '#fff700'
    },
    lavender: {
      HeaderBGColor: '#9B59B6'
    },
    fire: {
      HeaderBGColor: '#f3234a'
    },
    emerald: {
      HeaderBGColor: '#2ecc71'
    },
    night: {
      HeaderBGColor: '#000000'
    },
    flamingo: {
      HeaderBGColor: '#EF4836'
    }
  },
  singleProduct: {
    default: {
      pageCircleActiveColor: '#0ebed0'
    },
    ice: {
      pageCircleActiveColor: '#7ee0db'
    },
    moonlight: {
      pageCircleActiveColor: '#CCCCCC'
    },
    bee: {
      pageCircleActiveColor: '#fff700'
    },
    lavender: {
      pageCircleActiveColor: '#9B59B6'
    },
    fire: {
      pageCircleActiveColor: '#f3234a'
    },
    emerald: {
      pageCircleActiveColor: '#2ecc71'
    },
    night: {
      pageCircleActiveColor: '#000000'
    },
    flamingo: {
      pageCircleActiveColor: '#EF4836'
    }
  },
  collectionWithTitle: {
    default: {
      cellSubTitleColor: '#0ebed0'
    },
    ice: {
      cellSubTitleColor: '#7ee0db'
    },
    moonlight: {
      cellSubTitleColor: '#CCCCCC'
    },
    bee: {
      cellSubTitleColor: '#fff700'
    },
    lavender: {
      cellSubTitleColor: '#9B59B6'
    },
    fire: {
      cellSubTitleColor: '#f3234a'
    },
    emerald: {
      cellSubTitleColor: '#2ecc71'
    },
    night: {
      cellSubTitleColor: '#000000'
    },
    flamingo: {
      cellSubTitleColor: '#EF4836'
    }
  },
  collectionSet: {
    default: {
      footerBGColor: '#0ebed0'
    },
    ice: {
      footerBGColor: '#7ee0db'
    },
    moonlight: {
      footerBGColor: '#CCCCCC'
    },
    bee: {
      footerBGColor: '#fff700'
    },
    lavender: {
      footerBGColor: '#9B59B6'
    },
    fire: {
      footerBGColor: '#f3234a'
    },
    emerald: {
      footerBGColor: '#2ecc71'
    },
    night: {
      footerBGColor: '#000000'
    },
    flamingo: {
      footerBGColor: '#EF4836'
    }
  }
};

function getElementDefaultObject(e) {
  if (e.elementtype === 'productSearchForm') {
    return {
      borderColor: '#d6d6d6',
      searchBGColor: '#fafafa',
      iconColor: '#d6d6d6',
      cellBGColor: '#0E7C95',
      searchPlaceholder: 'SEARCH PRODUCTS',
      titleColor: '#d6d6d6',
      elementtype: 'productSearchForm'
    };
  }
  if (e.elementtype === 'productCollection1') {
    return {
      IconColor: '#ffffff',
      HeaderText: 'COLLECTION',
      HeaderTitle: '#ffffff',
      HeaderBGColor: '#0E7C95',
      productBorderColor: '#000000',
      ActionColor: '#ffffff',
      ActionText: 'SHOP',
      ActionTitleColor: '#ffffff',
      CollectionCellBG: '#ffffff',
      CollectionProductTitle: '#000000',
      value: 10,
      DropDownGetIconheader: 'pe-7s-plugin',
      DropDownGetIconaction: 'lnr-arrow-right',
      elementtype: 'productCollection1'
    };
  }
  if (e.elementtype === 'productCollection2') {
    return {
      IconColor: '#ffffff',
      HeaderText: 'COLLECTION',
      HeaderTitle: '#ffffff',
      HeaderBGColor: '#0E7C95',
      productBorderColor: '#000000',
      ActionColor: '#ffffff',
      ActionText: 'SHOP',
      ActionTitleColor: '#ffffff',
      CollectionCellBG: '#ffffff',
      CollectionProductTitle: '#000000',
      value: 5,
      DropDownGetIconheader: 'lnr-bookmark',
      DropDownGetIconaction: 'lnr-arrow-right',
      elementtype: 'productCollection2'
    };
  }
  if (e.elementtype === 'singleProduct') {
    return {
      titleColor: '#000000',
      priceColor: '#333333',
      productBorderColor: '#ffffff',
      cellBGColor: '#ffffff',
      pageCircleActiveColor: '#0E7C95',
      pageCircleInactiveColor: '#cccccc',
      customTitle: 'PRODUCT',
      isChecked: true,
      elementtype: 'singleProduct'
    };
  }
  if (e.elementtype === 'customBanner') {
    return {
      bannerImageUrl: '',
      DisplayCollectionValue: 'none',
      DisplayProductValue: 'none',
      Bannerselectoption: 'none',
      BannerUrl: '',
      BannerPhone: '',
      BannerEmail: '',
      elementtype: 'singleProduct'
    };
  }
  if (e.elementtype === 'collectionWithTitle') {
    return {
      cellStyle: 'Grid',
      cellTitleStyle: 'center',
      subTitleStyle: 'Please Set',
      leftcellContentsType: 'Vertical',
      cellTitle: 'Collection Title',
      cellSubTitle: 'Collection Description',
      cellTitleColor: '#000000',
      cellSubTitleColor: '#0E7C95',
      productTitleColor: '#000000',
      priceColor: '#333333',
      imageCellSubTitleColor: '#ffffff',
      cellBGColor: '#ffffff',
      productList: '',
      ProductDisplay: 'none',
      CollectionDisplay: 'none',
      ShowCollectionProduct: 'none',
      ProductTitleValue:
        'Female Fashion Frame Cat Eyes Shades Sunglasses Integrated UV Glasses',
      DisplayCollectionValue: 'none',
      CellVertical: 'block',
      Cellhorizontal: 'none',
      HideTitleSection: 'block',
      ShowHideSubTitle: 'block',
      isChecked: true,
      Subtitle: 'show',
      elementtype: 'collectionWithTitle'
    };
  }
  if (e.elementtype === 'collectionSet') {
    return {
      iconColor: '#ffffff',
      titleColor: '#ffffff',
      footerBGColor: '#0E7C95',
      imageSpacingColor: '#ffffff',
      title: 'BROWSE COLLECTION',
      DropDownGetIconheader: 'lnr-chevron-right',
      elementtype: 'collectionWithTitle'
    };
  }
}

const getDraggableHTMLItems = () => {
  const DraggableHTMLItems = draggableElements.map(ed => {
    return {
      id: `${ed.elementtype + ed.id}`,
      elementtype: ed.elementtype,
      content: `item ${ed.elementtype + ed.id}`,
      settings: getElementDefaultObject(ed)
    };
  });
  return DraggableHTMLItems;
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

let counter = 100;
const getCounter = () => {
  return counter++;
};
const grid = 8;
const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  margin: `0 0 ${grid}px 0`,
  ...draggableStyle
});
const getListStyle = isDraggingOver => ({
  padding: grid,
  margin: '0 auto'
});
class HomePageContent extends React.Component {
  homeTopTabsShowEditAlert = null;

  currentSelectedSection = null;

  allModalReferencesById = [];

  allReferencesById = {};

  HideSettingsValue = null;

  navbarBackgroundColorCodeStyle = null;
  // productSearchFormRef = null;

  constructor(props) {
    super(props);
    this.CollectionMainSectionEditOption = this.CollectionMainSectionEditOption.bind(
      this
    );
    this.LandingStyleDisplay = this.LandingStyleDisplay.bind(this);
    this.HideSettingSection = this.HideSettingSection.bind(this);
    this.onModalCloseCallback = this.onModalCloseCallback.bind(this);
    this.showEditSettingPopup = this.showEditSettingPopup.bind(this);
    this.hideEditSettingPopup = this.hideEditSettingPopup.bind(this);
    this.onProductSearchSettingApply = this.onProductSearchSettingApply.bind(
      this
    );
    this.onProductModalCloseClick = this.onProductModalCloseClick.bind(this);
    this.onSingleProductModalCloseClick = this.onSingleProductModalCloseClick.bind(
      this
    );
    this.onSingleProductSettingApply = this.onSingleProductSettingApply.bind(
      this
    );
    this.onCollection1ModalCloseClick = this.onCollection1ModalCloseClick.bind(
      this
    );
    this.onCollection1SettingApply = this.onCollection1SettingApply.bind(this);
    this.onCollection2ModalCloseClick = this.onCollection2ModalCloseClick.bind(
      this
    );
    this.onCollection2SettingApply = this.onCollection2SettingApply.bind(this);
    this.onCollectionWithTitleModalCloseClick = this.onCollectionWithTitleModalCloseClick.bind(
      this
    );
    this.onCollectionWithTitleSettingApply = this.onCollectionWithTitleSettingApply.bind(
      this
    );
    this.onCustomBannerSettingApply = this.onCustomBannerSettingApply.bind(
      this
    );
    this.onCustomBannerCloseClick = this.onCustomBannerCloseClick.bind(this);
    this.onBrowseProductCollectionCloseClick = this.onBrowseProductCollectionCloseClick.bind(
      this
    );
    this.onBrowseProductCollectionSettingApply = this.onBrowseProductCollectionSettingApply.bind(
      this
    );
    this.onSaveEditedItems = this.onSaveEditedItems.bind(this);
    this.handleNavStyleMenuCellColorChangeComplete = this.handleNavStyleMenuCellColorChangeComplete.bind(
      this
    );
    this.handleNavStyleMenuIconColorChangeComplete = this.handleNavStyleMenuIconColorChangeComplete.bind(
      this
    );
    this.handleNavStyleMenuTitleColorChangeComplete = this.handleNavStyleMenuTitleColorChangeComplete.bind(
      this
    );
    this.handleNavStyleMenuTabActveColorChangeComplete = this.handleNavStyleMenuTabActveColorChangeComplete.bind(
      this
    );
    this.handleNavStyleMenuTabInactiveColorChangeComplete = this.handleNavStyleMenuTabInactiveColorChangeComplete.bind(
      this
    );
    this.handleNavStyleMenuSeparaterColorChangeComplete = this.handleNavStyleMenuSeparaterColorChangeComplete.bind(
      this
    );
    this.changeMyStoreName = this.changeMyStoreName.bind(this);
    this.changeMyStoreLabel = this.changeMyStoreLabel.bind(this);
    this.showStoreNameLable = this.showStoreNameLable.bind(this);
    this.hideTextshowLabel = this.hideTextshowLabel.bind(this);
    this.productSearchFormRef = React.createRef();
    this.homeTopTabsShowEditAlert = React.createRef();
    this.currentSelectedSection = React.createRef();
    this.allReferencesById = {};
    this.allModalReferencesById = [];
    this.state = {
      landingTabAllDraggableItems: getDraggableHTMLItems(),
      landingTabDraggedItems: homeLandingAllSettings.HomeElementSettings,
      ShowHideGridListView: 'block',
      navbartitleValue:
        homeLandingAllSettings.landingBuildNavigationBarInitialSettings
          .navbartitleValue,
      navbarBackgroundColorValue:
        homeLandingAllSettings.landingBuildNavigationBarInitialSettings
          .navbarBackgroundColorValue,
      navbgiconcolorValue:
        homeLandingAllSettings.landingBuildNavigationBarInitialSettings
          .navbgiconcolorValue,
      BuildStyleColor:
        homeLandingAllSettings.landingBuildNavigationBarInitialSettings
          .BuildStyleColor,
      StyleStyleColor:
        homeLandingAllSettings.landingBuildNavigationBarInitialSettings
          .StyleStyleColor,
      hoverDeleteStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: '#000000'
      },
      openModal: false,
      allModalIds: {},
      isEdited: false,
      // allDraggedElementsValues: this.getDraggedElementsValues(),
      saved: false,
      isLoaded: false,
      clicked: false,
      bannerImageUrl: '',
      trialDays: null,
      NavTitle: 'Text',
      showMyStoreTextBox: 'none',
      landingProduct: true
    };
  }

  onThemeOptionSelection = themName => {
    const themeColor = themeColorFromName(themName);
    const landingTab = [];
    this.state.landingTabDraggedItems &&
      this.state.landingTabDraggedItems.map((item, index) => {
        const elementId = item.id;
        const elementtype = item.elementtype;
        if (elementtype === 'productSearchForm') {
          const defaultSettings = themeSettings[elementtype][themName];
          item.settings.cellBGColor = defaultSettings.cellBGColor;
          this.allReferencesById[elementId].current.setAllSettingsOnApply(
            defaultSettings
          );
        }
        if (elementtype === 'productCollection1') {
          const defaultSettings = themeSettings[elementtype][themName];
          item.settings.HeaderBGColor = defaultSettings.HeaderBGColor;
          this.allReferencesById[elementId].current.setAllSettingsOnApply(
            defaultSettings
          );
        }
        if (elementtype === 'productCollection2') {
          const defaultSettings = themeSettings[elementtype][themName];
          item.settings.HeaderBGColor = defaultSettings.HeaderBGColor;
          this.allReferencesById[elementId].current.setAllSettingsOnApply(
            defaultSettings
          );
        }
        if (elementtype === 'singleProduct') {
          const defaultSettings = themeSettings[elementtype][themName];
          item.settings.pageCircleActiveColor =
            defaultSettings.pageCircleActiveColor;
          this.allReferencesById[elementId].current.setAllSettingsOnApply(
            defaultSettings
          );
        }
        if (elementtype === 'collectionWithTitle') {
          const defaultSettings = themeSettings[elementtype][themName];
          item.settings.cellSubTitleColor = defaultSettings.cellSubTitleColor;
          this.allReferencesById[elementId].current.setAllSettingsOnApply(
            defaultSettings
          );
        }
        if (elementtype === 'collectionSet') {
          const defaultSettings = themeSettings[elementtype][themName];
          item.settings.footerBGColor = defaultSettings.footerBGColor;
          this.allReferencesById[elementId].current.setAllSettingsOnApply(
            defaultSettings
          );
        }
        landingTab.push(item);
      });
    this.setState({ landingTabDraggedItems: landingTab });
    const landingTabDraggable = [];
    this.state.landingTabAllDraggableItems.map((item, index) => {
      if (item.elementtype === 'productSearchForm') {
        const elementId = item.id;
        const elementtype = item.elementtype;
        const defaultSettings = themeSettings[elementtype][themName];
        item.settings.cellBGColor = defaultSettings.cellBGColor;
        this.setState({ SearchCellBGColor: defaultSettings.cellBGColor });
        this.allReferencesById[
          `draggable${elementId}`
        ].current.setAllSettingsOnApply(defaultSettings);
      }
      if (item.elementtype === 'productCollection1') {
        const elementId = item.id;
        const elementtype = item.elementtype;
        const defaultSettings = themeSettings[elementtype][themName];
        item.settings.HeaderBGColor = defaultSettings.HeaderBGColor;
        this.setState({
          Collection1HeaderBGColor: defaultSettings.HeaderBGColor
        });
        this.allReferencesById[
          `draggable${elementId}`
        ].current.setAllSettingsOnApply(defaultSettings);
      }
      if (item.elementtype === 'productCollection2') {
        const elementId = item.id;
        const elementtype = item.elementtype;
        const defaultSettings = themeSettings[elementtype][themName];
        item.settings.HeaderBGColor = defaultSettings.HeaderBGColor;
        this.setState({
          Collection2HeaderBGsecColor: defaultSettings.HeaderBGColor
        });
        this.allReferencesById[
          `draggable${elementId}`
        ].current.setAllSettingsOnApply(defaultSettings);
      }
      if (item.elementtype === 'singleProduct') {
        const elementId = item.id;
        const elementtype = item.elementtype;
        const defaultSettings = themeSettings[elementtype][themName];
        item.settings.pageCircleActiveColor =
          defaultSettings.pageCircleActiveColor;
        this.setState({
          SingleActiveDotColor: defaultSettings.pageCircleActiveColor
        });
        this.allReferencesById[
          `draggable${elementId}`
        ].current.setAllSettingsOnApply(defaultSettings);
      }
      if (item.elementtype === 'collectionWithTitle') {
        const elementId = item.id;
        const elementtype = item.elementtype;
        const defaultSettings = themeSettings[elementtype][themName];
        item.settings.cellSubTitleColor = defaultSettings.cellSubTitleColor;
        this.setState({
          CollectioncellSubTitleColor: defaultSettings.cellSubTitleColor
        });
        this.allReferencesById[
          `draggable${elementId}`
        ].current.setAllSettingsOnApply(defaultSettings);
      }
      if (item.elementtype === 'collectionSet') {
        const elementId = item.id;
        const elementtype = item.elementtype;
        const defaultSettings = themeSettings[elementtype][themName];
        item.settings.footerBGColor = defaultSettings.footerBGColor;
        this.setState({ BrowsefooterBGColor: defaultSettings.footerBGColor });
        this.allReferencesById[
          `draggable${elementId}`
        ].current.setAllSettingsOnApply(defaultSettings);
      }
      landingTabDraggable.push(item);
      this.setState({ landingTabAllDraggableItems: landingTabDraggable });
    });

    this.setState({ navbarBackgroundColorValue: themeColor });

    this.homeTopTabsShowEditAlert.current.showSaveButton();
    this.homeTopTabsShowEditAlert.current.setState({ selectedTheme: themName });
    this.homeTopTabsShowEditAlert.current.setState({ editedTheme: true });
  };

  changeMyStoreLabel = () => {
    this.setState({ showMyStoreTextBox: 'block' });
    this.setState({ showMyLabel: 'none' });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  changeMyStoreName = e => {
    this.setState({ NavBarTitleText: e.target.value });
  };

  hideTextshowLabel = e => {
    if (e.key === 'Enter') {
      this.setState({ showMyStoreTextBox: 'none' });
      this.setState({ showMyLabel: 'block' });
    }
  };

  showStoreNameLable = () => {
    this.setState({ showMyStoreTextBox: 'none' });
    this.setState({ showMyLabel: 'block' });
  };

  DisplaySaveBtn = () => {
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  handleNavStyleMenuIconColorChangeComplete = color => {
    this.setState({ menuIconColor: color.hex });
  };

  handleNavStyleMenuTitleColorChangeComplete = color => {
    this.setState({ menuTitleColor: color.hex });
  };

  handleNavStyleMenuTabActveColorChangeComplete = color => {
    this.setState({ menuTabActiveColor: color.hex });
  };

  handleNavStyleMenuTabInactiveColorChangeComplete = color => {
    this.setState({ menuTabInactiveColor: color.hex });
  };

  handleNavStyleMenuSeparaterColorChangeComplete = color => {
    this.setState({ menuSeparatorColor: color.hex });
  };

  onSearchNavigationSettingsApply = settings => {};

  onCustomBannerCloseClick = stateVaribleName => {
    const newAllModalIds = { ...this.state.allModalIds };
    newAllModalIds[stateVaribleName] = false;
    this.setState({ allModalIds: newAllModalIds });
  };

  onCustomBannerSettingApply = allSetting => {
    this.allModalReferencesById[allSetting.itemId].current.applyAppliedSetting(
      allSetting
    );
    this.allReferencesById[allSetting.itemId].current.setAllSettingsOnApply(
      allSetting
    );
    const landingTabDraggedItems = [];
    this.state.landingTabDraggedItems.map(item => {
      if (item.id === allSetting.itemId) {
        item.settings = allSetting;
      }
      landingTabDraggedItems.push(item);
    });
    this.setState({ landingTabDraggedItems });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onBrowseProductCollectionCloseClick = stateVaribleName => {
    const newAllModalIds = { ...this.state.allModalIds };
    newAllModalIds[stateVaribleName] = false;
    this.setState({ allModalIds: newAllModalIds });
  };

  onBrowseProductCollectionSettingApply = allSetting => {
    if (allSetting.collectionType && allSetting.selectedProductName) {
      this.setState({ isLoaded: false });
      axios
        .get(
          `${API_ROOT}/api/v2/collection/products/${
            allSetting.collectionType
          }/${allSetting.selectedProductName}`
        )
        .then(res1 => {
          this.setState({ isLoaded: true });
          this.homeTopTabsShowEditAlert.current.showSaveButton();
        });
    }
    this.allModalReferencesById[allSetting.itemId].current.applyAppliedSetting(
      allSetting
    );
    this.allReferencesById[allSetting.itemId].current.setAllSettingsOnApply(
      allSetting
    );
    const landingTabDraggedItems = [];
    this.state.landingTabDraggedItems.map(item => {
      if (item.id === allSetting.itemId) {
        item.settings = allSetting;
      }
      landingTabDraggedItems.push(item);
    });
    this.setState({ landingTabDraggedItems });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onCollectionWithTitleModalCloseClick = stateVaribleName => {
    const newAllModalIds = { ...this.state.allModalIds };
    newAllModalIds[stateVaribleName] = false;
    this.setState({ allModalIds: newAllModalIds });
  };

  onCollectionWithTitleSettingApply = allSetting => {
    this.allModalReferencesById[allSetting.itemId].current.applyAppliedSetting(
      allSetting
    );
    this.allReferencesById[allSetting.itemId].current.setAllSettingsOnApply(
      allSetting
    );
    const landingTabDraggedItems = [];
    this.state.landingTabDraggedItems.map(item => {
      if (item.id === allSetting.itemId) {
        item.settings = allSetting;
      }
      landingTabDraggedItems.push(item);
    });
    this.setState({ landingTabDraggedItems });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onSingleProductModalCloseClick = stateVaribleName => {
    const newAllModalIds = { ...this.state.allModalIds };
    newAllModalIds[stateVaribleName] = false;
    this.setState({ allModalIds: newAllModalIds });
  };

  onSingleProductSettingApply = allSetting => {
    if (allSetting.prodCollectionname) {
      this.setState({ isLoaded: false });
      axios.get(`${API_ROOT}/api/v2/collection-listings`).then(res => {
        this.setState({ isLoaded: true });
      });
      axios.get(`${API_ROOT}/api/products`).then(res => {
        this.setState({ isLoaded: true });
        this.homeTopTabsShowEditAlert.current.showSaveButton();
      });
    }

    this.allModalReferencesById[allSetting.itemId].current.applyAppliedSetting(
      allSetting
    );
    this.allReferencesById[allSetting.itemId].current.setAllSettingsOnApply(
      allSetting
    );
    const landingTabDraggedItems = [];
    this.state.landingTabDraggedItems.map(item => {
      if (item.id === allSetting.itemId) {
        item.settings = allSetting;
      }
      landingTabDraggedItems.push(item);
    });
    this.setState({ landingTabDraggedItems });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onCollection1ModalCloseClick = stateVaribleName => {
    const newAllModalIds = { ...this.state.allModalIds };
    newAllModalIds[stateVaribleName] = false;
    this.setState({ allModalIds: newAllModalIds });
  };

  onCollection1SettingApply = allSetting => {
    if (allSetting.collectionType && allSetting.selectedProductId) {
      this.setState({ isLoaded: false });
      axios
        .get(
          `${API_ROOT}/api/v2/collection/products/${
            allSetting.collectionType
          }/${allSetting.selectedProductId}`
        )
        .then(res1 => {
          this.setState({ isLoaded: true });
          this.homeTopTabsShowEditAlert.current.showSaveButton();
        });
    }

    this.allModalReferencesById[allSetting.itemId].current.applyAppliedSetting(
      allSetting
    );
    this.allReferencesById[allSetting.itemId].current.setAllSettingsOnApply(
      allSetting
    );

    const landingTabDraggedItems = [];
    this.state.landingTabDraggedItems.map(item => {
      if (item.id === allSetting.itemId) {
        item.settings = allSetting;
      }
      landingTabDraggedItems.push(item);
    });
    this.setState({ landingTabDraggedItems });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onCollection2ModalCloseClick = stateVaribleName => {
    const newAllModalIds = { ...this.state.allModalIds };
    newAllModalIds[stateVaribleName] = false;
    this.setState({ allModalIds: newAllModalIds });
  };

  onCollection2SettingApply = allSetting => {
    if (allSetting.collectionType && allSetting.selectedProductId) {
      this.setState({ isLoaded: false });
      axios
        .get(
          `${API_ROOT}/api/v2/collection/products/${
            allSetting.collectionType
          }/${allSetting.selectedProductId}`
        )
        .then(res1 => {
          this.setState({ isLoaded: true });
          this.homeTopTabsShowEditAlert.current.showSaveButton();
        });
    }

    this.allModalReferencesById[allSetting.itemId].current.applyAppliedSetting(
      allSetting
    );
    this.allReferencesById[allSetting.itemId].current.setAllSettingsOnApply(
      allSetting
    );

    const landingTabDraggedItems = [];
    this.state.landingTabDraggedItems.map(item => {
      if (item.id === allSetting.itemId) {
        item.settings = allSetting;
      }
      landingTabDraggedItems.push(item);
    });
    this.setState({ landingTabDraggedItems });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onProductModalCloseClick = stateVaribleName => {
    const newAllModalIds = { ...this.state.allModalIds };
    newAllModalIds[stateVaribleName] = false;
    this.setState({ allModalIds: newAllModalIds });
  };

  onProductSearchSettingApply = allSetting => {
    this.allModalReferencesById[allSetting.itemId].current.applyAppliedSetting(
      allSetting
    );
    this.allReferencesById[allSetting.itemId].current.setAllSettingsOnApply(
      allSetting
    );
    const landingTabDraggedItems = [];
    this.state.landingTabDraggedItems.map(item => {
      if (item.id === allSetting.itemId) {
        item.settings = allSetting;
      }
      landingTabDraggedItems.push(item);
    });
    this.setState({ landingTabDraggedItems });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);

    const [removed] = sourceClone.splice(droppableSource.index, 1);
    removed.id = removed.elementtype + getCounter();
    destClone.splice(droppableDestination.index, 0, removed);
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
    return result;
  };

  hideEditSettingPopup = stateVaribleName => {
    const newAllModalIds = { ...this.state.allModalIds };
    newAllModalIds[stateVaribleName] = false;
    this.setState({ allModalIds: newAllModalIds });
  };

  showEditSettingPopup = (componentName, stateVaribleName, itemId) => {
    const newAllModalIds = { ...this.state.allModalIds };
    newAllModalIds[stateVaribleName] = true;
    this.setState({ allModalIds: newAllModalIds });
  };

  onModalCloseCallback = () => {
    this.setState({ openModal: false });
  };

  getElementContent = (e, callType = 'draggable') => {
    let referenceId = e.id;
    if (callType === 'draggable') {
      referenceId = `draggable${e.id}`;
    }
    this.allReferencesById[referenceId] = React.createRef();
    this.allModalReferencesById[referenceId] = React.createRef();

    if (e.elementtype === 'productSearchForm') {
      const content = (
        <div
          id="searchBarContainer"
          style={{ position: 'relative' }}
          className="hoverContainerForEditIcon"
        >
          <div id="searchTextContainer" style={{ position: 'relative' }}>
            <ProductSearchForm
              ref={this.allReferencesById[referenceId]}
              settings={e.settings}
              SearchCellBGColor={this.state.SearchCellBGColor}
              callType={callType}
            />
            <div className="editIconContainer">
              <div className="hoverEffectContainer">
                <span style={{ color: '#ffffff' }} className="onDragRemove">
                  Drag Left to Remove
                </span>
              </div>
              <div
                className="editIcon"
                onClick={() =>
                  this.showEditSettingPopup(
                    'productSearchForm',
                    `show${e.id}`,
                    e.id
                  )
                }
              >
                <i className="lnr-pencil" />
              </div>
            </div>
          </div>
          <div className="hoverEffectContainer">
            <span style={{ color: '#ffffff' }} className="onDragAdd">
              Drag Right to Add
            </span>
          </div>
        </div>
      );
      return content;
    }
    if (e.elementtype === 'productCollection1') {
      const content = (
        <div
          id="searchBarContainer"
          style={{ position: 'relative' }}
          className="hoverContainerForEditIcon"
        >
          <div id="searchTextContainer">
            <ProductCollection1
              ref={this.allReferencesById[referenceId]}
              settings={e.settings}
              Collection1HeaderBGColor={this.state.Collection1HeaderBGColor}
              callType={callType}
            />
            <div className="editIconContainer">
              <div className="hoverEffectContainer">
                <span style={{ color: '#ffffff' }} className="onDragRemove">
                  Drag Left to Remove
                </span>
              </div>
              <div
                className="editIcon"
                onClick={() =>
                  this.showEditSettingPopup(
                    'productCollection1',
                    `show${e.id}`,
                    e.id
                  )
                }
              >
                <i className="lnr-pencil" />
              </div>
            </div>
          </div>
          <div className="hoverEffectContainer">
            <span style={{ color: '#ffffff' }} className="onDragAdd">
              Drag Right to Add
            </span>
          </div>
        </div>
      );
      return content;
    }
    if (e.elementtype === 'productCollection2') {
      const content = (
        <div
          id="searchBarContainer"
          style={{ position: 'relative' }}
          className="hoverContainerForEditIcon"
        >
          <div id="searchTextContainer">
            <ProductCollection2
              ref={this.allReferencesById[referenceId]}
              settings={e.settings}
              Collection2HeaderBGsecColor={
                this.state.Collection2HeaderBGsecColor
              }
              callType={callType}
            />
            <div className="editIconContainer">
              <div className="hoverEffectContainer">
                <span style={{ color: '#ffffff' }} className="onDragRemove">
                  Drag Left to Remove
                </span>
              </div>
              <div
                className="editIcon"
                onClick={() =>
                  this.showEditSettingPopup(
                    'productCollection2',
                    `show${e.id}`,
                    e.id
                  )
                }
              >
                <i className="lnr-pencil" />
              </div>
            </div>
          </div>
          <div className="hoverEffectContainer">
            <span style={{ color: '#ffffff' }} className="onDragAdd">
              Drag Right to Add
            </span>
          </div>
        </div>
      );
      return content;
    }
    if (e.elementtype === 'singleProduct') {
      const content = (
        <div
          id="searchBarContainer"
          style={{ position: 'relative' }}
          className="hoverContainerForEditIcon"
        >
          <div id="searchTextContainer">
            <SingleProduct
              ref={this.allReferencesById[referenceId]}
              settings={e.settings}
              SingleActiveDotColor={this.state.SingleActiveDotColor}
              callType={callType}
            />
            <div className="editIconContainer">
              <div className="hoverEffectContainer">
                <span style={{ color: '#ffffff' }} className="onDragRemove">
                  Drag Left to Remove
                </span>
              </div>
              <div
                className="editIcon"
                onClick={() =>
                  this.showEditSettingPopup(
                    'singleProduct',
                    `show${e.id}`,
                    e.id
                  )
                }
              >
                <i className="lnr-pencil" />
              </div>
            </div>
          </div>
          <div className="hoverEffectContainer">
            <span style={{ color: '#ffffff' }} className="onDragAdd">
              Drag Right to Add
            </span>
          </div>
        </div>
      );
      return content;
    }
    if (e.elementtype === 'customBanner') {
      const content = (
        <div
          id="searchBarContainer"
          style={{ position: 'relative' }}
          className="hoverContainerForEditIcon"
        >
          <div id="searchTextContainer">
            <CustomBanner
              ref={this.allReferencesById[referenceId]}
              settings={e.settings}
            />
            <div className="editIconContainer">
              <div className="hoverEffectContainer">
                <span style={{ color: '#ffffff' }} className="onDragRemove">
                  Drag Left to Remove
                </span>
              </div>
              <div
                className="editIcon"
                onClick={() =>
                  this.showEditSettingPopup('customBanner', `show${e.id}`, e.id)
                }
              >
                <i className="lnr-pencil" />
              </div>
            </div>
          </div>
          <div className="hoverEffectContainer">
            <span style={{ color: '#ffffff' }} className="onDragAdd">
              Drag Right to Add
            </span>
          </div>
        </div>
      );
      return content;
    }
    if (e.elementtype === 'collectionWithTitle') {
      const content = (
        <div
          id="searchBarContainer"
          style={{ position: 'relative' }}
          className="hoverContainerForEditIcon"
        >
          <div id="searchTextContainer">
            <CollectionTitle
              ref={this.allReferencesById[referenceId]}
              settings={e.settings}
              CollectioncellSubTitleColor={
                this.state.CollectioncellSubTitleColor
              }
              callType={callType}
            />
            <div className="editIconContainer">
              <div className="hoverEffectContainer">
                <span style={{ color: '#ffffff' }} className="onDragRemove">
                  Drag Left to Remove
                </span>
              </div>
              <div
                className="editIcon"
                onClick={() =>
                  this.showEditSettingPopup(
                    'collectionWithTitle',
                    `show${e.id}`,
                    e.id
                  )
                }
              >
                <i className="lnr-pencil" />
              </div>
            </div>
          </div>
          <div className="hoverEffectContainer">
            <span style={{ color: '#ffffff' }} className="onDragAdd">
              Drag Right to Add
            </span>
          </div>
        </div>
      );
      return content;
    }
    if (e.elementtype === 'collectionSet') {
      const content = (
        <div
          id="searchBarContainer"
          style={{ position: 'relative' }}
          className="hoverContainerForEditIcon"
        >
          <div id="searchTextContainer">
            <BrowseCollection
              ref={this.allReferencesById[referenceId]}
              settings={e.settings}
              BrowsefooterBGColor={this.state.BrowsefooterBGColor}
              callType={callType}
            />
            <div className="editIconContainer">
              <div className="hoverEffectContainer">
                <span style={{ color: '#ffffff' }} className="onDragRemove">
                  Drag Left to Remove
                </span>
              </div>
              <div
                className="editIcon"
                onClick={() =>
                  this.showEditSettingPopup(
                    'collectionSet',
                    `show${e.id}`,
                    e.id
                  )
                }
              >
                <i className="lnr-pencil" />
              </div>
            </div>
          </div>
          <div className="hoverEffectContainer">
            <span style={{ color: '#ffffff' }} className="onDragAdd">
              Drag Right to Add
            </span>
          </div>
        </div>
      );
      return content;
    }
  };

  async getData() {
    const res = await axios(`${API_ROOT}/api/v2/app-home-page`);
    return await res.data;
  }

  async getTrialData() {
    const res = await axios(`${API_ROOT}/api/trial-days`);
    return await res.data;
  }

  componentWillMount() {
    this.getData()
      .then(data => {
        this.setState({ landingTabDraggedItems: data.landingTabDraggedItems });
        this.setState({ bannerImageUrl: data.LandingSettings.bannerImageUrl });
        this.setState({
          SearchCellBGColor: data.LandingSettings.SearchCellBGColor
        });
        this.setState({
          SingleActiveDotColor: data.LandingSettings.SingleActiveDotColor
        });
        this.setState({
          Collection1HeaderBGColor:
            data.LandingSettings.Collection1HeaderBGColor
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
        this.setState({
          NavBarTitleText: data.LandingSettings.NavBarTitleText
        });
        this.setState({
          menuCellBGColor: data.LandingSettings.menuCellBGColor
        });
        this.setState({ menuIconColor: data.LandingSettings.menuIconColor });
        this.setState({ menuTitleColor: data.LandingSettings.menuTitleColor });
        this.setState({
          menuTabActiveColor: data.LandingSettings.menuTabActiveColor
        });
        this.setState({
          menuTabInactiveColor: data.LandingSettings.menuTabInactiveColor
        });
        this.setState({
          menuSeparatorColor: data.LandingSettings.menuSeparatorColor
        });
        this.setState({ ContactValue: data.LandingSettings.ContactValue });
        this.setState({ HomeValue: data.LandingSettings.HomeValue });
        this.setState({ SearchValue: data.LandingSettings.SearchValue });
        this.setState({ AccountValue: data.LandingSettings.AccountValue });
        this.setState({ CartValue: data.LandingSettings.CartValue });
        this.setState({
          BuildStyleColor: data.LandingSettings.BuildStyleColor
        });
        this.setState({
          DragStoreDisplay: data.LandingSettings.DragStoreDisplay
        });
        this.setState({
          DropDownGetIconheader: data.LandingSettings.DropDownGetIconheader
        });
        this.setState({
          SettingStoreHide: data.LandingSettings.SettingStoreHide
        });
        this.setState({
          LandingPreviewDisplay: data.LandingSettings.LandingPreviewDisplay
        });
        this.setState({
          LandingStyleDisplay: data.LandingSettings.LandingStyleDisplay
        });
        this.setState({
          ShowHideGridListView: data.LandingSettings.ShowHideGridListView
        });
        this.setState({
          StyleStyleColor: data.LandingSettings.StyleStyleColor
        });
        this.setState({
          navigationTypeValue: data.LandingSettings.navigationTypeValue
        });
        this.setState({
          displaybuildleft: data.LandingSettings.displaybuildleft
        });
        this.setState({
          navbarBackgroundColorValue:
            data.LandingSettings.navbarBackgroundColorValue
        });
        this.setState({
          navbgiconcolorValue: data.LandingSettings.navbgiconcolorValue
        });
        this.setState({
          navbartitleValue: data.LandingSettings.navbartitleValue
        });
        this.setState({ NavTitle: data.LandingSettings.NavTitle });
        this.setState({ isLoaded: true });
      })
      .catch(err => {
        this.setState({ isLoaded: true });
      });

    /* Trial details */
    /* this.getTrialData()
    .then(data => {
      const chargeObject = data[0];
      if (chargeObject !== undefined) {
        const days = getDaysFromToday(chargeObject.trial_ends_on);
        if (days && days >= 0) {
          this.setState({ trialDays: days });
        }
      }
    }) */
  }

  HomeValue = val => {
    this.setState({ HomeValue: val });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  SearchValue = val => {
    this.setState({ SearchValue: val });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  CartValue = val => {
    this.setState({ CartValue: val });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  ContactValue = val => {
    this.setState({ ContactValue: val });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  AccountValue = val => {
    this.setState({ AccountValue: val });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  handleNavStyleMenuCellColorChangeComplete = color => {
    this.setState({ menuCellBGColor: color.hex });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  HideSettingSection(HideSettingValue) {
    this.setState({ SettingStoreHide: 'none' });
    this.setState({ DragStoreDisplay: 'block' });
  }

  CollectionMainSectionEditOption() {
    this.setState({ SettingStoreHide: 'block' });
    this.setState({ DragStoreDisplay: 'none' });
  }

  LandingStyleDisplay = () => {
    this.setState({ displaybuildleft: 'none' });
    this.setState({ LandingStyleDisplay: 'block' });
    this.setState({ LandingPreviewDisplay: 'none' });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  LandingBuildDisplay = () => {
    this.setState({ displaybuildleft: 'block' });
    this.setState({ LandingStyleDisplay: 'none' });
    this.setState({ LandingPreviewDisplay: 'none' });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  LandingPreviewDisplay = () => {
    this.setState({ displaybuildleft: 'none' });
    this.setState({ LandingStyleDisplay: 'none' });
    this.setState({ LandingPreviewDisplay: 'block' });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  navbarTitleColorCode = navbartitle => {
    this.setState({ navbartitleValue: navbartitle.hex });
    this.setState({ isEdited: true });
  };

  navbarBackgroundColorCode = navbgcolor => {
    this.setState({ navbarBackgroundColorValue: navbgcolor.hex });
  };

  navbarIconColorCode = navbgiconcolor => {
    this.setState({ navbgiconcolorValue: navbgiconcolor.hex });
  };

  onDragStart = (ev, id) => {
    ev.dataTransfer.setData('id', id);
  };

  onDrop = (ev, cat) => {
    const id = ev.dataTransfer.getData('id');
    const tasks = this.state.tasks.filter(task => {
      if (task.name === id) {
        task.category = cat;
      }
      return task;
    });
    this.setState({
      ...this.state,
      tasks
    });
  };

  onDragOver = ev => {
    ev.preventDefault();
  };

  id2List = {
    droppable: 'landingTabAllDraggableItems',
    droppable2: 'landingTabDraggedItems'
  };

  getList = id => this.state[this.id2List[id]];

  onDragEnd = result => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        this.getList(source.droppableId),
        source.index,
        destination.index
      );
      let state = { items };
      if (source.droppableId === 'droppable2') {
        state = { landingTabDraggedItems: items };
      }
      this.setState(state);
      this.homeTopTabsShowEditAlert.current.showSaveButton();
    } else {
      const result = this.move(
        this.getList(source.droppableId),
        this.getList(destination.droppableId) || [],
        source,
        destination
      );
      const defaultDraggable = getDraggableHTMLItems();

      const destinationDroppable = Array.from(result.droppable2);

      const statesForModalBoxes = {};
      for (let i = 0; i < destinationDroppable.length; i++) {
        statesForModalBoxes[`show${destinationDroppable[i].id}`] = false;
      }
      this.setState({ allModalIds: statesForModalBoxes });
      this.setState({
        landingTabAllDraggableItems: defaultDraggable,
        landingTabDraggedItems: result.droppable2
      });

      this.homeTopTabsShowEditAlert.current.showSaveButton();
    }
  };

  onRemoveDragStart = result => {
    const hoverDeleteStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      backgroundColor: '#000000',
      zIndex: '10000'
    };
    this.setState({ hoverDeleteStyle });
  };

  CollectionBarIcon = icon => {
    this.setState({ DropDownGetIconheader: icon });
  };

  DisplySaveBtn = () => {
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  navigationType = val => {
    this.setState({ navigationTypeValue: val });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  NavTitle = val => {
    this.setState({ NavTitle: val });
    this.homeTopTabsShowEditAlert.current.showSaveButton();
  };

  onSaveEditedItems = () => {
    const LandingSettings = {
      NavBarTitleText: this.state.NavBarTitleText,
      bannerImageUrl: this.state.bannerImageUrl,
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
      BuildStyleColor: this.state.BuildStyleColor,
      DragStoreDisplay: this.state.DragStoreDisplay,
      DropDownGetIconheader: this.state.DropDownGetIconheader,
      SettingStoreHide: this.state.SettingStoreHide,
      LandingPreviewDisplay: this.state.LandingPreviewDisplay,
      LandingStyleDisplay: this.state.LandingStyleDisplay,
      ShowHideGridListView: this.state.ShowHideGridListView,
      StyleStyleColor: this.state.StyleStyleColor,
      navigationTypeValue: this.state.navigationTypeValue,
      displaybuildleft: this.state.displaybuildleft,
      navbarBackgroundColorValue: this.state.navbarBackgroundColorValue,
      navbgiconcolorValue: this.state.navbgiconcolorValue,
      navbartitleValue: this.state.navbartitleValue,
      NavTitle: this.state.NavTitle,
      SearchCellBGColor: this.state.SearchCellBGColor,
      SingleActiveDotColor: this.state.SingleActiveDotColor,
      Collection1HeaderBGColor: this.state.Collection1HeaderBGColor,
      Collection2HeaderBGsecColor: this.state.Collection2HeaderBGsecColor,
      CollectioncellSubTitleColor: this.state.CollectioncellSubTitleColor,
      BrowsefooterBGColor: this.state.BrowsefooterBGColor
    };
    const landingTabDraggedItems = this.state.landingTabDraggedItems;
    let itemId_arr = [];
    landingTabDraggedItems.map((item, index) => {
      if (
        item.elementtype === 'productCollection1' &&
        item.settings.selectedProductId
      ) {
        itemId_arr.push(item.settings.selectedProductId);
      } else if (
        item.elementtype === 'productCollection2' &&
        item.settings.selectedProductId
      ) {
        itemId_arr.push(item.settings.selectedProductId);
      } else if (
        item.elementtype === 'collectionSet' &&
        item.settings.selectedProductName &&
        item.settings.selectedProductName !== '' &&
        item.settings.selectedProductName !== 'undefined'
      ) {
        itemId_arr.push(item.settings.selectedProductName);
      } else if (
        item.elementtype === 'customBanner' // && item.settings.BannerOptionValue && item.settings.BannerOptionValue !== '' && item.settings.BannerOptionValue !== 'undefined')
      ) {
        itemId_arr.push(true);
      } else if (
        item.elementtype === 'collectionWithTitle' &&
        item.settings.leftcellContents
      ) {
        let name = [];
        item.settings.leftcellContents.map((item1, index1) => {
          if (item1.title && item1.title !== '') {
            name.push(item1.title);
          }
        });
        if (name.length !== 0) {
          itemId_arr.push(name[0]);
        }
      } else if (
        item.elementtype === 'singleProduct' &&
        item.settings.cellContents
      ) {
        let cellContents_title = [];
        item.settings.cellContents.map((item1, index1) => {
          if (item1.title && item1.title !== '') {
            cellContents_title.push(item1.title);
          }
        });
        if (cellContents_title.length !== 0) {
          itemId_arr.push(cellContents_title[0]);
        }
      }
    });

    if (landingTabDraggedItems.length === itemId_arr.length) {
      this.homeTopTabsShowEditAlert.current.landingProduct(true);
      axios
        .post(`${API_ROOT}/api/v2/app-home-page`, {
          LandingSettings,
          landingTabDraggedItems
        })
        .then(res => {
          res.data && this.homeTopTabsShowEditAlert.current.showSavedButton();
        });
    } else {
      this.homeTopTabsShowEditAlert.current.landingProduct(false);
    }
  };

  bannerImageUrlCallBack = val => {
    this.setState({ bannerImageUrl: val });
  };

  render() {
    return (
      <Fragment>
        {this.state.isLoaded && (
          <ReactCSSTransitionGroup
            component="div"
            transitionName="TabsAnimation"
            transitionAppear
            transitionAppearTimeout={0}
            transitionEnter={false}
            transitionLeave={false}
          >
            {window.innerWidth < 767 ? (
              <div className="mobile_hide_txt_container">
                <p>
                  Sorry, our designer needs a wider screen. If you're on a
                  mobile device, please login using a desktop computer.
                </p>
              </div>
            ) : (
              <div id="HomePageContentContainer">
                <div className="HomeRightContainer">
                  <DragDropContext onDragEnd={this.onDragEnd}>
                    <Row>
                      <Col
                        md={4}
                        sm={6}
                        id="CollectionMainContainer"
                        className="HomeRightLeftContainer"
                        // style={{ maxWidth: '390px' }}
                      >
                        <PerfectScrollbar>
                          <div
                            className={
                              this.state.displaybuildleft === 'block'
                                ? ''
                                : 'activeSec'
                            }
                            style={{
                              display:
                                this.state.displaybuildleft === 'block'
                                  ? 'none'
                                  : 'block'
                            }}
                          >
                            <div className="">
                              <SearchNavigationStyles
                                DisplaySaveBtn={this.DisplaySaveBtn}
                                menuCellBGColor={this.state.menuCellBGColor}
                                menuIconColor={this.state.menuIconColor}
                                menuTitleColor={this.state.menuTitleColor}
                                menuTabActiveColor={
                                  this.state.menuTabActiveColor
                                }
                                menuTabInactiveColor={
                                  this.state.menuTabInactiveColor
                                }
                                menuSeparatorColor={
                                  this.state.menuSeparatorColor
                                }
                                ContactValue={this.ContactValue}
                                HomeValue={this.HomeValue}
                                SearchValue={this.SearchValue}
                                AccountValue={this.AccountValue}
                                CartValue={this.CartValue}
                                ContactVal={this.state.ContactValue}
                                HomeVal={this.state.HomeValue}
                                SearchVal={this.state.SearchValue}
                                AccountVal={this.state.AccountValue}
                                CartVal={this.state.CartValue}
                              />
                            </div>
                          </div>
                          {this.state.isLoaded && (
                            <div
                              style={{ display: this.state.displaybuildleft }}
                              className={
                                this.state.displaybuildleft === 'block'
                                  ? ' activeSec'
                                  : ''
                              }
                            >
                              {this.state.trialDays === null ? null : (
                                <div className="trail_period_container">
                                  <p>
                                    Trial Period:{' '}
                                    <span>
                                      {this.state.trialDays} days remaining
                                    </span>
                                  </p>
                                </div>
                              )}
                              <CardHeader style={{ marginBottom: '10px' }}>
                                <h3 className="leftCardHeader">
                                  {' '}
                                  DRAG AND DROP{' '}
                                </h3>{' '}
                              </CardHeader>
                              <Droppable droppableId="droppable">
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    className="HomePageLeftBlock draggableContainer"
                                  >
                                    <Row className="leftCenterSec">
                                      <Col md="12">
                                        {this.state.landingTabAllDraggableItems.map(
                                          (item, index) => (
                                            <Draggable
                                              key={item.id}
                                              draggableId={item.id}
                                              index={index}
                                            >
                                              {(provided, snapshot) => (
                                                <div
                                                  className={item.id}
                                                  ref={provided.innerRef}
                                                  {...provided.draggableProps}
                                                  {...provided.dragHandleProps}
                                                  style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps
                                                      .style
                                                  )}
                                                >
                                                  {this.getElementContent(
                                                    item,
                                                    'draggable'
                                                  )}
                                                </div>
                                              )}
                                            </Draggable>
                                          )
                                        )}
                                      </Col>
                                    </Row>
                                    {provided.placeholder}
                                  </div>
                                )}
                              </Droppable>
                            </div>
                          )}
                        </PerfectScrollbar>
                      </Col>
                      <Col
                        md={8}
                        sm={6}
                        id="RightContainerScroll"
                        // style={{ maxWidth: 'calc(100% - 390px)' }}
                      >
                        <div id="mbl_bg_rit">
                          <div id="CollectionMainRightContainer">
                            <div className="buildStoreContainer">
                              {this.state.NavTitle === 'Text' && (
                                <div className="BuildCollectionsTitleHint">
                                  <span>CLICK THE TITLE BELOW TO EDIT</span>
                                </div>
                              )}
                              <div
                                id="BuildCollectionEffectNavBarContainer"
                                style={{
                                  backgroundColor: this.state
                                    .navbarBackgroundColorValue
                                }}
                              >
                                <div id="CollectionEffectNavBarContainer">
                                  <div
                                    id="CollectionEffectnavBars"
                                    style={{
                                      color: this.state.navbgiconcolorValue
                                    }}
                                  />

                                  {this.state.NavTitle === 'Image' && (
                                    <div id="CollectionEffectMyStoreTitle">
                                      <img
                                        src={this.state.bannerImageUrl}
                                        style={{
                                          maxHeight: '40px',
                                          maxWidth: '90px'
                                        }}
                                      />
                                    </div>
                                  )}
                                  {this.state.NavTitle === 'Text' && (
                                    <div
                                      style={{
                                        color: this.state.navbartitleValue
                                      }}
                                      id="CollectionEffectMyStoreTitle"
                                    >
                                      <label
                                        style={{
                                          display: this.state.showMyLabel
                                        }}
                                        onClick={this.changeMyStoreLabel}
                                      >
                                        {' '}
                                        {this.state.NavBarTitleText}{' '}
                                      </label>
                                      <input
                                        onBlur={this.showStoreNameLable}
                                        onChange={this.changeMyStoreName}
                                        className="NavTextEdit"
                                        onKeyPress={this.hideTextshowLabel}
                                        style={{
                                          display: this.state.showMyStoreTextBox
                                        }}
                                        type="text"
                                        value={this.state.NavBarTitleText}
                                      />
                                    </div>
                                  )}

                                  <div
                                    id="CollectionEditMainSlider"
                                    onClick={
                                      this.CollectionMainSectionEditOption
                                    }
                                  >
                                    <div id="CollectionEditOption">
                                      <i className="lnr-pencil" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div
                              id="CollectionEffectBody"
                              style={{
                                display: this.state.SettingStoreHide,
                                height: '60vh'
                              }}
                            >
                              <SearchNavigationSettings
                                navbarTitleColorCodeCallback={
                                  this.navbarTitleColorCode
                                }
                                navbarBackgroundColorCallback={
                                  this.navbarBackgroundColorCode
                                }
                                navbarIconColorCallback={
                                  this.navbarIconColorCode
                                }
                                HideSettingSection={this.HideSettingSection}
                                CollectionBarIcon={this.CollectionBarIcon}
                                BuildStyleColor={this.state.BuildStyleColor}
                                StyleStyleColor={this.state.StyleStyleColor}
                                onApplySettings={
                                  this.onSearchNavigationSettingsApply
                                }
                                DisplySaveBtn={this.DisplySaveBtn}
                                DropDownGetIconheader={
                                  this.state.DropDownGetIconheader
                                }
                                navbarBackgroundColorValue={
                                  this.state.navbarBackgroundColorValue
                                }
                                navbartitleValue={this.state.navbartitleValue}
                                navbgiconcolorValue={
                                  this.state.navbgiconcolorValue
                                }
                                NavTitle={this.NavTitle}
                                NavTitleVal={this.state.NavTitle}
                                bannerImageUrlCallBack={
                                  this.bannerImageUrlCallBack
                                }
                                bannerImageUrl={this.state.bannerImageUrl}
                              />
                            </div>

                            {!this.state.isLoaded && (
                              <Loader
                                color="#0e7c95"
                                type="ball-scale-multiple"
                              />
                            )}
                            {this.state.isLoaded && (
                              <PerfectScrollbar>
                                <div
                                  className="main_droppable_div"
                                  style={{
                                    display: this.state.DragStoreDisplay
                                  }}
                                >
                                  <Droppable droppableId="droppable2">
                                    {(provided, snapshot) => (
                                      <div
                                        ref={provided.innerRef}
                                        className="HomePageRightDropSection"
                                      >
                                        <div>
                                          {this.state.landingTabDraggedItems &&
                                            this.state.landingTabDraggedItems
                                              .length !== 0 &&
                                            this.state.landingTabDraggedItems.map(
                                              (item, index) => (
                                                <Draggable
                                                  key={`key-dragged-${item.id}`}
                                                  draggableId={`dragged-draggable-${
                                                    item.id
                                                  }`}
                                                  index={index}
                                                >
                                                  {(provided, snapshot) => (
                                                    <div
                                                      key={item.id}
                                                      className="dropAndModalContainer"
                                                    >
                                                      <div
                                                        className={`droppableContainer itemId-${
                                                          item.id
                                                        }`}
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        style={getItemStyle(
                                                          snapshot.isDragging,
                                                          provided
                                                            .draggableProps
                                                            .style
                                                        )}
                                                      >
                                                        {this.getElementContent(
                                                          item,
                                                          'droppable'
                                                        )}
                                                      </div>
                                                      <Rodal
                                                        key={`modal-dragged-${
                                                          item.id
                                                        }`}
                                                        visible={
                                                          this.state
                                                            .allModalIds[
                                                            `show${item.id}`
                                                          ] || false
                                                        }
                                                        animation="slideUp"
                                                        duration={500}
                                                        onClose={() =>
                                                          this.hideEditSettingPopup(
                                                            `show${item.id}`
                                                          )
                                                        }
                                                        center
                                                        width={800}
                                                        classNames={{
                                                          overlay:
                                                            'videoModalOverlay',
                                                          modal: 'modal-general'
                                                        }}
                                                      >
                                                        <div>
                                                          {item.elementtype ===
                                                            'productSearchForm' && (
                                                            <ModalSearchContent
                                                              ref={
                                                                this
                                                                  .allModalReferencesById[
                                                                  item.id
                                                                ]
                                                              }
                                                              defaultSettings={
                                                                item.settings
                                                              }
                                                              onCloseModal={
                                                                this
                                                                  .onProductModalCloseClick
                                                              }
                                                              modalId={`show${
                                                                item.id
                                                              }`}
                                                              itemId={item.id}
                                                              onApply={
                                                                this
                                                                  .onProductSearchSettingApply
                                                              }
                                                            />
                                                          )}
                                                          {item.elementtype ===
                                                            'productCollection1' && (
                                                            <ModalCollectionContent
                                                              ref={
                                                                this
                                                                  .allModalReferencesById[
                                                                  item.id
                                                                ]
                                                              }
                                                              defaultSettings={
                                                                item.settings
                                                              }
                                                              onCloseModal={
                                                                this
                                                                  .onCollection1ModalCloseClick
                                                              }
                                                              modalId={`show${
                                                                item.id
                                                              }`}
                                                              itemId={item.id}
                                                              onApply={
                                                                this
                                                                  .onCollection1SettingApply
                                                              }
                                                            />
                                                          )}
                                                          {item.elementtype ===
                                                            'singleProduct' && (
                                                            <ModalSingleProduct
                                                              ref={
                                                                this
                                                                  .allModalReferencesById[
                                                                  item.id
                                                                ]
                                                              }
                                                              defaultSettings={
                                                                item.settings
                                                              }
                                                              onCloseModal={
                                                                this
                                                                  .onSingleProductModalCloseClick
                                                              }
                                                              modalId={`show${
                                                                item.id
                                                              }`}
                                                              itemId={item.id}
                                                              onApply={
                                                                this
                                                                  .onSingleProductSettingApply
                                                              }
                                                            />
                                                          )}
                                                          {item.elementtype ===
                                                            'productCollection2' && (
                                                            <ModalSearchContentSec
                                                              ref={
                                                                this
                                                                  .allModalReferencesById[
                                                                  item.id
                                                                ]
                                                              }
                                                              defaultSettings={
                                                                item.settings
                                                              }
                                                              onCloseModal={
                                                                this
                                                                  .onCollection2ModalCloseClick
                                                              }
                                                              modalId={`show${
                                                                item.id
                                                              }`}
                                                              itemId={item.id}
                                                              onApply={
                                                                this
                                                                  .onCollection2SettingApply
                                                              }
                                                            />
                                                          )}
                                                          {item.elementtype ===
                                                            'collectionWithTitle' && (
                                                            <ModalCollectionWithTitleContent
                                                              ref={
                                                                this
                                                                  .allModalReferencesById[
                                                                  item.id
                                                                ]
                                                              }
                                                              defaultSettings={
                                                                item.settings
                                                              }
                                                              onCloseModal={
                                                                this
                                                                  .onCollectionWithTitleModalCloseClick
                                                              }
                                                              modalId={`show${
                                                                item.id
                                                              }`}
                                                              itemId={item.id}
                                                              onApply={
                                                                this
                                                                  .onCollectionWithTitleSettingApply
                                                              }
                                                            />
                                                          )}
                                                          {item.elementtype ===
                                                            'collectionSet' && (
                                                            <ModalBrowseProductCollections
                                                              ref={
                                                                this
                                                                  .allModalReferencesById[
                                                                  item.id
                                                                ]
                                                              }
                                                              defaultSettings={
                                                                item.settings
                                                              }
                                                              onCloseModal={
                                                                this
                                                                  .onBrowseProductCollectionCloseClick
                                                              }
                                                              modalId={`show${
                                                                item.id
                                                              }`}
                                                              itemId={item.id}
                                                              onApply={
                                                                this
                                                                  .onBrowseProductCollectionSettingApply
                                                              }
                                                            />
                                                          )}
                                                          {item.elementtype ===
                                                            'customBanner' && (
                                                            <ModalCustomBanner
                                                              ref={
                                                                this
                                                                  .allModalReferencesById[
                                                                  item.id
                                                                ]
                                                              }
                                                              defaultSettings={
                                                                item.settings
                                                              }
                                                              onCloseModal={
                                                                this
                                                                  .onCustomBannerCloseClick
                                                              }
                                                              modalId={`show${
                                                                item.id
                                                              }`}
                                                              itemId={item.id}
                                                              onApply={
                                                                this
                                                                  .onCustomBannerSettingApply
                                                              }
                                                            />
                                                          )}
                                                        </div>
                                                      </Rodal>
                                                    </div>
                                                  )}
                                                </Draggable>
                                              )
                                            )}
                                          {provided.placeholder}
                                        </div>
                                      </div>
                                    )}
                                  </Droppable>
                                </div>
                              </PerfectScrollbar>
                            )}
                          </div>
                          {/* </div> */}
                          <div
                            className={
                              this.state.displaybuildleft === 'block'
                                ? ''
                                : 'activeSec'
                            }
                            style={{
                              display:
                                this.state.displaybuildleft === 'block'
                                  ? 'none'
                                  : 'block'
                            }}
                          >
                            <div id="BuildCollectionsConstructor">
                              <div
                                className="landingStyle"
                                style={{
                                  display: this.state.HideSettingsValue
                                }}
                              >
                                <div
                                  style={{ display: this.state.displaybuild }}
                                >
                                  <div
                                    id="CollectionEffectBody"
                                    style={{
                                      display: this.state
                                        .CollectionMainSectionEditOptionValue
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </DragDropContext>
                </div>
                <ThemeOptions
                  selectTheme={this.onThemeOptionSelection}
                  ref={this.homeTopTabsShowEditAlert}
                  onSaveEditedItems={this.onSaveEditedItems}
                  // landingProductVal = {this.state.landingProduct}
                />
              </div>
            )}
          </ReactCSSTransitionGroup>
        )}
        {!this.state.isLoaded && (
          <div md={12} id="mainPageLoading">
            <Loader color="#0e7c95" type="ball-scale-multiple" />
          </div>
        )}
      </Fragment>
    );
  }
}

export default HomePageContent;
