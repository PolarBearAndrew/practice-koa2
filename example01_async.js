
var fs = require('fs')

var readFile = function(fileName){
  return new Promise(function (resolve, reject){
    fs.readFile(fileName, function(error, data){
      if (error) reject(error);
      resolve(data);
    });
  });
};

async function todo() {
  try {

    var file = await readFile('./README2.md')
    console.log(file.toString())

    // await 的 err 需要透過 try catch 承接
  } catch (err) {
    console.log('error')
  }
}

todo().then(function() {
  // async func 會反回 promise 物件, 可以繼續 then 下去
  console.log('every thing done')
})
.catch(function(err) {
  // 如果不在 async func 內承接, 就會在 async func 之外的 promise.catch 上出現
  console.log('promise.catch 承接到錯誤')
})