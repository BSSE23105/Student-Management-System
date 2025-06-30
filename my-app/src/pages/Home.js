// src/pages/Home.js
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container className="mt-5">
      <br /><br />
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Welcome to the Student Management System</h1>
        <p style={{ fontSize: '1.8rem', maxWidth: '800px', margin: '20px auto', color: '#555' }}>
          The Student Management System (SMS) is a powerful web application designed to simplify and streamline
          the academic and administrative processes for educational institutions.
        </p>
        <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '10px auto', color: '#666' }}>
          Manage student records, mark attendance, and track academic performance efficiently—all in one place.
          Our system supports staff, teachers, and administrators in delivering better education experiences.
        </p>
      </div>

      <div className="text-center mt-5">
        <Button
          as={Link}
          to="/students"
          size="lg"
          variant="success"
          style={{ padding: '12px 30px', fontSize: '1.2rem' }}
        >
          Get Started Now
        </Button>
      </div>

      <br /><br /><br />

      {/* Feature Cards */}
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card style={{ height: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ fontSize: '1.5rem' }}>🎓 Manage Students</Card.Title>
              <Card.Text style={{ fontSize: '1rem', color: '#444' }}>
                Easily add, update, or delete student profiles with relevant course and batch details.
              </Card.Text>
              <Button as={Link} to="/students" variant="primary">View Students</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ height: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ fontSize: '1.5rem' }}>📋 Track Attendance</Card.Title>
              <Card.Text style={{ fontSize: '1rem', color: '#444' }}>
                Mark student attendance and monitor their presence with accurate statistics.
              </Card.Text>
              <Button as={Link} to="/attendance" variant="primary">Mark Attendance</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card style={{ height: '100%', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
              <Card.Title style={{ fontSize: '1.5rem' }}>📝 Manage Grades</Card.Title>
              <Card.Text style={{ fontSize: '1rem', color: '#444' }}>
                Record grades and monitor student performance across various subjects.
              </Card.Text>
              <Button as={Link} to="/grades" variant="primary">View Grades</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

  
    </Container>
  );
}
