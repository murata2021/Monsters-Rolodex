import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    const { onChangeHandler, className, placeholder } = this.props;
    return (
      <>
        <input
          className={className} //"search-box"
          type="search"
          placeholder={placeholder} //"search monsters"
          onChange={onChangeHandler}
        />
      </>
    );
  }
}

export default SearchBox;
