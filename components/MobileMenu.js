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

    const onMenuToggle = () => {
        document.querySelector('button.hamburger').classList.toggle('is-active')
    }

    return (
        <Wrapper className="" onMenuToggle={onMenuToggle}>
            <Button className="">
                <button
                    className="hamburger hamburger--spring"
                    style={{ padding: '0' }}
                    type="button"
                >
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
