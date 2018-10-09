import React, { Component } from "react";
import NavBar from "./components/material/SearchAppBar";
import EntryTable from "./components/EntryTable";
import "./App.css";

class App extends Component {
  state = {
    phoneBooks: [
      {
        id: 1,
        name: "Family",
        entries: [
          { id: 1, name: "Mom", phoneNumber: "0833452690" },
          { id: 2, name: "Dad", phoneNumber: "0833452691" },
          { id: 3, name: "Wife", phoneNumber: "0833452692" },
          { id: 4, name: "Son", phoneNumber: "0833452693" }
        ]
      },
      {
        id: 2,
        name: "Work",
        entries: [
          { id: 5, name: "Lead", phoneNumber: "0833452694" },
          { id: 6, name: "Friend", phoneNumber: "0833452695" },
          { id: 7, name: "New Guy", phoneNumber: "0833452696" }
        ]
      }
    ]
  };

  render() {
    const { phoneBooks } = this.state;

    return (
      <div className="App">
        <NavBar />
        <EntryTable rows={phoneBooks[0].entries} table="m-10" />
      </div>
    );
  }
}

export default App;