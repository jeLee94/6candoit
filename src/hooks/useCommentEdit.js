import { useState, useEffect } from 'react';

export const useCommentEdit = (initialValue, comment) => {
  const [commentContent, setCommentContent] = useState(initialValue);

  const changeCommentContent = (event) => {
    setCommentContent(event.target.value);
  };

  useEffect(() => {
    setCommentContent(comment.commentContent);
  }, [comment]);

  return [commentContent, changeCommentContent];
};
