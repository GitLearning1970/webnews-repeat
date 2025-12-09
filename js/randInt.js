function randomInt(min, max) {
    const rand = Math.random(min, max)
    const minCeil = Math.ceil(min)
    const maxFloor = Math.floor(max)

    return Math.floor(rand * (maxFloor - minCeil +1) + minCeil)
}

export default randomInt