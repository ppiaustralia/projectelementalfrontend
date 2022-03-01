import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import styles from './Liveinoz.module.css';
import { section_data, entry_data } from './database_liveinoz';
import Subtitle from './Subtitle';
import Entry from './Entry';

export default function Liveinoz() {
  return (
    <div>
      <div className={styles['page']}>
        <div className={styles['title']}>
          <h1>Student Guide</h1>
        </div>

        {section_data.map((section) => {
          return (
            <div>
              <Subtitle section={section} />
              {/* {this.render_subtitle(section)} */}
              {section.entries.map((entry) => {
                return (
                  <div>
                    <Entry entry={entry} />
                  </div>
                );
              })}
            </div>
          );
        })}

        <hr style={{ marginTop: '108px' }} />
      </div>
    </div>
  );
}

// export default class Liveinoz extends React.Component {
//     render_subtitle = (object) => {
//         return (
//             <div className={styles["subtitle"]}>
//                 <h2>{object.subtitle}</h2>
//                 <hr style={{ width: "70%", margin: "auto" }} />
//             </div>
//         )
//     }
//     render_entry = (object) => {
//         return (
//             <div>
//                 <div className={styles["page-content"]}>
//                     <img
//                         src={object.img}
//                         className={styles["entry-thumb"]}
//                         alt="missing"
//                     />
//                     <div className={styles["entry-text"]}>
//                         <h3 className={styles["object-title"]}>
//                             {object.title}
//                         </h3>
//                         <p className={styles["object-desc"]}>
//                             {object.description.slice(0, MAX_CHR)}
//                         </p>
//                         <Link to={object}>
//                             <Button variant="news" style={{ width: "155px" }}>
//                                 Continue Reading
//                             </Button>
//                         </Link>
//                     </div>
//                 </div>
//                 <div className={styles["share-icons"]}>
//                     <i class="fas fa-share-alt-square" />
//                     <i class="fab fa-facebook-square" />
//                     <i class="fab fa-instagram-square" />
//                     <i class="fab fa-youtube-square" />
//                     <i class="fab fa-twitter-square" />
//                 </div>
//             </div>
//         )
//     }
//     render() {
//         return (
//             <div>
//                 <div className={styles["page"]}>
//                     <div className={styles["title"]}>
//                         <h1>Student Guide</h1>
//                         <hr style={{ width: "95%", margin: "auto" }} />
//                     </div>

//                     {section_data.map((section) => {
//                         return (
//                             <div>
//                                 {this.render_subtitle(section)}
//                                 {section.entries.map((entry) => {
//                                     return <div>{this.render_entry(entry)}</div>
//                                 })}
//                             </div>
//                         )
//                     })}

//                     <hr style={{ marginTop: "108px" }} />
//                 </div>
//             </div>
//         )
//     }
// }

export function ReadMore(props) {
  const id = props.match.params.id;
  const obj = entry_data[id];

  return (
    <div className={styles['page']}>
      <div className={styles['title']}>
        <h1>Student Guide</h1>
      </div>
      <div className="breadcrumb page-content">
        <Breadcrumb aria-label="breadcrumb">
          <Link to="/liveinoz">Live in Oz</Link>
          <div>/{obj.title}</div>
        </Breadcrumb>
      </div>
      <img src={obj.img} className="entry-thumb page-content" alt="missing" />
      <div className={styles['page-content']}>{obj.description}</div>
      <h3 className={styles['object-title']}>ID: {id}</h3>
    </div>
  );
}
