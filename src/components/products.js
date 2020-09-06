import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { MDBContainer, MDBFooter } from "mdbreact";
import { Tab, Tabs, Grid, Cell } from "react-mdl";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCatergories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="products-grid">
          <div className="container">
            <div className="row ">
              <div className="col-xs-12 col-sm-6 col-md-4 pt-4">
                {/* Agro products*/}
                <Card shadow={5}>
                  <Card.Img
                    variant="top"
                    src="img/rice.jpg"
                    style={{ height: "250px, minWidth: 10vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 pt-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="img/grains.jpg"
                    style={{ height: "250px, minWidth: 10vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 pt-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="img/sugar.jpg"
                    style={{ height: "250px, minWidth: 10vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="products-grid">
          <div className="container">
            <div className="row ">
              <div className="col-xs-12 col-sm-6 col-md-4 pt-4 ">
                {/*Metal products */}
                <Card>
                  <Card.Img
                    variant="top"
                    src="img/aluminium.jpg"
                    style={{ height: "250px, minWidth: 10vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Aluminium Ingots</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div class="col-xs-12 col-sm-6 col-md-4 pt-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="img/constructionsteel.jpg"
                    style={{ height: "250px, minWidth: 10vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Construction steel</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-4 pt-4">
                <Card>
                  <Card.Img
                    variant="top"
                    src="img/gold.jpg"
                    style={{ height: "250px, minWidth: 10vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Gold</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="products-grid">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 pt-4">
                {/*Spare parts */}
                <Card>
                  <Card.Img
                    variant="top"
                    src="img/honda.png"
                    style={{ height: "250px, minWidth: 10vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Honda</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 pt-4">
                {/* */}
                <Card>
                  <Card.Img
                    variant="top"
                    src="img/hyundai.png"
                    style={{ height: "250px, minWidth: 10vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Hyundai</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 pt-4">
                {/* */}
                <Card>
                  <Card.Img
                    variant="top"
                    src="img/kiamotor.png"
                    style={{ height: "250px, minWidth: 10vh" }}
                  />
                  <Card.Body>
                    <Card.Title>Kia</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
              <div className="col-xs-12 col-sm-6 col-md-3 pt-4">
                {/* */}
                <Card>
                  <Card.Img
                    variant="top"
                    src="img/ford.png"
                    style={{ height: "250px" }}
                  />
                  <Card.Body>
                    <Card.Title>Ford</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Agro products</Tab>
          <Tab>Metal products</Tab>
          <Tab>Auto spare products</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCatergories()}</div>
          </Cell>
          <Cell col={12}>
            <MDBFooter color="blue" className="font-small pt-4 mt-4">
              <div className="footer-copyright text-center py-3">
                <MDBContainer fluid>
                  &copy; {new Date().getFullYear()} Copyright:{" "}
                  <a href="/"> hakstime.com </a>
                </MDBContainer>
              </div>
            </MDBFooter>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Product;
