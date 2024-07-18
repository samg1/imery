const si = document.getElementById("si")
const no = document.getElementById("no")

const dialog1 = document.getElementById("dialog1")
const dialog2 = document.getElementById("dialog2")
const sad = new Audio('Download.mp3')
const happy = new Audio('espresso.mp3')

const closeButton1 = document.getElementById("c1")
const closeButton2 = document.getElementById("c2")

si.addEventListener("click", () => {
    dialog1.showModal();
    happy.play()

});

no.addEventListener("click", () => {
    dialog2.showModal();
    sad.play()
});


// "Close" button closes the dialog
closeButton1.addEventListener("click", () => {
    dialog1.close();
    happy.pause()
});
closeButton2.addEventListener("click", () => {
    dialog2.close();
    sad.pause();
});
