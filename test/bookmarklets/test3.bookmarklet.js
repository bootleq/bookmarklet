// ==Bookmarklet==
// @name Test 3
// @author Peter
// @style !inline test/bookmarklets/test3.bookmarklet.css
// ==/Bookmarklet==

const el = document.createElement('div');
el.classList.add('imaginary');
document.body.appendChild(el);

const testPassed = globalThis.getComputedStyle(el)['display'] === 'table';

let run = () => {
  alert('Did the test element get styled? ' +
      (testPassed ? 'Of course!' : 'Nope.')
  );
};

run();
