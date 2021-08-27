import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'

export default function Navi() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position='right'>
         <CartSummary/>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  )
}
