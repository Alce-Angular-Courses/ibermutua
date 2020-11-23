function hacerAsync(t, callback) {
    setTimeout(() => {
        let user  = 'Juan'
        callback(user)
    },t)
}

function renderConsola(p) {
    console.log(`Saludos, ${p}` )
}

hacerAsync(100, renderConsola)
hacerAsync(100,  p => console.log(`Saludos, ${p}` ))


function hacerPromesa(t){
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            let n = Math.random()
            if (n > 0.5) {
                let user  = 'Juan'
                resolve(user)
            } else {
                reject(n)
            }
        },t)
    })
}

hacerPromesa(200).then(
    data => console.log(`Saludos, ${data}` )
).catch (
    err => console.log(`Error ${err}`)
)
