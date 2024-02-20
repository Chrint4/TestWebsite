fetch("foo.txt").then(function (res) {
    return res.text();
}).then(function (data) {
    let i = 1;
    data.split("||").forEach(function (element) {
        document.getElementById("text" + i).innerHTML = element.trim();
        i++;
    });
});