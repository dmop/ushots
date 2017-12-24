import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Item,
  Button
} from "semantic-ui-react";
import { Component } from "react";
import { getShot } from "../../actions/app";
import { connect } from "react-redux";
import Comments from "../Comments/Comments";

class ShotItem extends Component {
  //   componentWillMount() {
  //     this.props.getShot(4040135);
  //     console.log(this.props.shot);
  //   }

  componentWillMount() {
    const { id } = this.props.match.params;
    console.log("To aqui");
    this.props.getShot(id);
  }

  render() {
    if (!this.props.shot) return null;

    return (
      <div>
        <Segment style={{ padding: "8em 0em" }} vertical>
          <Container text style={{}}>
            <Header as="h1">Sticky Example</Header>
            <p>
              This example shows how to use lazy loaded images, a sticky menu,
              and a simple text container
            </p>

            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column floated="right" width={8}>
                  <Image
                    bordered
                    rounded
                    size="large"
                    src={this.props.shot.images.teaser}
                  />
                </Grid.Column>

                <Grid.Column width={4}>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    We Help Companies and Companions
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    We can give your company superpowers to do things that they
                    never thought possible. Let us delight your customers and
                    empower your needs... through pure data analytics.
                  </p>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    We Make Bananas That Can Dance
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Yes that's right, you thought it was the stuff of dreams,
                    but even bananas can be bioengineered.
                  </p>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: this.props.shot.description
                    }}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Comments commentList={this.props.shot.comments_url} />
          </Container>
        </Segment>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { shot: state.shots.shot };
}
export default connect(mapStateToProps, { getShot })(ShotItem);
