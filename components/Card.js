import styles from './Card.module.css';
import Sketch from '../assets/sketch.png';
import Image from 'next/image';
import WhiteSpace from './WhiteSpace';
import Tag from './Tag';

const tags = ["Development", "DevOps"];

function Card(props) {
  return (
    <section className={styles.container}>
      <section className={styles.imageContainer}>
        <Image src={Sketch} width={100} height={100} />
      </section>
      <WhiteSpace size={28} />
      <section className={styles.headerContainer}>
        <h3>Figma</h3>
        <h5 style={{ color: "#20C08B" }} >FREE</h5>
      </section>
      <WhiteSpace size={8} />
      <p className={styles.para}>
        Figma helps the teams to create, test, and ship better designs from start to finish.
      </p>
      <WhiteSpace size={16} />
      <section className={styles.tagContainer}>
        <Tag name="Development" />
        <Tag name="Development" />
        <Tag name="Development" />
        <Tag name="Development" />
      </section>
    </section >
  )
}

export default Card;