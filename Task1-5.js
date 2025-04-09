let s = prompt('Email', 'Щ');
let re = new RegExp('[A-Za-z0-9 ]+', 'g');
let found = s.match(re);
let latin_count = found ? found.join('').length : 0;
let all_symbols_count = s.length;
let percentage = Math.trunc((latin_count/all_symbols_count)*100);
alert(`Latin percentage in string is ${percentage}%`)