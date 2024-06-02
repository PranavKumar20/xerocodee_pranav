"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '../../../appwrite';
import { Button, Container, Typography, Snackbar, Alert, Box } from '@mui/material';

const CustomComponent = ({ heading, description }) => (
    <Box sx={{
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        padding: 2,
        borderRadius: 1,
        boxShadow: 1,
        marginBottom: 2,
        width:'100%'
    }}>
        <Box sx={{
            width: 50,
            height: 50,
            backgroundColor: 'transparent',
            border: '1px solid gray',
            marginRight: 2
        }} />
        <Box>
            <Typography variant="h6" align={'left'} >{heading}</Typography>
            <Typography variant="body2" color={'gray'} align={'left'} >{description}</Typography>
        </Box>
    </Box>
);

const SelfHosting = () => {
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('success');
    const [open, setOpen] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await account.get();
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
                    padding: 4,
                    borderRadius: 2,
                    textAlign: 'center',
                    width: '80%',
                    maxWidth: 1000,
                    margin: '0 auto',
                    padding: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
            >
                <Box sx={{
                    backgroundColor: 'white',
                    alignItems: 'center',
                    padding: 2,
                    borderRadius: 1,
                    marginBottom: 2,
                    width:"100%"
                }}>
                    <Typography variant="h6" gutterBottom>
                        Choose a Template To Deploy An Application 
                    </Typography>
                    <Typography variant="body1" color={'gray'} gutterBottom>
                        Import Your Existing App Or Create A New With Our Ready-Made Templates
                    </Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    width:'100%',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    marginTop: 4
                }}>
                    <Box sx={{ width: '48%' }}>
                        <CustomComponent heading="Import Existing App" description="Import An Existing App From Your Owb Repository" />
                        <CustomComponent heading="Import Existing App" description="Import An Existing App From Your Owb Repository" />
                        <CustomComponent heading="Import Existing App" description="Import An Existing App From Your Owb Repository" />
                        <CustomComponent heading="Import Existing App" description="Import An Existing App From Your Owb Repository" />
                    </Box>
                    <Box sx={{ width: '48%' }}>
                        <CustomComponent heading="Import Existing App" description="Import An Existing App From Your Owb Repository" />
                        <CustomComponent heading="Import Existing App" description="Import An Existing App From Your Owb Repository" />
                        <CustomComponent heading="Import Existing App" description="Import An Existing App From Your Owb Repository" />
                        <CustomComponent heading="Import Existing App" description="Import An Existing App From Your Owb Repository" />
                    </Box>
                </Box>
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

export default SelfHosting;
