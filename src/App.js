import React , { useEffect , useState } from 'react';
import './App.css';
import back from './tenor.gif';
import fogos from './fogos.gif';

const App = () => {
	const [ time, settime] = useState({
		Days:null,
		Hour:null,
		Min:null,
		Sec:null
	});
	const vacationStart = new Date("2021-01-16 00:00");

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
	
	if(time.Days === null)
	  return(<div>calculando</div>);

	return (
    <div className="App">
		{
			 time.Sec === 0?
				<h1>&#127881;&#127882;O grande Dia chegou!!&#128112;&#128147;&#129333;&#128149;</h1>:
				<React.Fragment>
					<label>Por aqui estamos em contagem regressiva &#128112;&#128147;&#129333;</label>
					<label>em dias da {time.Days } Dias</label>
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
