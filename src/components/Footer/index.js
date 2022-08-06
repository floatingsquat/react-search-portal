import AdressBox from "../AdressBox";
import styles from "./styles.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <AdressBox />
      <div className={styles.locationMap}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12041.118984277!2d28.8909481!3d41.0191353!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc98f44e9057adcde!2zVGVzb2RldiBZYXrEsWzEsW0gRG9uYW7EsW0gQmlsacWfaW0gQml5b21lZGlrYWwgS29uZ3JlIFR1cml6bSBFxJ9pdGltIERhbsSxxZ9tYW5sxLFrIExpbWl0ZWQgxZ5pcmtldGk!5e0!3m2!1str!2str!4v1659442397732!5m2!1str!2str"
          frameBorder="0"
          scrolling="no"
          width="100%"
          title="location-tesodev"
        ></iframe>
      </div>
    </div>
  );
}

export default Footer;
