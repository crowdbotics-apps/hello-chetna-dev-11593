import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen111107Navigator from '../features/CopyOfBlankScreen111107/navigator';
import BlankScreen311106Navigator from '../features/BlankScreen311106/navigator';
import BlankScreen111103Navigator from '../features/BlankScreen111103/navigator';
import BlankScreen011092Navigator from '../features/BlankScreen011092/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen111107: { screen: CopyOfBlankScreen111107Navigator },
BlankScreen311106: { screen: BlankScreen311106Navigator },
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
