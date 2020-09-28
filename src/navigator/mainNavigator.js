import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
