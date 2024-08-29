# Add response embed
Adds embed to the response message for the command.

## Inputs
- `Title`  `(Type: String || Own text: true)`: Title of the embed message.
- `Description`  `(Type: String || Own text: true)`: Description of the embed message.
- `Footer`  `(Type: String || Own text: true)`: Footer of the embed message.

### Flags
- ➤ Execute

## Example
Entry Point ➤ - ➤ Add response embed (Title: `Meowing Title`, Description: `Meowing Description`, Footer: `Cats shall rule this footer!`)

![image](https://github.com/user-attachments/assets/c99109d3-20df-44a8-be09-a7f5506e71f5)

## Result
```discord yaml
- username: Waterly-Kun
  user_id: 1278118926173081662
  color: "#748bd4"
  bot: true
  avatar: https://cdn.pixabay.com/photo/2023/09/02/03/15/water-8228076_640.jpg
  verified: true
  command:
    user_id: 713752533763489893
    author: Fai-Kun
    command: /meow
    color: "#E67E22" 
  content: ""
  embed:
    title: "Meowing Title"
    description: "Meowing Description!"
    footer: 
      text: "Cats shall rule this footer!"
```
