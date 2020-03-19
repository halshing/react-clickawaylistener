import React from "react";
import ClickAwayListener from "./ClickAwayListener";

const PopOutDialog = () => (
  <div className="popout-dialog">
    <h4>Pop Out Dialog 2</h4>
    <div>Here is some descriptive text about the pop out</div>
    <section>
      This is some static text in a pop out.
      <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </section>
  </div>
);

class MenuButton2 extends React.Component {
  state = {
    showPopOut: false
  };

  togglePopOut = show => {
    this.setState({ showPopOut: show });
  };

  saveDialog = () => {
    // do save stuff
    console.log("pop out saved");

    // close the pop out
    this.togglePopOut(false);
  };

  cancelDialog = () => {
    // do cancel stuff
    console.log("pop out cancelled");

    // close the pop out
    this.togglePopOut(false);
  };

  render() {
    const { showPopOut } = this.state;
    return (
      <div className="menu-btn-2">
        <ClickAwayListener onClickAway={() => this.togglePopOut(false)}>
          {/*
              This button is nested inside of the click away listener
              so we don't need to pass in a reference to the button node
              since the click away event won't conflict with the button click.
          */}
          <button onClick={() => this.togglePopOut(!showPopOut)}>
            Button 2
          </button>
          {showPopOut && (
            <PopOutDialog
              onSave={this.saveDialog}
              onCancel={this.cancelDialog}
            />
          )}
        </ClickAwayListener>
      </div>
    );
  }
}

export default MenuButton2;
