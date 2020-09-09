function backNumber(str) {
    const arr = str.split('');
    let imgs = [];
    arr.map(item => {
        if (item == '.') {
            item = 'a'
        }
        imgs.push(item)
    })
    return imgs
}