# Team 6 for Morgan Stanley's Code To Give Hackathon
**Made with JavaScript and hosted on Firebase & Glitch!**

>[!NOTE]
>This website is currently in beta and bugs will be a-plenty! Please report bugs if you find any!

>[!TIP]
>You can access the deployed website at [codetogive6.web.app](https://codetogive6.web.app) or follow the following instructions to build and deploy it yourself.

Clone the repo locally to your machine:
```
git clone https://github.com/CodeToGive-2024-Team6/CodeToGive-2024
```

Then install all packages and necessary files with npm from the frontend folder:
```
npm install
```

Once all necessary files are downloaded, you can run the website yourself using npm:
```
npm start
```

Alternatively, to deploy and test it elsewhere you can:
```
npm run build
```

## Backend Setup and Initialization:
Navigate to the backend folder and install necessary packages using:
```
npm install
```
Install chart.js using (This will be required to run this web-app successfully):

```
npm install chart.js
```

Run the Express.JS server using:
```
npm start
```

Access the server by using the following local address in a browser:
```
localhost:3000
```

5 endpoints are currently created to fetch resident data (Use 1 as a resident_id to access test data):
```
localhost:3000/residentinfo/:resident_id
```
```
localhost:3000/objectives/:resident_id
```
```
localhost:3000/notes/:resident_id
```
```
localhost:3000/residentresources/:resident_id
```
```
localhost:3000/followups/:resident_id
```

```
localhost:3000/residentalldata
```

```
localhost:3000/caregivers
```

```
localhost:3000/caregiver/:user_id
```

```
localhost:3000/caregiverbyname/:first_name

```

```
localhost:3000/caregiverbyname/:last_name
```
```
localhost:3000/caregiverbyemail/:email
```

To add random data to the firebase database in the backend folder:
- Place the service-account.json file in the backend folder

- Install these python packages:
```
pip3 install faker
pip3 install firebase-admin
```
- Run:
```
python3 add_data.py
```

To remove the random data from the firebase database in the backend folder:
- Run:
```
python3 delete.py
```
>[!IMPORTANT]
> Nothing yet!

Feel free to leave any suggestions or improvements!

-> Team 6
