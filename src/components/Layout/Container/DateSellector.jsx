import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import CalendarTodo from './../Calendar/CalendarTodo';
const DateSellector = ({ setFromDate, setToDate }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (e) => {
<<<<<<< HEAD
    console.log(e);
=======
>>>>>>> dfcd63a930ca82f61822e61463b1dd36833fc134
    setModalText('등록완료 ദ്ദി ᵔ∇ᵔ )!!');
    setConfirmLoading(true);
    setTimeout(() => {
      setOpen(false);
      setConfirmLoading(false);
    }, 200);
  };
  const handleCancel = () => {
<<<<<<< HEAD
    console.log('취소');
=======
>>>>>>> dfcd63a930ca82f61822e61463b1dd36833fc134
    setOpen(false);
  };
  return (
    <>
      <p>일정</p>
<<<<<<< HEAD
      <Button
        type='primary'
        onClick={showModal}
        style={{ width: "285px" }}
        //   style={{ backgroundColor }}
      >
=======
      <Button type='primary' onClick={showModal} style={{ width: '285px' }}>
>>>>>>> dfcd63a930ca82f61822e61463b1dd36833fc134
        일정등록
      </Button>
      <Modal
        title='일정 등록'
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <CalendarTodo setFromDate={setFromDate} setToDate={setToDate} />
      </Modal>
    </>
  );
};
export default DateSellector;
