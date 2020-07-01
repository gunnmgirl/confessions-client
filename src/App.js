import React from "react";
import { ThemeProvider } from "styled-components";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import hooks from "./hooks";
import themes from "./themes";
import Posts from "./features/posts/components/Posts";
import CreatePost from "./features/posts/components/CreatePost";
import PostDetails from "./features/posts/components/PostDetails";

function App() {
  const dark = hooks.usePreferredTheme();
  const theme = dark ? themes.dark : themes.light;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Posts}></Route>
          <Route path="/posts/create" component={CreatePost}></Route>
          <Route path="/posts/:id" component={PostDetails}></Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
