#Deployment steps
# Open finder, go to /Users/annabelford/Documents/GitHub/potential-pancake/potential-pancake/Website-html/Launched
# and right click, new terminal tab at folder. 
# In terminal; firebase init hosting
#  firebase hosting:channel:deploy preview_030421 (can change 'preview_030421' to anything you want) 
# can see the preview at url (or equivalent) https://heartenoak-vineyard--preview-030421-mla0oqrn.web.app/

#Then deploy from files: firebase deploy --only hosting    
# or from preview channel:  firebase hosting:clone SOURCE_SITE_ID:SOURCE_CHANNEL_ID TARGET_SITE_ID:live

#or deploy with comment: firebase deploy --only hosting -m "Deploying the best new feature ever."


#Bug Fixing:
#Channel deploy often first time comes back with the default page not the website in the deployed channel. 
#Had to mode the Images folder, index and css files into the newly created 'public' folder and it then worked
#

#Also seem to get another issue, seems to fix it by changing folder names to have no blanks and from using the terminal from 
#within VSCode not the normal terminal? Also deleted and reinit'd firebase but don't think that did it. Not sure really
#
#firebase use heartenoak-vineyard to switch the project