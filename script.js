// write js code here if required
const timer = document.getElementById('timer');

function timerDisplay()
	let date = new Date();
	let day = date.getDate();
	let month = date.getMonth() + 1;
	let year = date.getFullYear();
	let hour = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	return `${day}/${month}/${year},
	${hour}:${minutes}:${seconds}`;
}
timer.textContent = timerDisplay();
setInterval(()=>{
	timer.textContent = timerDisplay();
},1000);