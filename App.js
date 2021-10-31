import React from "react";
import { Provider as NativeProvider } from "react-native-paper";
import { Provider } from 'react-redux'
import App from "./src";
import { theme } from "./src/core/theme";
import { ReactReduxContext } from 'react-redux'
import store from "./src/store/store"




const Main = () => (
  <Provider store={store}>
      <NativeProvider theme={theme}>
            <App />
      </NativeProvider>
  </Provider>
);

export default Main;
