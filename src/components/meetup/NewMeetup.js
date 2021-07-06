import React,{useRef} from 'react'

export const NewMeetup = (props) => {


    const titleref = useRef();
    const addressref = useRef();
    const descriptioneref = useRef();
    const imageref = useRef();
    function submitHandler(event) {
      event.preventDefault();
      const enteredtitle = titleref.current.value;
      const enteredaddress = addressref.current.value;
      const entereddescription = descriptioneref.current.value;
      const enteredimage = imageref.current.value;
  
      const meetup = {
        title: enteredtitle,
        address: enteredaddress,
        description: entereddescription,
        image: enteredimage,
      };
      console.log(meetup);
      props.addMeetup(meetup)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
          <div>
            <label className="form-label">Title</label>
            <input type="text" ref={titleref} className="form-control" />
          </div>
          <div>
            <label className="form-label">Image</label>
            <input type="text" ref={imageref} className="form-control" />
          </div>
          <div>
            <label className="form-label">Address</label>
            <input type="text" ref={addressref} className="form-control" />
          </div>
          <div>
            <label className="form-label">Description</label>
            <input type="text" ref={descriptioneref} className="form-control" />
          </div>
          <div >
            <input type="submit" className="btn btn-success" />
          </div>
        </form>
            
        </div>
    )
}
