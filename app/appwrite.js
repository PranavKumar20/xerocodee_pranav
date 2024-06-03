import { Client, Account } from 'appwrite';

export const client = new Client();

// const appwriteProjectId = process.env.NEXT_PUBLIC_APPWRITEPROJECTID;

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.NEXT_PUBLIC_APPWRITEPROJECTID); 

export const account = new Account(client);
export { ID } from 'appwrite';
