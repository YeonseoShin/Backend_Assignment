const express = require('express');
const app = express();
const port = 3000;

// Body 데이터 파싱 설정 (Code 3.14)
app.use(express.urlencoded({ extended: true }));

// 객체를 문자열로 변환하는 함수 (Code 3.15)
function stringifyObject(obj) {
  return Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');
}

// GET 요청
app.get('/test', (req, res) => {
  const result = stringifyObject(req.query);
  res.send(`<pre>${result}</pre>`);
});

// POST 요청 
app.post('/test', (req, res) => {
  const result = stringifyObject(req.body);
  res.send(`<pre>${result}</pre>`);
});

// PUT 요청 
app.put('/test', (req, res) => {
  const result = stringifyObject(req.body);
  res.send(`<pre>${result}</pre>`);
});

// DELETE 요청 
app.delete('/test', (req, res) => {
  const result = stringifyObject(req.body);
  res.send(`<pre>${result}</pre>`);
});


//서버 실행
app.listen(port, () => {
  console.log(`http://localhost:${port}/test`);
});
