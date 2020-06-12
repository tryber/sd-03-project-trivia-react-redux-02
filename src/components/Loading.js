import React from 'react';
import { Spinner } from 'react-rainbow-components';

export default function Loading() {
  return (
    <div style={{ width: 300, height: 200 }}>
      <Spinner size="large" />
    </div>
  );
}
