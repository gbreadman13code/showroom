import React, { useEffect, useRef, useState } from 'react';
import { InView } from 'react-intersection-observer';

// import { ReactComponent as DisLike } from "../../../assets/img/like-nonfill.svg";
// import { ReactComponent as Like } from "../../../assets/img/like-active.svg";
import loader from '../../../assets/img/loader.gif';

import styles from './ExhibitionImage.module.scss';
import { Link } from 'react-router-dom';
import useMobileDetect from 'use-mobile-detect-hook';
import Like from '../../elements/Like/Like';

const ExhibitionImage = ({ isLiked = false, url, author, name, id }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const [imageWidth, setImageWidth] = useState(0);
  const [isLoadImage, setIsLoad] = useState(false);

  const imageWidthRef = useRef();

  useEffect(() => {
    if (imageWidthRef.current && isLoadImage) {
      setImageWidth(imageWidthRef.current.getBoundingClientRect().width);
    }
  }, [imageWidthRef, isLoadImage]);

  return (
    <InView threshold={0} triggerOnce={true}>
      {({ inView, ref, entry }) => (
        <div ref={ref}>
          <div data-status={inView ? 'show' : 'hide'} className={styles.picture_wrapper}>
            <Link to={'/gallery/profile/' + id}>
              <div>
                <img
                  src={isLoadImage ? 'https://place.industry.art' + url : loader}
                  alt={author}
                  style={isMobile ? { maxWidth: '94%' } : { maxWidth: '100%' }}
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
        </div>
      )}
    </InView>
  );
};

export default ExhibitionImage;
