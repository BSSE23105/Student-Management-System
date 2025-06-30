import React from 'react';
import Container from 'react-bootstrap/Container';

export default function NotFound() {
  return (
    <Container className="mt-4 text-center">
      <h2>404 - Page Not Found</h2>
      <p>Sorry, we couldn't find that page.</p>
    </Container>
  );
}