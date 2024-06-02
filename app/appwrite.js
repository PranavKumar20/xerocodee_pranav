import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('665810a6002b15a7a08f'); 

export const account = new Account(client);
export { ID } from 'appwrite';
