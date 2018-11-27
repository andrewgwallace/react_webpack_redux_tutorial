import React from 'react';
import Header from '@material-ui/Header/Header';
import withStyles from '@material-ui'
const style = theme => {

}

const H3 = props => (
  <Header
  type="h3"
  >
    {...props.children}
  </Header>
)

export default withStyles(style)(H3)