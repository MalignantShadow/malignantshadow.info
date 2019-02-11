import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

import { Link } from 'react-router-dom'

import MuiLink from '@material-ui/core/Link'

import IndexCard from '../../components/asc/IndexCard'
import IndexCardContent from '../../components/asc/IndexCardContent'
import routing from "../../lib/asc/routeInfo"
import { resolve } from "../../lib/routing"

const rRules = routing[1]
export default withStyles(theme => ({
  portal: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  },
  card: {
    margin: 8,
    width: "calc(50% - 16px)"
  }
}))(({classes}) => (
  <div className={classes.portal}>
    <IndexCard className={classes.card} color="secondary" title="Rules">
      <IndexCardContent>
          <ul>
            {rRules.children.map((e, i) => (
              <li key={i}>
                <Typography>
                  <MuiLink color="secondary" component={Link} to={resolve(rRules.path, e.path)}>{e.title}</MuiLink>
                </Typography>
              </li>
            ))}
          </ul>
      </IndexCardContent>
    </IndexCard>
  </div>
))