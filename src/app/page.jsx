'use client'; // Force Next to send JavaScript to the browser
import React, { useState } from 'react';
import { Box, Input } from '@chakra-ui/react';

export default function Home() {
  return (
    <div>
      <h2>TEST</h2>
      <button onClick={() => console.log(stringifyResults())}>
        Stringify Results
        <Input placeholder="Basic usage" />
      </button>
    </div>
  );
}
