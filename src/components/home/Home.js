import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Login from '../login/Login.js';
import ReactTouchPosition from 'react-touch-position';


export default class Home extends Component {

  static propTypes = {

  };

  state = {
    x1: -1,
    y1: -1,
    x2: -1,
    y2: -1,
    x3: -1,
    y3: -1,
    x4: -1,
    y4: -1,
    x5: -1,
    y5: -1,
    x6: -1,
    y6: -1,
    x7: -1,
    y7: -1,
    x8: -1,
    y8: -1,
    number: 1
  }

  getCoordinates = (e, n) => {
    n === 1 ?
      this.setState({ x1: e.nativeEvent.offsetX, y1: e.nativeEvent.offsetY }) :
    n === 2 ?
      this.setState({ x2: e.nativeEvent.offsetX, y2: e.nativeEvent.offsetY }) :
    n === 3 ?
      this.setState({ x3: e.nativeEvent.offsetX, y3: e.nativeEvent.offsetY }) :
    n === 4 ?
      this.setState({ x4: e.nativeEvent.offsetX, y4: e.nativeEvent.offsetY }) :
    n === 5 ?
      this.setState({ x5: e.nativeEvent.offsetX, y5: e.nativeEvent.offsetY }) :
    n === 6 ?
      this.setState({ x6: e.nativeEvent.offsetX, y6: e.nativeEvent.offsetY }) :
    n === 7 ?
      this.setState({ x7: e.nativeEvent.offsetX, y7: e.nativeEvent.offsetY }) :
    n === 8 ?
      this.setState({ x8: e.nativeEvent.offsetX, y8: e.nativeEvent.offsetY }) :
    alert('CHANGE IMAGE')

    this.setState({ number: n + 1 })
  }

  previous = (n) => { this.setState({ number: n - 1 }) }
  next = (n) => { this.setState({ number: n + 1 }) }

  render() {
    const { x1, y1, x2, y2, x3, y3, x4, y4, x5, y5, x6, y6, x7, y7, x8, y8, number } = this.state;

    return (
      <div style={styles.container}>
        <img src={require('./face1.jpeg')} alt="face1" style={styles.img} onClick={(e) => this.getCoordinates(e, this.state.number)}/>
        <p style={{ position: 'absolute', left: `${x1}px`, top: `${y1}px` }}>
          { x1 !== -1 && `* ${this.state.x1} ${this.state.y1}`}
        </p>
        <p style={{ position: 'absolute', left: `${x2}px`, top: `${y2}px` }}>
          { x2 !== -1 && `* ${this.state.x2} ${this.state.y2}`}
        </p>
        <p style={{ position: 'absolute', left: `${x3}px`, top: `${y3}px` }}>
          { x3 !== -1 && `* ${this.state.x3} ${this.state.y3}`}
        </p>
        <p style={{ position: 'absolute', left: `${x4}px`, top: `${y4}px` }}>
          { x4 !== -1 && `* ${this.state.x4} ${this.state.y4}`}
        </p>
        <p style={{ position: 'absolute', left: `${x5}px`, top: `${y5}px` }}>
          { x5 !== -1 && `* ${this.state.x5} ${this.state.y5}`}
        </p>
        <p style={{ position: 'absolute', left: `${x6}px`, top: `${y6}px` }}>
          { x6 !== -1 && `* ${this.state.x6} ${this.state.y6}`}
        </p>
        <p style={{ position: 'absolute', left: `${x7}px`, top: `${y7}px` }}>
          { x7 !== -1 && `* ${this.state.x7} ${this.state.y7}`}
        </p>
        <p style={{ position: 'absolute', left: `${x8}px`, top: `${y8}px` }}>
          { x8 !== -1 && `* ${this.state.x8} ${this.state.y8}`}
        </p>

        <button onClick={() => this.previous(number)}>Previous</button>
        <button onClick={() => this.next(number)}>Next</button>

        <p>{`1: (${x1}, ${y1})`}</p>
        <p>{`2: (${x2}, ${y2})`}</p>
        <p>{`3: (${x3}, ${y3})`}</p>
        <p>{`4: (${x4}, ${y4})`}</p>
        <p>{`5: (${x5}, ${y5})`}</p>
        <p>{`6: (${x6}, ${y6})`}</p>
        <p>{`7: (${x7}, ${y7})`}</p>
        <p>{`8: (${x8}, ${y8})`}</p>
      </div>

    );
  }
}

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    border: '1px solid black',
  },
  img: {
    width: '1242px',
    height: '2208px',
  },
  coordinateX: {
    position: 'absolute',
    zIndex: 999,
  },
  coordinateY: {
    position: 'absolute',
    zIndex: 999,
  }
}
