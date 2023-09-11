import { Component } from "react";

import Jumbo from "./Jumbo";
import MyNav from "./MyNav";
import fantasy from "../data/fantasy.json";
import history from "../data/history.json";
import horror from "../data/horror.json";
import romance from "../data/romance.json";
import scifi from "../data/scifi.json";
import { Col, Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    category: "scifi",
    filter: "",
    selected: "",
    books: [],
  };

  fakeFetch = category => {
    this.setState({ category });
    this.setState({ selected: "" });

    switch (category) {
      case "fantasy":
        this.setState({ books: fantasy });
        break;
      case "history":
        this.setState({ books: history });
        break;
      case "horror":
        this.setState({ books: horror });
        break;
      case "romance":
        this.setState({ books: romance });
        break;
      case "scifi":
        this.setState({ books: scifi });
        break;

      default:
        this.setState({ books: [...fantasy, ...history, ...horror, ...romance, ...scifi] });
        break;
    }

    
    const filtered = await this.state.books.filter(
      elm => elm.title.toLowerCase().includes(this.state.filter.toLowerCase()) >= 1
    );
    console.log(this.state.books);
    //   //   this.setState({
    //   //     books: this.state.books.filter(elm => elm.title.toLowerCase().includes(this.state.filter.toLowerCase()) >= 1),
  };

  fakeSearch = filter => {
    this.setState({ filter });
    this.setState({ selected: "" });
  };
  selectBook = id => {
    this.setState({ selected: id });
  };

  componentDidMount = () => {
    this.fakeFetch("horror");
  };

  render() {
    return (
      <>
        <MyNav fakeSearch={this.fakeSearch} />
        <Jumbo fakeFetch={this.fakeFetch} />
        <Container>
          <Row>
            <Col>
              <Row xs={2} md={3} lg={4} xl={5} xxl={6} className="g-4">
                {this.state.books.map((book, index) => (
                  <SingleBook
                    book={book}
                    key={book.asin + index}
                    id={book.asin}
                    select={this.selectBook}
                    selected={this.state.selected}
                  />
                ))}
              </Row>
            </Col>
            <Col sm="3">{this.state.selected && <CommentArea id={this.state.selected} />}</Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default BookList;
