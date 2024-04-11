function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);
    
        req.onload = function() {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            }
            else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };
    
        // Handle network errors
        req.onerror = function() {
            reject(Error("Network Error"));
        };
    
        // Make the request
        req.send();
    });
}

$(function() {
    $('#btn').click(function() {
        get('https://reqres.in/api/users?page=2').then(function(response) {
            return JSON.parse(response);
        }).then(function(response) {
            console.log("Success!", response);

            var div = $('<div></div>');
            response.data.forEach(user => {
                div.append('<p>' + user.first_name + ' ' + user.last_name + '<img src='+ user.avatar +'></img>' + '</p>');
            });
            $('body').append(div);
        }, function(error) {
            console.error("Failed!", error);
        }).catch(function(error) {
            console.error("Failed!", error);
        });
    });
});