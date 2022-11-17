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
    enlace: "https://www.tiktok.com/@restdeeppf/video/7166372414505389317?_d=secCgYIASAHKAESPgo8TI%2B7zavV2fyRRKQwEUd0h9r%2B9Hxiak54yAH5hifEVLj5VZXlSNJ%2F%2FH0u9G6ysl5GxlmdI5RnqVsm0KnjGgA%3D&_r=1&checksum=6f13c99bcd2ba06ffc468cf6077ea87cd2a159e5e0f6abb8d8dd6a402d4b5bb0&is_from_webapp=v1&item_id=7166372414505389317&language=es&preview_pb=0&sec_user_id=MS4wLjABAAAA1Ntugr_s6-z6kWvAbo5eTNA3lyZcSa5uoZso9k7MJ_fDpiu7JzX4kPPNLIkmd9v0&share_app_id=1233&share_item_id=7166372414505389317&share_link_id=ebe75179-0e1f-486f-9712-3d2a2bb371a6&source=h5_m&timestamp=1668691670&u_code=e4iiegkidke29d&user_id=7162090357646541829&utm_campaign=client_share&utm_medium=android&utm_source=copy",
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
