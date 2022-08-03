import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import ErrorBox from "../../components/ErrorBox";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import styles from "./styles.module.scss";
function Record() {
  return (
    <div className={styles.recordWrapper}>
      <div className={styles.header}>
        <Logo />
        <Link to="/">
          <button>Return to List Page</button>
        </Link>
      </div>
      <div className={styles.content}>
        <Input label="Name Surname" placeholder="Enter name and surname" />
        <Input label="Country" placeholder="Enter a country" />
        <Input label="City" placeholder="Enter a city" />
        <Input label="Email" placeholder="Enter a e-mail (abc@xyz.com)" />

        <Button>Add</Button>
      </div>
      <div className={styles.errorMessage}>
        <ErrorBox />
      </div>
    </div>
  );
}

export default Record;
