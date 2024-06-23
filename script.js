document.getElementById("linkBtn").addEventListener("click", function() {
    const linkInput = document.getElementById("linkInput").value;
    const textOutput = document.getElementById("textContainer");

    const data = null;
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            if (this.status >= 200 && this.status < 300) {
                textOutput.textContent = this.responseText;
            } else {
                textOutput.textContent = `Request failed with status: ${this.status} ${this.statusText}`;
            }
        }
    });

    const encodedLink = encodeURIComponent(linkInput);
    const apiUrl = `https://extract-news.p.rapidapi.com/v0/article?url=${encodedLink}`;
    
    xhr.open('GET', apiUrl);
    xhr.setRequestHeader('x-rapidapi-key', 'YOUR_API_KEY_HERE');
    xhr.setRequestHeader('x-rapidapi-host', 'extract-news.p.rapidapi.com');

    xhr.send(data);
});
