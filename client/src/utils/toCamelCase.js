export default function toCamelCase(str){
    const splitStr = str.split("-")
    const splitResult = splitStr.map(word => word.substring(0, 1).toUpperCase() + word.slice(1))
    
    return splitResult.join(" ")
}