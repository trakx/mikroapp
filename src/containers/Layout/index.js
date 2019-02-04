import React, { Component, Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import NavBar from '../../components/NavBar';


const styles = theme => ({
  root: {
    display: 'flex',
  },
  rootCentered: {
    display: 'flex',
    justifyContent: 'center'
  },
  toolbar: theme.mixins.toolbar,
});

class Layout extends Component {
  render() {
    const { classes, children, centered } = this.props;

    return (
      <Fragment>
        <NavBar />
        <div className={classes.toolbar} />
        <div className={centered ? classes.rootCentered : classes.root}>
          <CssBaseline />
          {children}
        </div>
      </Fragment>
    );
  }
}

export default withStyles(styles)(Layout);
