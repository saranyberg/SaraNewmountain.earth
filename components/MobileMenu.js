import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton'
import Link from 'next/link'

import 'hamburgers/dist/hamburgers.css'

const MobileMenu = () => {
    const menuItemData = [
        {
            href: '/about-me',
            text: 'About me',
        },
        {
            href: '/learn-more',
            text: 'Learn more',
        },
        {
            href: '/take-action',
            text: 'Take action',
        },
    ]

    const menuItems = menuItemData.map((item, i) => (
        <li key={i} className="w-full select-none">
            <MenuItem className="w-full border-b border-black hover:bg-gradient-to-l hover:from-accent-400 hover:to-accent-500 hover:text-white">
                <Link href={item.href}>
                    <a
                        className="md:hover:-translate-x-3 duration-200 ease-out md:transform outline-none text-2xl w-full block py-4 transition-transform"
                        style={{ outline: 'none' }}
                    >
                        {item.text}
                    </a>
                </Link>
            </MenuItem>
        </li>
    ))

    const onMenuToggle = () => {
        document.querySelector('button.hamburger').classList.toggle('is-active')
    }

    return (
        <Wrapper onMenuToggle={onMenuToggle}>
            <Button className="z-30 relative">
                <button
                    className="hamburger hamburger--spring outline-none border-none"
                    style={{ padding: '0', outline: 'none' }}
                    type="button"
                >
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </Button>
            <Menu className="bg-white shadow-xl h-screen z-20 w-full md:w-80 fixed top-0 right-0 md:transform md:transition-transform text-center md:text-right pt-24 p-4 font-light">
                <ul className="w-full mt-1 border-t border-black">
                    {menuItems}
                </ul>
            </Menu>
        </Wrapper>
    )
}

export default MobileMenu
