import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import * as tree from '../../data/tree'
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';


const monthlySpending = 3546.32
const fraction = monthlySpending / tree.root.total;
for (let node of tree.nodes) {
	node.total = Math.round(node.total * fraction, 2);
}


const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  padding: theme.spacing(1),
	  textAlign: 'center',
	  color: theme.palette.text.secondary,
	},
	card: {
		textAlign: 'center',
	},
	arrow: {
		display: 'inline'
	},
	sliderGrid: {
		padding: '10px'
	}
}));

function formatName(name) {
	return name.replace('_', ' ').split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
}
  
function LinearSlider(props) {
	const classes = useStyles();
	const [value, setValue] = React.useState(props.value);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<Grid className={classes.sliderGrid}>
			<Grid
			justify="space-between" // Add it here :)
			container 
			spacing={24} 
			>
				<Grid item>
					<Typography type="title" color="inherit" p={10}>
					{props.title}
					</Typography>
				</Grid>

				<Grid item>
					<Typography type="title" color="inherit">
					{props.displayValue}/{props.displayMax} DKK
					</Typography>
				</Grid>
			</Grid>
		<Slider
			value={props.handleChange == null ? value : props.value}
			min={props.min}
			step={props.step}
			max={props.max}
			onChange={props.handleChange == null ? handleChange : props.handleChange}
			/*valueLabelDisplay="on"*/
			aria-labelledby="non-linear-slider"
			disabled={props.disabled}
		/>
		</Grid>
	);
}


function SavingsSliders(props) {
	let num = props.node.children.length;

	let sliders = []
	for (let child of props.node.children) {
		sliders.push(
		<LinearSlider
			min={0}
			max={child.total}
			displayMax={child.total}
			step={1}
			value={props.distribution[child.id]}
			displayValue={props.distribution[child.id]}
			title={formatName(child.name)}
			key={`saving-sliders-slider-${child.id}`}
			handleChange={(event, newVal) => props.handleChange(child.id, newVal)}
			disabled={props.disabled}
		/>);
	}
	let cells = [];
	for (let i=0; i<num; i++) {
		cells.push(
			<Grid item xs={6} key={`saving-sliders-grid-${i}`}>
				<Paper elevation={0} variant="outlined" key={`saving-sliders-paper-${i}`}>
					{sliders[i]}
					{
						props.node.children[i].children.length > 0 ? (
							<Button color='primary' onClick={()=>props.onClick(i)} key={`saving-sliders-button-${i}`}>
							Elaborate
						</Button>
						) : <></>
					}
				</Paper>
			</Grid>
		)
	}
	return (
	<Grid container spacing={1}>
		{cells}
	</Grid>
	);
}


function Arrows(props) {
	const classes = useStyles();
	let arrows = []
	for (let i=0; i<props.nodes.length; i++) {
		let node = props.nodes[i];
		arrows.push(<Button className={classes.arrow} variant='outlined' onClick={() => props.onClick(i)}>{formatName(node.name)}</Button>)
		if (i < props.nodes.length-1) arrows.push(<ArrowForwardIosOutlinedIcon className={classes.arrow}/>);
	}
	return (
		<div>
			{arrows}
		</div>
	);
}


function makeRandomDistribution(node, minVal, maxFraction, totalValue) {
	let values = [];
	for (let i=0; i<node.children.length; i++) values.push(Math.random());
	let total = values.reduce((a, b) => a+b, 0);
	values = values.map((value) => value / total);
	let distribution = {}
	for (let i=0; i<node.children.length; i++) distribution[node.children[i].id] = values[i] * totalValue;

	let redistribute = 0;
	let hasRoom = 0;
	for (let child of node.children) {
		let dist = distribution[child.id];
		let maxDist = maxFraction * child.total;
		if (child.total < minVal) { 
			redistribute += dist;
			distribution[child.id] = 0;
		} else if (dist < minVal) {
			if (redistribute >= minVal - dist) {
				redistribute -= minVal - dist;
				distribution[child.id] = minVal;
			} else {
				redistribute += dist;
				distribution[child.id] = 0;
			}
		} else if (dist > maxDist) {
			redistribute += dist - maxDist
			distribution[child.id] = maxDist;
		} else {
			hasRoom++;
		}
	}

	let isFull = (child) => child.total < minVal || Math.abs(distribution[child.id] - child.total) < 1.0;
	while (redistribute > 1.0) {
		let update = false;
		for (let child of node.children) {
			if (isFull(child)) continue;
			if (distribution[child.id] === 0) continue;
			let maxDist = child.total * maxFraction;
			let fraction = redistribute / hasRoom;
			let change = Math.min(maxDist - distribution[child.id], fraction);
			distribution[child.id] += change;
			redistribute -= change;
			hasRoom -= isFull(child);
			update = true;
		}
		if (!update && redistribute > 1) return makeRandomDistribution(node, minVal, maxFraction, totalValue);
	}

	for (let id in distribution) {
		distribution[id] = Math.round(distribution[id]/5) * 5;
	}
	return distribution;
}


export default function NewTab() {
	const classes = useStyles();
	const [savingValue, setSavingValue] = useState(1)
	const [currentSavingValue, setCurrentSavingValue] = useState(savingValue);
	const [showSpending, setShowSpending] = useState(false)
	const [node, setNode] = useState(tree.root)
	const [distributions, setDistributions] = useState({[node.id]: savingValue})
	const [nodeStack, setNodeStack] = useState([node])
	const [hackVal, setHackVal] = useState(1)
	const [saved, setSaved] = useState(false);

	let savingSliders = (
		<Grid item xs={12}>
			<Card className={classes.card} variant="outlined">
			<CardContent>
				<SavingsSliders
					disabled={saved}
					node={node}
					save={savingValue}
					distribution={distributions}
					onClick={(idx)=>{
						let newNode = node.children[idx];
						let value = distributions[newNode.id];
						let child = newNode.children[0];
						if (!(child.id in distributions)) {
							setDistributions({...distributions, ...makeRandomDistribution(newNode, 0, 1.0, value)})
						} 
						setCurrentSavingValue(value);
						setNodeStack([...nodeStack, newNode]);
						setNode(newNode);
					}}
					handleChange={(id, newVal) => {
						let diff = newVal - distributions[id] 
						setSavingValue(savingValue + diff);
						let newValues = {[id]: newVal}
						for (let node of nodeStack) newValues[node.id] = distributions[node.id] + diff;
						setDistributions({...distributions, ...newValues})
					}}
				/>
			</CardContent>
			</Card>
		</Grid>
	)

	return (
		<div className={classes.root}>
		<Grid container spacing={1}>
			<Grid item xs={12}>
				<Typography variant="h4" component="h2" className={classes.card}>
					How much do you want to save this month?
				</Typography>
			</Grid>
			<Grid item xs={3}>
			<Card className={classes.card} variant="outlined">
			<CardContent>
				<Typography variant="h5" component="h2">
					{`${monthlySpending} DKK`}
				</Typography>
				<Typography color="textSecondary">
					Used this month
				</Typography>
			</CardContent>
			</Card>
			</Grid>
			<Grid item xs={9}>
				<Paper className={classes.paper}>
					<LinearSlider
						min={1}
						max={monthlySpending}
						displayMax={monthlySpending}
						displayValue={savingValue}
						value={hackVal}
						title={"Savings this month"}
						handleChange={(event, newValue) => {
							//let val = Math.floor(monthlySpending ** (newValue / 100))
							setSavingValue(newValue)
							setCurrentSavingValue(newValue)
							setHackVal(newValue)
						}}
						disabled={showSpending}
					/>
					<Button variant="contained" color={showSpending ? "disabled" : "primary"} onClick={()=>{
						setDistributions({...distributions, ...makeRandomDistribution(node, 40, 0.66, currentSavingValue)});
						setShowSpending(true)
					}} disabled={showSpending}>
						Get Savings Plan
					</Button>
				</Paper>
			</Grid>
			{showSpending ? 
				<>
				<Arrows nodes={nodeStack} onClick={(i) => {
					let node = nodeStack[i];
					setCurrentSavingValue(distributions[node.id]);
					setNodeStack(nodeStack.slice(0, i+1));
					setNode(node);
				}}/>
				{savingSliders}
				<Button color='primary' variant='contained' disabled={saved} onClick={()=>setSaved(true)}>{saved ? "Plan Saved!" : "Save Plan"}</Button>
				</>
				: <></>
			}
		</Grid>
		</div>
	);
}