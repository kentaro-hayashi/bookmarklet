// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name default.js
// ==/ClosureCompiler==

// compile:
// https://closure-compiler.appspot.com/

function trelloNumber(){
  const lists = document.getElementsByClassName('list');
  for (list of lists) {
    const cards = list.querySelectorAll('span.js-card-name');
    for (let i = 0; i < cards.length; i++) {
      const number = cards[i].querySelector('span.trello-number');
      if (number != null) number.remove();
      cards[i].insertAdjacentHTML('afterbegin', `<span class="trello-number" style="color:blue">【No. ${i + 1}】<br /></span>`);
    }
  }
}
trelloNumber();
trelloNumberTimer = setInterval(trelloNumber, 3000);
