
const button = document.querySelector('button')
const jokelist = document.querySelector('#jokelist')
button.addEventListener("click", async () => {
    const config = {
        headers: {
            accept: 'application/json'
        }
    }
    await axios.get("https://icanhazdadjoke.com/", config)
        .then(res => {
            const jokes = res.data.joke;
            const newli = document.createElement('li');
            newli.innerText = jokes;
            jokelist.append(newli);
        })
}
)





