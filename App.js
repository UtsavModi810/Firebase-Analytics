import React, {Component} from 'react';
import {View} from 'react-native';
import analytics from '@react-native-firebase/analytics';
import Analytics from './src/screen/Analytics';
import Crashlytics from './src/screen/Crashlytics';
import {analyticsCollection} from './src/component/AnalyticsEvent';

class App extends Component {
  componentDidMount() {
    analyticsCollection();
  }
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Analytics />
      </View>
    );
  }
}

export default App;

