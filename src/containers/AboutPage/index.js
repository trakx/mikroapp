import React, { Component } from 'react';
import { Card } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Layout from '../Layout';


class AboutPage extends Component {
  render() {
    return (
      <Layout centered={true}>
        <Card style={{ padding: 40 }}>
          <Typography variant="h4" style={{ padding: 40 }}>Site under construction!</Typography>
          <Typography variant="h6">
            <a href="https://trakx.io" rel="noopener noreferrer" className="header__logo">
                More info
            </a></Typography>
        </Card>
      </Layout>
    );
  }
}

export default AboutPage;
