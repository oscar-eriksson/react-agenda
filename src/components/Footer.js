import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { ReactComponent as Piraya} from './images/piraya.svg'

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <Link to='/kontakt'>Kontakta Piraya</Link>
            <Link to='/policy'>Policy för personlig information</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
            <Piraya className='footer-logo'/>
            PPP
            </Link>
          </div>
          <small class='website-rights'>Copyright © 1985-2020 Piraya. Alla rättigheter förbehålles.</small>
          <div class='social-icons'>
			 <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/piraya.party.providers/'
              target='_blank'
				  rel='noreferrer'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/piraya_party_providers/'
              target='_blank'
				  rel='noreferrer'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link twitch'
              href='https://www.twitch.tv/pirayagamingproviders/'
              target='_blank'
				  rel='noreferrer'
              aria-label='Twitch'
            >
              <i class='fab fa-twitch' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
