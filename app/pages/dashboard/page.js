"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '../../appwrite';
import { Button, Container, Typography, Snackbar, Alert, Box } from '@mui/material';
import StyledButton from '@/app/components/StyledButton';
import SearchBox from '@/app/components/SearchBox';

const Dashboard = () => {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('success');
  const [open, setOpen] = useState(false);
  const [showCompanySearchBox, setShowCompanySearchBox] = useState(false);
  const [showOrgSearchBox, setShowOrgSearchBox] = useState(false);
  const [activeButton, setActiveButton] = useState('');
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await account.get();
        setUsername(user.name);
      } catch (error) {
        router.push('/auth/login');
      }
    };
    getUser();
  }, [router]);

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      setMessage('User logged out successfully');
      setMessageType('success');
      setOpen(true);
      router.push('/auth/login');
    } catch (error) {
      setMessage('Error logging out user: ' + error.message);
      setMessageType('error');
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleButtonClick = (type) => {
    if (type === 'developer') {
      router.push('/pages/developers');
    } else if (type === 'company') {
      setShowCompanySearchBox(true);
      setShowOrgSearchBox(false);
    } else {
      setShowOrgSearchBox(true);
      setShowCompanySearchBox(false);
    }
    setActiveButton(type);
  };

  return (
    <Container
      disableGutters
      sx={{
        background: 'linear-gradient(to bottom, #b8d5ff, white)',
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0
      }}
    >
      <Button
        variant="outlined"
        color="primary"
        onClick={handleLogout}
        sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          backgroundColor: 'white',
          borderColor: 'black',
          color: 'black',
          '&:hover': {
            backgroundColor: 'white',
            borderColor: 'black',
          }
        }}
      >
        Log out
      </Button>
      <Box
        sx={{
          backgroundColor: 'white',
          padding: 4,
          borderRadius: 2,
          boxShadow: 1,
          textAlign: 'center',
          width: '80%',
          maxWidth: 800,
          height: 400,
          overflow: 'hidden'
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome, {username} !
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, marginBottom: 4 }}>
          <StyledButton
            onClick={() => handleButtonClick('developer')}
            active={activeButton === 'developer'}
          >
            Developer
          </StyledButton>
          <StyledButton
            onClick={() => handleButtonClick('organisation')}
            active={activeButton === 'organisation'}
          >
            Organisation
          </StyledButton>
          <StyledButton
            onClick={() => handleButtonClick('company')}
            active={activeButton === 'company'}
          >
            Company
          </StyledButton>
        </Box>
        {showCompanySearchBox && <SearchBox placeholder='Company Name' />}
        {showOrgSearchBox && <SearchBox placeholder='Organisation Name' />}
      </Box>
      <Snackbar
        open={open}
        autoHideDuration={5000}
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

export default Dashboard;
