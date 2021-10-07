import React, { useState } from 'react';

import { Button } from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';
import GitHubIcon from '@material-ui/icons/GitHub';

const SignInButton = () => {
	const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

	return !isUserLoggedIn ? (
		<Button variant="contained" startIcon={<GitHubIcon />}>
			Sign in with Github
		</Button>
	) : (
		<Button variant="contained" endIcon={<ClearIcon />}>
			Victor Hugo
		</Button>
	);
};

export default SignInButton;
