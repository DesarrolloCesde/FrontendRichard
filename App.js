import { StyleSheet } from 'react-native';
import OrdersScreen from './components/views/OrdersScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator(); 

export default function App() {
  return (

  <NavigationContainer style = {styles.container}>
    <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#8e0000'},// Cambia el color de fondo de la barra de navegación
            headerTintColor: '#fff', // Cambia el color del texto en la barra de navegación
            headerTitleStyle: {fontWeight: 'bold', fontSize: 30}, // Cambia el estilo del título en la barra de navegación
            headerTitleAlign: ''
        }}>
      <Stack.Screen  name="OrdersScreen" component={OrdersScreen} options={{ title: 'Cocina' }} // Cambia el título de la pantalla
/>
    </Stack.Navigator>
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8e0000',
  },
});
