#geo 
Emitpy uses GeoJSON format for representation, use, input and output of geographic entities. GeoJSON Features in particular carry both geographic information and properties associated with it in a human readable format. (geoyaml would be ideal to get rid  of too many quotes.)
Python package [GeoJSON](https://github.com/jazzband/python-geojson) is used in numerous libraries. However it is feature limited and exhibit some problem (e.g. [162](https://github.com/jazzband/geojson/issues/162), [178](https://github.com/jazzband/geojson/issues/178)) that prevent its use in emitpy.

To circumvent this, emitpy uses a FeatureWithProps subclass that offert necessary GeoJSON features for external libraries, while maintaing a high level of usability for the emitpy development. FeatureWithProps is the base entity for all emitpy geolocalised features.

Properties attached by emitpy are structured (*dict*) but can be flattened by a [[Emit, Schedule, Format#Default Format|formatting option]].