import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
	palette: {
		background: {
			default: '#282828',
			paper: '#969696',
		},
	},
	typography: {
		allVariants: {
			color: '#fff',
		},
	},
	overrides: {
		MuiButton: {
			contained: {
				borderRadius: '30px',
				fontWeight: 600,
			},
		},
	},
});

export const cssVariables = {
	gradient: {
		main: 'linear-gradient(315deg, #2d3436 0%, #000000 74%);',
	},
};
