export function docSearch (name, input) {
  let promise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
      // let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=`+input+`&location=45.52%2C-122.682%2C100&skip=0&limit=10&user_key=`+process.env.exports.apiKey;

      let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=`+input+`location=45.522,-122.682,100&skip=2&limit=10&user_key=`+process.env.exports.apiKey;

    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  promise.then(function(response) {
    let body = JSON.parse(response);
    console.log(body);
    $('.results').empty();
  });
  return;
}
