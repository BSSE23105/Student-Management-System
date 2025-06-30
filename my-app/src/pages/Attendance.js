// src/pages/Attendance.js
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from '../components/Button';
import SearchBar from '../components/SearchBar';
import { loadData, saveData } from '../utils/storage';

export default function Attendance() {
  const [students, setStudents] = useState([]);
  const [marked, setMarked] = useState({});
  const [saved, setSaved] = useState(false);
  const [search, setSearch] = useState('');

  useEffect(() => {
    setStudents(loadData('students'));
  }, []);

  // Save attendance and reset for next session
  function finishMarking() {
    saveData('students', students);
    setSaved(true);
    setMarked({}); // allow marking next attendance
    setTimeout(() => setSaved(false), 3000); // Reset confirmation message
  }

  function mark(roll, present) {
    if (marked[roll]) return;
    setStudents((prev) =>
      prev.map((s) => {
        if (s.roll !== roll) return s;
        const total = (s.totalClasses || 0) + 1;
        const attended = present
          ? (s.attendedClasses || 0) + 1
          : (s.attendedClasses || 0);
        return { ...s, totalClasses: total, attendedClasses: attended };
      })
    );
    setMarked((m) => ({ ...m, [roll]: true }));
  }

  function getPct(s) {
    if (s.totalClasses) {
      return Math.round((s.attendedClasses / s.totalClasses) * 100);
    } else {
      return 0;
    }
  }

  const filteredStudents = students.filter((s) => {
    const lowerSearch = search.toLowerCase();
    if (s.name.toLowerCase().includes(lowerSearch)) {
      return true;
    } else {
      return s.roll.toLowerCase().includes(lowerSearch);
    }
  });

  return (
    <Container className="mt-4">
      <h2>Attendance</h2>

      <SearchBar search={search} setSearch={setSearch} />

      {saved && (
        <div className="alert alert-success" role="alert">
          Attendance saved! You can now mark the next session.
        </div>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Roll</th>
            <th>Present</th>
            <th>Absent</th>
            <th>Marked</th>
            <th>% Attendance</th>
          </tr>
        </thead>
        <tbody>
          {filteredStudents.map((s) => {
            let markSymbol;
            if (marked[s.roll]) {
              markSymbol = '✓';
            } else {
              markSymbol = '-';
            }

            return (
              <tr key={s.roll}>
                <td>{s.name}</td>
                <td>{s.roll}</td>
                <td>
                  <Button
                    variant="custom"
                    onClick={() => mark(s.roll, true)}
                    disabled={Boolean(marked[s.roll])}
                  >
                    ✔
                  </Button>
                </td>
                <td>
                  <Button
                    variant="warning"
                    onClick={() => mark(s.roll, false)}
                    disabled={Boolean(marked[s.roll])}
                  >
                    ✘
                  </Button>
                </td>
                <td>{markSymbol}</td>
                <td>{getPct(s)}%</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Button variant="primary" onClick={finishMarking}>
        Save Attendance
      </Button>
    </Container>
  );
}
