import styles from "./styles.module.scss";
import locationStock from "../../assets/location-stock.svg";
function AdressBox() {
  return (
    <div className={styles.adress}>
      <img src={locationStock} alt="location-stock" />
      <span className={styles.adressText}>
        <span className={styles.contactTag}>İletişim </span>
        <span className={styles.fullAdress}>
          Adres: Çifte Havuzlar Mah. Eski Londra Asfaltı Cad. Kuluçka Merkezi D2
          Blok No: 151/1F İç Kapı No: 2B03 Esenler/İstanbul
        </span>
        <span className={styles.emailTag}>Email: bilgi@tesodev.com</span>
      </span>
    </div>
  );
}

export default AdressBox;
