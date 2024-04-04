"use client"

import { storage } from "./firebase";
import { useState } from "react";
import { ref, uploadBytes } from 'firebase/storage';
import LoginForm from "./login_form";
import SignUpForm from "./signup_form";

export default function Home() {

  const [file, setFile] = useState(null)

  const handleFileChange = (e) => {
    setFile(e.target.files[0])
  }

  const handleSubmit = () => {
    if (file) {
      const imgRef = ref(storage, 'monimage.jpg')
      // 'file' comes from the Blob or File API
      uploadBytes(imgRef, file)
        .then((snapshot) => {
          alert('Uploaded a blob or file!')
        })
        .catch((error) => {
          alert('Erreur')
        })

      alert('File uploaded ok')
    } else {
      alert('Please select a file')
    }
  }

  return (
    <main>
      <input type="file" name="file" onChange={handleFileChange}/>
      <button onClick={handleSubmit}>Upload</button>
      <LoginForm/>
      <SignUpForm/>
    </main>
  );
}
