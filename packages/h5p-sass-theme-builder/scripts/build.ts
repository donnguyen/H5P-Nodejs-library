import type { ITheme } from '@lumieducation/h5p-server';
import sassThemeBuilder from '../src/sassThemeBuilder';

const theme: ITheme = {
    backgroundColor: '#222b37',
    secondaryBackgroundColor: '#333d49',
    fontColor: '#ffffff',
    disabledFontColor: '#a0a0a1',
    primaryColor: '#7636dc',
    primaryContrastColor: '#ffffff',
    secondaryColor: '#3d66ff',
    secondaryContrastColor: '#ffffff',
    dividerColor: '#45505d',
    warningColor: '#e67e22',
    warningContrastColor: '#000000',
    successColor: '#27ae60',
    successContrastColor: '#FFFFFF',
    errorColor: '#c0392b',
    errorContrastColor: '#FFFFFF',
    fontFamily: "'Imperial Script', cursive",
    buttonBorderRadius: '0.5em'
};

const generatedCss = sassThemeBuilder(theme);
console.log(generatedCss);