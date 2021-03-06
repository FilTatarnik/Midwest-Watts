import React, { Component } from 'react';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'
import GridList from '@material-ui/core/GridList';
import './styles.css'


class LightsContainer extends Component {
	constructor(){
		super();

		this.state = {
			lights: []
		}
	}
	getLights = async () => {
		const response = await fetch('http://localhost:9292/api/lighting');
		const lightParsedJSON = await response.json();
		console.log(lightParsedJSON);
		// return lightParsedJSON
		this.setState({
			lights: lightParsedJSON.light
		})
		
		// console.log(lightParsedJSON);
		// this.setState({
		// 	email: ownerParsedJSON.email,
		// 	appointments: ownerParsedJSON.appointments
		// })
		// return ownerParsedJSON
	}
	componentDidMount(){
		this.getLights();
	}

    render(){
		   	return(
			   		<div className="lightCardDiv" >
			   			<GridList cellHeight={'auto'} className="lightCard" cols={4}>
			   				{
			   					this.state.lights.map((light, i) => (
					   				<Grid key={i} cols={1}>
					   					<Paper>
						   					<Typography>
						   					{light.name}
						   					</Typography>
						   					<Divider/>
						   					<Typography>
						   					{light.description}
						   					</Typography>
					   					</Paper>
					   				</Grid>
			   							
			   					))
			   				}
			   			</GridList>
					   			<br/>
			   		</div>
		   		)	

    }
}
export default LightsContainer;
