window.renderStatistics = function (ctx, names, times) {
	
	ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
	ctx.strokeRect(110, 20, 420, 270);
	ctx.fillRect(110, 20, 420, 270);
  
	ctx.fillStyle = 'rgba(256, 256, 256, 1.0)'; // white;
	ctx.strokeRect(100, 10, 420, 270);
	ctx.fillRect(100, 10, 420, 270);
  
	ctx.fillStyle = '#000'; // black;
	ctx.font = '16px PT Mono';

	var headerString = 'Ура вы победили!\nСписок результатов:';
	
	var splitString = function (sourceString, index){
		var result = sourceString.split('\n');
		return result[index];
	}
	
	
	ctx.fillText(splitString(headerString, 0), 120, 40);
  
	ctx.fillText(splitString(headerString, 1), 120, 60);
  
	var max = -1;
	var maxIndex = -1;

	for (var i = 0 ; i < times.length; i++) {
		var time = times[i];
		if (time > max) {
		max = time;
		maxIndex = i;
		}
	}
  
	var histogramHeigth = 150;              // px;
	var step = histogramHeigth / (max - 0); // px;

	var barWidth = 40; // px; 
	var indent = 50;    // px;
	var initialX = 120 + barWidth; // px;
	var initialY = 250;  // px;
	var lineHeight = 15;// px;
  
	for(var i = 0; i < times.length; i++) {
		ctx.fillStyle = (names[i]) === 'Вы' ? 'red' : 'rgba(10,10,150,'+ Math.random()+')';
		ctx.fillRect(initialX + (indent + barWidth) * i, initialY, barWidth, -(times[i] * step));
		ctx.fillStyle = '#000'; // black;
		ctx.fillText(Math.round(times[i]), initialX + (indent + barWidth) * i, initialY - lineHeight -(times[i] * step));
		ctx.fillText(names[i], initialX + (indent + barWidth) * i, initialY + lineHeight);
	}
};