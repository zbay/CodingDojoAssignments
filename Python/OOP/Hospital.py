class Patient(object):
    def __init__(self, id, name, allergies, bed=None):
        self.id = id
        self.name = name
        self.allergies = allergies
        self.bed = bed
    def display(self):
        print "ID: " + str(self.id)
        print "Name: " + str(self.name)
        print "Allergies: " + str(self.allergies)
        print "Bed #: " + str(self.bed)
        return self

class Hospital(object):
    def __init__(self, name, capacity, patients=[]):
        self.name = name
        self.capacity = int(capacity)
        self.patients = patients[:capacity] # cut patients down to size
        self.nextID = 0
        self.availableBeds = [1, 4, 5, 8, 9, 23, 43, 54, 65]
    
    def admit(self, patient):
        if len(self.patients) < self.capacity:
            patient.id = self.nextID
            self.nextID += 1
            patient.bed = self.availableBeds[0]
            self.availableBeds.pop(0)
            self.patients.append(patient)
            print "Admission complete. Get well soon."
        else:
            print "Hospital is full, sorry!"
        return self
    
    def discharge(self, patient_id):
        for i in range(0, len(self.patients), 1):
            if self.patients[i].id == patient_id:
                self.availableBeds.append(patients[i].bed)
                self.patients[i].bed = None
                if i+1 < len(self.patients):
                    self.patients = self.patients[:i] + self.patients[i+1:]
                else:
                    self.patients = self.patients[:i]
                return self
        return self

    def display_patients(self):
        for i in range(0, len(self.patients)):
            self.patients[i].display()
        return self

h = Hospital("INOVA Hospital", 2000)
h.admit(Patient(None, "Person McPerson", ["wheat"]))
h.admit(Patient(None, "Person O'Person", ["dairy"]))
h.admit(Patient(None, "Person St. Person", ["opioid"])).display_patients()
h.discharge(2).display_patients()