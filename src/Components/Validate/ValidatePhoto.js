const Validateimg = (e) => {
    let Validatephoto = true
    if (e?.[0]) {
        // Extensiones permitidas
        const allowedExtensions = ['jpg', 'jpeg', 'png', 'webp', 'svg', 'avif'];
        const extension = e[0].name.split('.').pop()
        Validatephoto = allowedExtensions.includes(extension)
    }
    return false
}
export { Validateimg }