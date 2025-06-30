import React from 'react';

export default function Button({ onClick, children, type = 'button', variant = 'custom', as, to }) {
  let classes = 'btn me-2';
  if (variant === 'custom') classes += ' btn-custom'; else classes += ' btn-' + variant;

  if (as && to) {
    const Link = as;
    return <Link to={to} className={classes}>{children}</Link>;
  }
  return <button type={type} className={classes} onClick={onClick}>{children}</button>;
}