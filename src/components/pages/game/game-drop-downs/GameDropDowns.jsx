import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import BooksDropDown from "./books-dropdown/BooksDropDown";

const GameDropDowns = (props) => {
  const { allBooks, handleBookSelect, handleLengthSelect } = props;
  return (
    <div className="d-flex flex-row justify-content-center align-items-center gap-2">
      <Dropdown onSelect={handleBookSelect}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Select Book
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <BooksDropDown allBooks={allBooks} />
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown onSelect={handleLengthSelect}>
        <Dropdown.Toggle variant="primary" id="dropdown-basic">
          Select length
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item eventKey={5}>5 questions</Dropdown.Item>
          <Dropdown.Item eventKey={10}>10 questions</Dropdown.Item>
          <Dropdown.Item eventKey={15}>15 questions</Dropdown.Item>
          <Dropdown.Item eventKey={20}>20 questions</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default GameDropDowns;
