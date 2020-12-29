import React, { Component } from 'react';

/*
props:
  list={list}
  renderItem={CardItem}
  width={400}
  boxWidth={900}
  height={210}
  opacity={0.75}
  scale={0.9}
  disableNext={false}
  disablePrev={false}
  index={3}
  loop={true}
*/

export default class CardSlider extends Component {
  state = {
    activeIndex: this.props.index || 0,
    isSmall: window.innerWidth < 500
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.index !== nextProps.index) {
      this.setState({
        activeIndex: nextProps.index
      });
    }
  }

  componentDidMount() {
    // this closure prevents the listener from running more than once
    let isSmall = this.state.isSmall;
    window.addEventListener('resize', () => {
      if (window.innerWidth < 500 && !isSmall) {
        // handleSmall
        isSmall = true;
        this.setState({isSmall});
      }
      if (window.innerWidth >= 500 && isSmall) {
        // handleLarge
        isSmall = false;
        this.setState({isSmall});
      }
    });
  }

  get totalCount() {
    return this.props.list.length;
  }

  get gridWidth() {
    const isEven = this.totalCount % 2 === 0;
    const { width, boxWidth, height } = this.props;
    const extraSpace = this.state.isSmall ? ((height * boxWidth / width) - height): (boxWidth - width);
    return (
      extraSpace / (isEven ? this.totalCount : this.totalCount - 1)
    );
  }

  get disablePrev() {
    const { loop, disablePrev } = this.props;
    const { activeIndex } = this.state;
    if (disablePrev) return true;
    return !loop && activeIndex === 0;
  }

  get disableNext() {
    const { loop, disableNext } = this.props;
    const { activeIndex } = this.state;
    if (disableNext) return true;
    return !loop && activeIndex === this.totalCount - 1;
  }

  getDirection(index) {
    const { activeIndex } = this.state;
    let direction = 1;
    if (
      index - activeIndex > this.totalCount / 2 ||
      (index - activeIndex < 0 && index - activeIndex > -this.totalCount / 2)
    ) {
      direction = -1;
    }

    let offset = Math.abs(index - activeIndex);
    if (offset > this.totalCount / 2) {
      offset = activeIndex + this.totalCount - index;
    }
    if (index - activeIndex < -this.totalCount / 2) {
      offset = this.totalCount + index - activeIndex;
    }
    return {
      direction,
      offset
    };
  }

  render() {
    const {
      list,
      renderItem,
      opacity,
      scale,
      width,
      height,
      boxWidth,
      style
    } = this.props;

    return (
      <div className='card-slider' style={{ ...styles.wrapper, style }} >
        <div style={{ ...styles.content, width: boxWidth, height: this.state.isSmall ? (210 * boxWidth / width) : 210 }}>
          {list.map((data, index) => {
            const { direction, offset } = this.getDirection(index);
            const realScale = Math.pow(scale, offset);
            return renderItem({
              key: index,
              ...data,
              style: {
                position: "absolute",
                left: "50%",
                top: "50%",
                [`margin${this.state.isSmall ? 'Top': 'Left'}`]:
                  this.gridWidth * direction * offset +
                  direction * (((this.state.isSmall ? height: width) / 2) * (1 - realScale)),
                zIndex: this.totalCount - offset,
                opacity: Math.pow(opacity, offset),
                transform: `translateX(-50%) translateY(-50%) translateZ(0) scale(${realScale})`,
                transition: "all 300ms"
              }
            });
          })}
        </div>
        {!this.disablePrev && (
          <span
            style={{ ...styles.btn, left: 35 }}
            onClick={this.handlePrev}
          >
            {"<"}
          </span>
        )}
        {!this.disableNext && (
          <span
            style={{ ...styles.btn, right: 35 }}
            onClick={this.handleNext}
          >
            {">"}
          </span>
        )}
      </div>
    );
  }

  handlePrev = () => {
    let { activeIndex } = this.state;
    if (this.disablePrev) return;
    activeIndex = --activeIndex < 0 ? this.totalCount - 1 : activeIndex;
    this.setState({ activeIndex });
    this.handleChange(activeIndex);
  };

  handleNext = () => {
    let { activeIndex } = this.state;
    if (this.disableNext) return;
    activeIndex = ++activeIndex >= this.totalCount ? 0 : activeIndex;
    this.setState({ activeIndex });
    this.handleChange(activeIndex);
  };

  handleChange = index => {
    const { list, onChange } = this.props;
    onChange && onChange(index, list[index]);
  };
}

const styles = {
  wrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    width: "100%"
  },

  content: {
    height: 210,
    position: "relative",
  },

  btn: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    width: 36,
    height: 36,
    zIndex: 99,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 24
  }
};
