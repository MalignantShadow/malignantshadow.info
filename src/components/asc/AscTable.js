import React from 'react'
import classNames from 'classnames'

import {withStyles} from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

const Cell = ({children, className}) =>
  typeof children.type === "function" || typeof children === "string" || typeof children === "number" || React.isValidElement(children) ? (
    <TableCell className={className}>{children}</TableCell>
  ) : (
    <TableCell align={children.align} className={className}>{children.text}</TableCell>
  )


export default withStyles(theme => ({
  root: {},
  head: {},
  body: {},
  row: {},
  cell: {},
  bodyCell: {},
  headCell: {},
}))(({classes, head, body}) => (
  <Table className={classes.root}>
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
))
