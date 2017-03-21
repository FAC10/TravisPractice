const test = require('tape');
const shot = require('shot');
const router = require('./router.js');

test('Initialise', t => {
  let num = 2;
  t.equal(num, 3, 'Checking test environment working');
  t.end();
});

test('Home route tests', t => {
  shot.inject(router, { method: 'get', url: '/'}, (res) =>{
    t.equal(res.headers['Content-Type'], 'text/plain', 'Content type should equal text/plain');
    t.equal(res.statusCode, 200, 'should respond with status code of 200');
    t.equal(res.payload, 'hello');
    t.end();
  });
});

//Make sure url doesn't exist
test('Unknown url tests', t => {
  shot.inject(router, {method: 'get', url:'/ikikikik'}, res =>{
      t.equal(res.statusCode, 404, 'should respond with status code of 404');
      t.equal(res.payload, 'Unknown url');
      t.end();

  });
});

test('Blog tests', t => {

  shot.inject(router, {method: 'get', url:'/blog'}, res => {
    // console.log(res);
    t.equal(res.statusCode, 200, 'should respond with a status code of 200');
    t.deepEqual(JSON.parse(res.payload)['jsonObj'], ['hello', 'world', 'tape']);
    t.equal(typeof JSON.parse(res.payload)['jsonObj'][0], 'string');
    t.equal(JSON.parse(res.payload)['jsonObj'][0], 'hello');
    t.end();
  })
})


test('Blog post', t=>{
  shot.inject(router, {method: 'post', url: '/blog', headers:{'password':'potato'}, payload: ['hello', 'nick']}, res=>{
      t.equal(res.statusCode, 200, 'should respond with a status code of 200');
      t.deepEqual(JSON.parse(res.payload)['myArray'], ['hello', 'nick'] );
      t.end();
  })

})
