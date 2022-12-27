import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export const usePostEdit = (initialValue) => {
  const param = useParams();
  const { posts } = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id === param.id);
  const [title, setTitle] = useState(initialValue);
  const [content, setContent] = useState(initialValue);

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };
  const changeContent = (e) => {
    setContent(e.target.value);
  };

  useEffect(() => {
    if (posts.length < 1) {
      return;
    }
    setTitle(post.title);
    setContent(post.content);
  }, [post]);

  return [{ title, content }, changeTitle, changeContent];
};
