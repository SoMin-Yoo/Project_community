import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { doc, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from '../../db';
import CommentList from './Commentlist';
import CommentForm from './Commentform';

function UserDetail() {
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
        subject: 'Updated Subject',
      });
      console.log('Document successfully updated!');
    } catch (error) {
      console.error('Error updating document:', error);
    }
  };

  const handleDelete = async () => {
    try {
      const userDocRef = doc(db, 'users', id);
      await deleteDoc(userDocRef);
      console.log('Document successfully deleted!');
      navigate('/Netflix');
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  return (
    <div>
      <h1>{subject}</h1>
      <p>{content}</p>
      <Link to={`/users/${id}/edit`}>수정하기</Link>
      <button onClick={handleDelete}>삭제하기</button>

      {/* 댓글 목록과 댓글 작성 폼 추가 */}
      <CommentList userId={id} />
      <CommentForm userId={id} />
    </div>
  );
}

export default UserDetail;
