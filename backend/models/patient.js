import mongoose, {model} from "mongoose";
const {Schema} = mongoose;

const patientSchema = new Schema({
  name:{
    type: String,
    required: true
  },

  dateOfBirth:{
    type: Date,
    required: true
  },

  gender:{
    type: String,
    required: true
  },

  address:{
    type: String,
    required: true
  },

  phoneNo:{
    type: String,
    required: true
  },

  emailId:{
    type: String
  },

  emergencyContact:{
    type: String,
  },

  //medical information

  pastIllness:{
    type: String,
    required: true
  },

  previousSurgery:{
    type: String, 
    required: true
  },

  chronicCondition:{
    type: String, 
    required: true
  },

  allergies:{
    type: String,
    required: true
  },

  familyMedicalHistory:{
    type: String,
    required: true
  },

  currentMedication:{
    type: String,
    required: true
  },

  pastMedication:{
    type: String,
    required: true
  },

  immunizationRecords:{
    type: String,
    required: true
  },

  //date of visit

  dateOfVisit:{
    type: Date,
    required: true
  },

  reasonOfVisit:{
    type: String,
    required: true
  },

  examinationNotes:{
    type: String,
    required: true
  },

  diagnosis:{
    type: String,
    required: true
  },

  treatmentPlan:{
    type: String,
    required: true
  },

  labAndTestResult:{
    type: String,
    required: true
  },

  //Billing and Insurance information
  insuranceProviderDeails:{
    type: String
  },

  policyNumber:{
    type: String
  },

  billingInformation:{
    type: String
  },

  paymentHistory:{
    type: String
  },

  //Emergency information
  DoNotResuscitate:{
    type: String
  },

  organDonationPreference:{
    type: Strig,
    required: true
  },

  //consent and legal information
  conentForm:{
    type: String
  },

  //other information
  anyOtherInformation:{
    type: String
  }

})

export default model('patient', patientSchema);