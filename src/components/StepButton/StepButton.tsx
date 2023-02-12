import "./StepButton.css";

interface StepButtonData {
  step: number;
  title: string;
  subtitle: string;
  isActiveStep: boolean;
  onClick?: any
}

export const StepButton: React.FC<StepButtonData> = ({
  step,
  title,
  subtitle,
  isActiveStep,
  onClick
}) => {
  return (
    <>
      <div className="flex mt-4 ml-5">
        <div className="flex flex-wrap content-center">
          <button
            className={`${isActiveStep ? "round-active" : "round"} border-white`}
            // for debug only
            // onClick={onClick}
          >
            {step}
          </button>
        </div>
        <div className="flex flex-col pl-3">
          <div className="text-base text-slate-400">{title}</div>
          <div className="text-xl text-white ">{subtitle}</div>
        </div>
      </div>
    </>
  );
};
