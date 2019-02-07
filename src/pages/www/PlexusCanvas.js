import React from 'react'
import PropTypes from 'prop-types'

import AnimatedCanvas from "../../components/common/AnimatedCanvas"

class PlexusCanvas extends React.Component {

  state = {
    dots: []
  }

  draw = (canvas, ctx) => {
    const { dots } = this.state
    const { minDistance, maxLines, maxTriangles, triangleColor, dotColor, lineColor } = this.props

    //clear
    ctx.save()
    ctx.fillStyle = "transparent"
    ctx.fillRect(0, 0, ctx.width, ctx.height)
    ctx.restore()

    for(let i = 0; i < dots.length; i++) {
      const dot = dots[i]
      let lines = 0
      const neighbors = []
      for(let j = i + 1; j < dots.length && lines <= maxLines; j++) {
        const neighbor = dots[j]
        const xDelta = dot.x - neighbor.x
        const yDelta = dot.y - neighbor.y
        const distSq = (xDelta * xDelta) + (yDelta * yDelta)
        if(distSq <= (minDistance * minDistance)) {
          neighbors.push(neighbor)
          ctx.save()
          ctx.strokeStyle = lineColor
          ctx.beginPath()
          ctx.moveTo(dot.x, dot.y)
          ctx.lineTo(neighbor.x, neighbor.y)
          ctx.stroke()
          ctx.restore()
          lines++
        }
      }

      if(neighbors.length >= 2) {
        let triangles = 0
        for(let j=0; j < neighbors.length - 1 && triangles <= maxTriangles; j++) {
          const a = neighbors[j]
          const b = neighbors[j + 1]
          ctx.save()
          ctx.fillStyle = triangleColor
          ctx.beginPath()
          ctx.moveTo(dot.x, dot.y)
          ctx.lineTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.fill()
          ctx.restore()
          triangles++
        }
      }

      ctx.save()
      ctx.fillStyle = dotColor
      ctx.beginPath()
      ctx.arc(dot.x, dot.y, 1, 0, 2 * Math.PI)
      ctx.fill()
      ctx.restore()
    }
  }

  generateDot = (canvas) => {
    const width = canvas.width
    const height = canvas.height
    return {
      x: Math.floor(Math.random() * (width + 1)),
      y: Math.floor(Math.random() * (height + 1)),
      angle: Math.floor(Math.random() * 360),
    }
  }

  tick = (canvas, ctx) => {
    const { maxDots, speed } = this.props
    const { dots } = this.state
    if(dots.length < maxDots) {
      for(let i = 0; i < maxDots - dots.length; i++) dots.push(this.generateDot(canvas))
    } else if(dots.length > maxDots) {
      dots.splice(maxDots)
    }

    for(let d of dots) {
      d.x += speed * Math.cos(d.angle * Math.PI / 180)
      d.y += speed * Math.sin(d.angle * Math.PI / 180)

      const quad = Math.floor(d.angle / 90)

      if(d.x <= 0) {
        d.x = 0
        if(quad === 1) d.angle = 180 - d.angle
        else if(quad === 2) d.angle = 270 + 270 - d.angle
      } else if(d.x >= canvas.width) {
        d.x = canvas.width
        if(quad === 0) d.angle = 180 - d.angle
        else if(quad === 3) d.angle = 180 + 360 - d.angle
      } if (d.y <= 0) {
        d.y = 0
        if(quad === 2) d.angle = d.angle = 180 - (d.angle - 180)
        else if(quad === 3) d.angle = 360 - d.angle
      } if (d.y >= canvas.height) {
        d.y = canvas.height
        if(quad === 0) d.angle = 360 - d.angle
        else if(quad === 1) d.angle = 180 + 180 - d.angle
      }

    }

    this.setState({dots})
    this.draw(canvas, ctx)

  }

  render() {
    const {
      speed,
      minDistance,
      maxLines, lineColor,
      maxDots, dotColor,
      maxTriangles, triangleColor,
      ...other} = this.props
    return (
      <AnimatedCanvas
        draw={this.tick}
        {...other}
      />
    )
  }

}

PlexusCanvas.propTypes = {
  maxDots: PropTypes.number,
  speed: PropTypes.number,
  minDistance: PropTypes.number,
  maxLines: PropTypes.number,
  dotColor: PropTypes.string,
  lineColor: PropTypes.string
}

PlexusCanvas.defaultProps = {
  maxDots: 200,
  speed: 1,
  minDistance: 125,
  maxLines: 10,
  maxTriangles: 2,
  dotColor: "#CCC",
  lineColor: "#777",
  triangleColor: "rgba(255, 255, 255, .05)"
}

export default PlexusCanvas