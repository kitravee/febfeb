import {
  Palette as MuiPallete,
  PaletteOptions as MuiPaletteOptions,
  PaletteColorOptions as MuiPaletteColorOptions,
  PaletteColor as MuiPaletteColor,
} from '@mui/material/styles/createPalette';

declare module '@mui/material/styles/createPalette' {
  interface Palette extends MuiPallete {
    brandSecond: MuiPaletteColor;
  }

  interface PaletteOptions extends MuiPaletteOptions {
    brandSecond?: MuiPaletteColor;
  }

  interface PaletteColorOptions extends MuiPaletteColorOptions {
    brandSecond?: MuiPaletteColor;
  }
}

declare module '@mui/material/CircularProgress' {
  interface CircularProgressPropsColorOverrides {
    brandSecond;
  }
}

declare module '@mui/material/Switch' {
  interface SwitchPropsColorOverrides {
    brandSecond;
  }
}
