import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Join DEE-Web Academy<br className="sm:block hidden" /> for $30
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        You will have access to: <br />
        Exclusive Training <br />
        Access to premium resources <br />
        Exclusive live support
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
