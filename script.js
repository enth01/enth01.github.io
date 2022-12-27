let x;

document.getElementById('btn').onclick = function () {
    x = document.getElementById('x').value
    
    if (x === 'kokot') {
        window.location.href = "http://127.0.0.1:5555/penis.html";
    } else {
        alert('chod dopice')
    }

}