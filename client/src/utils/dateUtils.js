export function formatStringToDate(string){
    const options = {year: 'numeric', month: 'long', day: 'numeric'}
    const date = new Date(string)
    return date.toLocaleDateString('en-US', options)
}