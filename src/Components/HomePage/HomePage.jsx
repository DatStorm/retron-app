import React from 'react';
// import "tabler-react/dist/Tabler.css";
import {
  Page,
  Avatar,
  Icon,
  Grid,
  Card,
  Text,
  Table,
  Alert,
  Progress,
  colors,
  Dropdown,
  Button,
  StampCard,
  StatsCard,
  ProgressCard,
  Badge,
} from "tabler-react";

import C3Chart from "react-c3js";
// <SiteWrapper>

function HomePage() {
  return (

    <Page.Content title="Retron Dashboard">
      <Grid.Row cards={true}>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard layout={1} movement={6} total="43" label="Receipts this month" />
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard
            layout={1}
            movement={-3}
            total="150"
            label="Products This Month"
          />
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard layout={1} movement={9} total="3234.42" label="DKK This Month"/>
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard
            layout={1}
            movement={3}
            total="774"
            label="Total Reciepts"
          />
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard
            layout={1}
            movement={-2}
            total="2731"
            label="Total Products"
          />
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard layout={1} movement={-1} total="58,253" label="Total DKK" />
        </Grid.Col>
        <Grid.Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Food Categories</Card.Title>
            </Card.Header>
            <C3Chart
              style={{ height: "10rem" }}
              data={{
                columns: [
                  // each columns data
                  ["diary",612.3, 583.14, 589.22, 574.28, 588.52, 516.57],
                  ["meat",86.3, 87.19, 77.92, 87.68, 75.16, 76.08],
                  ["fruit_vegetables",283.34, 330.13, 282.98, 329.84, 329.41, 330.5],
                  ["grains",243.11, 235.67, 265.19, 264.17, 227.54, 270.89],

                ],
                type: "area", // default type of chart
                //groups: [["data1", "data2", "data3"]],
                colors: {
                  diary: colors["blue"],
                  meat: colors['red'],
                  fruit_vegetables: colors['green'],
                  grains: colors['yellow'],
                },
                names: {
                  diary: "Diary",
                  meat: "Meat",
                  fruit_vegetables: "Fruit and Vegetables",
                  grains: "Grains",
                },
              }}
              axis={{
                y: {
                  padding: {
                    bottom: 0,
                  },
                  show: false,
                  tick: {
                    outer: false,
                  },
                },
                x: {
                  padding: {
                    left: 0,
                    right: 0,
                  },
                  show: false,
                },
              }}
              legend={{
                position: "inset",
                padding: 0,
                inset: {
                  anchor: "top-left",
                  x: 20,
                  y: 8,
                  step: 10,
                },
              }}
              tooltip={{
                format: {
                  title: function (x) {
                    return "";
                  },
                },
              }}
              padding={{
                bottom: 0,
                left: -1,
                right: -1,
              }}
              point={{
                show: false,
              }}
            />
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Last 5 Receipts</Card.Title>
            </Card.Header>
            <Table
              cards={true}
              striped={true}
              responsive={true}
              className="table-vcenter"
            >
              <Table.Header>
                <Table.Row>
                  <Table.ColHeader>Store</Table.ColHeader>
                  <Table.ColHeader>Date</Table.ColHeader>
                  <Table.ColHeader colspan={2}>Amount</Table.ColHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Col>Netto</Table.Col>
                  <Table.Col>22. Oct 2020</Table.Col>
                  <Table.Col>52.32</Table.Col>
                  <Table.Col>DKK</Table.Col>
                </Table.Row>
                <Table.Row>
                  <Table.Col>Netto</Table.Col>
                  <Table.Col>22. Oct 2020</Table.Col>
                  <Table.Col>12.95</Table.Col>
                  <Table.Col>DKK</Table.Col>
                </Table.Row>
                <Table.Row>
                  <Table.Col>Rema 1000</Table.Col>
                  <Table.Col>21. Oct 2020</Table.Col>
                  <Table.Col>174.15</Table.Col>
                  <Table.Col>DKK</Table.Col>
                </Table.Row>
                <Table.Row>
                  <Table.Col>Føtex</Table.Col>
                  <Table.Col>19. Oct 2020</Table.Col>
                  <Table.Col>59.95</Table.Col>
                  <Table.Col>DKK</Table.Col>
                </Table.Row>
                <Table.Row>
                  <Table.Col>Føtex</Table.Col>
                  <Table.Col>19. Oct 2020</Table.Col>
                  <Table.Col>13.00</Table.Col>
                  <Table.Col>DKK</Table.Col>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card>
        </Grid.Col>

        <Grid.Col md={6}>
          {/* <Alert type="primary">
            <Alert.Link
              href={
                process.env.NODE_ENV === "production"
                  ? "https://tabler.github.io/tabler-react/documentation"
                  : "/documentation"
              }
            >
              Read our documentation
          </Alert.Link>{" "}
          with code samples.
        </Alert> */}
          <Grid.Row>
            <Grid.Col sm={6}>
              <Card>
                <Card.Header>
                  <Card.Title>Categories</Card.Title>
                </Card.Header>
                <Card.Body>
                  <C3Chart
                    style={{ height: "12rem" }}
                    data={{
                      columns: [
                        // each columns data
                        ["data1", 590],
                        ["data2", 280],
                        ["data3", 265],
                        ["data4", 80],
                      ],
                      type: "donut", // default type of chart
                      colors: {
                        data1: colors["blue"],
                        data2: colors["red"],
                        data3: colors["green"],
                        data4: colors["yellow"],
                      },
                      names: {
                        // name of each serie
                        data1: "Diary",
                        data2: "Meat",
                        data3: "Fruits and Vegetables",
                        data4: "Grains"
                      },
                    }}
                    legend={{
                      show: false, //hide legend
                    }}
                    padding={{
                      bottom: 0,
                      top: 0,
                    }}
                  />
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col sm={6}>
              <Card>
                <Card.Header>
                  <Card.Title>Stores</Card.Title>
                </Card.Header>
                <Card.Body>
                  <C3Chart
                    style={{ height: "12rem" }}
                    data={{
                      columns: [
                        // each columns data
                        ["Føtex", 6300],
                        ["Netto", 4400],
                        ["Rema", 1200],
                        ["Brugsen", 1400],
                      ],
                      type: "pie", // default type of chart
                      colors: {
                        data1: colors["blue-darker"],
                        data2: colors["blue"],
                        data3: colors["blue-light"],
                        data4: colors["blue-lighter"],
                      },
                      names: {
                        // name of each serie
                        data1: "A",
                        data2: "B",
                        data3: "C",
                        data4: "D",
                      },
                    }}
                    legend={{
                      show: false, //hide legend
                    }}
                    padding={{
                      bottom: 0,
                      top: 0,
                    }}
                  />
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col sm={6}>
              <ProgressCard
                header="New feedback"
                content="62"
                progressColor="red"
                progressWidth={28}
              />
            </Grid.Col>
            <Grid.Col sm={6}>
              <ProgressCard
                header="Today profit"
                content="$652"
                progressColor="green"
                progressWidth={84}
              />
            </Grid.Col>
            <Grid.Col sm={6}>
              <ProgressCard
                header="Users online"
                content="76"
                progressColor="yellow"
                progressWidth={34}
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Col>
        <Grid.Col sm={6} lg={3}>
          <StampCard
            color="blue"
            icon="dollar-sign"
            header={
              <a href="/#">
                132 <small>Sales</small>
              </a>
            }
            footer={"12 waiting payments"}
          />
        </Grid.Col>
        <Grid.Col sm={6} lg={3}>
          <StampCard
            color="green"
            icon="shopping-cart"
            header={
              <a href="/#">
                78 <small>Orders</small>
              </a>
            }
            footer={"32 shipped"}
          />
        </Grid.Col>
        <Grid.Col sm={6} lg={3}>
          <StampCard
            color="red"
            icon="users"
            header={
              <a href="/#">
                1,352 <small>Members</small>
              </a>
            }
            footer={"163 registered today"}
          />
        </Grid.Col>
        <Grid.Col sm={6} lg={3}>
          <StampCard
            color="yellow"
            icon="message-square"
            header={
              <a href="/#">
                132 <small>Comments</small>
              </a>
            }
            footer={"16 waiting"}
          />
        </Grid.Col>
      </Grid.Row>
      <Grid.Row cards deck>
        <Grid.Col width={12}>
          <Card>
            <Table
              responsive
              highlightRowOnHover
              hasOutline
              verticalAlign="center"
              cards
              className="text-nowrap"
            >
              <Table.Header>
                <Table.Row>
                  <Table.ColHeader alignContent="center" className="w-1">
                    <i className="icon-people" />
                  </Table.ColHeader>
                  <Table.ColHeader>User</Table.ColHeader>
                  <Table.ColHeader>Usage</Table.ColHeader>
                  <Table.ColHeader alignContent="center">
                    Payment
                </Table.ColHeader>
                  <Table.ColHeader>Activity</Table.ColHeader>
                  <Table.ColHeader alignContent="center">
                    Satisfaction
                </Table.ColHeader>
                  <Table.ColHeader alignContent="center">
                    <i className="icon-settings" />
                  </Table.ColHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Col alignContent="center">
                    <Avatar
                      imageURL="demo/faces/female/26.jpg"
                      className="d-block"
                      status="green"
                    />
                  </Table.Col>
                  <Table.Col>
                    <div>Elizabeth Martin</div>
                    <Text size="sm" muted>
                      Registered: Mar 19, 2018
                  </Text>
                  </Table.Col>
                  <Table.Col>
                    <div className="clearfix">
                      <div className="float-left">
                        <strong>42%</strong>
                      </div>
                      <div className="float-right">
                        <Text.Small muted>
                          Jun 11, 2015 - Jul 10, 2015
                      </Text.Small>
                      </div>
                    </div>
                    <Progress size="xs">
                      <Progress.Bar color="yellow" width={42} />
                    </Progress>
                  </Table.Col>
                  <Table.Col alignContent="center">
                    <Icon payment name="visa" />
                  </Table.Col>
                  <Table.Col>
                    <Text size="sm" muted>
                      Last login
                  </Text>
                    <div>4 minutes ago</div>
                  </Table.Col>
                  <Table.Col alignContent="center">42%</Table.Col>
                  <Table.Col alignContent="center">
                    <Dropdown
                      trigger={
                        <Dropdown.Trigger
                          icon="more-vertical"
                          toggle={false}
                        />
                      }
                      position="right"
                      items={
                        <React.Fragment>
                          <Dropdown.Item icon="tag">Action </Dropdown.Item>
                          <Dropdown.Item icon="edit-2">
                            Another action{" "}
                          </Dropdown.Item>
                          <Dropdown.Item icon="message-square">
                            Something else here
                        </Dropdown.Item>
                          <Dropdown.ItemDivider />
                          <Dropdown.Item icon="link">
                            {" "}
                          Separated link
                        </Dropdown.Item>
                        </React.Fragment>
                      }
                    />
                  </Table.Col>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card>
        </Grid.Col>
      </Grid.Row>
      <Grid.Row>
        <Grid.Col sm={6} lg={4}>
          <Card title="Browser Stats">
            <Table className="card-table">
              <Table.Row>
                <Table.Col>
                  <Icon prefix="fa" name="chrome" className="text-muted" />
                </Table.Col>
                <Table.Col>Google Chrome</Table.Col>
                <Table.Col className="text-right">
                  <Text RootComponent="span" muted>
                    23%
                </Text>
                </Table.Col>
              </Table.Row>
            </Table>
          </Card>
        </Grid.Col>
        <Grid.Col sm={6} lg={4}>
          <Card title="Projects">
            <Table cards>
              <Table.Row>
                <Table.Col>Admin Template</Table.Col>
                <Table.Col alignContent="right">
                  <Badge color="default">65%</Badge>
                </Table.Col>
              </Table.Row>
            </Table>
          </Card>
        </Grid.Col>
        <Grid.Col md={6} lg={4}>
          <Card title="Members">
            <Card.Body>
              <ul className="list-unstyled list-separated">
                <li className="list-separated-item">
                  <Grid.Row className="align-items-center">
                    <Grid.Col auto>
                      <Avatar
                        size="md"
                        className="d-block"
                        imageURL="demo/faces/female/12.jpg"
                      />
                    </Grid.Col>
                    <Grid.Col>
                      <div>
                        <a className="text-inherit" href="/#">
                          Amanda Hunt
                      </a>
                      </div>
                      <Text.Small muted className="d-block item-except h-1x">
                        amanda_hunt@example.com
                    </Text.Small>
                    </Grid.Col>
                    <Grid.Col auto>
                      <Dropdown
                        trigger={
                          <Dropdown.Trigger
                            icon="more-vertical"
                            toggle={false}
                          />
                        }
                        position="right"
                        items={
                          <React.Fragment>
                            <Dropdown.Item icon="tag">Action </Dropdown.Item>
                            <Dropdown.Item icon="edit-2">
                              {" "}
                            Another action{" "}
                            </Dropdown.Item>
                            <Dropdown.Item icon="message-square">
                              {" "}
                            Something else here
                          </Dropdown.Item>
                            <Dropdown.ItemDivider />
                            <Dropdown.Item icon="link">
                              {" "}
                            Separated link
                          </Dropdown.Item>
                          </React.Fragment>
                        }
                      />
                    </Grid.Col>
                  </Grid.Row>
                </li>
              </ul>
            </Card.Body>
          </Card>
        </Grid.Col>
        <Grid.Col md={6} lg={12}>
          <Grid.Row>
            <Grid.Col sm={6} lg={3}>
              <StatsCard
                layout={2}
                movement={5}
                total="423"
                label="Users online"
                chart={
                  <C3Chart
                    style={{ height: "100%" }}
                    padding={{
                      bottom: -10,
                      left: -1,
                      right: -1,
                    }}
                    data={{
                      names: {
                        data1: "Users online",
                      },
                      columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                      type: "area",
                    }}
                    legend={{
                      show: false,
                    }}
                    transition={{
                      duration: 0,
                    }}
                    point={{
                      show: false,
                    }}
                    tooltip={{
                      format: {
                        title: function (x) {
                          return "";
                        },
                      },
                    }}
                    axis={{
                      y: {
                        padding: {
                          bottom: 0,
                        },
                        show: false,
                        tick: {
                          outer: false,
                        },
                      },
                      x: {
                        padding: {
                          left: 0,
                          right: 0,
                        },
                        show: false,
                      },
                    }}
                    color={{
                      pattern: ["#467fcf"],
                    }}
                  />
                }
              />
            </Grid.Col>
            <Grid.Col sm={6} lg={3}>
              <StatsCard
                layout={2}
                movement={-3}
                total="423"
                label="Users online"
                chart={
                  <C3Chart
                    style={{ height: "100%" }}
                    padding={{
                      bottom: -10,
                      left: -1,
                      right: -1,
                    }}
                    data={{
                      names: {
                        data1: "Users online",
                      },
                      columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                      type: "area",
                    }}
                    legend={{
                      show: false,
                    }}
                    transition={{
                      duration: 0,
                    }}
                    point={{
                      show: false,
                    }}
                    tooltip={{
                      format: {
                        title: function (x) {
                          return "";
                        },
                      },
                    }}
                    axis={{
                      y: {
                        padding: {
                          bottom: 0,
                        },
                        show: false,
                        tick: {
                          outer: false,
                        },
                      },
                      x: {
                        padding: {
                          left: 0,
                          right: 0,
                        },
                        show: false,
                      },
                    }}
                    color={{
                      pattern: ["#e74c3c"],
                    }}
                  />
                }
              />
            </Grid.Col>
            <Grid.Col sm={6} lg={3}>
              <StatsCard
                layout={2}
                movement={-3}
                total="423"
                label="Users online"
                chart={
                  <C3Chart
                    style={{ height: "100%" }}
                    padding={{
                      bottom: -10,
                      left: -1,
                      right: -1,
                    }}
                    data={{
                      names: {
                        data1: "Users online",
                      },
                      columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                      type: "area",
                    }}
                    legend={{
                      show: false,
                    }}
                    transition={{
                      duration: 0,
                    }}
                    point={{
                      show: false,
                    }}
                    tooltip={{
                      format: {
                        title: function (x) {
                          return "";
                        },
                      },
                    }}
                    axis={{
                      y: {
                        padding: {
                          bottom: 0,
                        },
                        show: false,
                        tick: {
                          outer: false,
                        },
                      },
                      x: {
                        padding: {
                          left: 0,
                          right: 0,
                        },
                        show: false,
                      },
                    }}
                    color={{
                      pattern: ["#5eba00"],
                    }}
                  />
                }
              />
            </Grid.Col>
            <Grid.Col sm={6} lg={3}>
              <StatsCard
                layout={2}
                movement={9}
                total="423"
                label="Users online"
                chart={
                  <C3Chart
                    style={{ height: "100%" }}
                    padding={{
                      bottom: -10,
                      left: -1,
                      right: -1,
                    }}
                    data={{
                      names: {
                        data1: "Users online",
                      },
                      columns: [["data1", 30, 40, 10, 40, 12, 22, 40]],
                      type: "area",
                    }}
                    legend={{
                      show: false,
                    }}
                    transition={{
                      duration: 0,
                    }}
                    point={{
                      show: false,
                    }}
                    tooltip={{
                      format: {
                        title: function (x) {
                          return "";
                        },
                      },
                    }}
                    axis={{
                      y: {
                        padding: {
                          bottom: 0,
                        },
                        show: false,
                        tick: {
                          outer: false,
                        },
                      },
                      x: {
                        padding: {
                          left: 0,
                          right: 0,
                        },
                        show: false,
                      },
                    }}
                    color={{
                      pattern: ["#f1c40f"],
                    }}
                  />
                }
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Col>
        <Grid.Col width={12}>
          <Card title="Invoices">
            <Table
              responsive
              className="card-table table-vcenter text-nowrap"
              headerItems={[
                { content: "No.", className: "w-1" },
                { content: "Invoice Subject" },
                { content: "Client" },
                { content: "VAT No." },
                { content: "Created" },
                { content: "Status" },
                { content: "Price" },
                { content: null },
                { content: null },
              ]}
              bodyItems={[
                {
                  key: "1",
                  item: [
                    {
                      content: (
                        <Text RootComponent="span" muted>
                          001401
                        </Text>
                      ),
                    },
                    {
                      content: (
                        <a href="invoice.html" className="text-inherit">
                          Design Works
                        </a>
                      ),
                    },
                    { content: "Carlson Limited" },
                    { content: "87956621" },
                    { content: "15 Dec 2017" },
                    {
                      content: (
                        <React.Fragment>
                          <span className="status-icon bg-success" /> Paid
                        </React.Fragment>
                      ),
                    },
                    { content: "$887" },
                    {
                      alignContent: "right",
                      content: (
                        <React.Fragment>
                          <Button size="sm" color="secondary">
                            Manage
                        </Button>
                          <div className="dropdown">
                            <Button
                              color="secondary"
                              size="sm"
                              isDropdownToggle
                            >
                              Actions
                          </Button>
                          </div>
                        </React.Fragment>
                      ),
                    },
                    { content: <Icon link name="edit" /> },
                  ],
                },
              ]}
            />
          </Card>
        </Grid.Col>
      </Grid.Row>
    </Page.Content>
  );
}
// </SiteWrapper>
export default HomePage;
