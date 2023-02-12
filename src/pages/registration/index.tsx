import { useEffect, useState } from "react";
import "./index.css";
import { StepButton } from "../../components/StepButton/StepButton";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import * as yup from "yup";
import "yup-phone";
import { CardPlan } from "../../components/CardPlan/CardPlan";

import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { FormButton } from "../../components/FormButton/FormButton";
import { AddOns } from "../../components/AddOnsCard/AddOns";
import { Summary } from "../../components/Summary/Summary";
import { PlansData } from "../../types";
import { addOnsData, plansData, stepData } from "../../const";
import SuccessInfo from "../../components/SuccessInfo/SuccessInfo";

export const RegistrationPage = () => {
  const [step, setStep] = useState<number>(1);
  const [currentStep, setCurrentStep] = useState<number>(step);
  const [plan, setPlan] = useState<PlansData>(plansData[0]);
  const [addons, setAddons] = useState([]);
  const [selectedCardId, setSelectedCard] = useState<number>(1);

  useEffect(() => {
    setCurrentStep(step);
    formik.setFieldValue("addons", addons);
    formik.setFieldValue("plan", plan);
  }, [step]);

  const nextStep = () => setStep(step + 1);

    // Helper function to move to the previous step
  const prevStep = () => setStep(step - 1);

  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    name: yup
      .string()
      .min(1, "Name should be of minimum 2 characters length")
      .required("Name is required"),
    phone: yup
      .string()
      .phone("Phone should be valid")
      .required("Number is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      phone: "",
      plan: plan,
      monthly: true,
      addons: [],
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      if(step === 4) {
        alert(JSON.stringify(values, null, 2));
        nextStep()
        console.log(JSON.stringify(values, null, 2))
      }
    },
  });

  return (
    <div className="flex registration-containter">
      <div className="side-bar pt-10 pl-10">
        {stepData.map((stepData) => (
          <>
            <StepButton
              key={stepData.id}
              step={stepData.id}
              title={`Step ${stepData.id}`}
              subtitle={stepData.subtitle!}
              isActiveStep={currentStep === stepData.id}
              // for debug only
              // onClick={() => setStep(() => stepData.id)}
            ></StepButton>
          </>
        ))}
      </div>
      <div className="bg-white w-full form-container" >
        <form onSubmit={formik.handleSubmit}>
          {step === 1 && (
            <div className="flex flex-col justify-between h-[400px]">
                <div>
                  <h2 className="text-xl">Personal Info</h2>
                  <p className="text-sm text-slate-400 pb-5">Please provide your name, email address, and phone number</p>
                  <div className="m-2">
                    <TextField
                      className="h-[80px] m-5"
                      placeholder="Enter your name"
                      fullWidth
                      id="name"
                      name="name"
                      label="Name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                  </div>
                  <div className="m-2">
                    <TextField
                      className="h-[80px]"
                      placeholder="example@email.com"
                      fullWidth
                      id="email"
                      name="email"
                      label="Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.email && Boolean(formik.errors.email)}
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </div>
                  <div className="m-2">
                    <TextField
                      className="h-[80px]"
                      placeholder="+4800000000"
                      fullWidth
                      id="phone"
                      name="phone"
                      label="Phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.phone && Boolean(formik.errors.phone)}
                      helperText={formik.touched.phone && formik.errors.phone}
                    />
                  </div>
                </div>
                <div>
                  <FormButton
                    innerText="Next step"
                    onClick={nextStep}
                    disabled={!(formik.isValid && formik.dirty)}
                  ></FormButton>
                </div>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col justify-between h-[400px]">
              <div >
                <h2 className="text-xl">Select your plan</h2>
                <p className="text-sm text-slate-400 pb-5">You have option of monthly or annual billing</p>
                <div className="flex justify-center">
                  {plansData.map((planData) => (
                    <CardPlan
                      key={planData.id}
                      onClick={() => {
                        setPlan(() => planData);
                        formik.setFieldValue("plan", plan);
                        setSelectedCard(planData.id);
                      }}
                      isSelected={planData.id === selectedCardId}
                      imageSrc={planData.imgSrc}
                      planName={planData.planName}
                      price={planData.price}
                    ></CardPlan>
                  ))}
                </div>
                <Stack className="flex justify-center" direction="row" spacing={1} alignItems="center">
                  <Typography>Annual</Typography>
                  <Switch
                    value={formik.values.monthly}
                    checked={formik.values.monthly}
                    onChange={(e) =>
                      formik.setFieldValue("monthly", e.target.checked)
                    }
                    name="gilad"
                  ></Switch>
                  <Typography>Monthly</Typography>
                </Stack>
              </div>
              <div>
                <div className="flex justify-between px-4">
                  <FormButton
                      innerText="Go Back"
                      onClick={prevStep}
                      disabled={false}
                    ></FormButton>
                    <FormButton
                      innerText="Next step"
                      onClick={nextStep}
                      disabled={false}
                    ></FormButton>
                </div>
              </div>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col justify-between h-[400px]">
              <div>
                <h2 className="text-xl">Pick add-ons</h2>
                <p className="text-sm text-slate-400 pb-5"> Add-ons help enhance your gaming experince</p>
                {addOnsData.map((data) => (
                  <AddOns
                    key={data.id}
                    title={data.title}
                    subtitle={data.subtitle}
                    price={data.price}
                    id={data.id}
                    setAddons={setAddons}
                    addons={addons}
                  ></AddOns>
                ))}
              </div>
              <div>
                <div className="flex justify-between px-4">
                  <FormButton
                      innerText="Go Back"
                      onClick={prevStep}
                      disabled={false}
                    ></FormButton>
                    <FormButton
                      innerText="Next step"
                      onClick={nextStep}
                      disabled={false}
                    ></FormButton>
                </div>
              </div>
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-col justify-between h-[400px]">
              <div>
                <h2 className="text-xl">Finishing</h2>
                <p className="text-sm text-slate-400 pb-5">Double Check if everything is OK before confirming</p>
                <Summary
                  addons={addons}
                  plan={plan}
                  monthly={formik.values.monthly}
                ></Summary>
              </div>
              <div className="flex justify-between px-4">
                <div>
                  <FormButton
                    innerText="Go Back"
                    onClick={prevStep}
                    disabled={false}
                  ></FormButton>
                </div>
                <div>
                  <SubmitButton
                    variant="contained"
                    size="medium"
                    type="submit">
                    Confirm
                  </SubmitButton>
                </div>
              </div>
            </div>
          )}
          {step === 5 && (
            <div className="flex flex-col flex-wrap justify-center text-center h-[400px]">
              <SuccessInfo/>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const SubmitButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText("#202254"),
  backgroundColor: "#202254",
  "&:hover": {
    backgroundColor: "#1c2e4a",
  },
}));
