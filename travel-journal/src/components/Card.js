import React from 'react'
import classes from './Card.module.css'
import locationPin from '../Images/locationPin.png'

function Card(props) {
  console.log(props)

  return (
    <div className={classes.card}>
      <div className={classes.card__img} style={{backgroundImage: `url('${props.imageUrl}')`}}></div>
      <div className={classes.card__location}>
        <div className={classes['card__location--heading']}>
          <img src={locationPin} alt='Location Pin' />
          <h5>{props.location}</h5>
          <a href={props.googleMapsUrl} rel="noreferrer noopener" target='_target'>View on Google Maps</a>
        </div>
        <h1 className={classes.card__title}>{props.title}</h1>
        <p className={classes.card__date}>{props.startDate} - {props.endDate}</p>
        <p className={classes.card__info}>{props.description}</p>
      </div>
    </div>
  )
}

export default Card