const judgeVegetable = function (vegetables, metric) {
    if(!vegetables || vegetables.length === 0) return "Nothing Found";
    
    let result = vegetables[0];
    for(let i = 1; i < vegetables.length; i++) {
        
        if(result[metric] < vegetables[i][metric]){
            result = vegetables[i];
        }
    }
    
    return result.submitter;
}

const vegetables = [
    {
        submitter: 'Old Man Franklin',
        redness: 10,
        plumpness: 5
    },
    {
        submitter: 'Sally Tomato-Grower',
        redness: 2,
        plumpness: 8
    },
    {
        submitter: 'Hamid Hamidson',
        redness: 4,
        plumpness: 3
    },
]

const metric = 'plumpness';
let x = judgeVegetable(vegetables, metric);