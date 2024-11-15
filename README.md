# Contact Management - Mini Feature of a CRM

## 📝 Overview

The Contact Management feature is a crucial part of a CRM that helps users manage their clients' and customers' contact information efficiently. With this feature, users can add, view, edit, and delete contacts through a clean and intuitive interface. It provides functionalities like pagination and sorting to improve usability for large datasets.

## 🔧 Features

1. **Add a New Contact**: 
   - Users can add new contacts with essential details such as:
     - First Name
     - Last Name
     - Email
     - Phone Number
     - Company
     - Job Title

2. **View Contacts**: 
   - Displays all contacts in an MUI-powered table with columns for each attribute.
   - Supports sorting and pagination.

3. **Edit Contact Information**: 
   - Allows users to update existing contact information.

4. **Delete Contacts**: 
   - Enables users to remove outdated or duplicate entries.

5. **Error Handling**:
   - Validates required fields.
   - Prevents duplicate entries and handles invalid data gracefully.

---

## 🚀 Tech Stack

### Frontend
- **ReactJS**: For building the user interface.
- **Material UI (MUI)**: For UI components and styling.
- **Tailwind CSS**: For Styling

### Backend
- **NodeJS**: For server-side logic.
- **Express.js**: For creating RESTful APIs.

### Database
- **MongoDB**:
  - NoSQL database chosen for its flexibility and ease of use with unstructured and semi-structured data.
  - Suitable for dynamic schemas, which align well with the iterative development of CRM features.


---

## ⚙️ API Endpoints

| Method | Endpoint       | Description                       |
|--------|----------------|-----------------------------------|
| POST   | `/contacts`    | Add a new contact                |
| GET    | `/contacts`    | Retrieve all contacts            |
| PUT    | `/contacts/:id`| Update a specific contact         |
| DELETE | `/contacts/:id`| Delete a specific contact         |

---

## 🛠️ Setup Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/contact-management-crm.git](https://github.com/Vinit-180/Contact-Management---Mini-Feature-of-a-CRM
   ```
2. **Backend Setup**:
```bash
cd backend
npm install
```
3. **Start the Backend Server**:
```bash
npm start
```
4. **Frontend Setup**:
```bash
cd ui
npm install
```

5. **Start the Frontend Server**:
```bash
npm start
```


6. **Access the Application**:
```
Frontend: http://localhost:3000
Backend:  http://localhost:9000
```



