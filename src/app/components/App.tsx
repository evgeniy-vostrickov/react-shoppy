import React from 'react';
import { ConfigProvider } from 'antd';
import AppRouter from '../router/AppRouter';
import { useAppDispatch, useAppSelector } from '../helpers/redux';
import { AliasToken } from 'antd/es/theme/internal';

// const { useToken } = theme

function App() {
  // const {token} = useToken()
  // console.log(token.colorPrimaryText)
  const { theme } = useAppSelector(state => state.app)

  const lightTheme: Partial<AliasToken> = {
    // colorPrimary: "black",
    colorTextBase: "black",
  }

  const blackTheme: Partial<AliasToken> = {
    colorPrimary: "white",
    colorTextBase: "white",
    linkDecoration: "#ff0000",
    // colorBgContainer: "#0369a1",
    colorBgElevated: "#22377d",
    colorBgLayout: "#0369a1",
    colorBgBase: "#172554",
  }

  return (
    <ConfigProvider theme={{
      token: theme === 'light' ? lightTheme : blackTheme,
      components: {
        Badge: {
          colorBgContainer: "#ffffff",
        },
        Menu: {
          controlItemBgActive: "#bae6fd",
        }
      }
    }}>
      <AppRouter />
    </ConfigProvider>
  );
}

export default App;