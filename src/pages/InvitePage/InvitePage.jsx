// import { updateProfile } from 'firebase/auth';
// import { getDownloadURL, ref, uploadString } from 'firebase/storage';
// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { auth, imgStorage } from '../../firebase';
// import { __updateUser } from '../../redux/modules/userSlice';

// function InvitePage() {
//   const { user } = useSelector((state) => state.user);
//   const [imgDownloadUrl, setImagDownloadUrl] = useState(null);

//   const dispatch = useDispatch();

//   const storeImg = async () => {

//       const connetRef = ref(
//         imgStorage,
//         `${auth.currentUser.uid}/connect/${uuidv4()}/`
//       );
//       const profileURL = localStorage.getItem('profileURL');
//       const response = await uploadString(imgRef, profileURL, 'data_url');
//       const tempUrl = await getDownloadURL(response.ref);
//       setImagDownloadUrl(tempUrl);

//       console.log('1', imgDownloadUrl);

//       let EditedUser = {
//         id: user[0].id,
//         email: user[0].email,
//         photoURL: tempUrl,
//       };
//       dispatch(__updateUser(EditedUser));
//       await updateProfile(auth.currentUser, {
//         displayName: nickName,
//         photoURL: tempUrl,
//       });
//     }
//     alert('프로필 변경 완료!');
//   };
//   return (
//     <div>
//       초대할 친구
//       <input type='email' />
//     </div>
//   );
// }

// export default InvitePage;
