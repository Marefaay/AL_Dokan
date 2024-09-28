// import Heading from '../../UI-Global/Heading.jsx';
// import FormInput from '../../UI-Global/FormInput.jsx';
// import Group from '../../../public/Icons/group.svg';
// import DropList from '../../UI-Global/DropList.jsx';
// import Button from '../../UI-Global/Button.jsx';
// import { useState } from 'react';
// import { LEVELS } from '../../config.js';
// import { useSearchParams } from 'react-router-dom';
// import GroupDetails from './GroupDetails.jsx';
// import toast from 'react-hot-toast';

// function AddGroup() {
//   const [searchParmas, setSearchParmas] = useSearchParams();
//   const [groupName , setGroupName]= useState('')
//   const [level, setLevel] = useState('');
//   const [levelNumber, setLevelNumber] = useState('');
//   if (searchParmas.get('groupID')) return <GroupDetails />;
//   const { levels, primary, middle, high } = LEVELS;
//   const onChangeGroName =(e)=>{
//     setGroupName(e.target.value)
//     console.log(e.target.value)
//     console.log(level)
//     console.log(levelNumber)
//   }
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Clicked")
//     if (!groupName || !level || !levelNumber) {
//       toast.error('يرجى تعبئة جميع الحقول');
//       return;
//     }
//     else{
//     e.currentTarget.submit();
//     }
  
//     try {
//       const bodyData = {
//         groupName: groupName,
//         level: level,
//         levelNumber: levelNumber
//       };
  
//       const response = await fetch('https://ta3leemcom-api.runasp.net/api/Group/Add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(bodyData), // تحويل البيانات إلى JSON
//       });
  
//       if (response.ok) {
//         toast.success('تم إضافة المجموعة بنجاح!');
//         setGroupName('');
//         setLevel('');
//         setLevelNumber('');
//       } else {
//         const result = await response.json();
//         toast.error(خطأ: ${result.message || 'فشل في إضافة المجموعة'});
//       }
//     } catch (error) {
//       console.error('Error adding group:', error);
//       toast.error('حدث خطأ أثناء إضافة المجموعة');
//     }
//   };
// // const handleSubmit = ()=>{
// //    console.log("Clivkreddrrgknkltrk")
// //    alert("Cliked")
// // }
//   // const handle
//   return (
//     <div className={'font-almaria'}>
//       <Heading as={'h1'} className={'text-center font-almaria-bold'}>
//         إنشاء مجموعة جديدة
//       </Heading>
//       <div className={'mt-10 flex flex-col gap-10 font-cairo-bold'}>
//         <Heading as={'h4'} className={'text-[24px]'}>
//           اسم المجموعة
//         </Heading>
//         <FormInput type={'text'} name={'name'} className={'w-11/12'} Icon={Group} divClassName={'bg-white w-3/4 justify-around'} onChange={onChangeGroName} />
//         <div className={'grid grid-cols-3'}>
//           <div className={'flex flex-col gap-5'}>
//             <Heading as={'h4'}>المرحلة الدراسية</Heading>
//             <DropList title={'اختر المرحلة الدراسية'} options={levels} value={level} setValue={setLevel} optionsValue={Object.keys(LEVELS).slice(1)} />
//           </div>
//           <div className={'flex flex-col gap-5'}>
//             <Heading as={'h4'}>الصف الدراسي</Heading>

//             {level === '' ? <DropList title={'اختر الصف الدراسي'} options={[]} /> : <DropList title={'اختر الصف الدراسي'} options={LEVELS[level]} value={levelNumber} setValue={setLevelNumber} optionsValue={LEVELS[level].map((_, i) => i + 1)} />}
//           </div>
//         </div>
//         <Button type={'outline'} className={'mt-40 w-fit self-center'} onClick={handleSubmit}>
//           اضافة
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default AddGroup;






