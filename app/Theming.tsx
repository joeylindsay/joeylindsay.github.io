import { createTheme } from '@mui/material/styles';

// GLOBAL
export const JoeyTheme = createTheme({
  palette: {
    action: {
      hover: '#00000011',
    },
    text: {
      primary: '#000',
      secondary: '#2a2a2a',
      disabled: '#939393',
    },
    primary: {
      main: '#477048',
      light: '#3d7eaf',
      contrastText: '#fff',
    },
    secondary: {
      main: '#fff',
      contrastText: '#FFF',
    },
    background: {
      default: '#ffffff',
    },
    info: {
      main: '#7a78e3',
    },
    error: {
      main: '#d32f2f',
    },
  },
  typography: {
    fontFamily: ['Roboto', 'Arial', 'Helvetica', 'sans- serif'].join(','),
    fontSize: 12,
  },
  components: {
    MuiTooltip: {
      defaultProps: {
        arrow: true,
        disableInteractive: true,
        enterDelay: 500,
      },
      styleOverrides: {
        tooltip: {
          fontSize: 12,
        },
      },
    },

    MuiListItem: {
      styleOverrides: {
        root: {
          '.Mui-selected + * .MuiButtonBase-root': {
            color: 'white',
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            ':hover': {
              backgroundColor: '#2B74B7',
            },
            backgroundColor: '#2B74B7',
            color: '#ffffff',
            '*': {
              color: '#ffffff',
            },
          },
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            backgroundColor: '#2B74B7',
            ':hover': {
              '.MuiTableCell-root': {
                color: '#000000',
              },
            },
            '.MuiSvgIcon-colorDisabled': {
              color: 'lightgray',
            },
            '.MuiSvgIcon-colorSuccess': {
              color: 'greenyellow',
            },
            '.MuiTableCell-root': {
              color: '#ffffff',
            },
          },
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },

    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore This works but is not typed
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
        inputRoot: {
          borderRadius: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        scrollButtons: {
          width: 20,
        },
      },
    },
  },
});
