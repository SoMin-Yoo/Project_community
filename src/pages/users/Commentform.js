// CommentForm.jsx
import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import db from '../../db';

function CommentForm({ userId }) {
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 새로운 댓글을 Firestore에 추가
    await addDoc(collection(db, 'comments'), {
      userId,
      content: comment,
      createdAt: serverTimestamp(),
    });

    // 댓글 작성 후 입력 필드 비우기
    setComment('');
  };

  return (
    <div>
      <h2>댓글 작성</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="댓글을 입력하세요."
        />
        <button type="submit">댓글 작성</button>
      </form>
    </div>
  );
}

export default CommentForm;

