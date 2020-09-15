const llamaASeRompe = () => {
    seRompe()
}

const seRompe = () => {
    return 3 + z
}

const llamaASeRompeAsync = () => {
    setTimeout(() => {
        seRompe()
    }, 2000);
}

try {
    //Este bloque no se ejecuta dentro del try catch, por ello se detiene el programa.
    llamaASeRompeAsync()
} catch (error) {
    console.error(error.message)
}

console.log("finalizo el script")