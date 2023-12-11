import * as React from 'react';
// import * as ReactDOM from 'react-dom';
import * as ReactDOM from 'react-dom/client';

declare global {
  interface Window {
    React: typeof React;
    ReactDOM: typeof ReactDOM;
  }
}

window.React = React;
window.ReactDOM = ReactDOM;
