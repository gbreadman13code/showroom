import React, { useState } from 'react';
import styles from './PartnersProfile.module.scss';
import useMobileDetect from 'use-mobile-detect-hook';

import PartnersCard from '../PartnersCard/PartnersCard';
import PartnersDescription from '../PartnersDescription/PartnersDescription';

const PartnersProfile = ({ partners }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();
  let [activePartner, _setActivePartner] = useState(0);
  // let mockArray = [
  //   {
  //     id: 1,
  //     title: 'Дизайн студия Анны Григорьевой',
  //     cropped_image:
  //       'https://gas-kvas.com/uploads/posts/2022-09/1663342133_2-gas-kvas-com-p-kunitsa-ptitsa-foto-2.jpg',
  //     vk_link: 'https://vk.com/id103629234',
  //     tg_link: 'https://t.me/GrigorevaAnnastudio',
  //     site_link: null,
  //     promotions:
  //       'Для современного мира курс на социально-ориентированный национальный проект не оставляет шанса для позиций, занимаемых участниками в отношении поставленных задач. Однозначно, независимые государства в равной степени предоставлены сами себе. А ещё ключевые особенности структуры проекта, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.',
  //   },
  //   {
  //     id: 2,
  //     title: 'Центр современных искусств “Ядро”',
  //     cropped_image:
  //       'https://otvet.imgsmail.ru/download/246352830_cd2e118265959c26a53b25f4976bacf3_800.jpg',
  //     vk_link: 'https://vk.com/id103629234',
  //     tg_link: 'https://t.me/GrigorevaAnnastudio',
  //     site_link: null,
  //     promotions:
  //       'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: перспективное планирование однозначно фиксирует необходимость первоочередных требований. Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований.',
  //   },
  //   {
  //     id: 3,
  //     title: 'Студия актёрского мастерства “Гримёрка”',
  //     cropped_image:
  //       'https://lh3.googleusercontent.com/3horGfGKF5tlDbl26xI6AWahahI090hPNASMYA2i3Ati-7QprA8VkF1XWMCPazpetFmTvtB5jvg6k8bDCblYUdY=w948-h500-p',
  //     vk_link: 'https://vk.com/id103629234',
  //     tg_link: 'https://t.me/GrigorevaAnnastudio',
  //     site_link: null,
  //     promotions:
  //       'Задача организации, в особенности же курс на социально-ориентированный национальный проект, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для дальнейших направлений развития.',
  //   },
  //   {
  //     id: 4,
  //     title: 'Центр современных искусств “Ядро”',
  //     cropped_image:
  //       'https://otvet.imgsmail.ru/download/246352830_cd2e118265959c26a53b25f4976bacf3_800.jpg',
  //     vk_link: 'https://vk.com/id103629234',
  //     tg_link: 'https://t.me/GrigorevaAnnastudio',
  //     site_link: 'https://google.com',
  //     promotions:
  //       'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: перспективное планирование однозначно фиксирует необходимость первоочередных требований. Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований.',
  //   },
  //   {
  //     id: 5,
  //     title: 'Дизайн студия Анны Григорьевой',
  //     cropped_image:
  //       'https://gas-kvas.com/uploads/posts/2022-09/1663342133_2-gas-kvas-com-p-kunitsa-ptitsa-foto-2.jpg',
  //     vk_link: 'https://vk.com/id103629234',
  //     tg_link: 'https://t.me/GrigorevaAnnastudio',
  //     site_link: null,
  //     promotions:
  //       'Для современного мира курс на социально-ориентированный национальный проект не оставляет шанса для позиций, занимаемых участниками в отношении поставленных задач. Однозначно, независимые государства в равной степени предоставлены сами себе. А ещё ключевые особенности структуры проекта, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.',
  //   },
  // ];
  let setActivePartner = (id) => {
    _setActivePartner(id);
  };
  return (
    <div
      className={
        isMobile
          ? `${styles.profile} ${styles.profile__mobile}`
          : styles.profile
      }
    >
      {/* {isMobile ? } */}
      <div
        className={
          isMobile ? `${styles.cards} ${styles.cards__mobile}` : styles.cards
        }
      >
        {partners.map((item) => {
          return (
            <PartnersCard
              key={item.id}
              image={item.cropped_image}
              title={item.title}
              vk={item.vk_link}
              telegram={item.tg_link}
              website={item.site_link}
              setActivePartner={setActivePartner}
              id={item.id}
            />
          );
        })}
      </div>

      <div
        className={
          isMobile ? `${styles.desc} ${styles.desc__mobile}` : styles.desc
        }
      >
        <p
          className={
            isMobile
              ? `${styles.actions} ${styles.actions__mobile}`
              : styles.actions
          }
        >
          Акции
        </p>

        {partners.filter((par) => par.id === activePartner)[0]?.promotions}
      </div>
    </div>
  );
  //
};

export default PartnersProfile;
