// {
//     "type": "module"
// }

import fs from "fs"
import { buffer } from "@turf/turf"

// const turf = require("@turf/turf");

const jsonstring = fs.readFileSync("aprons.geojson", "utf8");
const fc = JSON.parse(jsonstring);

const fc2 = fc;

// try to name them, otherwise use OSM internal name
const id_root = "OTHH:aeroway:apron:";
fc2.features.forEach(f => {
    let fid = id_root;
    if (f.properties.hasOwnProperty("name")) {
        fid += f.properties.name;
    } else {
        fid += f.properties.id;
    }
    f.id = fid
    f.properties.emitpy_aoi_id = fid
    f.properties["stroke"] = "#e32400";
    f.properties["stroke-width"] = 1;
    f.properties["stroke-opacity"] = 1;
    f.properties["fill"] = "#e32400";
    f.properties["fill-opacity"] = 0.00;
})

fs.writeFileSync("aprons-buffer.geojson", JSON.stringify(fc2, true, 2));
