import React from "react";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility
} from "semantic-ui-react";

const FixedMenu = () => (
          <Segment  inverted vertical style={{ padding: '5em 0em' }}>
          <Container >
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Ushots' />
                  <List link inverted>
                    <List.Item as='a'>About</List.Item>
                    <List.Item as='a'>Help</List.Item>
                    <List.Item as='a'>Contact</List.Item>
                    <List.Item as='a'>Careers</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Hiring at Ushots' />
                  <List link inverted>
                    <List.Item as='a'>Post a Job</List.Item>
                    <List.Item as='a'>Scout a Designer</List.Item>
                    <List.Item as='a'>Add your team</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Ushots</Header>
                  <p>Show and tell for shooters.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
    );

export default FixedMenu;
