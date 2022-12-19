#output
Optionally, emitted messages are published on a timely fashion on output queues.

The broadcast process is a sophisticated output mechanism that proposes messages on one or more output queue. The model of a queue is a source of data for vehicle location.
In an airport environment, we can for exemple have an output queue for each ground radar, and an output queue for ADS-B messages fetched from a supplier.

Currently, the output queue is realized by a Redis Publish/Subscribe Queue (one or more queues are possible).

## Output Queue

### Name
The output queue has a name, used to designate the rendez-vous for message subscription.

### Start Time
The optional start time of a queue is the time at which the queue will start emitting messages. It can be a time in the past or in the future. Default is to use the current time.

### Speed
The speed of emission can be adjusted to accelerate or slow down emissions.
The default value is 1, which means that time flows at normal speed, 1 second last 1 second.
It is possible to slow down the broadcast of messages by supplying a speed smaller than 1. A speed of 0.1 will make 1 simulated second last 10 real second. This is very useful if events arrive at very high rate. Inversely, a speed of 60 (the maximum) will make a simulated minute last 1 real second. This can be used to artificially increase the event emission rate.

### Queue Reset
When reset, the emission time of the queue is reset at its start time.
When the start time of a queue is changed, the queue is reset.
The speed of a queue can be changed any time.

For convenience reason, the queue regularly broadcast its simulated time together with the real time.

### Emission Re-Submission
When a message is sent, it is removed from a queue and lost after its emission.
However, if a particular movement (or set of movements) needs to be played back, it is always possible to enqueue the emissions of those movements again for broadcast, starting from a saved position, without redoing any calculation. When re-emitting a movement, it is possible to reschedule it at another time if necessary.

## Broadcaster
The Broadcaster is a process that schedule the emission of messages in a queue based on message timestamp and queue properties (start time and speed). There is a broadcaster process for each queue.

## Hypercaster
The Hypercaster process is a process that manages all broadcasters.
When a new queue is created, the Hypercaster starts a new broadcaster process for it.
When a queue is deleted, the Hypercaster process stops and destroy the accociated broadcaster  process.
When the emitpy application starts, the Hypercaster process starts all broadcaster processes.
When the emitpy application terminates, the Hypercaster gracefully terminates all queues.

## Usage
Usages of the flexible broadcast mechanism are multiple.

It possible to start from a existing simulation, and accelerate time to foresee what the situation will be in a near future.

It is possible to replay past situation, even slow them down to see how a particular process evolved. It is possible to replay the same situation over and over again.

The enqueuing of a movement does not rely exclusively on the simulation. It is possible to save, format, and enqueue messages coming from other sources and using the broadcaster to replay the situation and analyze it.

By speeding up queue emission, it is possible to generate higher broadcast rates to stress test system performances.