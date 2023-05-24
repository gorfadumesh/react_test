import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const baseURL = "https://jsonplaceholder.typicode.com/albums";

  const [post, setPost] = useState([]);
  const [data, setData] = useState([]);
  const [searchVal, setSearchVal] = useState();

  useEffect(() => {
    axios.get(`${baseURL}`).then((response) => {
      setPost(response.data);
      setData(response.data);
    });
  }, []);

  const onSearch = (value) => {
    console.log(value);
    setSearchVal(value);
    var newArray = [];
    if (value) {
      var birdIndex = data.findIndex((bird) => bird.id == value);
      newArray.push(post[birdIndex]);
      console.log(newArray, "sdfsdfsdf");
      setPost(newArray);
      // console.log(post[birdIndex], "bird");
    } else {
      setPost(data);
    }
  };

  return (
    <div className="App">
      <div style={{ height: "400px" }}>
        <input
          placeholder="Search Here"
          onChange={(e) => {
            onSearch(e.target.value);
          }}
        />
        {post &&
          post.length &&
          post.map((item) => {
            return (
              <>
                <li style={{ listStyle: "none" }}>
                  {" "}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-end",
                      alignItems: "center",
                      height: "24px",
                      border: "1px solid blue",
                      background: searchVal ? "grey" : null
                    }}
                  >
                    {" "}
                    <span style={{ width: "20px" }}>{item?.userId} </span>
                    <span style={{ width: "30px" }}>{item?.id} </span>
                    <span>{item.title} </span>{" "}
                  </div>{" "}
                </li>
              </>
            );
          })}
      </div>
    </div>
  );
}
