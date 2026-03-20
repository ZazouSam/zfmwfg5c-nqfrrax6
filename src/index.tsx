import React from 'react';
import { createRoot } from 'react-dom/client';
import { RechartsDevtoolsContext, RechartsDevtoolsPortal } from '@recharts/devtools';

import './index.css';
import Example from './Example';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container not found');
}
const root = createRoot(container);

const AppWithDevtools = () => {
  return <RechartsDevtoolsContext>
    <h1>Recharts example: PieChart - Straight Angle Pie Chart</h1>
    <Example />
    <h2>Recharts Devtools</h2>
    <RechartsDevtoolsPortal />
  </RechartsDevtoolsContext>
}

root.render(<AppWithDevtools />);