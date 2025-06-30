# Student Management System

A simple React-based student management system that stores all data in your browser’s LocalStorage. You can view, add, edit, and delete students; mark attendance; and assign grades—all without a backend database.

---

# Extract

`Extract the node_modulus folder then proceed`


## Prerequisites

1. **Node.js** and **npm** installed  
2. A modern web browser (Chrome, Firefox, Edge, etc.)  
3. (Optional) React Developer Tools or Redux DevTools for debugging  
4. Familiarity with your browser’s Developer Tools to inspect LocalStorage

---

## Steps To Run

1. Open your terminal and navigate to the project folder:  
   
   cd /path/to/your/project
Install dependencies:
`npm install`

Start the development server:
---------------`npm start`-------------

Open your browser and go to http://localhost:3000

## Output
Once the server is running, you should see:
webpack compiled successfully


You can now view your app in the browser.

  Local:            http://localhost:3000

All student data (list, grades, attendance) will be persisted in LocalStorage under the key students.

Next Step
Navigate through the app and test each feature. As you interact with the UI, watch the LocalStorage in your browser’s Developer Tools (Application → LocalStorage → http://localhost:3000) to see how data is created, updated, and deleted in real time.

## Links
1) Student List Page → http://localhost:3000/

2) Add Student Form → http://localhost:3000/students/add

3) Grades Page → http://localhost:3000/grades

4) Attendance Page → http://localhost:3000/attendance

## CRUD Operations
You can perform all CRUD operations on the student records:
`Create`: Add a new student via the “Add Student” form
`Read`: View and search students on the “Student List” page
`Update`: Edit any student’s details or their grades
`Delete`: Remove a student from the list