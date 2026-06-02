Step 1: I created git repo for You, only use it on Your render.com account.


Step 2: Redeploy on Render (No Card Needed)
Go back to your Render Dashboard and create a New Web Service linked to this GitHub repository.

Fill out the settings:

Language: Select Node (Instead of Docker).

Build Command: Leave it blank (or clear out whatever is there).

Start Command: node proxy.js

Instance Type: Make sure Free is highlighted.

Click Deploy Web Service.

Because it is a standard Node.js app, Render will instantly begin building it on their free tier sandbox without popping up the "Add Card" roadblock! Once the status changing to "Live", you can use your Render address (stratum+tcp://your-app.onrender.com:443) in your miner.

Step 3: Connect your MinerRender will take about 2–3 minutes to build and launch your container. Once the logs say "Live," look at the top-left corner of your Render dashboard. You will see a unique URL provided to you, which will look something like this:my-btc-relay.onrender.comBecause Render automatically handles the encryption layers, your URL listens on standard secure port 443.Go to your ASIC or mining software and input the pool address like this:Pool URL: stratum+tcp://my-btc-relay.onrender.com:443Critical Free-Tier Note: Render's free tier has a "Sleep" rule. If a service doesn't receive web traffic for 15 minutes, it will spin down to save power. Because your miner uses Stratum data instead of web data, Render might think the app is idle and put it to sleep.  If you notice your miner disconnecting after 15 minutes, you can easily fix this by using a free online ping tool (like UptimeRobot or Cron-Job.org) to send a simple web ping to [https://my-btc-relay.onrender.com](https://my-btc-relay.onrender.com) once every 10 minutes. This tricks Render into staying online permanently!
