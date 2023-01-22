import React from "react";

class Loader extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bgrColor: "red",
      color: "white",
    };
  }

  handleClick = () => {
    this.setState({
      ...this.state,
      bgrColor: this.state.bgrColor === "red" ? "blue" : "red",
    });
  };

  render() {
    if (this.props.isLoading)
      return (
        <>
          <button onClick={this.handleClick}>Change state</button>
          <h1
            style={{
              backgroundColor: this.state.bgrColor,
              color: this.state.color,
            }}
          >
            {this.props.children}
          </h1>
        </>
      );
    else return <></>;
  }
}

export default Loader;
