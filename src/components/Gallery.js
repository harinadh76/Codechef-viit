import React from "react";

import { Box } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./Gallery.css";

import i1 from "../assets/seminars/1.jpg";
import i2 from "../assets/seminars/2.jpg";
import i3 from "../assets/seminars/3.jpg";
import i4 from "../assets/seminars/4.jpg";
import i5 from "../assets/seminars/5.jpg";
import i6 from "../assets/seminars/6.jpg";
import i7 from "../assets/seminars/7.jpg";
import i8 from "../assets/seminars/8.jpg";

const itemData = [
  {
    img: i1,
    title: "CC",
  },
  {
    img: i2,
    title: "CC",
  },
  {
    img: i3,
    title: "CC",
  },
  {
    img: i4,
    title: "CC",
  },
  {
    img: i5,
    title: "CC",
  },
  {
    img: i6,
    title: "CC",
  },
  {
    img: i7,
    title: "CC",
  },
  {
    img: i8,
    title: "CC",
  },
];

// const  Gallery = () => {
//   return (
//     <Box>
//         <ImageList sx={{ width: 500, height: 500 }} cols={2}  variant='mansory' gap={8} className='Gallery'>
//       {itemData.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             src={item.img}
//             srcSet={item.img}
//             alt={item.title}
//             loading="lazy"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>

//     </Box>
//   )
// }

const Gallery = () => {
  return (
    <Box>
      <div className="image-gallery">
        {itemData.map((item) => (
          <div className="figure">
            <img src={item.img} alt={item.title}  className="vars"/>
            {/* <figcaption>{item.title}</figcaption> */}
          </div>
        ))}
      </div>
    </Box>
  );
};

export default Gallery;
