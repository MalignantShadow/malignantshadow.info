import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import SwipeableView from 'react-swipeable-views'
import { autoPlay, virtualize } from 'react-swipeable-views-utils'

const createSlideRender = (children, props) => (params) => {
  const { index, key } = params
  return (
    <div key={key}>
      <Typography align="center" {...props}>{children[index % children.length]}</Typography>
    </div>
  )
}

const View = autoPlay(virtualize(SwipeableView))

const styles = theme => ({
  container: {
    height: "100%"
  },
  slide: {
    height: "100%"
  }
})

const TextScroller = withStyles(styles)(class extends React.Component {

  state = {
    index: 0
  }

  handleChangeIndex = index => {
    console.log(index)
    this.setState({index})
  }

  render () {
    const {classes, className, children, TypographyProps, ...other} = this.props
    const { index } = this.state
    return (
      <div className={className}>
        <View
          interval={1250}
          {...other}
          // animateHeight
          style={{height: "100%"}}
          containerStyle={{height: "100%"}}
          index={index}
          onChangeIndex={this.handleChangeIndex}
          slideClassName={classes.slide}
          slideRenderer={createSlideRender(children, TypographyProps)}
          slideStyle={{overflow: "unset"}}
        />
      </div>
    )
  }

})

TextScroller.propTypes = {
  axis: SwipeableView.propTypes.axis,
  children: PropTypes.arrayOf(PropTypes.string),
  TypographyProps: PropTypes.object
}

TextScroller.defaultProps = {
  axis: "y",
  children: []
}

export default TextScroller