# BDFD Nodes

Nodes are servers where all bots are hosted. When you add a bot to BDFD, your bot connects to a node. Use [`$botNode`](../bdscript/botNode.md) to get node bot ID.

Every 6-16 hours, the bot node restarts to update and reduce load. You can track the status of a node on the [Nodes Status](https://botdesignerdiscord.com/status). Accordingly, the bot will be disabled for the period of restarting the node. 
When the rate limit is reached, a new node is created.

Nodes have their own versions, they can be found using `$nodeVersion`, they are updated gradually, so some bots support the update, and some have to wait.

## How to reset a bot node?
- Go to [Discord developer portal](https://discord.com/developers/applications).
- Choose your application.
- In top-left corner, click on the hamburger icon (≡) and select the *"Bot"* tab.
- Once done, press the *"Reset Token"* button and copy your bot token.
   > ⚠️ Never share your Discord bot token with anyone. [Learn more](/resources/security.html#sharing-tokens).
- Now, open your BDFD app and choose your bot.
- Click on the gear at the bottom of the panel
- Paste the copied token into the line *"Your bot token:"* and save

#### Before reset:
![before](https://user-images.githubusercontent.com/113303649/199276641-4ed217f1-63d2-4010-b109-aa68069d66a0.png)
#### After reset:
![after](https://user-images.githubusercontent.com/113303649/199277512-cee612c5-ab22-4666-aa33-8e6ff01b8e9b.png)
