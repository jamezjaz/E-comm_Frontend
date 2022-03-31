import React from 'react';

class SliderBtn extends React.Component {
  render() {
    const { moveSlide, direction } = this.props;
    return (
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
        {direction === "next" ? <span>❯</span> : <span>❮</span>}
        {/* {direction === "next" ? '❯' : '❮'} */}
      </button>
    );
  }
};

export default SliderBtn;