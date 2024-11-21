import React from 'react';
import logo from '../images/hand-planting-logo.svg';

const SocialMediaLink = ({xmlns, viewBox, d, desc}) => {
  return(
    <a href='#'>
      <svg xmlns={xmlns} viewBox={viewBox}><path d={d} />
        <desc>{desc}</desc>
      </svg>
    </a>
  )
}

class Footer extends React.Component {
  render() {
    return (
      <footer className='text-white'>
        <div className='footer-container'>
          <div className='footer-item footer-logo-container'>
            <img className='footer-logo' alt='New Canopy\s logo' src={logo} />
          </div>

          <div className='footer-item contact-info'>
            <div>
              <h4 className='footer-headings'>Contact</h4>
              <ul className='font-size-small font-weight-thin'>
                <li className='phone-number'>(012) 345-6789</li>
                <li>Dolor Sit Amet</li>
                <li>Lorem Ipsum Org.</li>
                <li>123 Sonsectetur St.</li>
                <li>Adipiscing Alit 12345</li>
              </ul>
            </div>
          </div>

          <div id='follow-us' className='footer-item'>
            <h4 className='footer-headings'>Follow Us</h4>
            <div className='social-media-links'>
              <a href='#'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  <desc>Facebook</desc>
                </svg>
              </a>
              <SocialMediaLink xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" desc="Facebook" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"/>
              <a href='#'>
                <svg className='square-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                  <desc>Twitter X</desc>
                </svg>
              </a>
              <a href='#'>
                <svg className='square-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                  <desc>Instagram</desc>
                </svg>
              </a>
            </div>
          </div>

          <div className='legal-info footer-item'>
            <div>
              <h4 className='footer-headings'>Legal</h4>
              <ul>
                <li><a className='legal-link font-size-small font-weight-thin' href='#legal-info'>Privacy Policy</a></li>
                <li><a className='legal-link font-size-small font-weight-thin' href='#legal-info'>Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>

        <p className='font-weight-thin copyright-info'>Copyright © 2022 New Canopy Tree Foundation. All rights reserved.</p>
      </footer>
    )
  }
}
export default Footer;