import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div>&copy; 2023 The Blog. All rights reserved</div>
      <div className={styles.social}>
        <Image
          src="/1.png"
          width={15}
          height={15}
          alt="ByteBuzz compte Facebook"
          className={styles.icon}
        />
        <Image
          src="/2.png"
          width={15}
          height={15}
          alt="ByteBuzz compte Instagram"
          className={styles.icon}
        />
        <Image
          src="/3.png"
          width={15}
          height={15}
          alt="ByteBuzz compte Twitter"
          className={styles.icon}
        />
        <Image
          src="/4.png"
          width={15}
          height={15}
          alt="ByteBuzz compte YouTube"
          className={styles.icon}
        />
      </div>
    </div>
  );
};

export default Footer;
