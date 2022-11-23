import React from 'react';
import styles from './PartnersProfile.module.scss';
import useMobileDetect from 'use-mobile-detect-hook';

const PartnersProfile = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  let mockArray = [
    {
      title: 'Дизайн студия Анны Григорьевой',
      cropped_image:
        'https://gas-kvas.com/uploads/posts/2022-09/1663342133_2-gas-kvas-com-p-kunitsa-ptitsa-foto-2.jpg',
      vk_link: 'https://vk.com/id103629234',
      tg_link: 'https://t.me/GrigorevaAnnastudio',
      site_link: null,
      promotions:
        'Для современного мира курс на социально-ориентированный национальный проект не оставляет шанса для позиций, занимаемых участниками в отношении поставленных задач. Однозначно, независимые государства в равной степени предоставлены сами себе. А ещё ключевые особенности структуры проекта, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут рассмотрены исключительно в разрезе маркетинговых и финансовых предпосылок.',
    },
    {
      title: 'Центр современных искусств “Ядро”',
      cropped_image:
        'https://otvet.imgsmail.ru/download/246352830_cd2e118265959c26a53b25f4976bacf3_800.jpg',
      vk_link: 'https://vk.com/id103629234',
      tg_link: 'https://t.me/GrigorevaAnnastudio',
      site_link: null,
      promotions:
        'Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: перспективное планирование однозначно фиксирует необходимость первоочередных требований. Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть подвергнуты целой серии независимых исследований.',
    },
    {
      title: 'Студия актёрского мастерства “Гримёрка”',
      cropped_image:
        'https://lh3.googleusercontent.com/3horGfGKF5tlDbl26xI6AWahahI090hPNASMYA2i3Ati-7QprA8VkF1XWMCPazpetFmTvtB5jvg6k8bDCblYUdY=w948-h500-p',
      vk_link: 'https://vk.com/id103629234',
      tg_link: 'https://t.me/GrigorevaAnnastudio',
      site_link: null,
      promotions:
        'Задача организации, в особенности же курс на социально-ориентированный национальный проект, а также свежий взгляд на привычные вещи — безусловно открывает новые горизонты для дальнейших направлений развития.',
    },
  ];

  return mockArray.map((item) => {
    return (
      <div
        className={
          isMobile
            ? `${styles.profile} ${styles.profile__mobile}`
            : styles.profile
        }
      >
        <img
          className={
            isMobile ? `${styles.image} ${styles.image__mobile}` : styles.image
          }
          src={item.cropped_image}
          alt=""
          width={isMobile ? '222' : '155'}
          height={isMobile ? '222' : '155'}
        />

        <h3
          className={
            isMobile ? `${styles.name} ${styles.name__mobile}` : styles.name
          }
        >
          {item.title}
        </h3>
        <ul
          className={
            isMobile
              ? `${styles.social_list} ${styles.social_list__mobile}`
              : styles.social_list
          }
        >
          <li>
            <a href={item.vk_link}></a>
          </li>
          <li>
            <a href={item.tg_link}></a>
          </li>
          <li>
            <a href={item.site_link}></a>
          </li>
        </ul>
      </div>
    );
  });
};

export default PartnersProfile;
