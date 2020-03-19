import React from "react";
import ClickAwayListener from "./ClickAwayListener";

const CheckboxItem = ({ name, id, value }) => (
  <div>
    <input type="checkbox" name={name} id={id} value={value} />
    <label htmlFor={id}>{value}</label>
  </div>
);

const PopOutDialog = ({ onSave, onCancel }) => (
  <div className="popout-dialog">
    <h4>Pop Out Dialog 1</h4>
    <div>Here is some descriptive text about the pop out</div>
    <div className="form">
      <CheckboxItem name="color" id="red" value="Red" />
      <CheckboxItem name="color" id="green" value="Green" />
      <CheckboxItem name="color" id="blue" value="Blue" />
      <CheckboxItem name="color" id="yellow" value="Yellow" />
      <div className="action-buttons">
        <button onClick={onSave}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  </div>
);

class MenuButton1 extends React.Component {
  state = {
    showPopOut: false
  };

  // Stores a reference to the menu button.
  // This is used in the click away listener to ignore
  // "click away" clicks ocurring on this button, since
  // it lives outside of the click away listener.
  nodeBtn = undefined;

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
      <div className="menu-btn-1">
        {/*
            This button lives outside of the click away listener
            which means when it is clicked, there will be two clicks
            occuring, one from the click away and one from the button.
            To avoid this, we must pass a reference to the button into
            the click away listener so it can ignore the click away event
            and only let the button click occur.
        */}
        <button
          onClick={() => this.togglePopOut(!showPopOut)}
          ref={ref => (this.nodeBtn = ref)}
        >
          Button 1
        </button>
        {showPopOut && (
          <ClickAwayListener
            nodeRef={this.nodeBtn}
            onClickAway={() => this.togglePopOut(false)}
          >
            <PopOutDialog
              onSave={this.saveDialog}
              onCancel={this.cancelDialog}
            />
          </ClickAwayListener>
        )}
      </div>
    );
  }
}

export default MenuButton1;
