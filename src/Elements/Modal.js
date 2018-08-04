import React, { Component } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-spring';
import { Portal, absolute } from 'Utilities/Index.js';
import Icon from './Icon';
import { Card } from './Cards';    // We can import from 'Elements because we set the .env file

export default class Modal extends Component {
  render() {
    const { children, toggle, on } = this.props;
    return (
      <Portal>
        <Transition 
          from={{ opacity: 0, bgOpacity: 0, y: -50 }} 
          enter={{ opacity: 1, bgOpacity: 0.5, y: 0 }} 
          leave={{ opacity: 0, bgOpacity: 0, y: 50 }} 
          >
          {on && 
            (styles => (
              <ModalWrapper>
                <ModalCard 
                  styles={{ 
                    transform: `translate3d(0, ${styles.y}px, 0)`,
                    ...styles 
                  }}
                >
                  <CloseButton onClick={toggle}>
                    <Icon name="close" />
                  </CloseButton>
                  <div>{children}</div>
                </ModalCard>
                <Background 
                  styles={{ opacity: styles.bgOpacity }}
                  onClick={toggle}
                />
              </ModalWrapper>
            ))
          }
        </Transition>
      </Portal>
    )
  }
}

const ModalWrapper = styled.div`
  ${absolute({})};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = Card.extend`
  position: relative;
  min-width: 320px;
  margin-bottom: 100px;
  z-index: 10;  /* Places this on top of everything else */
`;

const CloseButton = styled.button`
  ${absolute({
      y: 'top',
      x: 'right'
  })};
  border: none;
  background: transparent;
  padding: 10px;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  ${absolute({})};
  background: black;
  opacity: 0.5;
`;