import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { ThemeProvider } from "styled-components";
import { IAppState } from "../../background/store";
import GlobalStyle from "../../components/styles/GlobalStyle";
import { themes, ThemeTypes } from "../../components/styles/themes";
import Counter from "../../containers/App";

interface IPopupApp {
  theme: ThemeTypes;
  dispatch: Dispatch;
}

class PopupApp extends React.Component<IPopupApp> {
  render() {
    return (
      <ThemeProvider theme={themes[this.props.theme]}>
        <React.Fragment>
          <GlobalStyle />
          <Counter />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state: IAppState) => {
  return {
    theme: state.settings.theme
  };
};

export default connect(mapStateToProps)(PopupApp);
