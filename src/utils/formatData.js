export function processPage(data){
    return data.results[0].data
}

export function processData(data){
    let results = []
    data.results.map(item =>{
        results.push({uid: item.uid, ...item.data})
    })
    return results
}