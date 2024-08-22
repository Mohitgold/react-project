import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Loader from "../component/Loader";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const result = await res.json();
      setData(result);
      setLoading(false);
      //   console.log(result);
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="container">
      <h1 className="my-3">Blog</h1>
      {loading ? (
        <Loader />
      ) : (
        <div className="row gy-3">
          {data.map((items) => {
            return (
              <div className="col-12 col-md-6 col-lg-4">
                <Card key={items.id}>
                  <Card.Header as="h5">Blog {items.id}</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      <Link to={`/blog/${items.id}`}>{items.title}</Link>
                    </Card.Title>
                    <Card.Text>{items.body}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Blog;
