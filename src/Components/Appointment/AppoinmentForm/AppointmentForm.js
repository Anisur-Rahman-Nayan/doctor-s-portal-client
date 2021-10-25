import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  Modal.setAppElement('#root');
const AppointmentForm = (props) => {
    const modalIsOpen = props.modalIsOpen
    const closeModal = props.closeModal
    const appointmentOn = props.appointmentOn;
    const date = props.date

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
      
      data.service = appointmentOn;
      data.date = date;
      data.created =new Date();


      fetch('https://calm-thicket-08342.herokuapp.com/appointment',{
        method: "POST",
        headers:{
              'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(success =>{
        if(success){
          closeModal();
          alert("Appointment Created Succesfully !!!")
        }
      })
    }

    return (
        <div>
    
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className='text-brand text-center'> {appointmentOn} </h2>
      <p className="text-secondary text-center"> <small >On {date.toDateString()}</small></p>
        <form className='p-5 bg-dark' onSubmit={handleSubmit(onSubmit)}>
      
      <br />
      <input {...register("name", { required: true })} name="name" className="form-control" placeholder="Name" />
      {errors.name && <span className="text-danger">This field is required</span>}
      <br />
      <input {...register("email", { required: true })} name="email"  className="form-control" placeholder="Email"/>
      {errors.email && <span className="text-danger">This field is required</span>}
      <br />
      <input {...register("phoneNumber", { required: true })} name="phoneNumber"  className="form-control" placeholder="Phone Number" />
      {errors.phoneNumber && <span className="text-danger">This field is required</span>}
      <br />
      <input {...register("gender", { required: true })} name="gender"  className="form-control" placeholder="Gender Male / Female" />
      {errors.gender && <span className="text-danger">This field is required</span>}
      <br />
      <input {...register("age", { required: true })} name="age"  className="form-control" placeholder="Age" />
      {errors.age && <span className="text-danger">This field is required</span>}
      <br />
      <input {...register("Weight", { required: true })} name="Weight"  className="form-control" placeholder="Weight" />
      {errors.Weight && <span className="text-danger">This field is required</span>}
      <br />
      <input className='btn btn-brand' type="submit" />
    </form>
      </Modal>
            
        </div>
    );
};

export default AppointmentForm;