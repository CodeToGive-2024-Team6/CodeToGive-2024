import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account.
cred = credentials.Certificate('/Users/arong/Downloads/service-account.json')

app = firebase_admin.initialize_app(cred)

db = firestore.client()

# Function to delete documents from the collection except for a specific document
def delete_residents():
    collection_name = "residents"
    exception_document_ids = ["testResident1", "testResident2"]
    # Reference to the collection
    collection_ref = db.collection(collection_name)

    # Get all documents in the collection
    docs = collection_ref.stream()

    # Iterate over each document
    for doc in docs:
        # Delete the document if its ID is not the exception document ID
        if doc.id not in exception_document_ids:
            doc.reference.delete()
            print(f"Document {doc.id} deleted.")

# Function to delete documents from the collection except for a specific document
def delete_caregivers():

    collection_name = "caregivers"
    exception_document_ids = ["testCaregiver1", "testCaregiver2"]

    # Reference to the collection
    collection_ref = db.collection(collection_name)

    # Get all documents in the collection
    docs = collection_ref.stream()

    # Iterate over each document
    for doc in docs:
        # Delete the document if its ID is not the exception document ID
        if doc.id not in exception_document_ids:
            doc.reference.delete()
            print(f"Document {doc.id} deleted.")

# Function to delete documents from the collection except for a specific document
def delete_interventions():

    collection_name = "interventions"

    # Reference to the collection
    collection_ref = db.collection(collection_name)

    # Get all documents in the collection
    docs = collection_ref.stream()

    # Iterate over each document
    for doc in docs:
        # Delete the document if its ID is not the exception document ID
        if "testIntervention" not in doc.id:
            doc.reference.delete()
            print(f"Document {doc.id} deleted.")

# Function to delete follow-up collections from the resident documents
def delete_follow_up_collections():
    collection_name = "residents"
    exception_document_ids = ["testResident1", "testResident2"]

    # Reference to the collection
    collection_ref = db.collection(collection_name)

    # Get all documents in the collection
    docs = collection_ref.stream()

    # Iterate over each document
    for doc in docs:
        if doc.id not in exception_document_ids:
            # Delete the follow-up collection if it exists
            follow_up_collection_ref = doc.reference.collection("followups")
            follow_up_docs = follow_up_collection_ref.stream()
            for follow_up_doc in follow_up_docs:
                follow_up_doc.reference.delete()
                print(f"Follow-up document {follow_up_doc.id} deleted for resident {doc.id}.")

# Function to delete follow-up collections from the resident documents
def delete_objective_collections():
    collection_name = "residents"
    exception_document_ids = ["testResident1", "testResident2"]

    # Reference to the collection
    collection_ref = db.collection(collection_name)

    # Get all documents in the collection
    docs = collection_ref.stream()

    # Iterate over each document
    for doc in docs:
        if doc.id not in exception_document_ids:
            # Delete the follow-up collection if it exists
            follow_up_collection_ref = doc.reference.collection("objectives")
            follow_up_docs = follow_up_collection_ref.stream()
            for follow_up_doc in follow_up_docs:
                follow_up_doc.reference.delete()
                print(f"Objectives document {follow_up_doc.id} deleted for resident {doc.id}.")
            
            cnotes_collection_ref = doc.reference.collection("chronologicalNotes")
            cnotes_docs = cnotes_collection_ref.stream()
            for cnotes_doc in cnotes_docs:
                cnotes_doc.reference.delete()
                print(f"C-notes document {cnotes_doc.id} deleted for resident {doc.id}.")

# Function to delete documents from the 'resources' collection
def delete_resources():
    collection_name = "resources"
    # No exception document IDs assumed for resources

    # Reference to the collection
    collection_ref = db.collection(collection_name)

    # Get all documents in the collection
    docs = collection_ref.stream()

    # Iterate over each document and delete
    for doc in docs:
        doc.reference.delete()
        print(f"Resource document {doc.id} deleted.")

# Function to delete documents from the 'communityservices' collection
def delete_community_services():
    collection_name = "communityservices"
    # No exception document IDs assumed for community services

    # Reference to the collection
    collection_ref = db.collection(collection_name)

    # Get all documents in the collection
    docs = collection_ref.stream()

    # Iterate over each document and delete
    for doc in docs:
        doc.reference.delete()
        print(f"Community service document {doc.id} deleted.")

def menu():
    print("1. Delete resident and caregiver data")
    print("2. Delete interventions")
    print("3. Delete followups")
    print("4. Delete objectives and chronological notes")
    print("5. Delete resources")
    print("6. Delete community services")
    choice = input("Enter your choice: ")
    return choice

# main() to run menu to delete collections from firebase
def main():
    choice = menu()
    if choice == "1":
        delete_caregivers()
        delete_residents()
        
    elif choice == "2":
        delete_interventions()
    
    elif choice == "3":
        delete_follow_up_collections()
    
    elif choice == "4":
        delete_objective_collections()
    
    elif choice == "5":
        delete_resources()
    
    elif choice == "6":
        delete_community_services()
        
main()
