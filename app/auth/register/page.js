"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { account, ID } from '../../appwrite';
import { Container, Grid, TextField, Button, Typography, Box, Snackbar, Alert } from '@mui/material';
import { Google as GoogleIcon, GitHub as GitHubIcon } from '@mui/icons-material';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      setMessageType('error');
      setOpen(true);
      return;
    }
    try {
      await account.create(ID.unique(), email, password, `${firstName} ${lastName}`);
      await account.createEmailPasswordSession(email, password);
      setMessage('User registered successfully');
      setMessageType('success');
      setOpen(true);
      router.push('/pages/dashboard');
    } catch (error) {
      setMessage('Error registering user: ' + error.message);
      setMessageType('error');
      setOpen(true);
    }
  };

  const handleSocialSignup = (provider) => {
    account.createOAuth2Session(provider, 'https://xerocodee-pranav.vercel.app/pages/dashboard', 'https://xerocodee-pranav.vercel.app/pages/failed');
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" mb={4}>
        <Typography variant="h4">Hello!</Typography>
        <Typography variant="h6">Create your account</Typography>
      </Box>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} direction="column">
          <Grid item>
            <TextField
              label="First Name"
              size="small"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              label="Last Name"
              size="small"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <TextField
              label="Email"
              size="small"
              value={email}
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
            <TextField
              type="password"
              label="Confirm Password"
              size="small"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button type="submit" fullWidth variant="contained" sx={{ backgroundColor: 'blue', color: 'white' }}>
              SIGN UP
            </Button>
          </Grid>
          <Grid item textAlign="center">
            <Typography variant="body1">OR</Typography>
          </Grid>
          <Grid item>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Button
                  onClick={() => handleSocialSignup('google')}
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
                  Sign up with Google
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Button
                  onClick={() => handleSocialSignup('github')}
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
                  Sign up with GitHub
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item textAlign="center">
            <Typography variant="body2">
              Already have an account?{' '}
              <Button color="primary" onClick={() => router.push('/auth/login')}>
                LOGIN
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

export default Register;
