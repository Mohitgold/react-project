import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";

const SingleBlog = () => {
  const { id } = useParams();
  console.log(id);
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const result = await res.json();
      setPost(result);
      //   console.log(result);
    };
    fetchData();
  }, []);
  console.log(post);
  return (
    <div className="container">
      <div className="row p-5 justify-content-center">
        <div className="col-md-6">
          <Card>
            <Card.Header as="h5">Blog {id}</Card.Header>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>{post.body}</Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
