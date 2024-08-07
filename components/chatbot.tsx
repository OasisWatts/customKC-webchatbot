'use client'

import React, { useState } from 'react';
import axios from 'axios';


export default function Chatbot() {
    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');


    const sendMessage = async () => {
        try {
            const res = await axios.post("https://api.openai.com/v1/chat/completions", {
                messages: message,
                max_tokens: 150,
                model: "gpt-4o-mini"
            }, {
                headers: {
                    'Authorization': `Bearer ${process.env.NEXT_PUBLIC_OPENAI_KEY}`,
                    'Content-Type': 'application/json'
                }
            });
            setResponse(res.data.choices[0].text.trim());
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='relative mt-[5rem] sm:mt-[7rem] '>
            <h1>ChatGPT Chatbot</h1>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
            <p>{response}</p>
        </div>
    );
};
