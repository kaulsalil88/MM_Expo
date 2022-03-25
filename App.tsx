import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View,Text,Button } from 'react-native';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import {useAddress} from '@mosaic-wellness/redux-action-library'
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
const {getAddresses} = useAddress();

  const x = ()=>{
    const result = getAddresses();
    console.log(result,"Add");
    
  }
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View>
          <Text>Dummy Testing</Text>
          <Button title='Click Me' onPress={x}/> 
      </View>
      // <SafeAreaProvider>
      //   <Navigation colorScheme={colorScheme} />
      //   <StatusBar />
      // </SafeAreaProvider>
    );
  }
}
