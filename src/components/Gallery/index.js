import Image from 'next/image';
import styles  from "./index.module.scss";

export default function Gallery() {
    const images = [
      { src: '/images/shots/bike01.jpg', description: 'Silhouette of a cyclist at sunset on a mountain.' },
      { src: '/images/shots/bike02.jpg', description: 'Mountain biker splashing through a creek.' },
      { src: '/images/shots/bike03.jpg', description: 'Cyclist jumping on a dirt trail with a dynamic pose.' },
      // Add all image objects here with src and description
    ];
  
    return (
        <div className={styles.canvas}>
      <div className={styles.ring}>
        <Image className={styles.image} src="/images/shots/bike01.jpg" alt="Mountain biker" width={300} height={400} />
        <Image className={styles.image} src="/images/shots/bike02.jpg" alt="Mountain biker" width={300} height={400} />
        <Image className={styles.image} src="/images/shots/bike03.jpg" alt="Mountain biker" width={300} height={400} />
        <Image className={styles.image} src="/images/shots/bike04.jpg" alt="Mountain biker" width={300} height={400} />
        <Image className={styles.image} src="/images/shots/bike05.jpg" alt="Mountain biker" width={300} height={400} />
        <Image className={styles.image} src="/images/shots/bike06.jpg" alt="Mountain biker" width={300} height={400} />
        <Image className={styles.image} src="/images/shots/bike07.jpg" alt="Mountain biker" width={300} height={400} />
        <Image className={styles.image} src="/images/shots/bike08.jpg" alt="Mountain biker" width={300} height={400} />
        <Image className={styles.image} src="/images/shots/bike09.jpg" alt="Mountain biker" width={300} height={400} />


      </div>
      </div>
    );
  }
