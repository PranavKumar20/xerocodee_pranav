## Project Overview

This project aims to conver the given figma design to the nextjs code

## Setup Instruction and dependencies

# Setup Instruction
Step 1 : Clone the repository
Step 2 : cd to the parent folder and run following command
```bash
npm install
```
Step 3 : Wait for the installation to complete
Stpe 4 : Till it is installing go to appwrite website and create new project and copy projectid from there
step 5 : Create .env.local file and set new envirnment variable as NEXT_PUBLIC_APPWRITEPROJECTID=<project id>
Step 6 : now run this command to run in dev mode
```bash
npm run dev
```

# dependencies
materail ui, appwrite, dotenv

## Deployement

Step 1 : Push the code to a new repository on github
Step 2 : Go to vercel.com then click on new project
Step 3 : Choose the repository which contain the code
Step 4 : Go to setting -> environment vaiables 
Step 5 : Either import form .env file or set yourself(same as .env.local)
Step 6 : Click on deploy
