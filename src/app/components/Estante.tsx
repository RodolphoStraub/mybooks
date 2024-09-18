import {
  bookBiografiaData,
  bookContosData,
  bookFantasyData,
  bookFictionData,
  bookHorrorData,
} from "../booksData";
import styles from "./Estante.module.css";

export default function Estante() {
  return (
    <div id="/"  className={styles.all}>
      <div className={styles.sub_all}>
        <h1 className={styles.terror}>Terror e Horror</h1>
        <ul className={styles.list}>
          {bookHorrorData.map((book) => (
            <li key={book.id}>
              <img
                className={styles.cover}
                src={book.imageUrl}
                alt={book.alt}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.sub_all}>
        <h1 className={styles.fantasy}>Fantasia</h1>
        <ul className={styles.list}>
          {bookFantasyData.map((book) => (
            <li key={book.id}>
              <img
                className={styles.cover}
                src={book.imageUrl}
                alt={book.alt}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.sub_all}>
        <h1 className={styles.fiction}>Ficção</h1>
        <ul className={styles.list}>
          {bookFictionData.map((book) => (
            <li key={book.id}>
              <img
                className={styles.cover}
                src={book.imageUrl}
                alt={book.alt}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.sub_all}>
        <h1 className={styles.contos}>Contos</h1>
        <ul className={styles.list}>
          {bookContosData.map((book) => (
            <li key={book.id}>
              <img
                className={styles.cover}
                src={book.imageUrl}
                alt={book.alt}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.sub_all}>
        <h1 className={styles.biografia}>Biografia</h1>
        <ul className={styles.list}>
          {bookBiografiaData.map((book) => (
            <li key={book.id}>
              <img
                className={styles.cover}
                src={book.imageUrl}
                alt={book.alt}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
