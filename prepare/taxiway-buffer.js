// {
//     "type": "module"
// }

import fs from "fs"
import { buffer } from "@turf/turf"

// const turf = require("@turf/turf");

const jsonstring = fs.readFileSync("taxiways.geojson", "utf8");
const fc = JSON.parse(jsonstring);

// Buffer around taxiways
const fc2 = buffer(fc, 0.025, {units: 'kilometers'});

// try to name them, otherwise use OSM internal name
const id_root = "OTHH:aeroway:taxiway:";
fc2.features.forEach(f => {
    let fid = id_root;
    if (f.properties.hasOwnProperty("ref")) {
        fid += f.properties.ref;
    } else {
        fid += f.properties.id;
    }
    f.id = fid
    f.properties.emitpy_aoi_id = fid
    f.properties["stroke"] = "#fffb00";
    f.properties["stroke-width"] = 1;
    f.properties["stroke-opacity"] = 1;
    f.properties["fill"] = "#fffb00";
    f.properties["fill-opacity"] = 0.05;
})

fs.writeFileSync("taxiways-buffer.geojson", JSON.stringify(fc2, true, 2));
