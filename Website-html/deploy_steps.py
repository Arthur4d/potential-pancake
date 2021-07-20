#Deployment steps
# Open finder, go to /Users/annabelford/Documents/GitHub/potential-pancake/potential-pancake/Website-html/Launched
# and right click, new terminal tab at folder. 
# In terminal; firebase init hosting
#  firebase hosting:channel:deploy preview_030421 (can change 'preview_030421' to anything you want) 
# can see the preview at url (or equivalent) https://heartenoak-vineyard--preview-030421-mla0oqrn.web.app/

#Then deploy from files: firebase deploy --only hosting    
# or from preview channel:  firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID TARGET_SITE_ID:live

#or deploy with comment: firebase deploy --only hosting -m "Deploying the best new feature ever."