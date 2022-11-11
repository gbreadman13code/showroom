import React, { useEffect, useState } from 'react';
import PageTemplate from '../../../templates/PageTemplate';
import Container from '../../../templates/Container';

import styles from './ConfirmPage.module.scss';
import { getPaymentInfo } from '../../../../redux/requests/getPaymentInfo';

import { ReactComponent as SuccessIcon } from '../../../../assets/img/success.svg';
import { Link, useNavigate } from 'react-router-dom';

import useMobileDetect from 'use-mobile-detect-hook';

const ConfirmPage = () => {
  const detectMobile = useMobileDetect();
  const isMobile = detectMobile.isMobile();

  const [answer, setAnswer] = useState(false);
  const navigate = useNavigate();

  const clearStorage = () => {
    window.localStorage.clear();
    navigate('/');
  };

  useEffect(() => {
    if (window.localStorage.paymentsIndustry) {
      getPaymentInfo().then((res) => {
        if (!res) {
          navigate('/');
          return;
        }
        setAnswer(res);
      });
    }
  }, []);

  return (
    <PageTemplate>
      <Container>
        <div className={styles.confirm_wrapper}>
          {answer && (
            <>
              <div style={!isMobile ? { padding: '0 300px' } : undefined} className={styles.answer_wrapper}>
                <SuccessIcon />
                <p>Ваш заказ успешно оформлен!</p>
                <p>
                  Забрать работу вы сможете по завершении выставки после 18 ноября по адресу Красной Армии 10/3, офис
                  302.{' '}
                </p>
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
