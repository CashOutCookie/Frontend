import React from 'react';
import Navbar from './components/Navbar'
function About() {
  return (
    <div>
      <Navbar name="Rules" />
      <div className="rules-flex">
        <h1>{'Rules'}</h1>
        <ul style={{ "list-style-type": 'decimal', "font-size": "1.5rem" }}>
          <li>{'Please do not break the game. If you find a bug, report it '}<a href="/report">{'here'}</a></li>
          <li>{'Make sure to join this '}<a href="https://discord.gg/teFD7JGbJa">{'Discord'}</a> {'to be able to win nitros.'}</li>
          <li>{'Do not make alternate multiple accounts to earn cookies.'}</li>
          <li>{'Do not Google the questions. Play fair.'}</li>
        </ul>
        <p className="rules-bottomline">{'All players are subject to manual verification before rewards are given out. GLHF!'}</p>
        <h1 className="faq-header">{'FAQs'}</h1>
        <ul>
          <li className="faqPoint">{'This is so cool, can I sponsor it?'}</li>
          <ul>
            <li className="faqSubPoint">{'Yes, you can. You can sponsor future giveaways '}<a href="https://gumroad.com/l/cashoutcookie" rel="noreferrer" target="_blank">{'here'}</a></li>
          </ul>
          <li className="faqPoint">{'Where are the profile pictures coming from?'}</li>
          <ul>
            <li className="faqSubPoint">{'The profile pictures are grabbed from Gravatar using the registered email.'}</li>
          </ul>
          <li className="faqPoint">{'How many nitros are given every month?'}</li>
          <ul>
            <li className="faqSubPoint">{'Currently, 2 nitros are given out to the most ranking players.'}</li>
          </ul>
          <li className="faqPoint">{'Where are the animations coming from?'}</li>
          <ul>
            <li className="faqSubPoint">{'The animations are from LottieAnimations. You can find a detailed list '}<a href="/credits">{'here'}</a></li>
          </ul>
          <li className="faqPoint">{'Do you guys have a Discord server?'}</li>
          <ul>
            <li className="faqSubPoint">{'Yes, we do! You can join it '}<a href="https://discord.gg/DjNccdSa8b">{'here'}</a></li>
          </ul>
        </ul>
      </div>
    </div>
  )
}

export default About