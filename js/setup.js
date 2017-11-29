'use strict'
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)','rgb(215, 210, 55)','rgb(0, 0, 0)'];

var EYESCOLORS = ['black','red','blue','yellow','green'];

var getRandomName = function(arrNames){
	var rand = Math.floor(Math.random() * arrNames.length);
	return (arrNames[rand]);
}

var getRandomSurname = function(arrSurnames){
	var rand = Math.floor(Math.random() * arrSurnames.length);
	return (arrSurnames[rand]);
}

var getRandomCoatColor = function(arrCoatColors){
	var rand = Math.floor(Math.random() * arrCoatColors.length);
	return (arrCoatColors[rand]);
}

var getRandomEyesColor = function(arrEyesColors){
	var rand = Math.floor(Math.random() * arrEyesColors.length);
	return (arrEyesColors[rand]);
}

var getRandomWizardName = function (){
	return getRandomName(WIZARD_NAMES) + ' ' + getRandomSurname(WIZARD_SURNAMES);
}

var wizards =[];

var wizardsNumber = 4;

var createNewWizards = function(){
	for (var i = 0; i < wizardsNumber; i++) {
		wizards[i] = {
				name: getRandomWizardName(), 
				coatColor: getRandomCoatColor(COATCOLORS),
				eyesColor: getRandomEyesColor(EYESCOLORS)
		};
	}
}
createNewWizards();

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  
  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');