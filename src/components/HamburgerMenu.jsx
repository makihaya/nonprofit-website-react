import React from 'react';

const ListItem = (props) => {
  const {href, className, text} = props;
  return (
    <li>
      <a href={href} className={className}>
        {text}
        {props.children}
      </a>
    </li>
  )
}

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu = () => {
    this.setState(state => ({
      showMenu: !state.showMenu
    }));
  }

  render() {
    return (
      <div className='hamburger-menu'>
        <button onClick={this.toggleMenu} className='menu-button'>
          <span className='menu-line' />
          <span className='menu-line' />
          <span className='menu-line' />
        </button>
        <ul className={`menu-items ${this.state.showMenu ? 'visible' : 'hidden'} font-weight-thin`}>
          <ListItem href="#intro-section">
            <svg className="nav-link home-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M575.8 255.5c0 18-15 32.1-32 32.1l-32 0 .7 160.2c0 2.7-.2 5.4-.5 8.1l0 16.2c0 22.1-17.9 40-40 40l-16 0c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1L416 512l-24 0c-22.1 0-40-17.9-40-40l0-24 0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32l0 64 0 24c0 22.1-17.9 40-40 40l-24 0-31.9 0c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2l-16 0c-22.1 0-40-17.9-40-40l0-112c0-.9 0-1.9 .1-2.8l0-69.7-32 0c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
              <desc>Home</desc>
            </svg>
          </ListItem>
          <ListItem href="#about-section" text="About"/>
          <ListItem href="#our-work-section" text="Our Work"/>
          <ListItem href="#get-involved-section" text="Get Involved"/>
        </ul>
      </div>
    )
  }
}