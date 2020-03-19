import React from "react";
import classnames from "classnames";

class ClickAwayListener extends React.Component {
  // Stores a reference to the containing node
  // This is used when checking where a click is coming from
  node = undefined;

  handleClickAway = e => {
    // Check if the click came from inside the click away container
    // If it did, do nothing
    if (this.node.contains(e.target)) return;

    // Check if the click came from inside an additional node reference
    // If it did, do nothing
    if (this.props.nodeRef && this.props.nodeRef.contains(e.target)) return;

    // Otherwise, the click happened outside of the click away container
    // So lets execute the click away function
    this.props.onClickAway();
  };

  componentDidMount() {
    // When the component mounts, register a click event that processes the click away
    window.addEventListener("click", this.handleClickAway, true);
  }

  componentWillUnmount() {
    // When the component unmounts, remove the click event that processes the click away
    window.removeEventListener("click", this.handleClickAway, true);
  }

  render() {
    return (
      <div
        ref={ref => (this.node = ref)}
        className={classnames(this.props.className)}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ClickAwayListener;
