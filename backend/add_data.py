import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
from datetime import datetime, timedelta
from faker import Faker
import random

# Use a service account.
cred = credentials.Certificate('/Users/arong/Downloads/service-account.json')

# Initialize the Firebase app with the credentials
firebase_admin.initialize_app(cred)

# Get a Firestore client
db = firestore.client()

fake = Faker()

# Function to fetch resident document references
def get_resident_document_references():
    residents_ref = db.collection("residents").get()
    return [resident.reference for resident in residents_ref]

def get_caregiver_document_references():
    caregivers_ref = db.collection("caregivers").get()
    return [caregiver.reference for caregiver in caregivers_ref]

# Function to create new caregiver documents with resident references
def create_new_caregivers(num_caregivers):
    # Generate and add new caregiver documents
    for i in range(num_caregivers):
        caregiver_data = {
            "lastName": fake.last_name(),  # Example last name
            "firstName": fake.first_name(),  # Example first name
            "email": f"caregiver{i+1}@example.com",  # Example email
            "phone": f"{random.randint(100,999)}-{random.randint(100,999)}-{random.randint(1000,9999)}"
        }
        db.collection("caregivers").add(caregiver_data)

# Function to generate random residents with specified date ranges
def create_new_residents(num_residents):
    montreal_boroughs = [
        "Ahuntsic-Cartierville", "Anjou", "Côte-des-Neiges–Notre-Dame-de-Grâce", "L'Île-Bizard–Sainte-Geneviève",
        "LaSalle", "Le Plateau-Mont-Royal", "Le Sud-Ouest", "Mercier–Hochelaga-Maisonneuve", "Montréal-Nord",
        "Outremont", "Pierrefonds-Roxboro", "Rivière-des-Prairies–Pointe-aux-Trembles", "Rosemont–La Petite-Patrie",
        "Saint-Laurent", "Saint-Léonard", "Verdun", "Ville-Marie", "Villeray–Saint-Michel–Parc-Extension", "Westmount"
    ]

    significant_person_types = [
        'Spouse', 'Friend', 'Parent', 'Child', 'Sibling', 'Partner', 'Colleague', 'Neighbor', 'Mentor',
        'Guardian', 'Cousin', 'Aunt', 'Uncle', 'Grandparent', 'Grandchild'
    ]

    challenges_list = [
        "financial difficulties", "job loss", "health issues", "disability", "mental health concerns",
        "addiction", "homelessness", "domestic abuse", "grief", "educational barriers", "legal issues",
        "language barriers", "cultural integration", "loneliness", "elderly care", "child care",
        "relationship problems", "transportation issues", "food insecurity", "housing instability",
        "chronic illness", "debt", "underemployment", "digital divide", "access to healthcare",
        "social exclusion", "age discrimination", "gender discrimination", "racial discrimination",
        "skill obsolescence", "lack of support networks"
    ]

    for i in range(num_residents):
        plan_start_date = datetime(2023, 1, 1) + timedelta(days=random.randint(0, (datetime.now() - datetime(2023, 1, 1)).days))
        plan_end_date = plan_start_date + timedelta(days=random.randint(1, (datetime(2025, 1, 1) - plan_start_date).days))
        end_of_stay_date = plan_end_date + timedelta(days=random.randint(0, (datetime(2025, 1, 1) - plan_end_date).days))
        
        significant_persons_count = random.randint(0, 4)
        significant_persons = [
            f"{random.choice(significant_person_types)} - " +
            f"{random.randint(100,999)}-{random.randint(100,999)}-{random.randint(1000,9999)}"
            for _ in range(significant_persons_count)
        ]

        acom = random.choice(["House", "Apartment", "Shelter"]) + " " + str(random.randint(0, 100))

        resident_data = {
            "firstVisit": random.choice([True, False]),
            "age": random.randint(18, 80),
            "lastName": fake.last_name(),
            "firstName": fake.first_name(),
            "challenges": random.sample(challenges_list, random.randint(1, min(3, len(challenges_list)))),
            "native": random.choice([True, False]),
            "borough": random.choice(montreal_boroughs),
            "planEndDate": plan_end_date,
            "significantPersons": significant_persons,
            "planStartDate": plan_start_date,
            "endOfStayDate": end_of_stay_date,
            "immigrationStatus": random.choice(["Citizen", "Permanent Resident", "Refugee"]),
            "veteran": random.choice([True, False]),
            "withChild": random.choice([True, False]),
            "income": f"${random.randint(100, 10000)}/Mo",
            "currentAccommodation": acom
        }
        db.collection("residents").add(resident_data)


def add_random_interventions(num_interventions):
    for _ in range(num_interventions):
        title = fake.sentence(nb_words=3)
        description = fake.paragraph(nb_sentences=3)
        intervention = {"title": title, "description": description}
        db.collection("interventions").add(intervention)

def add_residents_to_caregivers():
    # Get caregiver document references
    caregiver_refs = get_caregiver_document_references()
    
    # Get all resident documents
    residents_ref = get_resident_document_references()
    
    # Update each caregiver document
    for caregiver_ref in caregiver_refs:
        # Get data for caregiver document
        caregiver_data = caregiver_ref.get().to_dict()
        
        # Initialize residents list for this caregiver
        residents = []
        
        # Iterate over resident documents
        for resident_ref in residents_ref:
            # Check if caregiver reference is in residents' caregivers field
            resident_data = resident_ref.get().to_dict()
            if caregiver_ref in resident_data.get("caregivers", []):
                residents.append(resident_ref)
        
        # Update caregiver document with residents field
        caregiver_data["residents"] = residents
        caregiver_ref.update(caregiver_data)

# Function to add caregivers field to resident documents
def add_caregivers_to_residents():
    # Get caregiver document references
    caregiver_refs = get_caregiver_document_references()
    
    # Get all resident documents
    residents_ref = get_resident_document_references()
    
    # Update each resident document
    for resident_ref in residents_ref:
        # Update data for resident document
        resident_data = resident_ref.get().to_dict()
        resident_caregiver_refs = random.sample(caregiver_refs, random.randint(0, 4))  # Randomly select caregiver references
        resident_data["caregivers"] = resident_caregiver_refs
        resident_ref.update(resident_data)
    add_residents_to_caregivers()
    
def add_follow_up_collection_to_residents():
    # Get all resident documents
    residents_ref = get_resident_document_references()
    
    # Add follow-up collection to each resident document
    for resident_ref in residents_ref:
        # Get resident data
        resident_data = resident_ref.get().to_dict()
        plan_start_date = resident_data.get("planStartDate")
        plan_end_date = resident_data.get("planEndDate")
        
        if plan_start_date and plan_end_date:
            # Determine the number of follow-ups to add (between 0 and 5)
            num_follow_ups = random.randint(1, 5)
            
            # Add follow-up collection if it doesn't exist
            follow_up_collection_ref = resident_ref.collection("followups")
            
            for _ in range(num_follow_ups):
                # Determine follow-up date within the plan start and end dates
                follow_up_date = plan_start_date + timedelta(days=random.randint(0, (plan_end_date - plan_start_date).days))
                # Add a dummy document to create the collection
                follow_up_collection_ref.add({
                    "followUpDate": follow_up_date,
                    "type": random.choice(["appointment", "meeting", "checkpoint"]),
                    "note": fake.paragraph(nb_sentences=2),
                    "meansOfCommunication": random.choice(["email", "phone", "in person"])
                })

def add_objectives_collection_to_residents(resident_ref):
    # Add objectives collection to the resident document
    objectives_collection_ref = resident_ref.collection("objectives")
    num_objectives = random.randint(1, 5)
    objectives_refs = []
    
    for _ in range(num_objectives):
        objective_data = {
            "goalTitle": fake.sentence(nb_words=3),
            "description": fake.paragraph(nb_sentences=2),
            "term": random.choice(["Short-term", "Medium-term", "Long-term"]),
            "status": random.choice(["Future", "In progress", "Paused", "Completed"]),
            "means": fake.sentence(nb_words=6),
            "healthAspects": random.sample(
                ["Global Health", "Mental Health", "Physical Health", "Social Health", "Economic Health"],
                random.randint(1, 5)
            ),
        }
        # Create a new objective document and store its reference
        new_objective, new_objective_ref = objectives_collection_ref.add(objective_data)
        objectives_refs.append(new_objective_ref.id)
    
    return objectives_refs


def add_cnote_collection_to_residents_with_goals():
    # Get all resident documents
    residents_ref = get_resident_document_references()
    
    # Get caregiver document references
    caregiver_refs = get_caregiver_document_references()
    
    # Get intervention document references
    interventions_ref = [intervention.reference for intervention in db.collection("interventions").get()]
    
    # Add cnote collection to each resident document
    for resident_ref in residents_ref:
        # Add objectives to the resident and retrieve references
        objectives_refs = add_objectives_collection_to_residents(resident_ref)
        
        # Get resident data
        resident_data = resident_ref.get().to_dict()
        plan_start_date = resident_data.get("planStartDate")
        plan_end_date = resident_data.get("planEndDate")
        
        if plan_start_date and plan_end_date:
            # Determine the number of cnotes to add (between 0 and 5)
            num_cnotes = random.randint(0, 5)
            
            # Add cnote collection if it doesn't exist
            cnotes_collection_ref = resident_ref.collection("chronologicalNotes")
            
            for _ in range(num_cnotes):
                # Determine cnote date within the plan start and end dates
                cnote_date = plan_start_date + timedelta(days=random.randint(0, (plan_end_date - plan_start_date).days))
                # Choose a random caregiver reference for the employee field
                employee_ref = random.choice(caregiver_refs)
                # Choose a random sample of interventions
                interventions_sample = random.sample(interventions_ref, random.randint(1, 5))
                
                # Randomly select a number of objectives between 0 and the total number of objectives
                random_goals = random.sample(objectives_refs, random.randint(0, len(objectives_refs)))

                # Add a cnote document to the collection
                cnotes_collection_ref.add({
                    "title": fake.sentence(nb_words=3),  # Random title
                    "type": random.choice(["Regular", "Incident", "Other"]),  # Random type
                    "date": cnote_date,  # Date within the plan dates
                    "details": fake.paragraph(nb_sentences=3),  # Random paragraph for details
                    "observations": fake.sentence(nb_words=6),  # Random observations
                    "employee": employee_ref,  # Reference to a caregiver document
                    "typeOfFollowUp": random.choice(["Meeting", "Action", "Assessment"]),  # Random type of follow-up
                    "motive": fake.sentence(nb_words=4),  # Random motive
                    "interventionSetUp": interventions_sample,  # Array of intervention references
                    "goals": random_goals,  # Array of objective IDs
                })

def add_community_services(num_services):
    for i in range(num_services):
        community_service_data = {
            "nameOfOrganization": fake.company(),  # Example organization name
            "contact": fake.name(),  # Example contact name
            "phone": fake.phone_number(),  # Example phone number
            "email": fake.email(),  # Example email
            "mission": fake.sentence(nb_words=10)  # Example mission statement
        }
        db.collection("communityservices").add(community_service_data)

def add_resources(num_resources):
    # Extended list of issues
    issues_list = [
        "Unemployment", "Mental Health Issues", "Substance Abuse", "Homelessness", 
        "Chronic Illness", "Domestic Abuse", "Disability", "Social Isolation", 
        "Bereavement", "Debt", "Educational Barriers", "Language Barriers", 
        "Legal Issues", "Discrimination", "Food Insecurity", "Lack of Access to Health Care", 
        "Transportation Issues", "Digital Divide", "Caregiving Responsibilities", 
        "Climate Displacement", "Refugee Status", "Cultural Integration", 
        "Aging-Related Challenges", "Veteran Reintegration", "Childcare Challenges", 
        "Bullying", "Access to Clean Water", "Disaster Recovery", 
        "Gender-Based Violence", "Human Trafficking", "Political Persecution", 
        "Energy Poverty", "Racial Inequality", "Access to Sports and Recreation", 
        "LGBTQ+ Issues"
    ]
    
    for i in range(num_resources):
        resource_data = {
            "title": fake.sentence(nb_words=3),  # Example resource title
            "description": fake.paragraph(nb_sentences=3),  # Example description
            "type": random.choice(["Activity", "Video", "Document"]),  # Example type of resource
            "link": fake.url(),  # Example link to the resource
            "issues": random.sample(issues_list, random.randint(1, 5))  # Random subset of related issues/challenges
        }
        db.collection("resources").add(resource_data)


def menu():
    print("1. Add new resident and caregiver data")
    print("2. Update caregiver and resident references")
    print("3. Add new interventions")
    print("4. Add follow ups to each resident")
    print("5. Add goals and chronological notes to each resident")
    print("6. Add community services")
    print("7. Add resources")
    print("Other input to exit")
    choice = input("Enter your choice: ")
    return choice

def main():
    while True:
        choice = menu()
        if choice == "1":
            num_residents = int(input("Enter the number of residents to add: "))
            num_caregivers = int(input("Enter the number of caregivers to add: "))
            
            create_new_residents(num_residents)
            create_new_caregivers(num_caregivers)
            
            print(f"{num_residents} residents and {num_caregivers} caregivers added to Firestore.")
            
        elif choice == "2":
            add_caregivers_to_residents()
            print("Caregiver references added to residents.")

        elif choice == "3":
            num_interventions = int(input("Enter the number of interventions to add: "))
            add_random_interventions(num_interventions)

        elif choice == "4":
            add_follow_up_collection_to_residents()
            print("Follow-up collection added to residents.")
        
        elif choice == "5":
            add_cnote_collection_to_residents_with_goals()
        
        elif choice == "6":
            num_services = int(input("Enter the number of community services to add: "))
            add_community_services(num_services)
            print(f"{num_services} community services added to Firestore.")
            
        elif choice == "7":
            num_resources = int(input("Enter the number of resources to add: "))
            add_resources(num_resources)
            print(f"{num_resources} resources added to Firestore.")
        else:
            break
        
        
main()



