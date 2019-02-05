import React from 'react'
import PropTypes from 'prop-types'

class AnimatedCanvas extends React.Component {

  componentDidMount() {
    this.ctx = this.refs.canvas.getContext("2d")
    this.calculateSize()
    this.reset()
    this.animate()
  }

  calculateSize = () => {
    const {width, height} = this.refs.canvas.getBoundingClientRect()
    // console.log(width, height)
    this.refs.canvas.width = width
    this.refs.canvas.height = height
  }

  animate = () => {
    this.calculateSize()
    this.draw()
    this.raf = requestAnimationFrame(this.animate)
  }

  draw = () => {
    this.ctx.save()
    this.props.draw(this.refs.canvas, this.ctx)
    this.ctx.restore()
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.raf)
  }

  reset = () => this.props.reset(this.refs.canvas, this.ctx)

  shouldComponentUpdate() { return false }

  render() {
    const { draw, reset, resetOnClick, onClick, ...other } = this.props
    return (
      <canvas
        ref="canvas"
        onClick={(e) => {
          if(resetOnClick) this.reset()
          if(onClick) onClick(e)
        }}
        {...other}
      />
    )
  }

}

AnimatedCanvas.propTypes = {
  draw: PropTypes.func,
  reset: PropTypes.func,
  resetOnClick: PropTypes.bool
}

AnimatedCanvas.defaultProps = {
  draw: () => {},
  reset: () => {},
  resetOnClick: false
}

export default AnimatedCanvas