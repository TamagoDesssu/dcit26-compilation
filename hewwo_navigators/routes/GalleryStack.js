import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerActions } from '@react-navigation/native';

import Gallery from '../screens/Gallery';
import { FontAwesome } from '@expo/vector-icons';

const Stack = createStackNavigator();

const GalleryStack = ({ navigation }) => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Gallery" component={Gallery}
          options={{
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <FontAwesome name="bars" size={22} color="#FF6961" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
              </View>
            ),
            headerTitleAlign: 'center',
            headerTintColor: '#FF6961',
            headerStyle: { backgroundColor: '#F5F5DD' },
            drawerIcon: () => (<Feather name="home" size={24} color="#FF6961" />)
          }}
        />
      </Stack.Navigator>
  )
}

export default GalleryStack;