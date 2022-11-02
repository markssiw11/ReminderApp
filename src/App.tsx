import {NavigationContainer} from '@react-navigation/native';
import React, {FC} from 'react';
import List from './containers/calender/List';

const App: FC = () => {
  return (
    <NavigationContainer>
      <List />
    </NavigationContainer>
  );
};
export default App;
