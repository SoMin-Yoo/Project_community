import React, { useState, useEffect } from 'react';
import { collection, query, where, getDocs, addDoc, orderBy, Timestamp } from 'firebase/firestore';
import db from '../../db';

function CommentList({ userId }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      const commentsQuery = query(
        collection(db, 'comments'),
        where('userId', '==', userId),
        orderBy('createdAt', 'asc')
      );

      const querySnapshot = await getDocs(commentsQuery);
      const commentsData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setComments(commentsData);
    };

    fetchComments();
  }, [userId]);

  return (
    <div>
      <h2>댓글</h2>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  );
}

export default CommentList;