// src/pages/AddStudent.js
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from '../components/Form';
import Button from '../components/Button';
import { useHistory, useParams } from 'react-router-dom';
import { loadData, saveData } from '../utils/storage';

export default function AddStudent() {
  const { id } = useParams();          // roll number when editing
  const editing = Boolean(id);
  const history = useHistory();
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    roll: '',
    name: '',
    course: '',
    batch: '2022',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const data = loadData('students');
    setStudents(data);
    if (editing) {
      const stu = data.find((s) => s.roll === id);
      if (stu) {
        setForm({
          roll: stu.roll,
          name: stu.name,
          course: stu.course,
          batch: stu.batch,
        });
      }
    }
  }, [id, editing]);

  function validate() {
    const errs = {};
    if (!form.roll) errs.roll = 'Roll number required';
    if (!form.name) errs.name = 'Name required';
    if (!form.course) errs.course = 'Degree required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    let updated;
    if (editing) {
      // Update existing
      updated = students.map((s) => {
        if (s.roll === id) {
          return {
            ...s,
            name: form.name,
            course: form.course,
            batch: form.batch,
          };
        } else {
          return s;
        }
      });
    } else {
      // New student starts with zero attendance
      updated = [
        ...students,
        {
          roll: form.roll,
          name: form.name,
          course: form.course,
          batch: form.batch,
          totalClasses: 0,
          attendedClasses: 0,
        },
      ];
    }

    saveData('students', updated);
    history.push('/students');
  }

  // determine title and button text using if-else instead of ternary
  let pageTitle;
  let submitLabel;
  if (editing) {
    pageTitle = 'Edit Student';
    submitLabel = 'Update Student';
  } else {
    pageTitle = 'Add Student';
    submitLabel = 'Add Student';
  }

  return (
    <Container className="mt-4">
      <h2>{pageTitle}</h2>
      <Form onSubmit={handleSubmit}>
        {[
          { name: 'roll', label: 'Roll Number', type: 'text' },
          { name: 'name', label: 'Name', type: 'text' },
        ].map((f) => (
          <Col md={4} key={f.name}>
            <label htmlFor={f.name}>{f.label}</label>
            <input
              id={f.name}
              name={f.name}
              type={f.type}
              className={errors[f.name] ? 'form-control is-invalid' : 'form-control'}
              value={form[f.name]}
              onChange={handleChange}
            />
            {errors[f.name] && <div className="invalid-feedback">{errors[f.name]}</div>}
          </Col>
        ))}

        <Col md={4}>
          <label>Degree</label>
          <select
            name="course"
            className={errors.course ? 'form-control is-invalid' : 'form-control'}
            value={form.course}
            onChange={handleChange}
          >
            <option value="">Select Degree</option>
            <option value="BSSE">BSSE</option>
            <option value="BSCE">BSCE</option>
            <option value="BSCS">BSCS</option>
            <option value="BSMT">BSMT</option>
            <option value="BSDS">BSDS</option>
          </select>
          {errors.course && <div className="invalid-feedback">{errors.course}</div>}
        </Col>

        <Col md={4}>
          <label>Batch</label>
          <select
            name="batch"
            className="form-control"
            value={form.batch}
            onChange={handleChange}
          >
            {['2022', '2023', '2024', '2025'].map((yr) => (
              <option key={yr} value={yr}>{yr}</option>
            ))}
          </select>
        </Col>

        <Col>
          <Button type="submit">{submitLabel}</Button>{' '}
          <Button variant="secondary" onClick={() => history.push('/students')}>
            Cancel
          </Button>
        </Col>
      </Form>
    </Container>
  );
}
