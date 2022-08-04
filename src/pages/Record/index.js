import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ErrorBox from "../../components/ErrorBox";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import styles from "./styles.module.scss";
import { dateFormat } from "../../helpers/dateFormat";
import { formValidation } from "../../helpers/formValidation";
import {
  setErrorBarActive,
  setNewRecord,
} from "../../features/search/searchSlice";
function Record() {
  const [records, setRecords] = useState({
    name: "",
    country: "",
    city: "",
    email: "",
    //date: dateFormat(new Date()),
  });
  const [barErrors, setBarErrors] = useState({});
  // const [errorBarActive, setErrorBarActive] = useState(false);
  const { items, errorBarActive } = useSelector((state) => state.search);
  const valList = [
    {
      labelText: "Name Surname",
      name: "name",
      val: records.name,
      placeholder: "Enter name and surname",
      errorMessage: barErrors.name,
    },
    {
      labelText: "Country",
      name: "country",
      val: records.country,
      placeholder: "Enter a country name",
      errorMessage: barErrors.country,
    },
    {
      labelText: "City",
      name: "city",
      val: records.city,
      placeholder: "Enter a city name",
      errorMessage: barErrors.city,
    },
    {
      labelText: "E-mail",
      name: "email",
      val: records.email,
      placeholder: "Enter an e-mail (abc@xyz.com)",
      errorMessage: barErrors.email,
    },
  ];
  const dispatch = useDispatch();
  const onClickHandler = (event) => {
    event.preventDefault();
    setBarErrors(formValidation(records));
    const errorExist = Object.keys(barErrors).length >= 1;
    if (!errorExist) {
      //console.log("KAYIT EKLENEBİLİR");
      //console.log(records);
      const newRecord = [
        records.name,
        "Unknown Company",
        records.email,
        "29.11.2022",
        records.country,
        records.city,
      ];
      dispatch(setNewRecord(newRecord));
      dispatch(setErrorBarActive(false));
      //console.log(items);
    } else {
      //console.log("girmesi gerek");
      dispatch(setErrorBarActive(true));
    }
  };

  useEffect(() => {
    console.log("errorBarActive: ", errorBarActive);
  }, [errorBarActive]);

  const onChangeHandler = (event) => {
    setRecords({ ...records, [event.target.name]: event.target.value });
  };
  return (
    <div className={styles.recordWrapper}>
      <div className={styles.header}>
        <Logo />
        <Link to="/">
          <button>Return to List Page</button>
        </Link>
      </div>

      <div className={styles.content}>
        {valList.map((item) => (
          <Input
            name={item.name}
            value={item.val}
            placeholder={item.placeholder}
            onChange={onChangeHandler}
            label={item.labelText}
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
