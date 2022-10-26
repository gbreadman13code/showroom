import React from "react";
import Container from "../../templates/Container";
import PageTemplate from "../../templates/PageTemplate";

import styles from "./WishListPage.module.scss";

const WishListPage = () => {
  return (
    <PageTemplate>
      <Container>
        <div>Избранное</div>
      </Container>
    </PageTemplate>
  );
};

export default WishListPage;
