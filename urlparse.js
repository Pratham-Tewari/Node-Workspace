var url=require('url');
var add="http://localhost:8000/default.html?year=2000&month=septmber";
var q=url.parse(add,true);
console.log(q.pathname);
console.log(q.hostname);
console.log(q.search);

var dq=q.query;
console.log(dq);
console.log(dq.month);
console.log(dq.year);
