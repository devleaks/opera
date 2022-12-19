A Rule is a pair of matching events.

# Events
An Event occurs when a [[Vehicle|vehicle]] makes an *action* relative to an [[Areas of Interest|Area of Interest]].

## Actions
Possible vehicle actions relative to areas of interest are:
- Entering (an area of interest)
- Leaving (an area of interest)
- Being stopped inside an area of interest
- Crossing an area of interest.

Actions are determined on the basis of the penultimate and the last known position of a vehicle. For example, when a vehicle is not in an area of interest in the penultimate position, and inside an area of interest in the last position, we assume the vehicle *entered* the area of interest.

When the position of a vehicle has not changed between reported positions, we assume the vehicle has *stopped* in the area of interest.

Finally, all areas of interest that are intersected by the line joining the penultimate and last positions, we assume they are/were *crossed* by the vehicle.

![[events.png]]
## Event Data
An Event produces the following data:
- The vehicle identifier,
- (The position of the vehicle,)
- The time of the last event,
- The action,
- The area of interest that is involved.

# Areas of Interest
When writing a Rule, it is not necessary to supply a single, [[Areas of Interest#Area of Interest Identification and Grouping|unique area of interest]]. It is possible to supply a collection of areas of interest (AoI). The Rule will match any AoI that is in the collection.


# Rule

A Rule is a coordination of two events.

## Definition
To define a Rule, we must define two events of interest, a *start* event and an *end* event.

### Event Definition
An Event is defined by the *action* we expect and the *area(s) of interest* where we want the action to occur: Examples of Events are:
- When a vehicle enters a very precise apron
- When a vehicle enter any parking
- When a vehicle exits any parking
- When a vehicle crosses any runway
- etc.

Opera constantly monitor vehicle movements and raises events as they occur.

### Rule Definition
A Rule is defined by supplying a *start* event and an *end* event.For example:
- Start: When a vehicle exits any runway
- End: When a vehicle enters any ramp

## Promise
When an event matches the *start* event of a rule, the rule is activated. The rule becomes a *promise* for a precise vehicle and area of interest.
The Rule remains a promise until the rule times out. The timeout is reset each time the same event occurs for the same vehicle, for the same area of interest.

## Resolution
When an event matches the *end* event of a promise, the rule is *resolved*. The result of the rule is archived for later analysis.
When a rule is resolved, its promise is not removed. The promise remains until it times out.

## Rule Data
When a rule is resolved, the following data is stored:
- Identifier of the rule,
- Event data of the promise,
- Event data of the resolution.

The most valuable data that is retained is the time difference between the *promise* and the *resolve*, in other words, the duration of the rule.