import React from 'react'
import Behance from '../img/behance.png'
import Slack from '../img/slack.png'
import Dribble from '../img/dribbble.png'
import Twilio from '../img/twilio.png'
import Github from '../img/github.png'

export default function Partners() {
  return (
    <section className='partnerSection'>
      <div className="container">
        <div className='partnersContent'>
          <img src={Behance} alt="..." />
          <img src={Slack} alt="..." />
          <img src={Dribble} alt="..." />
          <img src={Twilio} alt="..." />
          <img src={Github} alt="..." />
        </div>
      </div>
    </section>  
  )
}
