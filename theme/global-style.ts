"use client";

import "react-chat-elements/dist/main.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: Inter, sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    margin: 0;
    padding: 0;
  }

  html, body {
    margin: 0;
    box-sizing: border-box;
  }
  
  ul, li {
    list-style: none;
  }
  
  button {
    border: none;
    background: none;
    outline: none;
    box-shadow: none;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    text-decoration: none;
    transition: ${({ theme }) => theme.transitions.general};
    
    &:hover {}
  }

  * {
    box-sizing: border-box;
  }


  img,
  video {
    display: block;
    max-width: 100%;
    height: auto;
  }

  textarea {
    resize: none;
  }

  /* chrome autofill background removal */
  input:-webkit-autofill {
    background: #000000 !important;
    transition: background-color 0s 600000s, color 0s 600000s;
    
  }
  
  /* firefox placeholder \\ invalid fix + ios bdrs */
  input {
    border-radius: 0;
  }

  input::placeholder {
    opacity: 1;
  }

  input:invalid {
    box-shadow: none;
  }

  textarea {
    border-radius: 0;
  }

  textarea::placeholder {
    opacity: 1;
  }

  textarea:invalid {
    box-shadow: none;
  }

  select {
    border-radius: 0;
  }

  /* chrome search X removal */
  input[type='search']::-webkit-search-decoration,
  input[type='search']::-webkit-search-cancel-button,
  input[type='search']::-webkit-search-results-button,
  input[type='search']::-webkit-search-results-decoration {
    appearance: none;
  }

  /* input[number] arrows removal */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    margin: 0;
    appearance: none;
  }

  input[type='number'] {
    appearance: textfield;
  }

  /* ios button \\ inputs reset */
  select,
  textarea,
  input:matches([type='email'], [type='number'], [type='password'], [type='search'], [type='tel'], [type='text'], [type='url']) {
    appearance: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    appearance: none;
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    clip: rect(0 0 0 0);
  }

  .prevent-scroll {
    overflow: hidden;
  }
  
  .message-list {
    //overflow-y: scroll;
    height: 100%;
  }

  @property --myColor1 {
    syntax: '<color>';
    initial-value: transparent;
    inherits: false;
  }
  @property --myColor2 {
    syntax: '<color>';
    initial-value: transparent;
    inherits: false;
  }
`;

export default GlobalStyle;
