import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ErrorBox from "../../components/ErrorBox";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import styles from "./styles.module.scss";
import { dateFormatCurrent } from "../../helpers/dateFormat";
import { formValidation } from "../../helpers/formValidation";
import {
  setErrorBarActive,
  setNewRecord,
} from "../../features/search/searchSlice";
import { formNullCheck } from "../../helpers/formNullCheck";
import returnBack from "../../assets/return-back.svg";
function Record() {
  const [records, setRecords] = useState({
    name: "",
    country: "",
    city: "",
    email: "",
    date: new Date().toLocaleDateString(),
  });
  const [readyForAdd, setReadyForAdd] = useState(false);
  const [barErrors, setBarErrors] = useState({});
  const [inputErrors, setInputErrors] = useState([]);
  // const [errorBarActive, setErrorBarActive] = useState(false);
  const { items, errorBarActive } = useSelector((state) => state.search);

  const valList = [
    {
      labelText: "Name Surname",
      name: "name",
      val: records.name,
      placeholder: "Enter name and surname",
      errorMessage: barErrors.name,
      isNull: inputErrors.name,
    },
    {
      labelText: "Country",
      name: "country",
      val: records.country,
      placeholder: "Enter a country name",
      errorMessage: barErrors.country,
      isNull: inputErrors.country,
    },
    {
      labelText: "City",
      name: "city",
      val: records.city,
      placeholder: "Enter a city name",
      errorMessage: barErrors.city,
      isNull: inputErrors.city,
    },
    {
      labelText: "E-mail",
      name: "email",
      val: records.email,
      placeholder: "Enter an e-mail (abc@xyz.com)",
      errorMessage: barErrors.email,
      isNull: inputErrors.email,
    },
  ];
  const dispatch = useDispatch();
  const onClickHandler = (event) => {
    event.preventDefault();
    setBarErrors(formValidation(records));
    setInputErrors(formNullCheck(records));

    const validationErrorExist = Object.keys(barErrors).length >= 1;
    const nullErrorExist = Object.keys(inputErrors).length >= 1;
    //console.log("input Error exist?", inputErrors);

    if (validationErrorExist || nullErrorExist) {
      if (nullErrorExist) {
        console.log("inputlar null");
      }
      if (validationErrorExist) {
        dispatch(setErrorBarActive(true));
      }
    } else {
      const newRecord = [
        records.name,
        "Unknown Company",
        records.email,
        records.date,
        records.country,
        records.city,
      ];
      dispatch(setNewRecord(newRecord));
      dispatch(setErrorBarActive(false));
    }
  };

  // useEffect(() => {
  //   let isReady = Object.values(records).every((x) => (x ? true : false));
  //   setReadyForAdd(isReady);
  //   console.log("isReady", isReady);
  // }, [records]);

  const onChangeHandler = (event) => {
    setRecords({ ...records, [event.target.name]: event.target.value });
  };
  return (
    <div className={styles.recordWrapper}>
      <div className={styles.header}>
        <Logo />
        <div className={styles.backBtnWrapper}>
          <Link to="/">
            <img src={returnBack} alt="return-back" />
            <button>Return to List Page</button>
          </Link>
        </div>
      </div>

      <div className={styles.content}>
        {valList.map((item, index) => (
          <Input
            name={item.name}
            value={item.val}
            placeholder={item.placeholder}
            onChange={onChangeHandler}
            label={item.labelText}
            error={item.isNull}
            key={index}
          />
        ))}
        <Button onClick={onClickHandler}>Add</Button>
      </div>

      <div className={styles.errorMessage}>
        {errorBarActive && <ErrorBox error={barErrors} />}
      </div>
    </div>
  );
}

export default Record;
