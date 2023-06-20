import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import AboutHero from "public/abouthero.jpg";
import Button from "@/components/Button/Button";
 
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt=""
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafiting award winning digital experiences
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio
            pariatur molestias veniam unde adipisci iste quisquam tempora ad
            architecto sed, dicta illum culpa laudantium necessitatibus delectus
            expedita consequatur dolore maiores. <br /> <br /> Reprehenderit
            beatae, quaerat quis velit sed illo magnam, fuga dolores itaque
            libero minima voluptas modi suscipit odit. <br /> <br /> Corporis ab
            quo veniam a obcaecati velit, dolor delectus similique, quam aut
            voluptatibus. Numquam nemo quisquam temporibus ratione soluta,
            aperiam vero similique aspernatur.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do ?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            amet velit enim impedit ratione accusantium expedita qui animi
            tenetur facere!dolor delectus similique, quam aut voluptatibus.
            Numquam nemo quisquam temporibus ratione soluta, aperiam vero
            similique aspernatur.
            <br /> <br />- Creative Illustrations
            <br /> <br />- Dynamic Websites
            <br /> <br />- Fast and Handy
          </p>

          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
