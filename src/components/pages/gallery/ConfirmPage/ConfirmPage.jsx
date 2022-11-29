import React, { useEffect, useState } from 'react';
import PageTemplate from '../../../templates/PageTemplate';
import Container from '../../../templates/Container';

import styles from './ConfirmPage.module.scss';
import { getPaymentInfo } from '../../../../redux/requests/getPaymentInfo';

import { ReactComponent as SuccessIcon } from '../../../../assets/img/success.svg';
import { useNavigate } from 'react-router-dom';

import useMobileDetect from 'use-mobile-detect-hook';

const ConfirmPage = ({ localStorageVariableName, url, orderDict }) => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const [answer, setAnswer] = useState(false);
  const navigate = useNavigate();

  const clearStorage = () => {
    window.localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    if (window.localStorage[localStorageVariableName]) {
      getPaymentInfo(url, localStorageVariableName).then((res) => {
        if (!res) {
          navigate('/gallery');
          return;
        }
        setAnswer(res);
      });
    }
  }, [navigate]);

  return (
    <PageTemplate orderLink='/gallery/order' orderDict={orderDict}>
      <Container>
        <div className={styles.confirm_wrapper}>
          {answer && (
            <>
              <div style={!isMobile ? { padding: '0 300px' } : undefined} className={styles.answer_wrapper}>
                <SuccessIcon />
                <p>Ваш заказ успешно оформлен!</p>
                <p>В ближайшее время с вами свяжутся!</p>
                <p>
                  Уточнить нюансы можно, написав на почту{' '}
                  <a href='mailto:place@industry.art' style={{ color: 'inherit' }}>
                    place@industry.art
                  </a>{' '}
                </p>
                <button onClick={clearStorage}> Вернуться на главную страницу </button>
              </div>
            </>
          )}
        </div>
      </Container>
    </PageTemplate>
  );
};

export default ConfirmPage;
