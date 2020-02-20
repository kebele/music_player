const playlist = document.getElementById('playlist');

const songs2 = ['acousticbreeze', 'anewbeginning', 'goinghigher', 'happyrock', 'littleidea', 'memories', 'badass', 'cute', 'energy', 'jazzyfrenchy', 'relaxing', 'retrosoul', 'rumble', 'thejazzpiano'];


class SarkiEkle {
    constructor(resim, sarki) {
        this.resim = resim,
        this.sarki = sarki
    }

    sonuc(){
        console.log(resim, sarki)
    }
}

let sarki1 = new SarkiEkle("cute", "cute")

function listele(){
    songs2.forEach((x) => {
        console.log(x + ".jpg", x+".mp3");
    })
}

// event listeners
playlist.addEventListener('click', listele);


{/* 
<li>
    <p>
    <img src="images/acousticbreeze.jpg" alt="" />
    acousticbreeze
    </p>
</li> 
*/}