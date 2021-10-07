import * as React from 'react';

import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { cssVariables, theme } from '../theme/theme';

import { AppProps } from 'next/app';
import CustomHeader from '../components/CustomHeader/CustomHeader';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={{ ...theme, ...cssVariables }}>
			<CssBaseline />
			<CustomHeader />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
