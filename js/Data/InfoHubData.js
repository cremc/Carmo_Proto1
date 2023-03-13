///// DATA POPULATION CODE //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function populateStreamsCareersData() {
  // let streamCareerDatabase = [];

  let stream1 = {
    stream: "Finance",
    careers: ["Accounting and Auditing", "Account Executive", "Actuary", "Advertising, Marketing, Public Relations and Sales Managers", "Budget Analyst", "Claims Adjusters, Appraisers, Examiners, and Investigators", "Cost Estimators", "Economists", "Financial Analyst and Advisor", "Financial Managers", "Financial Service Sales Agents", "Forensic Accountants", "Human Resource Managers", "Human Resource, Recruitment and Labor Relations Specialist", "Insurance Agent", "Insurance Underwriter", "Investment Banker", "Loan Officer", "Management Analyst and Consultant", "Meeting and Convention Planners", "Personal Financial Advisor", "Purchasing Managers, Buyers, and Purchasing Agents", "Real Estate Appraisers and Assessors", "Real Estate Broker", "Real Estate Agent", "Securities, Commodities, and Financial Services Sales Agents"
      ]
    };

    let stream2 = {
      stream: "Education",
      careers: ["Curriculum Specialist", "Education Administrator", "Teacher Assistant", "Teacher: Adult literacy and remedial education", "Teacher—postsecondary", "Teacher—preschool, kindergarten, elementary, middle, and secondary", "Teacher—special education", "Lecturer", "Assistant Professor", "Associate Professor", "Professor", "Senior Professor", "Dean", "Vice Chancellor"
                ]
      };

      let stream3 = {
        stream: "Transportation, Logistics",
        careers: ["Computer and Information Research Scientist", "Computer Network Architect", "Computer-Control Programmer and Operator", "Computer Programmer", "Computer and Information Systems Manager", "Computer Scientist", "Computer Science Teacher (Postsecondary)", "Computer, Automated Teller, and Office Machine Repairer", "Computer Hardware Engineer", "Network Engineer"
                ]
      };

      let stream4 = {
        stream: "Engineering & Technologies",
        careers: ["Engineer (General)", "Biomedical Engineer", "Chemical Engineer", "Civil Engineer", "Computer Hardware Engineer", "Computer Software Engineer", "Electronics Engineer", "Electrical Engineer", "Environmental Engineer", "Health and Safety Engineer", "Industrial Engineer", "Marine Engineer", "Materials Engineer and Naval Architect", "Mechanical Engineer", "Mining, Mining Safety, and Geological Engineer", "Nuclear Engineer", "Petroleum Engineer", "Aerospace Engineering Technician", "Civil Engineering Technicians", "Electrical/Electronics Engineering Technician", "Electro-mechanical Engineering Technician", "Environmental Engineering Technician", "Industrial Engineering Technician", "Mechanical Engineering Technician"
              ]
      };

      let stream5 = {
        stream: "Mass Communication",
        careers: ["Broadcast Engineering Technician", "News Analyst, Reporter, and Field Correspondent", "Newscaster", "Photographer, Camera person", "Public Relations Specialist", "Radio Operator", "Sound Engineering Technician", "Television, Video, and Motion Picture Camera Operator and Editor", "Writer and Editor"
                  ]
      };

      let stream6 = {
        stream: "Law & Legal Services",
        careers: ["Criminalist", "Criminologist", "Forensic Pathologist", "Forensic Psychology", "Penologist", "Accounting Forensics", "ATF Agent", "ATF Investigator", "ATF Technician/Professional", "Border Patrol Agent", "Government Agent", "Coast Guard", "Compliance Officer", "Computer Forensics", "Counter Terrorism", "Crime Laboratory Analyst", "Crime Scene Investigator", "Customs Agent", "DEA Agent", "Deportation Officer (DO)", "Diplomatic Security", "Emergency Management Director", "ERO Agent", "FBI Agent", "Federal Air Marshal", "Federal Protective Service", "Fish & Game Warden", "Forensic Engineer", "Forensic Odontologist", "Forensic Science", "Forensic Science Technician", "Forensic Psychologist", "Fraud Investigator", "Homeland Security", "HSI Special Agent", "Immigration Customs (ICE) Agent", "Cybersecurity expert", "Information Security Expert", "INS Agent", "IRS Special Agent", "K9 Officer", "NSA Police Officer", "Private Security", "Police Detective", "Police Officer", "Private Investigator", "Psychological Profiler", "Secret Service Agent", "Sheriff", "Surveillance Officer", "Security & Loss Prevention officer", "TSA Screener", "U.S. Marshal", "Bailiff", "Court Reporter", "Court Clerk", "Judge / Magistrate", "Law Firm owner/partner", "Law Firm associate or employee", "Law Librarian", "Lawyer / Attorney", "Medical Examiner", "Paralegal", "Corrections Officer", "Correctional Treatment Specialist", "Juvenile Justice Expert", "Juvenile Probation Counselor", "Prison Warden", "Probation Officer", "Substance Abuse Counselor"
                  ]
      };


      let stream7 = {
        stream: "Hospitality & Tourism",
        careers: ["Chef, Cook and Food Preparation Worker", "Lodging and Hotel Managers", "Travel Agent", "Tour guide", "Air hostess or steward"
                  ]
      };

      let stream8 = {
        stream: "Medical Science & Healthcare",
        careers: ["Allied Dental Educator", "Anesthesiologist Assistants", "Anesthesia Technologist/Technician", "Biomedical Equipment Technician", "Biomedical Engineer", "Blood Bank Technology Specialist", "Cardiopulmonary Rehabilitation Specialist", "Cardiovascular Technologist/Technician", "Clinical Laboratory Technologist", "Community Health Worker", "Cytotechnologist", "Diagnostic Medical Sonographer", "Dosimetrist", "Electroneurodiagnostic Technologist", "Emergency Medical Technician (EMT)", "General Aide", "Genetic Counselor", "Health Information Manager", "Healthcare Interpreter", "Homecare Assistant/Aide", "Medical Assistant", "Medical Coder", "Medical Transcriptionist", "Nuclear Medicine Technologist", "Nurses Aide/Nursing Assistant", "Ophthalmic Laboratory Technician", "Optician (Dispensing)", "Orientation & Mobility Specialist", "Orthotist and Prosthetist", "Pathologists' Assistant", "Perfusionist", "Phlebotomist", "Psychiatric Aide", "Radiologist", "Respiratory Therapist", "Surgical Technologist", "Acupuncturist", "Ayurvedic doctor", "Oriental Medicine PractitionerMassage Therapist", "Naturopathic doctor", "Chiropractor", "Allied Dental Educator", "Dental Assistant", "Dental Hygienist", "Dental Laboratory Technician", "Dentist", "Environment Specialist", "Environmental Health Advocate", "Environmental Health Practitioner", "Food Safety Specialist", "Occupational Health and Safety Expert", "Crime Scene Investigator (CSI)", "Forensic Biologist", "Forensic Chemist", "Forensic Odontology", "Forensic Pathologist", "Forensic Toxicologist", "Geriatric Pharmacist", "Geriatric Psychiatrist", "Geriatric Staff Nurse", "Geriatrician", "Health Administrator", "Hospital warden", "Dental Informatics", "Nursing Informatics", "Anesthesiologist", "Biogerontologist", "Clinical Ethicist", "Disaster Medical Specialist", "Emergency Medicine", "Family Medicine", "Gynecologist", "Internist", "Palliative Care Doctor", "Pathologist", "Pediatrician", "Osteopathic Doctor (D.O.)", "Physician (M.D.)", "Physician Assistant", "Physician Scientist", "Surgeon", "Counselor", "Psychiatrist - DO/MD", "Psychiatric Aide", "Psychologist", "Rehabilitation Counselor", "Recreational Therapist", "Social Worker", "Clinical Nurse Specialist", "Nurse Anesthetist", "Nurse Educator", "Nurse Midwife", "Nurse Practitioner", "Nurse Researcher", "Occupational Health Nurse", "Pediatric Nurse", "Public Health Nurse", "Registered Nurse (RN)", "Vocational/Licensed Practical Nurse", "Critical Care Nurse", "Emergency Nurse", "Hospice/Palliative Care Nurse", "Labor & Delivery Nurse", "Neonatal Nurse", "Nephrology Nurse", "Nurse Executive", "Oncology Nurse", "Orthopaedic Nurse", "Perioperative (O.R.) Nurse", "Psychiatric-Mental Health Nurse", "School Nurse", "Staff Nurse", "Dietetic Technician", "Dietitian", "Nutrition expert", "Occupational Therapist", "Occupational Therapy Aide", "Occupational Therapy Assistant", "Ophthalmologist ", "Optometrist", "Optician", "Pharmaceutical Scientist", "Pharmacist", "Pharmacy Technician", "Physical Therapist", "Physical Therapist Assistant", "Podiatrist (Doctor of Podiatric Medicine)", "Behavioral Science/Health Education", "Biomedical & Laboratory Practice", "Biostatistics", "Environmental Health Sciences", "Epidemiology", "Global Health", "Health Policy Specialist", "Health Services Administration", "Medical and Health Services Manager", "Maternal and Child Health", "Public Health Practice & Program Management", "Audiologist", "Speech Therapist", "Speech Language Pathologist", "Hearing Science Specialist", "Athletic Trainer", "Exercise Physiologist", "Kinesiotherapist", "Primary Care Sports Medicine", "Animal Behaviorist", "Veterinarian"
                ]
      };



      let stream9 = {
        stream: "Management",
        careers: ["Accounting Manager", "Account Management, Manager", "Advertising Manager", "Automotive Manager", "Branch Manager / Area Manager", "Brand Manager", "Budget Manager", "Business Development Manager", "Business Manager", "Care Manager", "Centralized Dispatch Manager", "Client Service and Underwriting Manager", "Clinical Management - RN Unit Manager", "Compensation Manager", "Compliance Manager", "Construction Manager", "Customer Service Manager", "Fleet Manager", "Sales Manager", "Division Manager - Resource Management", "Logistics Manager", "Management Trainee", "Manager, Asset Management", "Manager, Decision Management", "Manager, Margin Management", "Manager, Process Management", "Manager, Risk Management", "Manager, Utilization Management", "Manager - Oilfield Services", "Manager - Organizational Change Management", "Manager Marketing - Change Management and Communication", "Manager Strategic Accounts", "Marketing Manager", "Merchandise Manager", "Office Manager", "Operations Management Trainee", "Plant Manager, Power Plant", "Portfolio Manager", "Practice Manager - Healthcare", "Product Manager", "Production Manager", "Program Management, Manager", "Project Manager", "Property Management/Assistant General Manager", "Purchasing Manager", "Quality Assurance Manager", "Restaurant Culinary Managers", "Restaurant Manager", "Route Manager", "Safety Manager", "Sales Manager", "Senior Manager, Product Management", "Senior Manager, Space Management", "Senior Quality Manager", "Senior Manager, Realty Management", "Shift Manager", "Store Manager", "Strategic Sourcing Manager", "Student Loan Collection Manager", "Territory Manager", "Training and Development Manager", "Transportation Manager", "Warehouse and Inventory Control Manager", "Vice-President", "President", "Executive Vice-President", "Deputy CEO", "CEO", "Board member"
                ]
      };

      let stream10 = {
        stream: "Professional Courses",
        careers: ["Architect", "Archivist, Curator, and Museum Technician", "Barber, Cosmetologist and Hair Stylist", "Biologist (Biological Scientist)", "Cashier", "Chemist", "Chiropractor", "Clergy", "Commercial Industrial Designer", "Counselor", "Dentist", "Economist", "Environmental Scientist", "Hydrologist", "Fashion Designer", "Flight Attendant", "Floral Designer", "Fundraiser", "Ghostwriter", "Graphic Designer", "Government Manager", "Insurance Agent", "Interior Designer", "Landscape Architect", "Librarian", "Massage Therapist", "Medical Assistant", "Medical Transcriptionist", "Photographer", "Property, Real Estate, and Community Association Manager", "Psychologist", "Psychology (All Careers)", "Real Estate Agent", "Social Worker", "Writer / Editor", "Veterinarian", "Zoologist"
                ]
      };

      let stream11 = {
        stream: "Transportation, Logistics",
        careers: ["Captain or Master of vessel", "Mate or Deck officer", "Pilot", "Sailor or Deckhand", "Chief engineer", "Ship engineer", "Marine oiler", "Motorboat operator", "Motorboat Mechanic and Service Technician", "Aerospace Engineering and Operations Technician", "Air Traffic Controller", "Aircraft Cargo Handling Supervisor", "Aircraft Mechanics and Service Technician", "Airfield Operations Specialist", "Airline Pilot, Copilot, and Flight Engineer", "Ambulance Driver and Attendant, Except Emergency Medical Technician", "Automotive Body and Related Repairer", "Automotive Glass Installer and Repairer", "Automotive Master Mechanic", "Automotive Service Technician and Mechanic", "Automotive Specialty Technician", "Aviation Inspector", "Avionics Technician", "Billing and Posting Clerk", "Bridge and Lock Tender", "Bus and Truck Mechanic and Diesel Engine Specialist", "Bus Drivers, School or Special Client", "Bus Drivers, Transit and Intercity", "Cargo and Freight Agent", "Commercial Pilot", "Customs Broker", "Dispatchers, Except Police, Fire, and Ambulance", "Electrical and Electronics Installers and Repairers, Transportation Equipment", "Electronic Equipment Installer and Repairer, Motor Vehicles", "First-Line Supervisors of Helper, Laborer, and Material Mover, Hand", "First-Line Supervisor of Transportation and Material-Moving Machine and Vehicle Operator", "Freight and Cargo Inspector", "Freight Forwarder", "Heavy and Tractor-Trailer Truck Driver", "Industrial Safety and Health Engineer", "Industrial Truck and Tractor Operator", "Laborers and Freight, Stock, and Material Mover, Hand", "Light Truck or Delivery Services Driver", "Locomotive Engineer", "Locomotive Firer", "Logistician", "Logistics Analyst", "Mates- Ship, Boat, and Barge", "Mobile Heavy Equipment Mechanic, Except Engines", "Motorcycle Mechanic", "Packers and Packagers, Hand", "Rail Car Repairer", "Rail Yard Engineer, Dinkey Operator, and Hostler", "Rail-Track Laying and Maintenance Equipment Operators", "Railroad Brake, Signal, and Switch Operator", "Railroad Conductor and Yardmaster", "Recreational Vehicle Service Technician", "Shipping, Receiving, and Traffic Clerk", "Signal and Track Switch Repairer", "Storage and Distribution Manager", "Subway and Streetcar Operator", "Supply Chain Manager", "Tank Car, Truck, and Ship Loader", "Taxi Driver and Chauffeur", "Tire Repairer and Changer", "Traffic Technician", "Transportation Manager", "Transportation Planner", "Transportation Vehicle, Equipment and Systems Inspector, Except Aviation"
            ]
      };

      // let stream12 = {
      //   stream: ,
      //   careers: []
      // };


      streamCareerDatabase = [stream1, stream2, stream3, stream4, stream5, stream6, stream7, stream8, stream9, stream10, stream11];
    }
  
  
     
    function populateInstitutionsRankingData() {
        let institutionGroup1 = {
          rankingType: "World Ranking",
          rankingYear: 2019,
          source: "T.H.E.",
          institutionList: ["World Ranking 2019", "Harvard University", "Stanford University", "University of Cambridge", "Massachusetts Institute of Technology (MIT)", "University of California, Berkeley", "Princeton University", "University of Oxford", "Columbia University", "California Institute of Technology", "University of Chicago", "University of California, Los Angeles", "Yale University", "Cornell University", "University of Washington", "University College London", "Johns Hopkins University", "University of Pennsylvania", "University of California, San Diego", "Swiss Federal Institute of Technology Zurich", "University of California, San Francisco", "University of Michigan-Ann Arbor", "Washington University in St. Louis", "Imperial College London", "University of Toronto", "The University of Tokyo", 
                              "University of Copenhagen", "University of Wisconsin - Madison", "Duke University", "Northwestern University", "New York University", "The University of Edinburgh", "Kyoto University", "The University of Manchester", "University of North Carolina at Chapel Hill", "Rockefeller University", "University of British Columbia", "University of Paris-Sud (Paris 11)", "Karolinska Institute", "University of Colorado at Boulder", "University of Illinois at Urbana-Champaign", "The University of Melbourne", "University of Minnesota", "Tsinghua University", "Sorbonne University", "The University of Texas at Austin", "University of Maryland, College Park", "Heidelberg University", "University of California, Santa Barbara", 
                              "The University of Texas Southwestern Medical Center at Dallas", "Utrecht University", "King's College London", "University of Munich", "Peking University", "The University of Queensland", "University of Southern California", "Vanderbilt University", "Technical University Munich", "University of Geneva", "University of Oslo", "Aarhus University", "University of Zurich", "Uppsala University", "University of Helsinki", "University of Bristol", "University of Groningen", "Ghent University", "National University of Singapore", "Erasmus University Rotterdam", "The University of Texas M. D. Anderson Cancer Center", "University of Bonn", "Zhejiang University", "Purdue University - West Lafayette", "Monash University", 
                              "Nanyang Technological University", "Stockholm University", "Boston University", "The Australian National University", "Swiss Federal Institute of Technology Lausanne", "Ecole Normale Superieure - Paris", "University of California, Irvine", "University of Sydney", "Leiden University", "Shanghai Jiao Tong University", "Brown University", "KU Leuven", "Technion-Israel Institute of Technology", "Moscow State Universit", "University of Basel", "University of Pittsburgh", "McGill University", "McMaster University", "Nagoya University", "University of California, Davis", "The University of New South Wales", "Carnegie Mellon University", "Rice University", "University of Florida", "Pennsylvania State University - University Park", 
                              "The University of Western Australia", "The Ohio State University - Columbus", 
                          ]
        };
  
        institutionRankingDatabase = [institutionGroup1];
    }


    function populateCourseData() {
      
    }
  