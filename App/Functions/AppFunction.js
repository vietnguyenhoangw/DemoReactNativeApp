export const isUrl = (string) => {
    const regex = /^((http|https|ftp):\/\/)/
    return regex.test(string)
}