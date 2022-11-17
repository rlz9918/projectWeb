import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./galery-style.css";
import igPost1 from "../../../assets/Banner/Album_Por_un_momento.png";
import igPost2 from "../../../assets/Banner/Album_karma.png";
import igPost3 from "../../../assets/Banner/Album_Pronto_lo_entenderas.png";
import igPost4 from "../../../assets/Banner/InstagramPost_12.png";
import igPost5 from "../../../assets/Banner/Album_I_Need_A_Change.png";
import igPost6 from "../../../assets/Banner/InstagramPost_10.png";
import igPost7 from "../../../assets/Banner/Album_A_mi_lado.png";
import igPost8 from "../../../assets/Banner/Album_Desiguales.png";
import igPost9 from "../../../assets/Banner/Album_Por_un_momento(1).png";
import discografia from "../../../assets/Banner/discografia.png";
import { Box } from "@mui/material";
export default function WovenImageList(props) {
  return (
    <div class="container-img-list" id="galery" ref={props.reference}>
      <img src={discografia} alt="discografia" class="discografia-img" />
      <Box component="h3" color='white'>
        Vuelcan las experiencias vividas a las letras, y el sonido es limpio,
        enfatizan y refuerzan los sentimientos, navegando en forma profunda en
        la soledad, la incompresión del resto, pero amando a pesar de todo.
      </Box>
      <ImageList
        variant="masonry"
        sx={{
          display: "grid",
          gridTemplateRows: "repeat(3, 1fr)",
          gridTemplateColumns: "repeat(3, 1fr)",
          columnGap: "1em",
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} component="a" href={item.enlace}>
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
    title: "Bed",
    enlace: "https://www.tiktok.com/@restdeeppf/video/7164513602110590214?is_copy_url=1&is_from_webapp=v1&lang=es",
  },
  {
    img: igPost2,
    title: "Kitchen",
    enlace: "https://www.instagram.com/p/ClCr_Yzup5-/",
  },
  {
    img: igPost3,
    title: "Sink",
    enlace: "https://www.instagram.com/p/ClAFjBGvJ6F/",
  },
  {
    img: igPost4,
    title: "Books",
    enlace: "https://www.instagram.com/p/Ckhm87XNRl_/",
  },
  {
    img: igPost5,
    title: "Chairs",
    enlace: "https://www.instagram.com/p/Ck_3cZxgpqf/",
  },
  {
    img: igPost6,
    title: "Candle",
    enlace: "https://www.instagram.com/p/Ckhmmc3t2wj/",
  },
  {
    img: igPost7,
    title: "Laptop",
    enlace: "https://www.tiktok.com/@restdeeppf/video/7166973905163324677?is_from_webapp=v1&item_id=7166973905163324677",
  },
  {
    img: igPost8,
    title: "Doors",
    enlace: "https://www.instagram.com/p/ClD5-TOgwN0/"
  },
  {
    img: igPost9,
    title: "Coffee",
    enlace: "https://www.instagram.com/p/ClDxfCardhX/",
  },
];
