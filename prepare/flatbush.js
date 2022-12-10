import fs from "fs"
import { bbox, point, booleanPointInPolygon } from "@turf/turf"
import Flatbush from 'flatbush';
// import {around, Flatbush} from 'geoflatbush';

const jsonstring = fs.readFileSync("out.geojson", "utf8");
const fc = JSON.parse(jsonstring);

// initialize Flatbush for feature collection features
const index = new Flatbush(fc.features.length);

// fill it with 1000 rectangles
let fids = []
let fids_inv = []
fc.features.forEach(f => {
    const p = bbox(f);
    index.add(...p);
    fids.push(f.id)
    fids_inv.push(f)
});

// perform the indexing
index.finish();
console.log(fc.features.length, "indexed")
// make a bounding box query
let p = point([51.611475, 25.270653])
// const found = index.search(...b) // .map((i) => fids[i]);
// console.log(found)

// const found2 = index.search(...b).map((i) => booleanPointInPolygon(p, fids_inv[i]));
// console.log(found2)

// const found3 = found.filter((i) => booleanPointInPolygon(p, fids_inv[i])).map((i) => fids[i]);
// console.log("found3", found3)

// // make a k-nearest-neighbors query
// const neighborIds = index.neighbors(51.611475, 25.270653, 5);
// console.log(neighborIds)

// const t = around(index, 51.611475, 25.270653, 10);
// console.log(t)
console.time("inside")
const inside = index.search(...bbox(p)).filter((i) => booleanPointInPolygon(p, fids_inv[i])).map((i) => fids[i]);
console.timeEnd("inside")
console.log("inside", inside)


// console.time("inside2")
// const inside2 = fc.features.filter((f) => booleanPointInPolygon(p, f)).map((f) => f.id);
// console.timeEnd("inside2")
// console.log("inside2", inside2)
