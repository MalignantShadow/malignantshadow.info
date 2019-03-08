import React from 'react'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const Cell = ({ children, className }) =>
  typeof children.type === "function" || typeof children === "string" || typeof children === "number" || React.isValidElement(children) ? (
    <TableCell className={className}>{children}</TableCell>
  ) : (
      <TableCell align={children.align} className={classNames(className, children.className)} style={children.style}>{children.text}</TableCell>
    )


export default withStyles(theme => ({
  root: {
    position: "relative",
    margin: theme.spacing.unit * 2,
    border: `1px solid ${theme.palette.divider}`
  },
  table: {

  },
  head: {},
  body: {},
  row: {
    backgroundColor: theme.palette.background.paper,
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.075)"
    },
  },
  cell: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing.unit,
      paddingRight: theme.spacing.unit
    },
    borderBottom: "none"
  },
  bodyCell: {},
  headCell: {
    backgroundColor: theme.asc.accent2
  },
}))(({ classes, head, body }) => (
  <div className={classes.root}>
    <Table className={classes.table}>
      <TableHead className={classes.head}>
        <TableRow className={classes.row}>
          {head && head.map((e, i) => (
            <Cell key={i} className={classNames(classes.cell, classes.headCell)}>{e}</Cell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {body && body.map((e, i) => (
          <TableRow key={"row" + i} className={classes.row}>
            {e.map((e, j) => (
              <Cell key={"row" + i + "item" + j} className={classNames(classes.cell, classes.bodyCell)}>{e}</Cell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
))
