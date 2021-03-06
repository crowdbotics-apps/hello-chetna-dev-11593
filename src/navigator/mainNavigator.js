import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen011407Navigator from '../features/CopyOfBlankScreen011407/navigator';
import BlankScreen011406Navigator from '../features/BlankScreen011406/navigator';
import CopyOfBlankScreen011401Navigator from '../features/CopyOfBlankScreen011401/navigator';
import BlankScreen011400Navigator from '../features/BlankScreen011400/navigator';
import BlankScreen011399Navigator from '../features/BlankScreen011399/navigator';
import BlankScreen211397Navigator from '../features/BlankScreen211397/navigator';
import BlankScreen311396Navigator from '../features/BlankScreen311396/navigator';
import CopyOfBlankScreen011395Navigator from '../features/CopyOfBlankScreen011395/navigator';
import BlankScreen011394Navigator from '../features/BlankScreen011394/navigator';
import BlankScreen011393Navigator from '../features/BlankScreen011393/navigator';
import BlankScreen111392Navigator from '../features/BlankScreen111392/navigator';
import BlankScreen811296Navigator from '../features/BlankScreen811296/navigator';
import BlankScreen711295Navigator from '../features/BlankScreen711295/navigator';
import BlankScreen411181Navigator from '../features/BlankScreen411181/navigator';
import BlankScreen611176Navigator from '../features/BlankScreen611176/navigator';
import BlankScreen511109Navigator from '../features/BlankScreen511109/navigator';
import CopyOfBlankScreen111107Navigator from '../features/CopyOfBlankScreen111107/navigator';
import BlankScreen111103Navigator from '../features/BlankScreen111103/navigator';
import BlankScreen011092Navigator from '../features/BlankScreen011092/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen011407: { screen: CopyOfBlankScreen011407Navigator },
BlankScreen011406: { screen: BlankScreen011406Navigator },
CopyOfBlankScreen011401: { screen: CopyOfBlankScreen011401Navigator },
BlankScreen011400: { screen: BlankScreen011400Navigator },
BlankScreen011399: { screen: BlankScreen011399Navigator },
BlankScreen211397: { screen: BlankScreen211397Navigator },
BlankScreen311396: { screen: BlankScreen311396Navigator },
CopyOfBlankScreen011395: { screen: CopyOfBlankScreen011395Navigator },
BlankScreen011394: { screen: BlankScreen011394Navigator },
BlankScreen011393: { screen: BlankScreen011393Navigator },
BlankScreen111392: { screen: BlankScreen111392Navigator },
BlankScreen811296: { screen: BlankScreen811296Navigator },
BlankScreen711295: { screen: BlankScreen711295Navigator },
BlankScreen411181: { screen: BlankScreen411181Navigator },
BlankScreen611176: { screen: BlankScreen611176Navigator },
BlankScreen511109: { screen: BlankScreen511109Navigator },
CopyOfBlankScreen111107: { screen: CopyOfBlankScreen111107Navigator },
BlankScreen111103: { screen: BlankScreen111103Navigator },
BlankScreen011092: { screen: BlankScreen011092Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
