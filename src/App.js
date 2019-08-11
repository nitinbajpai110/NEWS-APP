import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      React.createElement("div",null,
      React.createElement("header",{id:'header'},
      React.createElement("button",{id:'head'},"Show Latest News")),
      React.createElement("div",{id:'body'},
      React.createElement("div",{id:'filter'},
      React.createElement("div",{id:'head2'},
      React.createElement("div",{id:'head1'},"Filter News"),
      React.createElement("a",{id:'reset',href:""},"Reset"),
      ),
      React.createElement("label",{id:'label1'},"LANGUAGE")
    

      )
      )
      )
     
  );
}

export default App;
