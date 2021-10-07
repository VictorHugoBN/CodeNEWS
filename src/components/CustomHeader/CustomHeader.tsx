import { AppBar, Box, Button, Tab, Tabs, Toolbar, Typography, makeStyles } from '@material-ui/core';

import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import SignInButton from '../SignInButton/SignInButton';
import { useRouter } from 'next/router';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box p={3}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired,
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper,
	},
}));

const CustomHeader = () => {
	const classes = useStyles();
	const router = useRouter();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar style={{ display: 'flex', alignItems: 'center', padding: '0 300px' }}>
					<Typography variant="h5">CodeNEWS</Typography>
					<Tabs
						value={value}
						onChange={handleChange}
						aria-label="simple tabs example"
						style={{ width: '100%', marginLeft: 60 }}
					>
						<Tab label="Home" {...a11yProps(0)} onClick={() => router.push('/')} />
						<Tab label="Posts" {...a11yProps(1)} onClick={() => router.push('/posts')} />
					</Tabs>
					<Box style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
						<SignInButton />
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default CustomHeader;
