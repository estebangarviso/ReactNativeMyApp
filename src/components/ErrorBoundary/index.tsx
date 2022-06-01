import React, {Component, ErrorInfo} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import * as Sentry from '@sentry/react-native';
import APP_ENV from '../../config/env';
import Button from '../Button';
import RNRestart from 'react-native-restart';

Sentry.init({
  dsn: APP_ENV.SENTRY_DSN,
  tracesSampleRate: 1,
  environment: __DEV__ ? 'development' : 'production',
  onReady: () => {
    console.log('\x1b[36m%s\x1b[0m', 'Sentry is ready to catch errors');
  },
});

class ErrorBoundary extends Component<
  {},
  {hasError: boolean; error: Error | null}
> {
  constructor(props: any) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {hasError: true, error};
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(
      '\x1b[31m%s\x1b[0m',
      `${error.message}\n${errorInfo.componentStack}`,
    );
    if (!__DEV__) {
      Sentry.captureException(error);
    }
  }

  handleRestartApp = () => RNRestart.Restart();

  render() {
    if (this.state.hasError) {
      const {error} = this.state as {error: Error};
      const errorStacks = error?.stack?.split('\n');

      return (
        <SafeAreaView
          style={__DEV__ ? styles.containerDev : styles.containerProd}>
          {__DEV__ ? (
            <>
              <View style={styles.buttonContainer}>
                <Button onPress={this.handleRestartApp} style={styles.button}>
                  <Text>Restart App</Text>
                </Button>
              </View>
              <Text style={styles.title}>{error?.message}</Text>
              {errorStacks?.map((errorStack, index) => (
                <Text key={index} style={styles.errorStack}>
                  {errorStack}
                </Text>
              ))}
            </>
          ) : (
            <>
              <Text>Something went wrong. Please try again later.</Text>
              <View style={styles.buttonContainer}>
                <Button onPress={this.handleRestartApp} style={styles.button}>
                  <Text>Restart App</Text>
                </Button>
              </View>
            </>
          )}
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  containerDev: {
    color: '#fff',
    backgroundColor: '#cc0000',
  },
  containerProd: {
    color: '#fff',
    backgroundColor: '#000',
  },
  errorStack: {
    color: '#fff',
  },
  buttonContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  button: {
    width: '100%',
  },
});
