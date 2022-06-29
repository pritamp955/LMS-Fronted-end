import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/common.css";
import "./css/custom.css";

import Home from "./pages/Home";
import Login from "./pages/Login";
import BookForm from "./pages/BookForm";
import BookList from "./pages/BookList";

import MemberList from "./pages/MemberList";
import MemberForm from "./pages/MemberForm";

import CategoryList from "./pages/CategoryList";
import CategoryForm from "./pages/CategoryForm";

import IssueList from "./pages/IssueList";
import IssueForm from "./pages/IssueForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/book/list" element={<BookList />} />
          <Route path="/book/form" element={<BookForm />} />

          <Route path="/category/list" element={<CategoryList />} />
          <Route path="/category/form" element={<CategoryForm />} />

          <Route path="/member/list" element={<MemberList />} />
          <Route path="/member/form" element={<MemberForm />} />

          <Route path="/issue/list" element={<IssueList />} />
          <Route path="/issue/form" element={<IssueForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
