// import Image from 'next/image';
// import Sketch from '../../assets/sketch.png';

import Card from "../../components/Card";
import styles from '../../styles/lesson55.module.css';

const cards = [
  {
    title: "",
    tags: ["Web"]
  }
];

function Lesson55() {
  return (
    <section className={styles.container}>
      <Card />
      <Card />
      <Card />
    </section>
  )
}

export default Lesson55;