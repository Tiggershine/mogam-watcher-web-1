import React from "react";
import Form from '../../components/Form/Form';
import BaseButton from '../../components/BaseButton/BaseButton';
import './ExtensionCheckout.css';

const ExtensionCheckout = ({seatNumber}) => {
  const set = [{key:1, contents:"12:00"}, 
               {key:2, contents:"13:00"}, 
               {key:3, contents:"14:00"}, 
               {key:4, contents:"15:00"}, 
               {key:5, contents:"16:00"}];
  return (
    <div className="checkoutModal-container">
      <span className="checkoutModal-item" id="checkoutModal-title">
        좌석번호 {seatNumber}
      </span>
      <div className="checkoutModal-item">
        <Form
         identification=''
         title='이름' 
         type='text' 
         formHint='이름' 
         isDisabled={true}
        />
        <Form
         identification='' 
         title='연장시간' 
         type='select' 
         formHint='희망연장시간' 
         dataSet={set} 
         isDisabled={false}
        />
      </div>
      <div className="checkoutModal-item" id="extensionButton">
        <BaseButton
         buttonType="submit" 
         title="Extension" 
         clickEvent="#" 
        />
      </div>
      <hr className="horizontalRules"/>
      <div className="checkoutModal-item" id="checkoutButton">
        <BaseButton
         buttonType="submit" 
         title="Check Out" 
         clickEvent="#" 
        />
      </div>
    </div>
  );
};

export default ExtensionCheckout;
