// {
//     "type": "module"
// }

import fs from "fs"

// const turf = require("@turf/turf");

const args = process.argv.slice(2);

let features = []

args.forEach(f => {
    console.log(f);
    const jsonstring = fs.readFileSync(f, "utf8");
    const fc = JSON.parse(jsonstring);
    features = features.concat(fc.features)
})

features.forEach(f => {
    if (! f.hasOwnProperty("id")) {
        console.log("feature has no id", f)
    }
})

const fc2 = {
    type: "FeatureCollection",
    features: features
}

fs.writeFileSync("out.geojson", JSON.stringify(fc2, true, 2));
