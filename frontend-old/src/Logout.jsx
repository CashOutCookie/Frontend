import React, { useEffect } from 'react';
import axiosInstance from 'axios';
import { useHistory } from 'react-router-dom';

export default function SignUp() {
	const history = useHistory();

	useEffect(() => {
		localStorage.removeItem('access_token');
		localStorage.removeItem('username');
		localStorage.removeItem('username_or_email');
		localStorage.removeItem('token');
		localStorage.removeItem('refresh_token');
		axiosInstance.defaults.headers['Authorization'] = null;
		history.push('/login');
	});
	return <div>{'Logout'}</div>;
}