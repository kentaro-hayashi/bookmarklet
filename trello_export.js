// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name default.js
// ==/ClosureCompiler==

// compile:
// https://closure-compiler.appspot.com/

function trelloExport() {
  let text = '';
  const lists = document.getElementsByClassName('list');
  for (list of lists) {
    const cards = list.querySelectorAll('span.js-card-name');
    for (let i = 0; i < cards.length; i++) {
      text += cards[i].innerText + '\n';
      const number = cards[i].querySelector('span.trello-number');
      if (number != null) number.remove();
      cards[i].insertAdjacentHTML('afterbegin', `<span class="trello-number" style="color:blue">【No. ${i + 1}】<br /></span>`);
    }
    text += '=========================================\n\n'
  }
  location.href = URL.createObjectURL(new Blob([text], {
    type: "application/octet-stream"
  }))
}
trelloExport();
