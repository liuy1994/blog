var buttons = document.getElementsByTagName('button');
var button = buttons[0];
function createElement(tagName,className){
  var tag = document.createElement(tagName);
  tag.className = className;
  return tag;
}
var body;
var kuzixia;
var feet;
var queue = [
  function(){
    body = createElement('div','body');
    document.body.appendChild(body);
  },
  function(){
    var eyes = createElement('div','eyes');
    var eye1 = createElement('div','eye1');
    var eye2 = createElement('div','eye2');
    var eyein1 = createElement('div','eyein1');
    var eyein2 = createElement('div','eyein2');
    body.appendChild(eyes);
    eyes.appendChild(eye1);
    eyes.appendChild(eye2);
    eye1.appendChild(eyein1);
    eye2.appendChild(eyein2);
  },
  function(){
    var mouse = createElement('div','mouse');
    body.appendChild(mouse);
  },
  function(){
    kuzixia = createElement('div','kuzixia');
    body.appendChild(kuzixia);
  },
  function(){
    var kudou = createElement('div','kudou');
    kuzixia.appendChild(kudou);
    var line1 = createElement('div','line1');
    var line2 = createElement('div','line2');
    var line3 = createElement('div','line3');
    kuzixia.appendChild(line1);
    kuzixia.appendChild(line2);
    kuzixia.appendChild(line3);
  },
  function(){
    var kuzishang = createElement('div','kuzishang');
    var belt1 = createElement('div','belt1');
    var belt2 = createElement('div','belt2');
    body.appendChild(kuzishang);
    kuzishang.appendChild(belt1);
    kuzishang.appendChild(belt2);
  },
  function(){
    var hands = createElement('div','hands');  
    var hand1 = createElement('div','hand1');
    var hand2 = createElement('div','hand2');
    body.appendChild(hands);
    hands.appendChild(hand1);
    hands.appendChild(hand2);
  },
  function(){
    var hair = createElement('div','hair');
    body.appendChild(hair);
  },
  function(){
    feet = createElement('div','feet');
    var foot1 = createElement('div','foot1');
    var foot2 = createElement('div','foot2');
    body.appendChild(feet);
    feet.appendChild(foot1);
    feet.appendChild(foot2);
  },
  function(){
    var shadow = createElement('div','shadow');
    feet.appendChild(shadow);
  }
];
button.onclick = function(){
  var fn = queue.shift();
  fn&&fn.call();
};