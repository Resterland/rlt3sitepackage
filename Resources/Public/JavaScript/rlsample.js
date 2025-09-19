
const myImage = document.querySelector(".middle");

myImage.addEventListener("click", () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "EXT:rlt3sitepackage/Resources/Public/Images/Logos/Default/Logo.svg") {
        myImage.setAttribute("src", "EXT:rlt3sitepackage/Resources/Public/Images/Logos/Default/LogoInverded.svg");
    } else {
        myImage.setAttribute("src", "EXT:rlt3sitepackage/Resources/Public/Images/Logos/Default/Logo.svg");
    }
});
