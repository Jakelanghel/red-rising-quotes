import Dropdown from "react-bootstrap/Dropdown";
import { nanoid } from "nanoid";

const BooksDropDown = (props) => {
  const { allBooks } = props;
  let modifiedBooks = [];

  if (allBooks) {
    modifiedBooks = [...allBooks, { title: "All", slug: "all-books" }];
    return modifiedBooks.map((book) => (
      <Dropdown.Item eventKey={book.slug} key={nanoid()}>
        {book.title}
      </Dropdown.Item>
    ));
  } else {
    return null;
  }
};

export default BooksDropDown;
