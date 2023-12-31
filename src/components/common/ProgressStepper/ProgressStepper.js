import React, { useState } from 'react'
import { Step, Stepper, StepLabel, Typography, Box } from '@mui/material';
import CommonButton from '../CommonButton/CommonButton';

const ProgressStepper = ({ steps, stepDescription }) => {
    const [ activeStep, setActiveStep ] = useState(0)
    const [ completed, setCompleted ] = useState({})

    const totalSteps = steps.length;
    const completedSteps = Object.keys(completed).length;
    const allStepsCompleted = completedSteps === totalSteps;

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1)
    };
    
    const handleNext = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        setActiveStep((prevActiveStep) => prevActiveStep + 1)
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    }

  return (
    <div>
      <Box sx={{ width: '100%' }} >
      <Stepper 
        orientation='vertical'
        // FOR HORIZONTAL ORIENTATION, REMOVE 'ORIENTATION' VARIANT ABOVE
        activeStep={activeStep} 
      >
        {steps.map((step, index) => (
            <Step 
            key={step}
            completed={completed[index]}
            >
                <StepLabel>{step}</StepLabel>
            </Step>
        ))}
      </Stepper>
      <div>
        { allStepsCompleted ?
         (
            <>
                <Typography
                    sx={{ mt: 2, mb: 1 }}
                >
                    All steps completed
                </Typography>

                <Box
                    sx={{ display: 'flex', flexDirection: 'row', pt: '2' }}
                >
                    <Box sx={{ flex: '1 1 auto' }} />
                    <CommonButton
                    variant='text'
                    onClick={handleReset}
                >
                    Reset
                </CommonButton>
                </Box>
            </>
         ) : (
                <>
                    <Typography
                        sx={{ mt: 2, mb: 1 }}
                    >
                        {stepDescription[activeStep]}
                    </Typography>
                    <Box
                    sx={{ display: 'flex', flexDirection: 'row', pt: '2' }}
                    >
                        <CommonButton 
                            onClick={handleBack}
                            variant='text'
                            disabled={activeStep === 0}
                            sx={{ mr: 1 }}
                            >
                            Back
                        </CommonButton>
                        <Box sx={{ flex: '1 1 auto' }} />
                        <CommonButton 
                            onClick={handleNext}
                            variant='contained'
                            >
                            { completedSteps === totalSteps - 1 ? 'Finish' : 'Next' }
                        </CommonButton>
                    </Box>
                </>
        )} 
        </div>
        </Box>
    </div>
  );
};

export default ProgressStepper