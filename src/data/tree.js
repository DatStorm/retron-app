export let nodes = [
    {
        "id": 0,
        "name": "food",
        "parents": [0]
    },
    {
        "id": 1,
        "name": "diary",
        "parents": [0]
    },
    {
        "id":2,
        "name": "alcohol",
        "parents": ["food"]
    },
    {
        "id": 3,
        "name": "meat",
        "parents": [0]
    },
    {
        "id": 4,
        "name": "fruit_vegetables",
        "parents": [0]
    },
    {
        "id": 5,
        "name": "grains",
        "parents": [0]
    },
    {
        "id": 6, 
        "name": "sugar_drinks",
        "parents": [0]
    },
    {
        "id": 8, 
        "name": "milk",
        "parents": [1]
    },
    {
        "id": 9, 
        "name": "yoghurt",
        "parents": [1]
    },
    {
        "id": 10, 
        "name": "cheese",
        "parents": [1]
    },
    {
        "id": 11, 
        "name": "icecream",
        "parents": [1]
    },
    {
        "id": 12, 
        "name": "wine",
        "parents": [2]
    },
    {
        "id": 13, 
        "name": "beer",
        "parents": [2]
    },
    {
        "id": 14, 
        "name": "beef",
        "parents": [3]
    },
    {
        "id": 15, 
        "name": "pork",
        "parents": [3]
    },
    {
        "id": 16, 
        "name": "poultry",
        "parents": [3]
    },
    {
        "id": 17, 
        "name": "fruit",
        "parents": [4]
    },
    {
        "id": 18, 
        "name": "vegetables",
        "parents": [4]
    },
    {
        "id": 19, 
        "name": "cottage_cheese",
        "parents": [10]
    },
    {
        "id": 20, 
        "name": "skimmed_milk",
        "parents": [8]
    },
    {
        "id": 21, 
        "name": "coca_cola",
        "parents": [6]
    },
    {
        "id": 22, 
        "name": "candy",
        "parents": [0]
    },
    {
        "id": 23, 
        "name": "chocolate",
        "parents": [22]
    },
    {
        "id": 24, 
        "name": "bananas",
        "parents": [17]
    },
    {
        "id": 25,
        "name": "bread",
        "parents": ["grains"]
    },
    {
        "id": 26,
        "name": "cake",
        "parents": ["grains"]
    },
    {
        "id": 27,
        "name": "egg",
        "parents": ["diary"]
    },
    {
        "id": 28,
        "name": "bell_pepper",
        "parents": ["vegetables"]
    },
    {
        "id": 29,
        "name": "onions",
        "parents": ["vegetables"]
    },
    {
        "id": 30,
        "name": "chili",
        "parents": ["vegetables"]
    },
    {
        "id": 31,
        "name": "tomato",
        "parents": ["vegetables"]
    },
    {
        "id": 32,
        "name": "breezer",
        "parents": ["alcohol"]
    },
    {
        "id": 33,
        "name": "cider",
        "parents": ["alcohol"]
    },
    {
        "id": 34,
        "name": "mushrooms",
        "parents": ["vegetables"]
    },
    {
        "id": 35,
        "name": "champignon",
        "parents": ["mushrooms"]
    },
    {
        "id": 36,
        "name": "fast_food",
        "parents": ["food"]
    },
    {
        "id": 37,
        "name": "cereal",
        "parents": ["grains"]
    },
    {
        "id": 38,
        "name": "oatmeal",
        "parents": ["cereal"]
    },
    {
        "id": 39,
        "name": "pepsi",
        "parents": ["sugar_drinks"]
    },
    {
        "id": 40,
        "name": "cucumber",
        "parents": ["vegetables"]
    },
    {
        "id": 41,
        "name": "naan_bread",
        "parents": ["bread"]
    },
    {
        "id": 42,
        "name": "pasta",
        "parents": ["grains"]
    },
    {
        "id": 43,
        "name": "chocolate_milk",
        "parents": ["milk"]
    },
    {
        "id": 44,
        "name": "pizza",
        "parents": ["fast_food"]
    },
    {
        "id": 45,
        "name": "nuts",
        "parents": ["food"]
    },
    {
        "id": 46,
        "name": "peanutbutter",
        "parents": ["nuts"]
    },
    {
        "id": 47,
        "name": "beans",
        "parents": ["vegetables"]
    },
    {
        "id": 48,
        "name": "haricots",
        "parents": ["vegetables"]
    },
    {
        "id": 49,
        "name": "sasuage",
        "parents": ["pork"]
    }
];

for (let node of nodes) node.children = []

export let nodes_by_id = {}
for (let node of nodes) nodes_by_id[node.id] = node;

export let nodes_by_name = {}
for (let node of nodes) nodes_by_name[node.name] = node;

for (let node of nodes) {
    let parent = node.parents[0];
    if (typeof parent === 'string') parent = nodes_by_name[parent].id
    node.parent = nodes_by_id[parent];
}

for (let node of nodes) {
    if (node.parent.id === node.id) continue;
    node.parent.children.push(node);
}

export let root = nodes[0];

let counts = {0: [16779.42, 1150], 1: [10085.82, 542], 2: [160.0, 14], 3: [479.55, 23], 4: [1874.7, 291], 5: [1507.5, 116], 6: [884.25, 58], 8: [1034.6, 106], 9: [618.0, 21], 10: [7461.12, 374], 11: [0, 0], 12: [0, 0], 13: [0, 0], 14: [387.55, 15], 15: [92.0, 8], 16: [0, 0], 17: [329.5, 140], 18: [1545.2, 151], 19: [6213.5, 307], 20: [895.1, 96], 21: [716.75, 47], 22: [1160.35, 76], 23: [1160.35, 76], 24: [329.5, 140], 25: [401.9, 41], 26: [681.1, 37], 27: [972.1, 41], 28: [350.0, 29], 29: [136.0, 15], 30: [140.0, 15], 31: [559.5, 60], 32: [160.0, 14], 33: [0, 0], 34: [191.5, 13], 35: [191.5, 13], 36: [445.35, 21], 37: [183.0, 20], 38: [183.0, 20], 39: [167.5, 11], 40: [76.0, 11], 41: [102.0, 10], 42: [241.5, 18], 43: [139.5, 10], 44: [145.95, 9], 45: [181.9, 9], 46: [181.9, 9], 47: [0, 0], 48: [92.2, 8], 49: [92.0, 8]}
for (let id in counts) {
    let node = nodes_by_id[id];
    node.total = counts[id][0];
    node.count = counts[id][1];
}

let maxId = nodes.reduce((a,b) => Math.max(a,b), -1)
for (let i=1; i<nodes.length; i++) {
    let node = nodes[i];
    if (node.children.length == 0) continue;
    let childrenTotal = node.children.reduce((a,b) => a+b.total, 0);
    if (childrenTotal == node.total) continue;
    node.children.push({
        id: ++maxId,
        name: "Other",
        parent: node.id,
        children: [],
        total: node.total - childrenTotal
    })
}


console.log(root);
