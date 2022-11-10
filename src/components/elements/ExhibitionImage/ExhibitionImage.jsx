import React, { useEffect, useRef, useState } from "react";

// import { ReactComponent as DisLike } from "../../../assets/img/like-nonfill.svg";
// import { ReactComponent as Like } from "../../../assets/img/like-active.svg";
import loader from "../../../assets/img/loader.gif";

import styles from "./ExhibitionImage.module.scss";
import { Link } from "react-router-dom";
import useMobileDetect from "use-mobile-detect-hook";
import Like from "../../elements/Like/Like";

const ExhibitionImage = ({ isLiked = false, url, author, name, id }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const [imageWidth, setImageWidth] = useState(0);
  const [isLoadImage, setIsLoad] = useState(false);

  const imageWidthRef = useRef();

  // const setLike = (id) => {
  //   console.log(id)
  // }

  useEffect(() => {
    if (imageWidthRef.current && isLoadImage) {
      setImageWidth(imageWidthRef.current.getBoundingClientRect().width);
    }
  }, [imageWidthRef, isLoadImage]);

  return (
    <div
      className={
        isMobile
          ? styles.mobile_picture_wrapper
          : [`${styles.picture_wrapper} ${styles.hide_image}`]
      }
    >
      <Link to={"/profile/" + id}>
        <div>
          <img
            src={isLoadImage ? "https://place.industry.art" + url : loader}
            alt={author}
            style={isMobile ? { maxWidth: "94%" } : { maxWidth: "100%" }}
            ref={imageWidthRef}
            onLoad={() => setIsLoad(true)}
            className={styles.image}
          />
        </div>
      </Link>

      {isLoadImage && (
        <div className={styles.picture_info}>
          <div>
            <p>{author}</p>
            <p>{name}</p>
          </div>
          {/* <Like /> */}
          {/* {isLiked ? (
            <Like onClick={() => setLike(id)} />
          ) : (
            <DisLike onClick={() => setLike(id)} />
          )} */}
        </div>
      )}
    </div>
  );
};

export default ExhibitionImage;
