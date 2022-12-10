// {
//     "type": "module"
// }

import fs from "fs"
import { buffer } from "@turf/turf"

// const turf = require("@turf/turf");

const jsonstring = fs.readFileSync("serviceroads.geojson", "utf8");
const fc = JSON.parse(jsonstring);

// Buffer around taxiways
const fc2 = buffer(fc, 0.0075, {units: 'kilometers'});

// try to name them, otherwise use OSM internal name
const id_root = "OTHH:road:service:";
fc2.features.forEach(f => {
    let fid = id_root;
    if (f.properties.hasOwnProperty("ref")) {
        fid += f.properties.ref;
    } else {
        fid += f.properties.id;
    }
    f.id = fid
    f.properties.emitpy_aoi_id = fid
    f.properties["stroke"] = "#c0c0c0";
    f.properties["stroke-width"] = 1;
    f.properties["stroke-opacity"] = 1;
    f.properties["fill"] = "#c0c0c0";
    f.properties["fill-opacity"] = 0.05;
})

fs.writeFileSync("serviceroads-buffer.geojson", JSON.stringify(fc2, true, 2));
