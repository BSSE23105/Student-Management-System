import React from 'react';
import Card from './Card';
import Button from './Button';

export default function List({ items, onEdit, onDelete }) {
  if (items.length === 0) return <div className="alert alert-info">No records found.</div>;
  return (
    <>
      {items.map(item => (
        <Card key={item.id} title={item.name}>
          <p><strong>Age:</strong> {item.age}</p>
          <p><strong>Course:</strong> {item.course}</p>
          {item.grade !== '' && <p><strong>Grade:</strong> {item.grade}</p>}
          {item.attendance !== '' && <p><strong>Attendance:</strong> {item.attendance}%</p>}
          <Button variant="warning" onClick={() => onEdit(item)}>Edit</Button>
          <Button variant="danger" onClick={() => onDelete(item.id)}>Delete</Button>
        </Card>
      ))}
    </>
  );
}