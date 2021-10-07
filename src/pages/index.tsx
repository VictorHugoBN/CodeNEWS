import { Box, Button, Typography } from '@material-ui/core';

import Avatar from '../assets/avatar.svg';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { stripe } from '../services/services';

const useStyles = makeStyles((theme: any) => ({
	container: {
		display: 'flex',
		flexDirection: 'column',
		width: '100vw',
		height: '100vh',
		justifyContent: 'center',
		background: theme.gradient.main,
	},
	content: {
		display: 'flex',
		width: '100%',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
}));

interface HomeProps {
	product: {
		priceId: string;
		amount: number;
	};
}

const Home = ({ product }: HomeProps) => {
	const classes = useStyles();

	return (
		<Box className={classes.container}>
			<Head>
				<title>Início | CodeNEWS</title>
			</Head>
			<Box className={classes.content}>
				<Box>
					<Typography>Hey welcome to CodeNEWS!</Typography>
					<Typography variant="h3">News about the</Typography>
					<Typography variant="h3" style={{ color: '#61DBFB' }}>
						<b>React World!</b>
					</Typography>
					<Typography>Get access to all publications!</Typography>
					<Typography> price: {product.amount}/month </Typography>
					<Button variant="contained" color="secondary" style={{ marginTop: 20 }}>
						Subscribe now
					</Button>
				</Box>
				<Box style={{ marginLeft: 50 }}>
					<Image alt="Avatar" src={Avatar} />
				</Box>
			</Box>
		</Box>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const { id, unit_amount } = await stripe.prices.retrieve('price_1Jf5vRECwgR8s7w0xCgVskKt', {
		expand: ['product'],
	});

	const product = {
		priceId: id,
		amount: new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(unit_amount / 100),
	};

	return {
		props: {
			product,
		},
		revalidate: 60 * 60 * 24, // 24 horas
	};
};

export default Home;
