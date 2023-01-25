import './Header.scss';

const nav = [
    {
        img: "./imgs/geo.svg",
        alt: 'Location',
        link: '#',
        className: 'Header__desktop',
    },
    {
        img: "./imgs/person.svg",
        alt: 'Profile',
        link: '#',
        className: 'Header__desktop',
    },
    {
        img: "./imgs/bag.svg",
        alt: 'My bag',
        link: '#',
        className: '',
    },
];

export const Header = () => {
    return (
        <header className="Header">
            <div className='Header__phone'>
                <img
                    src="./imgs/icon_menu.svg"
                    alt="Menu"
                    className='Header__menu'
                />
                <img
                    src="./imgs/person.svg"
                    alt="Profile"
                    className='Header__profile'
                />
            </div>

            <img
                src="./imgs/Pandora_Logo_2019 2.svg"
                alt="Pandora logo"
                className='Header__logo'
            />

            <div className='Header__container'>
                <img
                    src="./imgs/search-icon.svg"
                    alt="Search"
                    className='Header__search'
                />
                <input className='search-input' placeholder='cerca ...' />

                <nav className='nav'>
                    <ul className='nav__list'>
                        {nav.map((item => (
                            <li key={item.img} className={`nav__item ${item.className}`}>
                                <a href={item.link} className='nav__link'>
                                    <img
                                        src={item.img}
                                        alt={item.alt}
                                        className='nav__img'
                                    />
                                </a>
                            </li>
                        )))}
                    </ul>
                </nav>
            </div>
        </header>
    )
};