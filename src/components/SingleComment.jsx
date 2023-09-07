import { ListGroup } from "react-bootstrap";

const SingleComment = props => {
  return <ListGroup.Item>{props.comment.comment}</ListGroup.Item>;
};

export default SingleComment;
