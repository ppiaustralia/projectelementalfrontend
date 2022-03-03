import styles from './Branch.module.css';
import { Image } from 'react-bootstrap';

function Branch(data) {
  const chBaseLink = data.chBaseLink;
  return (
    <>
      {data.data.map((branch) => {
        const {
          ppia_id,
          name,
          president,
          state,
          level,
          image,
          parent,
          details,
          is_deleted,
          others
        } = branch;
        return (
          <div className={`${styles['chapter']}`}>
            <div className={styles.imageContainer}>
              <Image src={`${chBaseLink}${image}`} className={styles.logo} />
            </div>
            <div className={styles.infoContainer}>
              <h2>{name} </h2>
              <p>Indonesian Student Association of New South Wales</p>
              <p>President: {president}</p>
              <p>Parent: {parent}</p>
              <p>State: {state}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Branch;
