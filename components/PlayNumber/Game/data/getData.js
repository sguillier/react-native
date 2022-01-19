
const getData = () => {
    const alt = ['a', 'b', 'c', 'd', 'e']
    return alt.map(e => ({ id: e, value: Math.floor(Math.random() * 100) }))
}

export { getData };
