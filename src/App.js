import React , { useEffect , useState } from 'react';
import './App.css';
import back from './tenor.gif';
import fogos from './fogos.gif';
import mes12 from './mes12.gif';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

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
					<span role="img" aria-label="Novinhos">Por aqui estamos em contagem regressiva &#128112;&#128147;&#129333;</span>
					<label>em dias da {time.Days } Dias</label>
					<label>em horas da { time.Hour } horas</label>
					<label>em minutos da { time.Min } minutos</label>
					<label>em segundos da { time.Sec } segundos</label>
				</React.Fragment>
		}
		
		<img src={ parseInt(time.Sec) === 0 ? fogos : back} alt="" />

		<VerticalTimeline>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(93, 31, 44)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(93, 31, 44)' }}
				date="16/01/2021"
				iconStyle={{ background: 'rgb(234, 130, 117)', color: '#ea8275' }}
				
					>
				<h3 className="vertical-timeline-element-title">Aqui será o grande dia.</h3>
				<h4 className="vertical-timeline-element-subtitle">O espaço está totalmente reservado para vocês.</h4>
				<p>
					Portanto não tenha vergonha, dance, pule, tire foto, coma e beba a vontade. Iremos ficar felizes com a presença de cada um de vocês.
					Aqui vai um pouco sobre o local: <br/><b>Garden Fest Aruja</b><br/>No endereço: Estr. Esméria Maria Rodrigues, 1000 - Correas, Arujá - SP, 07400-990<br/>para mais informação, <a href="https://www.gardenfestaruja.com.br/videos">clique Aqui.</a>
				</p>
				<a className="agendar" href="https://www.google.com/calendar/render?action=TEMPLATE&text=Casamento&dates=20210116T203000Z/20210117T033000Z&details=texto_aqui&location=Garden+Fest+Arujá&sf=true&output=xml">Save the Date &#128147;</a>
			</VerticalTimelineElement>
			<VerticalTimelineElement
				className="vertical-timeline-element--work"
				contentStyle={{ background: 'rgb(234, 130, 117)', color: '#fff' }}
				contentArrowStyle={{ borderRight: '7px solid  rgb(234, 130, 117)' }}
				date="16/01/2020"
				iconStyle={{ background: 'rgb(93, 31, 44)', color: '#fff' }}
				
				>
				<h3 className="vertical-timeline-element-title">Falta apenas 12 meses</h3>
				<h4 className="vertical-timeline-element-subtitle">Jantar para comemorar que falta apenas 12 meses. rs</h4>
				<img src={mes12} alt="Falta apenas 12 meses" />
			</VerticalTimelineElement>
		</VerticalTimeline>
    </div>
  );
}



export default App;
