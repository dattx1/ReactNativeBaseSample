import { Platform } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

import normalizeText from './normalizeText';
export const baseFontSize = 14;
export const baseSpacing = 16;
export const COMMON_COLOR = {
  BLACK: '#000000',
  WHITE: '#ffffff',
  RED: '#DC143C',
  GREEN: '#34C759',
  GRAY: '#808080',
  GRAY_2: '#959595',
  GRAY_3: '#fbfcf7',
  GRAY_4: '#AAAAAA',
  GRAY_5: '#E7E7E7',
  GRAY_6: '#F9F9F9',
  GRAY_7: '#D3D3D3',
  GRAY_8: '#D3D3D3',
  GRAY_9: '#f2f2f0',
  GAINS_BORO: '#DCDCDC',
  PRIMARY: '#0B849C',
  COMMON: '#969696',
  TRANSPARENT: 'rgba(0, 0, 0, 0)',
  TRANSPARENT_HALF: 'rgba(0,0,0,0.5)',
  BOX_SHADOW: '#F5F5F5',
};

export const TEXT_COLOR = {
  HIGH_LIGHT: '#23A0FA',
  ERROR: '#F41228',
};

export const BACK_GROUND_COLOR = {
  COMMON: '#E6E6E6',
  MESSAGE: '#2e2d2b',
  BLUR: 'rgba(0, 0, 0, 0.3)',
  SHADOW: 'rgba(0, 0, 0, 0.4)',
  NOTICE: '#FDFDFD',
  POPUP: '#F2F2F2',
  CARD_CONTAINER: 'rgba(232,232,232,1)',
  PAGE_TITLE: '#959595',
};

export const BUTTON_COLOR = {
  COMMON: '#020303',
  BUTTON: '#707070',
};

export const FONTS = {
  HEADER1: normalizeText(baseFontSize * 3),
  HEADER2: normalizeText(baseFontSize * 2.5),
  HEADER3: normalizeText(baseFontSize * 2),
  HEADER4: normalizeText(baseFontSize * 1.75),
  HEADER5: normalizeText(baseFontSize * 1.5),
  HEADER6: normalizeText(baseFontSize * 1.25),
  HEADER7: normalizeText(baseFontSize * 1.15),
  NORMAL: normalizeText(baseFontSize),
  SMALL: normalizeText(baseFontSize * 0.875),
  XSMALL: normalizeText(baseFontSize * 0.75),
  XXSMALL: normalizeText(baseFontSize * 0.5),
  TEXTVIEW: normalizeText(baseFontSize * 0.8),
  LAST_CARD_CHARRACTER: normalizeText(16),
  TITLE_MODAL: normalizeText(12.8),
  NUMBER: normalizeText(baseFontSize * 0.85),
  getLineHeight: (lineHeight: number): object => {
    return {
      ...Platform.select({
        ios: {},
        android: {
          lineHeight: lineHeight,
        },
      }),
    };
  },
};

export const LINE_HEIGHT = {
  HEADER1: normalizeText(baseFontSize * 3) + 4,
  HEADER2: normalizeText(baseFontSize * 2.5) + 4,
  HEADER3: normalizeText(baseFontSize * 2) + 4,
  HEADER4: normalizeText(baseFontSize * 1.75) + 4,
  HEADER5: normalizeText(baseFontSize * 1.5) + 4,
  HEADER6: normalizeText(baseFontSize * 1.25) + 4,
  NORMAL: normalizeText(baseFontSize) + 4,
  SMALL: normalizeText(baseFontSize * 0.875) + 4,
  XSMALL: normalizeText(baseFontSize * 0.75) + 4,
  XXSMALL: normalizeText(baseFontSize * 0.5) + 4,
};

export const SPACINGS = {
  NONE: 0,
  FULL: '100%',
  XXXXSMALL: normalizeText(baseSpacing * 0.1),
  XXXSMALL: normalizeText(baseSpacing * 0.125),
  XXSMALL: normalizeText(baseSpacing * 0.25),
  XSMALL: normalizeText(baseSpacing * 0.5),
  SMALL: normalizeText(baseSpacing * 0.75),
  NORMAL: normalizeText(baseSpacing),
  MEDIUM: normalizeText(baseSpacing * 1.25),
  XMEDIUM: normalizeText(baseSpacing * 1.5),
  XXMEDIUM: normalizeText(baseSpacing * 1.75),
  LARGE: normalizeText(baseSpacing * 2),
  XLARGE: normalizeText(baseSpacing * 2.5),
  XXLARGE: normalizeText(baseSpacing * 3),
  XXXLARGE: normalizeText(baseSpacing * 3.5),
  XXXXLARGE: normalizeText(baseSpacing * 4),
  COMMON_BUTTON_HEIGHT: normalizeText(40),
  DOT_SIZE: normalizeText(6),
  COLLAPSE_BUTTON: normalizeText(45),
  TEXT_INPUT_HEIGHT: normalizeText(25),
};

export const width = {
  FULL: wp('100%'),
  HALF: wp('50%'),
  TERM_BUTTON: normalizeText(220),
};
