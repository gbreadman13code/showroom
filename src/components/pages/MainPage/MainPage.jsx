import React, { useEffect, useState } from "react";
import Container from "../../templates/Container";
import PageTemplate from "../../templates/PageTemplate";

import styles from "./MainPage.module.scss";
import { useSelector } from "react-redux";
import MainPageContent from "./MainPaigeComponents/MainPageContent";
import ColorWrapper from "../../elements/ColorWrapper/ColorWrapper";
import MasonryBlock from "../../elements/MasonryBlock/MasonryBlock";
import ExhibitionImage from "../../elements/ExhibitionImage/ExhibitionImage";
import MobileMainPageContent from "./MainPaigeComponents/MobileMainPageContent";
import useMobileDetect from "use-mobile-detect-hook";

const MainPage = () => {
  const [exhibitions, setExhibitions] = useState(false);

  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const data = useSelector((state) => state.exhibitions.exhibitions);

  const colors = ["#4F4B98", "#F0E400", "#2CA99B", "#D6358C"];

  useEffect(() => {
    if (data.length > 0) {
      setExhibitions(data);
    }
  }, [data]);

  return (
    <PageTemplate>
      <Container>
        {exhibitions &&
          (isMobile ? (
            <MobileMainPageContent data={exhibitions[0]} />
          ) : (
            <MainPageContent data={exhibitions[0]} />
          ))}
      </Container>
      {isMobile ? (
        <div className={styles.mobile_paletteWrapper}>
          <div className={styles.palette_bg}></div>
        </div>
      ) : (
        <div className={styles.paletteWrapper}>
          <div className={styles.palette_bg}></div>
        </div>
      )}
      {/* Меньше 9 работ - 1 экран */}
      {exhibitions &&
        exhibitions[0].pictures.length > 0 &&
        exhibitions[0].pictures.length <= 9 && (
          <ColorWrapper color={"#4F4B98"}>
            <MasonryBlock>
              {exhibitions[0].pictures.map((item, index) => (
                <ExhibitionImage
                  url={item.thumbnail}
                  author={item.author}
                  name={item.title}
                />
              ))}
            </MasonryBlock>
          </ColorWrapper>
        )}
      {/* Меньше 18 работ - 2 экрана */}
      {exhibitions &&
        exhibitions[0].pictures.length > 9 &&
        exhibitions[0].pictures.length <= 17 && (
          <>
            <ColorWrapper color={"#4F4B98"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index <= 8 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#F0E400"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 8 &&
                    index <= 17 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>
          </>
        )}
      {/* Меньше 27 работ - 3 экрана */}

      {exhibitions &&
        exhibitions[0].pictures.length > 17 &&
        exhibitions[0].pictures.length <= 26 && (
          <>
            <ColorWrapper color={"#4F4B98"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index <= 8 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#F0E400"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 8 &&
                    index <= 17 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#2CA99B"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 17 &&
                    index <= 26 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>
          </>
        )}
      {/* Меньше 36 работ - 4 экрана */}
      {exhibitions &&
        exhibitions[0].pictures.length > 26 &&
        exhibitions[0].pictures.length <= 35 && (
          <>
            <ColorWrapper color={"#4F4B98"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index <= 8 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#F0E400"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 8 &&
                    index <= 17 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#2CA99B"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 17 &&
                    index <= 26 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#D6358C"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 26 &&
                    index <= 35 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>
          </>
        )}

      {exhibitions &&
        exhibitions[0].pictures.length > 35 &&
        exhibitions[0].pictures.length <= 44 && (
          <>
            <ColorWrapper color={"#4F4B98"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index <= 8 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#F0E400"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 8 &&
                    index <= 17 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#2CA99B"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 17 &&
                    index <= 26 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#D6358C"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 26 &&
                    index <= 35 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#4F4B98"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 35 &&
                    index <= 44 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>
          </>
        )}

      {exhibitions &&
        exhibitions[0].pictures.length > 44 &&
        exhibitions[0].pictures.length <= 53 && (
          <>
            <ColorWrapper color={"#4F4B98"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index <= 8 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#F0E400"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 8 &&
                    index <= 17 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#2CA99B"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 17 &&
                    index <= 26 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#D6358C"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 26 &&
                    index <= 35 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#4F4B98"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 35 &&
                    index <= 44 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#F0E400"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 44 &&
                    index <= 53 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>
          </>
        )}

{exhibitions &&
        exhibitions[0].pictures.length > 53 &&
        exhibitions[0].pictures.length <= 62 && (
          <>
            <ColorWrapper color={"#4F4B98"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index <= 8 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#F0E400"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 8 &&
                    index <= 17 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#2CA99B"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 17 &&
                    index <= 26 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#D6358C"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 26 &&
                    index <= 35 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#4F4B98"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 35 &&
                    index <= 44 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#F0E400"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 44 &&
                    index <= 53 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>

            <ColorWrapper color={"#D6358C"}>
              <MasonryBlock>
                {exhibitions[0].pictures.map(
                  (item, index) =>
                    index > 53 &&
                    index <= 62 && (
                      <ExhibitionImage
                        key={index}
                        url={item.thumbnail}
                        author={item.author}
                        name={item.title}
                        id={item.id}
                      />
                    )
                )}
              </MasonryBlock>
            </ColorWrapper>
          </>
        )}
    </PageTemplate>
  );
};

export default MainPage;
