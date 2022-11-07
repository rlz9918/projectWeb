import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './galery-style.css'
import igPost1 from "../../../assets/Banner/InstagramPost_1.png"
import igPost2 from "../../../assets/Banner/InstagramPost_2.png"
import igPost3 from "../../../assets/Banner/InstagramPost_3.png"
import igPost4 from "../../../assets/Banner/InstagramPost_4.png"
import igPost5 from "../../../assets/Banner/InstagramPost_5.png"
import igPost6 from "../../../assets/Banner/InstagramPost_6.png"
export default function WovenImageList(props) {
  
  return (
    <div class='container-img-list' id='galery' ref={props.reference}>
    <ImageList sx={{ width: '80%', height: '45em' }} variant="woven" cols={3} gap={8}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=161&fit=crop&auto=format`}
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
  );
}

const itemData = [
  {
    img: igPost1,
    title: 'Bed',
  },
  {
    img: igPost2,
    title: 'Kitchen',
  },
  {
    img: igPost3,
    title: 'Sink',
  },
  {
    img: igPost4,
    title: 'Books',
  },
  {
    img: igPost5,
    title: 'Chairs',
  },
  {
    img: igPost6,
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
];
