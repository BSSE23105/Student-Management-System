import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { loadData, saveData } from '../utils/storage';
import SearchBar from '../components/SearchBar'; // ✅ Import SearchBar

export default function Grades() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState(''); // ✅ State for search input

  // Map each course to its subjects
  const subjectsByCourse = {
    BSCS: ['OOP', 'DBMS', 'DLD', 'ICT'],
    BSSE: ['OOP', 'Management', 'ICT', 'Islamiat'],
    BSCE: ['Structures', 'Thermodynamics', 'ICT', 'Math'],
    BSMT: ['Microbiology', 'Biochemistry', 'ICT', 'Genetics'],
    BSDS: ['Statistics', 'Data Mining', 'ICT', 'Python'],
  };

  // Grade options dropdown
  const gradeOptions = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'F'];

  // Load students on mount
  useEffect(() => {
    setStudents(loadData('students'));
  }, []);

  // Save students (with updated grades) whenever students state changes
  useEffect(() => {
    saveData('students', students);
  }, [students]);

  // Handle when a grade is selected for a subject
  const handleGradeChange = (roll, subject, grade) => {
    setStudents(prev =>
      prev.map(s => {
        if (s.roll !== roll) return s;
        const existing = s.grades || {};
        return {
          ...s,
          grades: {
            ...existing,
            [subject]: grade,
          },
        };
      })
    );
  };

  // Determine which subjects to render for the table header:
  // union of all subjects for all current courses
  const allSubjects = Array.from(
    new Set(
      students.flatMap(s => subjectsByCourse[s.course] || [])
    )
  );

  // ✅ Filter students based on search input
  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.roll.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Container className="mt-4">
      <h2>Grades</h2>

      <SearchBar search={search} setSearch={setSearch} /> {/* ✅ Add SearchBar component */}

      <Table striped bordered hover style={{ backgroundColor: '#303030' }}> {/* Gray background */}
        <thead style={{ backgroundColor: '#303030' }}>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Course</th>
            {allSubjects.map(subj => (
              <th key={subj}>{subj}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map(s => (
            <tr key={s.roll}>
              <td>{s.name}</td>
              <td>{s.roll}</td>
              <td>{s.course}</td>

              {allSubjects.map(subj => {
                // only allow selecting grade if this subj applies to the student's course
                const isApplicable = (subjectsByCourse[s.course] || []).includes(subj);
                const current = s.grades ? s.grades[subj] || '' : '';

                return (
                  <td key={subj}>
                    {isApplicable ? (
                      <select
                        className="form-control"
                        value={current}
                        onChange={e => handleGradeChange(s.roll, subj, e.target.value)}
                      >
                        <option value="">—</option>
                        {gradeOptions.map(g => (
                          <option key={g} value={g}>{g}</option>
                        ))}
                      </select>
                    ) : (
                      <span style={{ color: '#980000' }}>N/A</span> // Mark unavailable courses as N/A
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}
