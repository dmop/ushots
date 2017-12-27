import React from "react";
import { Container, Divider, Dropdown, Grid, Header, Image, List, Menu, Segment,Icon } from 'semantic-ui-react'


const FixedMenu = () => (
    <Menu fixed='top' inverted >
    <Container>
      <Menu.Item as='a' header>
        <Icon   name='camera retro' />
        USHOTS
      </Menu.Item>
      <Menu.Item as='a' href="http://0.0.0.0:3000/" >Shots</Menu.Item>

      <Menu.Item as='a'>Designers</Menu.Item>

      <Menu.Item as='a'>Blog</Menu.Item>

      <Menu.Item as='a'>Podcast</Menu.Item>

      <Menu.Item as='a'>Meetups</Menu.Item>

      <Menu.Item as='a'>Jobs</Menu.Item>

      <Menu.Item as='a'>Hiring</Menu.Item>

    </Container>
  </Menu>
);

export default FixedMenu;
