import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import db from '../../db';

function UserEdit() {
  const { id } = useParams();
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDocRef = doc(db, 'users', id);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const userData = userDoc.data();
          setSubject(userData.subject);
          setContent(userData.content);
        } else {
          console.log('No such document!');
        }
      } catch (error) {
        console.error('Error getting document:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleUpdate = async () => {
    try {
      const userDocRef = doc(db, 'users', id);
      await updateDoc(userDocRef, {
        subject: subject, // 수정된 주제
        content: content, // 수정된 내용
      });
      console.log('Document successfully updated!');
      navigate(`/users/${id}`); // 수정 후 상세 페이지로 이동
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  return (
    <div>
      <h1>Edit User</h1>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <button onClick={handleUpdate}>Update User</button>
    </div>
  );
}

export default UserEdit;

