// All of Rheanna's resume content lives here.
// Edit this file to update the site; no component changes needed.

export type Job = {
  title: string;
  org: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
};

export type School = {
  credential: string;
  school: string;
  location: string;
  date: string;
};

export type Cert = {
  name: string;
  issuer: string;
};

export const profile = {
  name: "Rheanna Medina",
  title: "Certified Phlebotomy Technician",
  location: "South San Francisco, CA",
  email: "rhemedina@gmail.com",
  nextUp: "Starting nursing school in January 2027",
  summary:
    "Certified Phlebotomy Technician with clinical and research experience in blood collection, patient care, and specimen processing. Experienced in venipuncture, capillary draws, and laboratory documentation with proven ability to maintain compliance with CLIA, OSHA, and HIPAA standards. Strong communicator who thrives in both hospital and research environments, ensuring accurate, efficient, and compassionate service.",
};

export const jobs: Job[] = [
  {
    title: "Phlebotomist I",
    org: "AC Wellness Network",
    location: "Santa Clara Valley, CA",
    start: "Feb 2026",
    end: "Present",
    bullets: [
      "Perform blood draws and phlebotomy services for Apple employees and dependents at a concierge-style corporate wellness center, prioritizing patient comfort and minimal discomfort.",
      "Accurately identify color-top tube requirements, blood volumes, and test-specific protocols to ensure specimen integrity and proper chain of custody.",
      "Prioritize STAT, scheduled, and outpatient orders to maintain efficient patient flow and turnaround times.",
      "Accession, receive, and process specimens in compliance with CLIA, OSHA, and HIPAA standards, ensuring quality control at every step.",
      "Proficiently navigate Apple technology (iMac, iPad, iPhone) and EHR systems (Athena, Quanum) for documentation, report distribution, and workflow management.",
    ],
  },
  {
    title: "Business & Research Administrator",
    org: "San Francisco Research Institute",
    location: "San Francisco, CA",
    start: "Aug 2025",
    end: "Jan 2026",
    bullets: [
      "Performed venipuncture and processed specimens for clinical trials and research studies, maintaining accuracy and chain of custody.",
      "Coordinated daily patient scheduling, enrollment, and informed consent procedures.",
      "Managed study documentation, specimen tracking, and regulatory submissions to ensure compliance.",
      "Collaborated with lab technicians, clinical providers, and vendors to optimize workflow and turnaround times.",
      "Trained new staff on sample collection, safety standards, and proper documentation.",
      "Led weekly meetings to review patient volume, lab needs, and process improvements.",
    ],
  },
  {
    title: "Phlebotomy Technician Extern",
    org: "CalRegional",
    location: "San Mateo, CA",
    start: "Jun 2025",
    end: "Jul 2025",
    bullets: [
      "Performed venipuncture and capillary collections for 20+ patients daily in outpatient and training settings.",
      "Verified patient identity, matched test orders, and labeled samples for accurate processing.",
      "Processed specimens for transport, ensuring quality control and compliance with CLIA/OSHA standards.",
      "Conducted patient assessments and vital checks prior to procedures, maintaining comfort and safety.",
      "Documented all collections in EHR systems while adhering to HIPAA confidentiality policies.",
    ],
  },
  {
    title: "Administrative Assistant",
    org: "Snac System",
    location: "San Carlos, CA",
    start: "Oct 2022",
    end: "Apr 2025",
    bullets: [
      "Utilized HubSpot, Microsoft Office, and additional CRM systems to maintain records, track communications, and support daily administrative operations.",
      "Supported office operations, record management, and scheduling for multiple departments.",
    ],
  },
];

export const education: School[] = [
  {
    credential: "Phlebotomy Technician Program",
    school: "CalRegional",
    location: "San Mateo, CA",
    date: "Completed Jul 2025",
  },
  {
    credential: "Bachelor of Science, Business Administration",
    school: "Notre Dame de Namur University",
    location: "Belmont, CA",
    date: "Graduated Aug 2020",
  },
];

export const certifications: Cert[] = [
  {
    name: "Certified Phlebotomy Technician (CPT)",
    issuer: "American Medical Certification Association",
  },
  { name: "CPR Certified", issuer: "American Heart Association" },
  {
    name: "Licensed Phlebotomist in California",
    issuer: "California Department of Public Health",
  },
];

export const skills = {
  clinical: [
    "Venipuncture & Capillary Collection",
    "Specimen Labeling & Processing",
    "Sample Transport & Storage",
  ],
  systems: ["Athena", "Quanum/Quest", "HubSpot & CRM"],
  admin: [
    "Data Entry & Database Management",
    "Resume Screening & Applicant Tracking",
    "Call Queue Management",
  ],
  people: ["Patient Care", "Communication", "Team Collaboration", "Time Management"],
};
