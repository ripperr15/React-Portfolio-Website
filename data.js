import componentsImg from './assets/components.png';
import propsImg from './assets/config.png';
import jsxImg from './assets/jsx-ui.png';
import stateImg from './assets/state-mgmt.png';

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'Software Development',
    description:
      'Experience in designing and implementing robust software solutions.'
  },
  {
    image: jsxImg,
    title: 'Backend Architecture',
    description:
      'Designed and implemented robust data pipelines through optimizing data extraction and transformation using Python and SQL',
  },
  {
    image: propsImg,
    title: 'Front-End Development',
    description:
      'Proficient in creating user-friendly interfaces using Javascript, CSS and React.',
  },
  {
    image: stateImg,
    title: 'Cloud Infrastructure',
    description:
      'Experience in deploying and maintaining applications on cloud platforms.',
  },
];

export const EXAMPLES = {
  components: {
    title: 'Software Development',
    description:
      'Implemented data pipelines, optimized performance, and collaborated in Agile environments.',
    code: `
    // Example Node.js code for backend service
    const express = require('express');
    const app = express();
    
    app.get('/', (req, res) => {
      res.send('Hello, World!');
    });
    
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });`,
  },
  jsx: {
    title: 'Frontend',
    description:
      'Developed user-friendly interfaces with React, enhancing user experience and satisfaction.',
    code: `
    // Example React code for a component
    import React, { useState } from 'react';
    
    function App() {
      const [count, setCount] = useState(0);
    
      return (
        <div>
          <h1>{count}</h1>
          <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
      );`,
  },
  props: {
    title: 'Backend',
    description:
      'Developed and maintained backend services, ensuring robust and scalable systems.',
    code: `
    // Example Node.js code for backend service
    const express = require('express');
    const app = express();
    
    app.get('/', (req, res) => {
      res.send('Hello, World!');
    });
    
    app.listen(3000, () => {
      console.log('Server is running on port 3000');  
}`,
  },
  state: {
    title: 'Cloud',
    description:
      'Contributed to Kubernetes-based DBaaS and maintained cloud infrastructure using Golang, Python, and Kubernetes.',
    code: `
    # Example Dockerfile\nFROM node:14\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nEXPOSE 3000\nCMD ["node", "server.js"]\n}`,
  },
};

