"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '../../../appwrite';
import { Button, Container, Typography, Snackbar, Alert, Box, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import CircleIcon from '@mui/icons-material/Circle';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined"
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RedeemIcon from '@mui/icons-material/Redeem';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import GppGoodOutlinedIcon  from '@mui/icons-material/GppGoodOutlined';
import MonitorIcon from '@mui/icons-material/Monitor';
import StorageIcon from '@mui/icons-material/Storage';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import DeviceHubIcon from '@mui/icons-material/DeviceHub';
import GridViewIcon from '@mui/icons-material/GridView';


const Component1 = ({ heading, logo }) => (
    <Box sx={{ display: 'flex', borderRadius: 2, justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: 2, boxShadow: 2, margin: 1, height: 80, width: 200 }}>
        <Box>
            <Typography variant="h6" sx={{ pt: 2 }} >{heading}</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 1 }}>
                <CircleIcon sx={{ color: 'red', marginRight: 0.5, width: 10 }} />
                <CircleIcon sx={{ color: 'green', marginRight: 0.1, width: 10 }} />
                <IconButton size="small" >
                    <RefreshIcon sx={{ width: 10, mr: 0.1 }} />
                </IconButton>
            </Box>
        </Box>
        <Box sx={{ ml: 4 }} >
            <img src={logo} alt="logo" style={{ width: 50, height: 50 }} />
        </Box>
    </Box>
);

const Component2 = ({ heading, status, logo, bgColor }) => (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', boxShadow: 2, alignItems: 'center', backgroundColor: bgColor, px: 2, py: 0.4, borderRadius: 1 }}>
        <Box>
            <Typography variant="h6">{heading}</Typography>
            <Typography variant="body2" sx={{ color: 'gray' }}>Status: {status}</Typography>
        </Box>
        <Box>
            <img src={logo} alt="logo" style={{ width: 50, height: 50 }} />
        </Box>
    </Box>
);


const Component3 = ({ percentage }) => {
    const radius = 50;
    const innerRadius = radius * 0.6;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <Box sx={{ position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg width="90%" height="90%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet">
                <circle
                    cx={radius}
                    cy={radius}
                    r={radius * 0.8}
                    fill="none"
                    stroke="#e0e0e0"
                    strokeWidth={radius * 0.4}
                />
                <circle
                    cx={radius}
                    cy={radius}
                    r={radius * 0.8}
                    fill="none"
                    stroke="#1976d2"
                    strokeWidth={radius * 0.4}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                />
            </svg>
            <Box sx={{ position: 'absolute', textAlign: 'center' }}>
                <Typography variant="h6" component="div">{`${percentage}%`}</Typography>
            </Box>
        </Box>
    );
};



const XeroCodeeHosting = () => {
    const [user, setUser] = useState('');
    const [username,setUsername] = useState('');
    const [activeOption, setActiveOption] = useState('home');
    const router = useRouter();

    useEffect(() => {
        const getUser = async () => {
            try {
                const user = await account.get();
                setUser(user);
                setUsername(user.name);
            } catch (error) {
                router.push('/auth/login');
                console.log(error);
            }
        };
        getUser();
    }, [router]);

    const options = [
        { id: 'XeroCodee', icon: <GridViewIcon />, title: 'XeroCodee' },
        { id: 'Builder Center', icon: <ViewInArIcon />, title: 'Builder Center' },
        { id: 'Service Board', icon: <SettingsOutlinedIcon />, title: 'Service Board' },
        { id: 'Clusters', icon: <LogoutIcon />, title: 'Clusters' },
        { id: 'Databases', icon: <StorageIcon />, title: 'Databases' },
        { id: 'Environment', icon: <LogoutIcon />, title: 'Environment' },
        { id: 'Workflow', icon: <ViewInArIcon />, title: 'Workflow' },
        { id: 'Monitoring', icon: <MonitorIcon />, title: 'Monitoring' },
        { id: 'Security', icon: <GppGoodOutlinedIcon />, title: 'Security' },
        { id: 'Web Hooks', icon: <DeviceHubIcon />, title: 'Web Hooks' },
        { id: 'Log Error', icon: <MenuOpenOutlinedIcon />, title: 'Log Error' },
    ];

    return (
        <Container
            disableGutters
            sx={{
                background: 'linear-gradient(to bottom, #b8d5ff, white)',
                minHeight: '100vh',
                minWidth: '100vw',
                display: 'flex',
                flexDirection: 'column',
                padding: 0
            }}
        >
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 0.5, boxShadow: 0.5 }}>
                <img src="https://xerocodeedelta.vercel.app/_next/image?url=%2Flogo.png&w=256&q=75" alt="logo" style={{ width: 100, height: 20 }} />
                <Box sx={{ display: 'flex', gap: 1 }}>
                    <Button variant='contained' sx={{borderRadius:20, textTransform:'none', backgroundColor:'#fdc559', color:'black',py:0, px:1, my:0 }} >
                        <RedeemIcon sx={{backgroundColor:'white', borderRadius:5, p:0.2, mr:0.5}} />
                        Upgrade Plan
                    </Button>
                    <IconButton sx={{ background: 'white', borderRadius:2, }} ><NotificationsNoneOutlinedIcon /></IconButton>
                    <IconButton sx={{ background: 'white', borderRadius:2, }} ><MarkunreadOutlinedIcon /></IconButton>
                    <IconButton sx={{ background: 'white', borderRadius:2 }} ><SettingsOutlinedIcon /></IconButton>
                    <Button variant='contained' sx={{backgroundColor:'transparent', boxShadow:0, textTransform:'none', color:'black',py:0, px:1, my:0 }} >
                        XeroCodee
                        <KeyboardArrowDownIcon sx={{}} />
                    </Button>
                    <IconButton sx={{ background: 'white', borderRadius:2, mr:3 }} ><PersonOutlinedIcon /></IconButton>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', width: '98%', height: '100%' }}>
                <Box sx={{ width: '15%', padding: 2 }}>
                    {options.map(option => (
                        <Box
                            key={option.id}
                            onClick={() => setActiveOption(option.id)}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: 1,
                                cursor: 'pointer',
                                color: activeOption === option.id ? 'blue' : 'black',
                                backgroundColor: activeOption === option.id ? 'white' : 'transparent',
                                marginBottom: 1,
                                borderRadius: 5,
                            }}
                        >
                            {option.icon}
                            <Typography sx={{ marginLeft: 1 }}>{option.title}</Typography>
                        </Box>
                    ))}
                </Box>
                <Box sx={{ flex: 1, my: 1, px: 2, backgroundColor: '#f2f6ff', borderRadius: 2, }}>
                    <Box sx={{ background: 'linear-gradient(to bottom, white, #E8F4F8)', mt: 0.5, px: 1, borderRadius: 2 }} >
                        <Typography variant="h5" gutterBottom>
                            Hi {username} !
                        </Typography>
                        <Typography sx={{ borderRadius: 2, m: 0 }}>
                            Welcome to XeroCodee Ecosystem
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', marginTop: 1 }}>
                        <Box sx={{ width: '70%', padding: 2, borderRadius: 2 }}>
                            <Box>
                                <Typography variant='h6' sx={{pl:2}} >Step 1</Typography>
                                <Typography variant='body2' sx={{pl:2}} >Connect to Cloud</Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <Component1 heading="AWS" logo="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717305459/xerocodee/aws.png" />
                                    <Component1 heading="GCP" logo="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717305459/xerocodee/gcp.png" />
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{pl:2}} >Step 2</Typography>
                                <Typography variant='body2' sx={{pl:2}} >Connect to Source Code</Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <Component1 heading="Github" logo="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717305459/xerocodee/github.png" />
                                    <Component1 heading="Gitlab" logo="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717305459/xerocodee/gitlab.png" />
                                    <Component1 heading="Bitbucket" logo="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717305460/xerocodee/bitbucket.png" />
                                </Box>
                            </Box>
                            <Box>
                                <Typography variant='h6' sx={{pl:2}} >Step 3</Typography>
                                <Typography variant='body2' sx={{pl:2}} >Connect to DataSource</Typography>
                                <Box sx={{ display: 'flex' }}>
                                    <Component1 heading="MongoDB" logo="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717305460/xerocodee/mongodb.png" />
                                    <Component1 heading="RedisDB" logo="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717305461/xerocodee/redisdb.png" />
                                    <Component1 heading="Postgresql" logo="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717305461/xerocodee/postgresql.png" />
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={{ width: '25%', mx: 2, px: 1, py: 0.5, borderRadius: 2, boxShadow: 2, backgroundColor:"white" }}>
                            <Typography align='center'>Your Progress</Typography>
                            <Typography variant='body2' align='center' sx={{ color: 'gray' }}>towards XeroCodee</Typography>
                            <Box sx={{ height: '100px', margin: 1 }}>
                                <Component3 percentage={66} />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', mx: 0.5 }}>
                                <Typography variant='bod2' align='center' sx={{ border: "1px solid black", borderRadius: 3, px: 1, color: 'gray' }}>View Details</Typography>
                            </Box>
                            <Box sx={{ pt: 1}}>
                                <Typography sx={{ color: 'gray' }}>Step 1</Typography>
                                <Component2 heading="AWS" status="Complete" logo="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717305459/xerocodee/aws.png" bgColor="#fdf5e4" />
                            </Box>
                            <Box sx={{ pt: 1 }}>
                                <Typography sx={{ color: 'gray' }}>Step 1</Typography>
                                <Component2 heading="Gitlab" status="Complete" logo="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717305459/xerocodee/gitlab.png" bgColor="#faedeb" />
                            </Box>
                            <Box sx={{ pt: 1 }}>
                                <Typography sx={{ color: 'gray' }}>Step 1</Typography>
                                <Component2 heading="MongoDB" status="Pending" logo="https://res.cloudinary.com/dcjpwnsx2/image/upload/v1717305460/xerocodee/mongodb.png" bgColor="#eef5ed" />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default XeroCodeeHosting;
