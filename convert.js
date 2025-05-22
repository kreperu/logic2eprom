async function getFile(e) {
    let source = await e.target.files[0].text();
    source = source.split(new RegExp('[;\n\r]+'));
    console.log(source);
}





document.addEventListener("DOMContentLoaded", (e) => {
    let soruce = document.getElementById("source");
    soruce.addEventListener("input", getFile)
    console.log("test");
});