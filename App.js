import { React } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './Utils/Navigation/Routes';
import { createStackNavigator } from '@react-navigation/stack';

function App() {
  const stack = createStackNavigator();

  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>

  );
};



export default App;
