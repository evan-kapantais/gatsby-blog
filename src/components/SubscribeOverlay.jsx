import React from 'react';
import styled from 'styled-components';

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  z-index: 900;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 1;
  transition: opacity 300ms ease;

  header {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;

    > div {
      display: flex;

      > img {
        width: 32px;
        margin-right: 1rem;
      }
    }

    .close-button {
      position: relative;
      width: 40px;
      height: 40px;
      background: none;
      border: none;
      outline: none;
      transition: all 300ms ease;

      &:hover {
        transform: rotate(90deg);
      }

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 19px;
        left: 0;
        width: 40px;
        height: 1px;
        background: rgb(230, 230, 230);
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }
  }

  > .container {
    color: #fff;
    width: fit-content;
    z-index: 999;
    border-radius: 10px;
    text-align: center;
    padding: 1rem;

    h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1.5rem;
      font-family: Georgia, 'Times New Roman', Times, serif;
      color: rgb(230, 230, 230);
      line-height: 1.5;
      margin-bottom: 4rem;
    }

    form {
      width: 90%;
      display: flex;
      align-items: center;
      margin: 0 auto;

      input[type='email'] {
        flex: 4;
        display: block;
        padding: 0.8rem 1rem;
        margin-right: 1rem;
        border-radius: 8px;
        border: none;
        outline: none;
      }

      button[type='submit'] {
        flex: 1;
        padding: 0.8rem 1rem;
        border-radius: 8px;
        background: #7fceff;
        color: #fff;
        border: none;
        outline: none;
        font-weight: 600;
        transition: all 300ms ease;

        &:hover {
          background: #6bb5ff;
        }
      }
    }
  }
`;

const SubscribeOverlay = () => {
  const closeModal = () => {
    const modal = document.getElementById('subscribe-modal');
    console.log(modal);

    modal.style.opacity = 0;

    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  };

  return (
    <Modal id="subscribe-modal">
      <header>
        <div>
          <img
            src={require('../images/icons/logo-02-02-white-background.png')}
            alt="brand logo"
          />
          <h2>EK</h2>
        </div>
        <button
          type="button"
          className="close-button"
          onClick={closeModal}
        ></button>
      </header>
      <div className="container">
        <h1>Subscribe</h1>
        <p>Subscribe and get my latest posts right in your email</p>
        <form>
          <input type="email" placeholder="youremail@example.com" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </Modal>
  );
};

export default SubscribeOverlay;
