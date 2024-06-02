"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '../../appwrite';
import { Container, Grid, TextField, Button, Typography, Box, Snackbar, Alert } from '@mui/material';
import { Google as GoogleIcon, GitHub as GitHubIcon } from '@mui/icons-material';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const session = await account.createEmailPasswordSession(email, password);
      setMessage('User logged in successfully');
      setMessageType('success');
      setOpen(true);
      router.push('/pages/dashboard');
    } catch (error) {
      setMessage('Error logging in user: ' + error.message);
      setMessageType('error');
      setOpen(true);
    }
  };

  const handleSocialLogin = (provider) => {
    account.createOAuth2Session(provider, 'http://localhost:3000/pages/dashboard', 'http://localhost:3000/pages/failed');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mb={4}>
        <Typography variant="h4">Hello!</Typography>
        <Typography variant="h6">Login to your account</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              label="Email"
              value={email}
              size="small"
              onChange={(e) => setEmail(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              type="password"
              label="Password"
              size="small"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: 'blue', color: 'white' }}>
              Login
            </Button>
          </Grid>
          <Grid item textAlign="center">
            <Typography variant="body1">OR</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  onClick={() => handleSocialLogin('google')}
                  fullWidth
                  variant="outlined"
                  startIcon={<GoogleIcon sx={{ color: '#4285F4' }} />}
                  sx={{
                    border: '1px solid black',
                    color: 'black',
                    boxShadow: 1,
                    '&:hover': {
                      boxShadow: 2,
                    },
                  }}
                >
                  Login with Google
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={() => handleSocialLogin('github')}
                  fullWidth
                  variant="outlined"
                  startIcon={<GitHubIcon sx={{ color: 'black' }} />}
                  sx={{
                    border: '1px solid black',
                    color: 'black',
                    boxShadow: 1,
                    '&:hover': {
                      boxShadow: 2,
                    },
                  }}
                >
                  Login with GitHub
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item textAlign="center">
            <Typography variant="body2">
              Don&apos;t have an account?{' '}
              <Button color="primary" onClick={() => router.push('/auth/register')}>
                SIGN UP
              </Button>
            </Typography>
          </Grid>
        </Grid>
      </form>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleClose} severity={messageType} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;
