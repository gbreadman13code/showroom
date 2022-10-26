import React, { useRef, useState } from "react";
import search from "../../../assets/img/search.svg";

import styles from "./SearchField.module.scss";

const SearchField = ({ onChange }) => {
  const [value, setValue] = useState("");
  const [isShowField, setIsShowField] = useState(false);

  const inputRef = useRef(null);

  const changeHandler = (event) => {
    setValue(event.target.value);
  };
  const hideSearchField = () => {
    if (value) return;
    setIsShowField(false);
  };
  const showSearchField = () => {
    setIsShowField(true)
    inputRef.current.focus();
  }

  return (
    <div className={styles.SearchField}>
      <input
        ref={inputRef}
        className={!isShowField ? styles.hideField : ''}
        type="text"
        placeholder="Поиск"
        value={value}
        onChange={changeHandler}
        onBlur={hideSearchField}
      />
      <img src={search} alt="search" onClick={showSearchField} />
    </div>
  );
};

export default SearchField;
