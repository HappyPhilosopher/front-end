/* async function fn() {
  return 27;
}

fn().then(res => {
  console.log(res);
}); */

async function fn() {
  let promise = new Promise(resolve => {
    setTimeout(resolve, 1000, 'Hello world');
  });
  console.log(await promise);
  console.log(2);
  return 3;
}

fn().then(res => {
  console.log(res);
});
