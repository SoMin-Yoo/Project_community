import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import db from '../../db';

function UserDetail() {
  const { id } = useParams();
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

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

  return (
    <div>
      <h1>{subject}</h1>
      <p>{content}</p>
    </div>
  );
}

export default UserDetail;

