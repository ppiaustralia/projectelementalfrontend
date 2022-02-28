import React from 'react';
import s from './NewsCards.module.css';
import moment from 'moment';
function NewsCards(props) {
  const imageURL = 'https://ppiamedia.s3.us-east-2.amazonaws.com/';
  const { title, tag, content, publish_date, image, slug, is_deleted } =
    props.newsContent;
  const parsedDate = moment(publish_date).format('LLL');

  return (
    <div className={s.newsCardCont}>
      <img className={s.cardImage} src={`${image}`} alt="title" />
      <div className={s.verticalInfo}>
        <div className={s.title}>{title}</div>
        <div className={s.date}>
          <u>
            Posted: <i>{parsedDate}</i>
          </u>
        </div>
      </div>
    </div>
  );
}

/*
    it is an assumption by user that everytime there's a card ( or something that looks like a button)
    it will be clickable,

    but since we are running short of time, ill just change the button 
*/

export default NewsCards;
