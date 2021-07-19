import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard image={image} key={image.id}/>
    })
    return <div className="image-list" style={{minHeight: "600px"}}>{images}</div>;
}

export default ImageList;