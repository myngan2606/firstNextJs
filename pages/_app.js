import React from "react";
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import { makeStore } from "./../reducer";
import Nav from "../components/Navbar";
import Breadscrumb from "./../components/breadscrum";

class TodoApp extends App {
  static async getInitialProps({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps
          ? await Component.getInitialProps(ctx)
          : {})
      }
    };
  }
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Container>
        <Provider store={store}>
          <React.Fragment>
            <Breadscrumb />
            <Nav />
            <Component {...pageProps} />
          </React.Fragment>
        </Provider>
      </Container>
    );
  }
}

export default withRedux(makeStore)(TodoApp);
