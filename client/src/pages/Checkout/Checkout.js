import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useDocumentTitle } from "../../hooks";
import { removeAllCartItems} from "../../features/cart/cartSlice";
import { createOrder } from "../../features/order/orderSlice";

import Step1 from "./Step1/Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3/Step3";

function Checkout() {
  useDocumentTitle('Checkout')
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [step, setStep] = useState(1);
  const [paymentInfo, setPaymentInfo] = useState({});
  const [addressInfo, setAddressInfo] = useState({});

  function submitPayment() {
    dispatch(createOrder({paymentInfo, addressInfo}));
    dispatch(removeAllCartItems())
    navigate('/account')

  }

  if (step === 1) {
    return <Step1 setStep={setStep} setAddressInfo={setAddressInfo} />;
  } else if (step === 2) {
    return <Step2 setStep={setStep} setPaymentInfo={setPaymentInfo} />;
  } else {
    return <Step3 setStep={setStep} submitPayment={submitPayment} />;
  }
}

export default Checkout;
