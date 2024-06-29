import React, {useState} from "react";

import ReactDOM from 'react-dom/client';


const SponsorForm: React.FC = () => {
  return (

    
    <>
      <form >
        <label>Please enter your company's name:
          <input type="text" />
        </label>

        <label>Please upload a png of your company's logo:
            <input type="file" />
        </label>

        <input type="submit" />
      </form>

      <p> Thank you for donating to our cause! </p>
      <button><link rel="Return to Sponsor Page" href="/BecomeASponsor.tsx"/></button>
      
    </>
  );
};

export default SponsorForm;
