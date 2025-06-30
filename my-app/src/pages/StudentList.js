// src/pages/StudentList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar'; // Import the SearchBar
import { loadData, saveData } from '../utils/storage';

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setStudents(loadData('students'));
  }, []);

  useEffect(() => {
    saveData('students', students);
  }, [students]);

  const handleEdit = (roll) => {
    window.location.href = `/students/edit/${roll}`;
  };

  const handleDelete = (roll) => {
    setStudents((prev) => prev.filter((s) => s.roll !== roll));
  };

  // Filter students by name or roll number
  const filtered = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.roll.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2>Student List</h2>

      <SearchBar search={search} setSearch={setSearch} /> {/* Search bar inserted */}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((s) => (
            <tr key={s.roll}>
              <td>{s.name}</td>
              <td>{s.roll}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(s.roll)}>
                  Edit
                </Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(s.roll)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <div className="mt-3">
        <Button as={Link} to="/attendance" variant="primary">
          Attendance
        </Button>
      </div>
    </Container>
  );
}
