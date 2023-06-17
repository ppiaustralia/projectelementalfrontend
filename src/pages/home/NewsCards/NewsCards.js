import React from 'react';
import s from './NewsCards.module.css';
import moment from 'moment';
function NewsCards(props) {
  const imageURL = 'https://ppiamedia.s3.us-east-2.amazonaws.com/';
  const { title, tag, content, publish_date, image, slug, is_deleted } =
    props.newsContent;
  const parsedDate = moment(publish_date).format('LLL');

  return (
    // <div className={s.newsCardCont}>
    <div className="flex flex-col text-center bg-[white] mx-[1em] w-[50vw] mb-[2em] mt-[1em] md:w-[19vw] mb-[1em]">
      <img className="w-full h-full" src={`${image}`} alt="title" />
      <div className="flex flex-col justify-between px-0 py-[1em]">
        <div className="max-h-[65%] font-bond text-lg md:text-base">{title}</div>
        <div className="text-xs pt-[1em]">
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
