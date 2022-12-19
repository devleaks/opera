#output #file 
In its simplest form, Emitpy can optionally save each step of the emission creation process into files.

For flights:
- Flight Route
- Flight Movement
- Emission (Unscheduled)
- Scheduled and formatted (final) emission

For services:
- Service Movement
- Emission (Unscheduled)
- Scheduled and formatted (final) emission

When using a Redis database, outputs are saved in Redis variables. (The Redis database can quickly grow quite large.)
