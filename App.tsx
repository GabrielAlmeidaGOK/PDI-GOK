import React, {useEffect} from 'react';
import TabNav from './src/navigation'
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { queryClient } from './src/services/queryClient';
import { QueryClientProvider } from 'react-query'

//OBSERVABILITY
import * as Sentry from "@sentry/react-native";
import crashlytics from '@react-native-firebase/crashlytics';

import codePush from 'react-native-code-push'

const App = () => {
  Sentry.init({
    dsn: 'https://1e22dd5ddc9c438d95ef1b8de8d4ae25@o1207795.ingest.sentry.io/6341130',
    enableNative: true,
  });
  
  useEffect(() => {
    crashlytics().log('App mounted');
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <QueryClientProvider client={queryClient}>
          <TabNav/>
      </QueryClientProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
})(App);
