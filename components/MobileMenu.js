import { Button, Wrapper, Menu, MenuItem } from 'react-aria-menubutton'

import 'hamburgers/dist/hamburgers.css'
import Link from 'next/link'

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
        <li key={i} className="w-full">
            <MenuItem className="w-full border-b border-white">
                <Link href={item.href}>
                    <a
                        className="hover:-translate-x-3 duration-200 ease-out transform hover:underline outline-none text-2xl w-full block py-4"
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
            <Menu>{/* <ul>{menuItems}</ul> */}</Menu>
            <div className="h-screen bg-green-700 shadow-2xl z-20 w-96 fixed top-0 right-0 transform transition-transform text-right pt-24 p-8">
                <ul className="w-full mt-1 border-t border-white">
                    {menuItems}
                </ul>
            </div>
        </Wrapper>
    )
}

export default MobileMenu
