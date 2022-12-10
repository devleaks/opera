// {
//     "type": "module"
// }

import fs from "fs"
import { buffer } from "@turf/turf"

// const turf = require("@turf/turf");

const jsonstring = fs.readFileSync("airport.geojson", "utf8");
const fc = JSON.parse(jsonstring);

const fc2 = fc;

// try to name them, otherwise use OSM internal name
const id_root = "OTHH:airport:area:";
fc2.features.forEach(f => {
    let fid = id_root;
    if (f.properties.hasOwnProperty("name")) {
        fid += f.properties.name;
    }
    f.id = fid
    f.properties.emitpy_aoi_id = fid
    // colors
    f.properties["stroke"] = "#942192";
    f.properties["stroke-width"] = 1;
    f.properties["stroke-opacity"] = 1;
    f.properties["fill"] = "#942192";
    f.properties["fill-opacity"] = 0.05;
})

fs.writeFileSync("airport-buffer.geojson", JSON.stringify(fc2, true, 2));
