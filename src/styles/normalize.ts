import { createGlobalStyle } from 'styled-components';
import {
  font,
  gutter,
  border,
  borderRadius,
  delay,
  inputBg,
  link,
  zindex
} from './variables';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Kanit';
    src: url('/fonts/Kanit/kanit-light/kanit-light.eot');
    src: url('/fonts/Kanit/kanit-light/kanit-light.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Kanit/kanit-light/kanit-light.ttf') format('truetype'),
    url('/fonts//Kanit/kanit-light/kanit-light.svg') format('svg');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Kanit';
    src: url('/fonts/Kanit/kanit-regular/kanit-regular.eot');
    src: url('/fonts/Kanit/kanit-regular/kanit-regular.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Kanit/kanit-regular/kanit-regular.ttf') format('truetype'),
    url('/fonts/Kanit/kanit-regular/kanit-regular.svg') format('svg');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Kanit';
    src: url('/fonts/Kanit/kanit-medium/kanit-medium.eot');
    src: url('/fonts/Kanit/kanit-medium/kanit-medium.eot?#iefix') format('embedded-opentype'),
    url('/fonts/Kanit/kanit-medium/kanit-medium.ttf') format('truetype'),
    url('/fonts/Kanit/kanit-medium/kanit-medium.svg') format('svg');
    font-weight: bold;
    font-style: normal;
  }

  *, ::after, ::before {
    box-sizing: border-box;
  }

  html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
  }

  body{
    font-family: ${font.family.default};
    font-size: ${font.size.default};
    color: ${({ theme }) => theme.text.color.default};
    background: ${({ theme }) => theme.background.body};
    font-weight: normal;
    line-height: 1.43;
    margin: 0px;

    &.lock{
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }

  audio,
  canvas,
  progress,
  video {
    display: inline-block;
    vertical-align: baseline;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden],
  template {
    display: none;
  }

  a{
    color: ${({ theme }) => theme.link.color.default};
    text-decoration: ${link.decoration.normal};
    background-color: transparent;
    cursor: pointer;
    &:active,
    &:hover {
      outline: 0;
      text-decoration: ${link.decoration.hover};
    }
  }

  abbr[title] {
    border-bottom: 1px dotted;
  }

  b,
  strong {
    font-weight: ${font.weight.bold};
  }

  dfn {
    font-style: italic;
  }

  small {
    font-size: 86%;
  }

  img {
    border: 0;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  figure {
    margin: 1em 40px;
  }

  hr {
    box-sizing: content-box;
    margin-block-start: ${gutter.default};
    margin-block-end: ${gutter.default};
    display: block;
    height: 1px;
    border: 0px;
    border-bottom: ${({ theme }) => theme.border.default};
  }

  pre {
    overflow: auto;
  }

  code,
  kbd,
  pre,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    color: inherit;
    font: inherit;
    margin: 0;
  }

  button {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
  }

  button[disabled],
  html input[disabled] {
    cursor: not-allowed;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input {
    line-height: normal;
    outline: none;
    &:placeholder{
      color: ${({ theme }) => theme.text.color.placeholder};
    }
  }

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none; 
    margin: 0;
    height: auto;
  }

  input[type=number] {
    -moz-appearance:textfield;
    &:hover, &:focus{
      -moz-appearance: number-input;
    }
  }

  input[type="search"] {
    -webkit-appearance: textfield;
    box-sizing: content-box;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    border: 0;
    padding: 0;
  }

  textarea {
    overflow: auto;
  }

  optgroup {
    font-weight: ${font.weight.bold};
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  thead{
    display: table-header-group;
    vertical-align: middle;
    border-color: inherit;
  }
  
  td,
  th {
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6{
    font-family: ${font.family.title};
    font-weight: ${font.weight.bold};
  }

  iframe{
    border: 0px;
  }

  .toast-top-left {
    top: 80px !important;
    left: 12px;
  }
  .toast-top-right {
    top: 80px !important;
    right: 12px;
  }

  .toast {
    background-color: #030303;
  }
  .toast-success {
    background-color: ${({ theme }) => theme.colors.success.default} !important;
  }
  .toast-error {
    background-color: ${({ theme }) => theme.colors.danger.default} !important;
  }
  .toast-info {
    background-color: ${({ theme }) => theme.colors.info.default} !important;
  }
  .toast-warning {
    background-color: ${({ theme }) => theme.colors.warning.default} !important;
  }

  #toast-container > div{
    box-shadow: none !important;
  }

  .swal2-container{
    z-index: 3172 !important;
  }


  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
      border-radius: 0.3rem;
      background-color: ${({ theme }) => theme.colors.primary.default};
      color: #fff;
    }
    .react-datepicker__input-container input{
      display: block;
      height: 38px;
      width: 100%;
      background-color: ${inputBg};
      border: ${({ theme }) => theme.border.default};
      border-radius: 0px;
      padding: ${gutter.small} ${gutter.default};
      transition: ${delay};
    &:focus{
      outline: none;
      box-shadow: 0 0 0 0.2rem rgba(156,4,5,.25);
    }

    ::placeholder{
      color: ${({ theme }) => theme.text.color.light};
      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${({ theme }) => theme.text.color.light};
    }

    ::-ms-input-placeholder {
      color: ${({ theme }) => theme.text.color.light};
    }
  }


  /* Make clicks pass-through */
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: #29d;

    position: fixed;
    z-index: ${zindex.navbar};
    top: 0;
    left: 0;

    width: 100%;
    height: 2px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
    opacity: 1;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: ${zindex.navbar};
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: ${({ theme }) => theme.colors.secondary.default};
    border-left-color: ${({ theme }) => theme.colors.secondary.default};
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  #nprogress .bar {
    height: 4px;
    background: ${({ theme }) => theme.colors.secondary.default};
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }
  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }


  .react-datepicker-wrapper{
    width: 100%;
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-selecting-range,
  .react-datepicker__day--in-range {
    border-radius: 0.3rem;
    background-color: ${({ theme }) => theme.colors.primary.default};
    color: #fff;
  }
  .react-datepicker__input-container{
    width: 100%;
    input{
      display: block;
      height: 50px;
      width: 100%;
      background-color: ${inputBg};
      border: ${border.dark};
      border-radius: ${borderRadius.default};
      padding: ${gutter.small};
      transition: ${delay};
      &:focus{
        outline: none;
        box-shadow: 0 0 0 0.2rem rgba(156,4,5,.25);
      }
  
      ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: ${({ theme }) => theme.text.color.light};
        opacity: 1; /* Firefox */
      }
  
      :-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: ${({ theme }) => theme.text.color.light};
      }
  
      ::-ms-input-placeholder { /* Microsoft Edge */
        color: ${({ theme }) => theme.text.color.light};
      }
    }
  }

  /* Slider */

  .slick-slider {
    position: relative;
    display: block;
    box-sizing: border-box;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -ms-touch-action: pan-y;
    touch-action: pan-y;
    -webkit-tap-highlight-color: transparent;
  }
  .slick-list {
    position: relative;
    overflow: hidden;
    display: block;
    margin: 0;
    padding: 0;

    &:focus {
        outline: none;
    }

    &.dragging {
        cursor: pointer;
        cursor: hand;
    }
  }
  .slick-slider .slick-track,
  .slick-slider .slick-list {
    -webkit-transform: translate3d(0, 0, 0);
    -moz-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  .slick-track {
    position: relative;
    left: 0;
    top: 0;
    display: block;
    margin-left: auto;
    margin-right: auto;

    &:before,
    &:after {
        content: "";
        display: table;
    }

    &:after {
        clear: both;
    }

    .slick-loading & {
        visibility: hidden;
    }
  }
  .slick-slide {
    float: left;
    height: 100%;
    min-height: 1px;
    [dir="rtl"] & {
        float: right;
    }
    img {
        display: block;
    }
    &.slick-loading img {
        display: none;
    }

    display: none;

    &.dragging img {
        pointer-events: none;
    }

    .slick-initialized & {
        display: block;
    }

    .slick-loading & {
        visibility: hidden;
    }

    .slick-vertical & {
        display: block;
        height: auto;
        border: 1px solid transparent;
    }
  }
  .slick-arrow.slick-hidden {
      display: none;
  }
`;

export default GlobalStyle;
