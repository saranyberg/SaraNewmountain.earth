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
        <li key={i}>
            <MenuItem className="">
                <Link href={item.href}>{item.text}</Link>
            </MenuItem>
        </li>
    ))

    return (
        <Wrapper className="">
            <Button className="">
                <button className="hamburger hamburger--slider" type="button">
                    <span className="hamburger-box">
                        <span className="hamburger-inner"></span>
                    </span>
                </button>
            </Button>
            <Menu className="">
                <ul>{menuItems}</ul>
            </Menu>
        </Wrapper>
    )
}

export default MobileMenu
