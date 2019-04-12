var xpos = 0; // De x-positie van de eerste deelnemer.
var xpos2 = 0; // De x-positie van de tweede deelnemer.
var xpos3 = 0; // De x-positie van de derde deelnemer.
var xpos4 = 0; // De x-positie van de vierde deelnemer.
var xpos5 = 0; // De x-positie van de vijfde deelnemer.
var xpos6 = 0; // De x-positie van de zesde deelnemer.
var xpos7 = 0; // De x-positie van de zevende deelnemer.
var xpos8 = 0; // De x-positie van de achtste deelnemer.

function setup() { // De algemene opstelling van het canvas waar de tekening op wordt vertoond.
  createCanvas(800, 935); // Deze functie bepaalt de lengte en breedte van het canvas. Zie het als een schilderij.
  frameRate (55); // Bepaalt de snelheid van de functies op de tekening. Bepaalt hoeveel frames per seconde ze bewegen.
}

function draw() {
  background(220); // Deze functie bepaalt de kleur van de achtergrond. Er zijn drie functies: Red (r), Green (g) en Blue (b). Als je één cijfer invult, worden alle drie de kleuren 'samengesmolten'. Dit leid tot een bepaalde vorm van wit, grijs(zig) of zwart.
  stroke(220); // 'Stroke' bepaalt de kleur van de omtrek van de finishlijn. De rgb geldt hier zoals altijd.
  fill(35, 90, 140); // Deze variabelen samen vormen de blauwe kleur van de finishlijn.
  rect(721, 0, 140, 1000); // Hiermee wordt de grootte van de finishlijn bepaalt: De eerste variabele staat voor de X positie, de tweede staat voor de Y positie, de derde staat voor de breedte en de laatste staat voor de lengte.
  stroke(0);
  fill(0); // Bepaalt de zwarte kleur van de blokjes van de finishlijn.
  for (var a = 0; a < 40; a++) { // Dit bepaalt de verspreiding van de zwarte blokjes die meehelpen met de bouw van de finishlijn. Dit wordt gedaan door middel van herhaling. De 'a = 0' staat voor het beginpunt van de herhaling, de 'a < 40' staat voor het eindpunt: Als de lus 39 haalt, stop de herhaling. 'A++' staat voor de optelling in het algemeen.
    rect(725, 13 * a * 3, 15, 15); // Door de Y-Positie door 'a' te vermenigvuldigen, zakken de blokjes 40 keer naar beneden; stukje voor stukje. Dit geldt ook voor b, c, d en e. Bij b, c, d en e is de X-positie steeds een stukje opgeschoven om de basis voor een finishlijn te krijgen.
  }
  for (var b = 0; b < 50; b++) {
  rect(742, 19.5 * b * 3, 15, 15);
  }
  for (var c = 0; c < 50; c++) {
  rect(759, 13 * c * 3, 15, 15);
  }
  for (var d = 0; d < 50; d++) {
  rect(776, 19.5 * d * 3, 15, 15);
  }
  for (var e = 0; e < 50; e++) {
  rect(793, 13 * e * 3, 15, 15);
  }
  fill(86, 125, 70); // De kleur van de banen waar de slangen/wormen over racen.
  stroke(256); // De kleur van de omtrek van de banen.
  for (var n = 0; n < 8; n++) { // Met deze lus worden er acht banen afgebeeld.
  rect(0, 20 + 116 * n, 720, 95); // De afmetingen van de banen. Doordat de Y positie telkens wordt vermenigvuldigt met 'n', ontstaan er acht banen in totaal.
  }
  strokeWeight(4); // Deze variabele bepaalt de dikte van de omtrek van de wormen. Of slangen. Of hoe je zo ook wilt noemen.
  fill(220); // De slangen zijn grijzig van binnen.
  stroke(166, 16, 30); // De slangen zijn bloedrood gekleurd in omtrek.
    for (var f = 0; f < 5; f++) { // Met deze loop/lus wordt de bouw van een slang bepaalt. Doordat de loop uit vijf herhalingen bestaat, bestaat een deelnemer uit vijf cirkels, oftewel: ellipses.
  ellipse(xpos + (55 * f), 67+cos(frameCount/10 + f)*30, 40, 40); // Deelnemer nummer één.
    // 'Cos' zorgt ervoor dat een bepaald element steeds heen en weer gaat gaat. In dit geval zijn het de circels waaruit de wormen bestaan. Zoiets kan ook gedaan worden met 'Sin'.
    // Door 'frameCount' kan een bepaalde tekening uit zichzelf bewegen. Door de combinatie van 'cos' of 'sin' en 'frameCount' gaan de verschillende bolletjes waaruit de deelnemers bestaan steeds op en neer.
    xpos += random(0.001, 0.9); // Zo wordt de horizontale snelheid van de rondjes bepaalt. Deze varieert willekeurig tussen 0.001 en 0.9.
  }
      for (var g = 0; g < 5; g++) { 
  ellipse(xpos2 + (55 * g), 175+cos(frameCount/10 + g)*30, 40, 40); // Deelnemer nummer twee.
    xpos2 += random(0.001, 0.9);
  }
  for (var h = 0; h < 5; h++) { 
  ellipse(xpos3 + (55 * h), 285+cos(frameCount/10 + h)*30, 40, 40); // Deelnemer nummer drie.
  xpos3 += random(0.001, 0.9);
  }
  for (var i = 0; i < 5; i++) { 
  ellipse(xpos4 + (55 * i), 405+cos(frameCount/10 + i)*30, 40, 40); // Deelnemer nummer vier.
  xpos4 += random(0.001, 0.9);
  }
  for (var j = 0; j < 5; j++) { 
  ellipse(xpos5 + (55 * j), 525+cos(frameCount/10 + j)*30, 40, 40); // Deelnemer nummer vijf.
  xpos5 += random(0.001, 0.9);
  }
  for (var k = 0; k < 5; k++) { 
  ellipse(xpos6 + (55 * k), 645+cos(frameCount/10 + k)*30, 40, 40); // Deelnemer nummer zes.
  xpos6 += random(0.001, 0.9);
  }
  for (var l = 0; l < 5; l++) { 
  ellipse(xpos7 + (55 * l), 775+cos(frameCount/10 + l)*30, 40, 40); // Deelnemer nummer zeven.
  xpos7 += random(0.001, 0.9);
  }
  for (var m = 0; m < 5; m++) { 
  ellipse(xpos8 + (55 * m), 875+cos(frameCount/10 + m)*30, 40, 40); // Deelnemer nummer acht.
  xpos8 += random(0.001, 0.9);
  }
  if (xpos > 850) { // Wanneer het laatste rondje van een deelnemer verder dan '850' op de x-as gaat, stopt het spel. De eerste deelnemer die over deze grens gaat, wint.
  scale(3); // De grootte van de tekst...
  text("Snake 1 wins", 100, 100); // ...die in beeld verschijnt wanneer de eerste slang de race heeft gewonnen.
  frameRate(0); // Zodra er een winnaar is, stopt de tijd en is het spel voorbij. Wil je opnieuw spelen? Dan moet je opnieuw op 'PLAY' drukken.
  }
  if (xpos2 > 850) {
  scale(3);
  text("Snake 2 wins", 100, 100); // De tekst die in beeld verschijnt wanneer de tweede deelnemer wint/over de finish-lijn gaat.
  frameRate(0);
  }
  if (xpos3 > 850) {
   scale(3);
  text("Snake 3 wins", 100, 100); // De tekst die in beeld verschijnt wanneer de derde deelnemer wint.
  frameRate(0);
  }
  if (xpos4 > 850) {
  scale(3);
  text("Snake 4 wins", 100, 100); // De tekst die in beeld verschijnt wanneer de vierde deelnemer wint.
  frameRate(0);  
  }
  if (xpos5 > 850) {
  scale(3);
  text("Snake 5 wins", 100, 100);  // De tekst die in beeld verschijnt wanneer de vijfde deelnemer wint.
  frameRate(0);
  }
  if (xpos6 > 850) {
  scale(3);
  text("Snake 6 wins", 100, 100); // De tekst die in beeld verschijnt wanneer de zesde deelnemer wint.
  frameRate(0);
  }
  if (xpos7 > 850) {
  scale(3);
  text("Snake 7 wins", 100, 100); // De tekst die in beeld verschijnt wanneer de zevende deelnemer wint.
  frameRate(0);
  }
  if (xpos8 > 850) {
  scale(3);
  text("Snake 8 wins", 100, 100); // De tekst die in beeld verschijnt wanneer de achtste deelnemer wint.
  frameRate(0);
  }
}
