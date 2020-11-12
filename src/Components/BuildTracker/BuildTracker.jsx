import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { Stepper, Grid, Slider } from '@material-ui/core/';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%'
	},
	button: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(1)
	},
	actionsContainer: {
		marginBottom: theme.spacing(2)
	},
	resetContainer: {
		padding: theme.spacing(3)
	},
	paperHover: {
		// transform: "scale(1.1)",
		backgroundColor: theme.palette.primary.light,
		cursor: 'pointer'
	},
	paperSelected: {
		// transform: "scale(1.1)",
		backgroundColor: theme.palette.primary.light
	}
}));

function getSteps() {
	return [ 'Select category', 'What is max pr. month for this challenge?', 'Notifications?' ];
}

function getCategories() {
	return [
		{
			name: 'Beef',
			icon: 'aaa'
		},
		{
			name: 'Coca Cola',
			icon: 'bbb'
		},
		{
			name: 'Egg',
			icon: 'ccc'
		},
		{
			name: 'Cake',
			icon: 'ddd'
		},
		{
			name: 'Chocolate',
			icon: 'eee'
		},
		{
			name: 'Cottage Cheese',
			icon: 'fff'
		}
	];
}

const marks = [
  {
    value: 0,
    label: '0 kr.',
  },
  {
    value: 100,
    label: '100 kr.',
  },
  {
    value: 500,
    label: '500 kr.',
  },
  {
    value: 1000,
    label: '1000 kr.',
  },
];

export default function VerticalLinearStepper() {
	const classes = useStyles();
	const [ activeStep, setActiveStep ] = React.useState(0);
	// const [ category, setCategory ] = React.useState();
	const [ selectedCategory, setSelectedCategory ] = React.useState();
	const steps = getSteps();

	const handleMouseEnter = (i) => {
		// setCategory(i);
	};

	const handlePaperClick = (i) => {
		setSelectedCategory(i);
  };
  
  function valuetext(value) {
    return `${value}°C`;
  }

	function getStepContent(step) {
    
    // const classes2 = category;

		switch (step) {
			case 0:
				return (
					<React.Fragment>
						<Grid container spacing={2} direction="row" justify="space-around" alignItems="center">
							{getCategories().map((item, i) => (
								<Grid item xs={4} key={item.name}>
									<Paper
                    className={selectedCategory === i ? classes.paperSelected : ''}
										onClick={() => handlePaperClick(i)}
										onMouseOver={() => handleMouseEnter(i)}
										elevation={2}
									>
										<Typography align="center" variant="h6">
											{item.name}
										</Typography>
									</Paper>
								</Grid>
							))}
						</Grid>
					</React.Fragment>
				);
			case 1:
				return (
						<Slider
							defaultValue={100}
							getAriaValueText={valuetext}
							aria-labelledby="discrete-slider-small-steps"
							step={1}
							marks={marks}
							min={0}
							max={1500}
							valueLabelDisplay="auto"
						/>
				);
			case 2:
				return (
					<Grid>
						<Button
							// disabled={activeStep === 0}
							// onClick={handleBack}
							// variant="contained"
							//       color="primary"
              variant="contained"
							color="secondary"
							className={classes.button}
						>
							No
						</Button>
						<Button
							// disabled={activeStep === 0}
							// onClick={handleBack}
							variant="contained"
							color="primary"
							className={classes.button}
						>
							Yes
						</Button>
					</Grid>
				);
			default:
				return 'Unknown step';
		}
	}

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<div className={classes.root}>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((label, index) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
						<StepContent>
							{getStepContent(index)}
							<div className={classes.actionsContainer}>
								<div>
									<Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
										Back
									</Button>
									<Button
										variant="contained"
										color="primary"
										onClick={handleNext}
										className={classes.button}
									>
										{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
									</Button>
								</div>
							</div>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} className={classes.resetContainer}>
					<Typography>All steps completed - you&apos;re finished</Typography>
					<Button onClick={handleReset} className={classes.button}>
						Reset
					</Button>
				</Paper>
			)}
		</div>
	);
}
