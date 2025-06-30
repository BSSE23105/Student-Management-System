import React from 'react';

export default function Form({ children, onSubmit }) {
  return <form onSubmit={onSubmit} className="row g-3">{children}</form>;
}