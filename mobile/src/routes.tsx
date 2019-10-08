import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// expo install react-native-gesture-handler react-native-reanimated

import { Login, List, Book } from './pages';


const Routes = createAppContainer(
  createSwitchNavigator({
    Login, List, Book
  })
);

export default Routes;
