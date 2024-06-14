# $cooldown
Sets a cooldown. The user can not run the command again, until the 'duration' is up.

## Syntax
```
$cooldown[Duration;Error message]
```

### Parameters
- `Duration` `(Type: Duration || Flag: Required)`: The duration of this cooldown.
- `Error message` `(Type: String || Flag: Emptiable)`: The message that is returned when the cooldown duration is still ongoing. `%time%` and other related functions can be used here.

| Time             | In Usage              | Limit 
| ---------------- | --------------------- | -------------
Year               | y                     | 191568
Week               | w                     | 9988936
Day                | d                     | 69922554
Hour               | h                     | 1678141301
Minute             | m                     | 100688478068
Second             | s                     | 6041308684139

> `%time%` returns how much time is left on the cooldown.

## Example
```
$nomention
$cooldown[30s;Please wait %time%, then use that command again!]
Hi!
```
