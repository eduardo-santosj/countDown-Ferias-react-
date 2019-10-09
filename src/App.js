import React , { useEffect , useState } from 'react';
import './App.css';
import back from './tenor.gif';
import fogos from './fogos.gif';

const App = () => {
	const [ time, settime] = useState({
		Days:0,
		Hour:40,
		Min:1,
		Sec:1
	});
	const vacationStart = new Date("2019-10-16 17:00");

	useEffect(() => {
		counter(vacationStart);
	}, []);

	

	const counter = (vacationStart) =>{
		setTimeout( () => {
		
			var diffTime = vacationStart - new Date();

			console.log(diffTime);

			if(diffTime < 0){
				settime({
					Days:0,
					Hour:0,
					Min:0,
					Sec :0
				});
				return false;
			}

			const diffDays = parseInt( diffTime / (1000 * 60 * 60 * 24) );
			const difHour =  parseInt( diffTime / (1000 * 60 * 60 ) );
			const difMin =  parseInt( diffTime / (1000 * 60 ) );
			const difSec =  parseInt( diffTime / (1000) );
			
			settime( {
				Days:diffDays,
				Hour:difHour,
				Min:difMin,
				Sec:difSec
			} );

			counter(vacationStart);
		  }, 1000);
	}

	return (
    <div className="App">
		{ 
			time.Hour < 14 ?
				<h2>Ja estou de ferias na Australia</h2>:
				"" 
		}
		
		{
			 time.Sec === 0?
				<h1>Estou de ferias carai!!!!!</h1>:
				<React.Fragment>
					<label>Entro de ferias em  {time.Days } Dias</label>
					<label>em horas da { time.Hour } horas</label>
					<label>em minutos da { time.Min } minutos</label>
					<label>em segundos da { time.Sec } segundos</label>
				</React.Fragment>
		}
		
		<img src={ parseInt(time.Sec) === 0 ? fogos : back} />
    </div>
  );
}



export default App;
