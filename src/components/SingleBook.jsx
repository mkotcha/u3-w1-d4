import { Component } from "react";
import { Button, Card, Col } from "react-bootstrap";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col onClick={() => this.setState({ selected: !this.state.selected })}>
        <Card className="h-100" border={this.state.selected ? "danger" : ""}>
          <Card.Img variant="top" src={this.props.book.img} />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="mb-auto">{this.props.book.title}</Card.Title>
            <Card.Text className="d-flex mt-2">
              <span className="me-auto">price: </span> <span>€ {this.props.book.price} </span>
            </Card.Text>
            <Button variant="success">
              add to cart <i className="bi bi-cart-plus"></i>
            </Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">category: {this.props.book.category}</small>
          </Card.Footer>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
