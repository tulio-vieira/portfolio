import React, { Component } from 'react';
import CardItem from './CardItem/CardItem';
import classes from './CardSlider.module.css';
import { ReactComponent as ArrowSvg } from '../../assets/svgs/arrow.svg';

/*
props:
  list={myProjects.map(project => {return {url: project.url, name: project.name}})}
  aspectRatio={8/6}
  widthPercLarge={60}
  breakPoint={580}
  opacity={0.75}
  scale={0.9}
  activeIndex={this.state.activeIndex}
  loop={true}
  style={{marginTop: 'auto', marginBottom: 'auto'}}
  onChange={index => {
    this.setState({activeIndex: index});
  }}
  selected={this.toggleModal}
*/

export default class CardSlider extends Component {
  state = {
    isSmall: window.innerWidth < 500
  };
  widthPerc =  window.innerWidth < 500 ? 100 : this.props.widthPercLarge;

  componentDidMount() {
    // this closure prevents the listener from running more than once
    let isSmall = this.state.isSmall;
    const breakPoint = this.props.breakPoint;
    window.addEventListener('resize', () => {
      if (window.innerWidth < breakPoint && !isSmall) {
        // handleSmall
        isSmall = true;
        this.widthPerc = 100;
        this.setState({ isSmall });
      }
      if (window.innerWidth >= breakPoint && isSmall) {
        // handleLarge
        isSmall = false;
        this.widthPerc = this.props.widthPercLarge;
        this.setState({ isSmall });
      }
    });
  }

  get totalCount() {
    return this.props.list.length;
  }

  get gridWidth() {
    const {widthPercLarge, aspectRatio} = this.props;
    const isEven = this.totalCount % 2 === 0;
    const extraSpace = (100 - widthPercLarge) * (this.state.isSmall ? 100/(aspectRatio * widthPercLarge) : 1);
    return (
      extraSpace / (isEven ? this.totalCount : this.totalCount - 1)
    );
  }

  getDirection(index) {
    const { activeIndex } = this.props;
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
      opacity,
      scale,
      aspectRatio,
      widthPercLarge,
      style,
      selected,
      activeIndex,
      onChange
    } = this.props;
    
    const paddingBottom = (this.widthPerc/aspectRatio) * (this.state.isSmall ? 100/widthPercLarge : 1) + '%';

    return (
      <div className={classes.CardSlider} style={style}>
        <div className={classes.content} style={{ paddingBottom }}>
          {list.map((data, index) => {
            const { direction, offset } = this.getDirection(index);
            const realScale = Math.pow(scale, offset);
            const lengthPerc = this.widthPerc / ( this.state.isSmall ? aspectRatio : 1);
            return <CardItem
              key={index}
              onClick={index === activeIndex ? selected : () => onChange(index)}
              {...data}
              style={{
                [`margin${this.state.isSmall ? 'Top': 'Left'}`]:
                  this.gridWidth * direction * offset +
                  direction * (lengthPerc / 2) * (1 - realScale) + "%",
                zIndex: this.totalCount - offset,
                opacity: Math.pow(opacity, offset),
                transform: `translateX(-50%) translateY(-50%) translateZ(0) scale(${realScale})`,
                transition: "all 300ms",
                width: this.widthPerc + '%',
                paddingBottom: this.widthPerc/aspectRatio + '%'
              }}
            />
          })}
        </div>

        <div
          className={`${classes.btn} ${classes.left}`}
          onClick={this.handlePrev} >
          <ArrowSvg/>
        </div>
        
        <div
          className={`${classes.btn} ${classes.right}`}
          onClick={this.handleNext} >
          <ArrowSvg/>
        </div>

      </div>
    );
  }

  handlePrev = () => {
    let { activeIndex, onChange } = this.props;
    activeIndex = --activeIndex < 0 ? this.totalCount - 1 : activeIndex;
    onChange(activeIndex);
  };

  handleNext = () => {
    let { activeIndex, onChange } = this.props;
    activeIndex = ++activeIndex >= this.totalCount ? 0 : activeIndex;
    onChange(activeIndex);
  };
}