import { scrollbarVertical } from './functions';

export const bg = '#f2f3f4';
export const layoutWidth = '660px';
export const font = {
  family: {
    default: '"Open Sans", sans-serif;',
    title: '"Kanit", sans-serif;'
  },
  color: {
    default: '#1F2532',
    lighter: '#5C676D',
    light: '#7E8890',
    dark: '#000000',
    placeholder: '#bec9c5',
    inverse: '#fff'
  },
  size: {
    default: '14px',
    small: '12px',
    xs: '10px',
    large: '16px',
    mainTitle: '30px',
    sectionTitle: '34px',
    title: '18px',
    subTitle: '24px',
    contentTitle: '18px',
    navbar: '12px'
  },
  weight: {
    light: '300',
    normal: '400',
    bold: '600'
  }
};

export const gutter = {
  default: '10px',
  small: '8px',
  xs: '5px',
  medium: '15px',
  large: '20px',
  xl: '40px',
  table: '.75rem',
  section: '5rem'
};

export const link = {
  color: '#2F80ED',
  decoration: {
    normal: 'none',
    hover: 'none'
  }
};

export const borderRadius = {
  default: '6px',
  large: '15px',
  small: '3px'
};

export const borderColor = '#ecedee';
export const borderStyle = '1px solid';
export const border = {
  default: `${borderStyle} ${borderColor}`,
  dark: `${borderStyle} #BEC3C7`,
  light: `${borderStyle} #d1d4d7`
  // primary: `${borderStyle} ${({ theme }) => theme.colors.primary.default}`,
  // success: `${borderStyle} ${({ theme }) => theme.colors.success.default}`
};

export const inputBg = '#fff';
export const inputBorderRadius = '6px';
export const inputheight = {
  default: '50px',
  small: '40px',
  large: '60px'
};

export const screen = {
  xxs: {
    up: '350px',
    max: '349.98px'
  },
  xs: {
    up: '376px',
    max: '575.98px'
  },
  sm: {
    up: '576px',
    max: '767.98px'
  },
  md: {
    up: '768px',
    max: '991.98px'
  },
  lg: {
    up: '992px',
    max: '1199.98px'
  },
  xl: {
    up: '1200px',
    max: '1399.98px'
  },
  hd: {
    up: '1400px'
  },
  labtop: {
    up: '1280.98px'
  }
};

export const container = {
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  hd: '1400px'
};

export const contentGutter = '2rem';
export const headerPadding = '15px 30px';
export const delay = 'all 0.15s ease-in-out';
export const gradient = 'linear-gradient(-78deg, rgb(0,22,90) 0%, rgb(0,31,130) 35%, rgb(0,122,193) 86%, rgb(0,212,255) 100%)';
export const shadow = '0px 4px 20px 0px rgba(50, 50, 93, 0.2)';

export const zindex = {
  default: '1024',
  navbar: '2048',
  sportNavbar: '1124',
  modal: '2248'
};

export const caretSize = '12px';

export const scrollbar = scrollbarVertical('4px', '#008F6B', '#E0E0E0');

export const size = {
  left: '240px',
  right: '256px',
  content: '830px',
  body: '1366px'
};
