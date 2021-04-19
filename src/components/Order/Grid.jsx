import React, { Component } from "react";
import { useSelector } from "react-redux";
import "./Grid.css";
import Image from "./Image";

const Grid = (props) => {
  const increaseCount = useSelector((state) => state.images);
  const decreaseCount = useSelector((state) => state.images);
  return (
    <>
      <div className="grid-container">
        {props.images.map((image) => {
          return (
            <Image
              onDelete={props.onDelete}
              increaseCount={() => props.increaseCount(image)}
              decreaseCount={() => props.decreaseCount(image)}
              key={image.id}
              id={image.id}
              image={image}
            />
          );
        })}
      </div>
    </>
  );
};

export default Grid;
