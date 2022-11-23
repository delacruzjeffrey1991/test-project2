
const canSendRequest = (businessInfo: object) => {
    // check if any object key has a value
    const isEmpty = !Object.values(businessInfo).every(x => x === null || x === '');
    return isEmpty
}

export { canSendRequest }