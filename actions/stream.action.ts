'use server';

import { currentUser } from '@clerk/nextjs/server';
import { StreamClient } from '@stream-io/node-sdk';


const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const apiSecret = process.env.STREAM_SECRET_KEY;

// export const tokenProvider = async () => {
//     const user = await currentUser();
//     if(!user) throw new  Error('Unauthorized ! user is not authenticated');
//     if(!apiKey) throw  new Error("Api Key missing");
//     if(!apiSecret) throw new Error("Stream Secret key missing");

//     const client = new StreamClient(apiKey, apiSecret);

//     const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;

//     const issued = Math.floor(Date.now() / 1000) - 60;

//     const token = client.createToken(user.id, exp, issued);
// }

export const tokenProvider = async (): Promise<string> => {
    try {
        const user = await currentUser();
        if (!user) throw new Error('Unauthorized! User is not authenticated');
        if (!apiKey) throw new Error("API Key missing");
        if (!apiSecret) throw new Error("Stream Secret key missing");

        const client = new StreamClient(apiKey, apiSecret);

        const exp = Math.round(new Date().getTime() / 1000) + 60 * 60;
        const issued = Math.floor(Date.now() / 1000) - 60;

        const token = client.createToken(user.id, exp, issued);
        return token;
    } catch (error) {
        console.error('Error generating token:', error);
        throw new Error('Failed to generate token');
    }
};