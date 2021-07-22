import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'
import analytics from '@react-native-firebase/analytics';
import Analytics from './src/Analytics';
analytics().setAnalyticsCollectionEnabled(true);

class App extends Component {

//   async onProductView(){
//     await analytics().logEvent('product_view', {
//       id: '123456789',
//       color: 'red', 
//       via: 'ProductCatalog',
// });
//   } 
componentDidMount(){
  analytics().setAnalyticsCollectionEnabled(true);
}
  render() {
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Analytics/>
      {/* <Button
        title="Add To Basket"
        onPress={async () =>
          await analytics().logEvent('basket', {
            id: 3745092,
            item: 'mens grey t-shirt',
            description: ['round neck', 'long sleeved'],
            size: 'L',
          })
        }
      /> */}
      {/* <Button title="On Press" 
      onPress={()=>this.onProductView()
        // async ()=> 
        // await analytics().logSelectContent({
        //   content_type: 'clothing',
        //   item_id: 'abcd',
      
        // })
      }
      /> */}
    </View>
    )
  }
}

export default App
