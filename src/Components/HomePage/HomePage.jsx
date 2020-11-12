import React from 'react';
// import "tabler-react/dist/Tabler.css";
import {
  Page,
  Grid,
  Card,
  Table,
  colors,
  StampCard,
  StatsCard,
  ProgressCard,
  Avatar,
  Header,
  Text,
  Tab,
  Tabs
} from 'tabler-react';
import { ProgressBar } from 'react-bootstrap';

import C3Chart from 'react-c3js';
import BuildTracker from '../BuildTracker/BuildTracker';
// <SiteWrapper>

function HomePage() {
  const TopBar = () => {
    return (
      <React.Fragment>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard layout={1} movement={6} total="43" label="Receipts this month" />
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard layout={1} movement={-3} total="150" label="Products this month" />
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard layout={1} movement={9} total="3234.42" label="DKK this month" />
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard layout={1} movement={3} total="774" label="Total Reciepts" />
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard layout={1} movement={-2} total="2731" label="Total Products" />
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={2}>
          <StatsCard layout={1} movement={-1} total="58,253" label="Total DKK" />
        </Grid.Col>
      </React.Fragment>
    );
  };

  const FoodCatCategoresVZStoresVZ = () => {
    return (
      <React.Fragment>
        <Grid.Col lg={6}>
          <Card>
            <Card.Header>
              <Card.Title>Food Categories</Card.Title>
            </Card.Header>
            <C3Chart
              style={{ height: '10rem' }}
              data={{
                columns: [
                  // each columns data
                  ['diary', 612.3, 583.14, 589.22, 574.28, 588.52, 516.57],
                  ['meat', 86.3, 87.19, 77.92, 87.68, 75.16, 76.08],
                  ['fruit_vegetables', 283.34, 330.13, 282.98, 329.84, 329.41, 330.5],
                  ['grains', 243.11, 235.67, 265.19, 264.17, 227.54, 270.89]
                ],
                type: 'area', // default type of chart
                //groups: [["data1", "data2", "data3"]],
                colors: {
                  diary: colors['blue'],
                  meat: colors['red'],
                  fruit_vegetables: colors['green'],
                  grains: colors['yellow']
                },
                names: {
                  diary: 'Diary',
                  meat: 'Meat',
                  fruit_vegetables: 'Fruit and Vegetables',
                  grains: 'Grains'
                }
              }}
              axis={{
                y: {
                  padding: {
                    bottom: 0
                  },
                  show: false,
                  tick: {
                    outer: false
                  }
                },
                x: {
                  padding: {
                    left: 0,
                    right: 0
                  },
                  show: false
                }
              }}
              legend={{
                position: 'inset',
                padding: 0,
                inset: {
                  anchor: 'top-left',
                  x: 20,
                  y: 8,
                  step: 10
                }
              }}
              tooltip={{
                format: {
                  title: function (x) {
                    return '';
                  }
                }
              }}
              padding={{
                bottom: 0,
                left: -1,
                right: -1
              }}
              point={{
                show: false
              }}
            />
          </Card>
          <Card>
            <Card.Header>
              <Card.Title>Last 5 Receipts</Card.Title>
            </Card.Header>
            <Table cards={true} striped={true} responsive={true} className="table-vcenter">
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
                  <Table.Col>24. Oct 2020</Table.Col>
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
                  <Table.Col>17. Oct 2020</Table.Col>
                  <Table.Col>13.00</Table.Col>
                  <Table.Col>DKK</Table.Col>
                </Table.Row>
              </Table.Body>
            </Table>
          </Card>
        </Grid.Col>

        <Grid.Col md={6}>
          <Grid.Row>
            <Grid.Col sm={6}>
              <Card>
                <Card.Header>
                  <Card.Title>Categories</Card.Title>
                </Card.Header>
                <Card.Body>
                  <C3Chart
                    style={{ height: '12rem' }}
                    data={{
                      columns: [
                        // each columns data
                        ['data1', 590],
                        ['data2', 280],
                        ['data3', 265],
                        ['data4', 80]
                      ],
                      type: 'donut', // default type of chart
                      colors: {
                        data1: colors['blue'],
                        data2: colors['red'],
                        data3: colors['green'],
                        data4: colors['yellow']
                      },
                      names: {
                        // name of each serie
                        data1: 'Diary',
                        data2: 'Meat',
                        data3: 'Fruits and Vegetables',
                        data4: 'Grains'
                      }
                    }}
                    legend={{
                      show: false //hide legend
                    }}
                    padding={{
                      bottom: 0,
                      top: 0
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
                    style={{ height: '12rem' }}
                    data={{
                      columns: [
                        // each columns data
                        ['Føtex', 6300],
                        ['Netto', 4400],
                        ['Rema', 1200],
                        ['Brugsen', 1400]
                      ],
                      type: 'pie', // default type of chart
                      colors: {
                        data1: colors['blue-darker'],
                        data2: colors['blue'],
                        data3: colors['blue-light'],
                        data4: colors['blue-lighter']
                      },
                      names: {
                        // name of each serie
                        data1: 'A',
                        data2: 'B',
                        data3: 'C',
                        data4: 'D'
                      }
                    }}
                    legend={{
                      show: false //hide legend
                    }}
                    padding={{
                      bottom: 0,
                      top: 0
                    }}
                  />
                </Card.Body>
              </Card>
            </Grid.Col>
            <Grid.Col sm={6}>
              <ProgressCard
                header="Money used Today"
                content="134 DKK"
                progressColor="red"
                progressWidth={14}
              />
            </Grid.Col>
            <Grid.Col sm={6}>
              <ProgressCard header="Green score" content="7.3" progressColor="green" progressWidth={73} />
            </Grid.Col>
            <Grid.Col sm={6}>
              <ProgressCard
                header="Money used This Week"
                content="1156 DKK"
                progressColor="yellow"
                progressWidth={69}
              />
            </Grid.Col>
          </Grid.Row>
        </Grid.Col>
      </React.Fragment>
    );
  };

  const BottomAchievements = () => {
    return (
      <React.Fragment>
        <Grid.Col sm={6} lg={3}>
          <StampCard
            color="green"
            icon="award"
            header={
              <a href="/#">
                2 <small>New Awards</small>
              </a>
            }
            footer={'Last week'}
          />
        </Grid.Col>
        <Grid.Col sm={6} lg={3}>
          <StampCard
            color="blue"
            icon="trending-up"
            header={
              <a href="/#">
                4 <small>New friends</small>
              </a>
            }
            footer={'Last week'}
          />
        </Grid.Col>
        <Grid.Col sm={6} lg={3}>
          <StampCard
            color="red"
            icon="users"
            header={
              <a href="/#">
                12 <small>Friends Connected</small>
              </a>
            }
            footer={'2 online'}
          />
        </Grid.Col>
        <Grid.Col sm={6} lg={3}>
          <StampCard
            color="yellow"
            icon="home"
            header={
              <a href="/#">
                3 <small>Apps Connected</small>
              </a>
            }
            footer={'Coop, Storebox, Nemlig'}
          />
        </Grid.Col>
      </React.Fragment>
    );
  };

  const GoggleForm = () => {
    return (
      <Grid.Col width={12} sm={4} lg={12}>
        <Grid.Row justifyContent="center">
          <iframe
            title="sign-iupo"
            src="https://docs.google.com/forms/d/e/1FAIpQLSeBXPVbgSD2VvdIilroOGqa185IOjp3coMSFiMmG242tuffRQ/viewform?embedded=true"
            width="640"
            height="1040"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
					</iframe>
        </Grid.Row>
      </Grid.Col>
    );
  };

  const ProgressBars = () => {
    return (
      <React.Fragment>
        <Grid.Col width={6} sm={4} lg={4}>
          <Card
            //statusColor="purple"
            title={
              <React.Fragment>
                <Grid.Row cards>
                  <Grid.Col lg={4}>
                    <Avatar
                      size="lg"
                      imageURL="https://img.icons8.com/fluent/96/000000/no-pork.png"
                    // icon="users"
                    // color="white"
                    />
                  </Grid.Col>
                  <Grid.Col width={12} lg={8}>
                    <Header.H2 textAlign="left">Meat</Header.H2>
                    <Text align="left">1 of 10 kg bought</Text>
                  </Grid.Col>
                </Grid.Row>
              </React.Fragment>
            }
          >
            <ProgressBar variant="success" animated now={10} />
          </Card>
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={4}>
          <Card
            //statusColor="purple"
            title={
              <React.Fragment>
                <Grid.Row cards>
                  <Grid.Col lg={4}>
                    <Avatar
                      size="lg"
                      imageURL="https://img.icons8.com/fluent/96/000000/coffee-beans-.png"
                    // icon="users"
                    // color="white"
                    />
                  </Grid.Col>
                  <Grid.Col width={12} lg={8}>
                    <Header.H2 textAlign="left">Coffee</Header.H2>
                    <Text align="left">3 of 4 bought</Text>
                  </Grid.Col>
                </Grid.Row>
              </React.Fragment>
            }
          >
            <ProgressBar variant="warning" animated now={75} />
          </Card>
        </Grid.Col>
        <Grid.Col width={6} sm={4} lg={4}>
          <Card
            //statusColor="purple"
            title={
              <React.Fragment>
                <Grid.Row cards>
                  <Grid.Col lg={4}>
                    <Avatar
                      size="lg"
                      imageURL="https://img.icons8.com/fluent/96/000000/beer-can.png"
                    // icon="users"
                    // color="white"
                    />
                  </Grid.Col>
                  <Grid.Col width={12} lg={8}>
                    <Header.H2 textAlign="left">Alcohol</Header.H2>
                    <Text align="left">9 of 10 beers</Text>
                  </Grid.Col>
                </Grid.Row>
              </React.Fragment>
            }
          >
            <ProgressBar variant="danger" animated now={90} />
          </Card>
        </Grid.Col>
      </React.Fragment>
    );
  };

  return (
    <Page.Content title="Retron Dashboard">
      <Tabs position="center" initialTab="Track expenses">
        <Tab title="Homepage">
          <Grid.Row cards={true}>
            <TopBar />
            <ProgressBars />
            <FoodCatCategoresVZStoresVZ />
            <BottomAchievements />
            <GoggleForm />
          </Grid.Row>
        </Tab>
        <Tab title="Sankey">
          <iframe
            title="sign-iupo"
            src="https://datstorm.github.io/retron-sankey/"
            width="1140"
            height="1040"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Tab>
        <Tab title="Treemap">
        <iframe
            title="sign-iupo"
            src="https://datstorm.github.io/retron-treemap/"
            width="1140"
            height="1040"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </Tab>
        <Tab title="Track expenses">
          <BuildTracker />
        </Tab>
      </Tabs>


    </Page.Content>
  );
}
// </SiteWrapper>
export default HomePage;

