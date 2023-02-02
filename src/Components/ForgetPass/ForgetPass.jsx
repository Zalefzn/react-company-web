import React, {useState, Fragment} from 'react';
import FormEmail from "../Lib/form/FormEmail";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./ForgetPass.css";

function ForgetPass() {
  const [image] = useState({
    imageBG: "image2.png",
  });

  const getData = {
    text: "Try another way",
    judul: 'success',
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getData.judul !== null) {
      swal({
        title: "!succes",
        text: `send email ${getData.judul }`,
        icon: "success",
      });
      navigate("/Verification");
    } else {
      if (getData.judul  === null) {
        swal({
          title: "!warning",
          text: `data kosong!`,
          icon: "warning",
        });
      }
    }
  };


  return (
    <Fragment>
      <div className="fp-container">
        <div className="fp-background">
          <img className="fp-img" src={image.imageBG} alt=""></img>
        </div>
        <div className="fp-text">
          <p className="fp-vol1">
            Forget<br></br>
            Password ?
          </p>
          <p className="fp-vol2">
            Enter the email address associated<br></br>
            with you account
          </p>
        </div>
        <FormEmail />
        <div className="rows-item">
          <p className="fp-vol3">{getData.text}</p>
          <button
            className="btn-vol5"
            type="button"
            name="button"
            onClick={handleSubmit}
          >
            Next
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default ForgetPass;
