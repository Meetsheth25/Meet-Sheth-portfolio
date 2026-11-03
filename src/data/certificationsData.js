// Centralized Certifications Data
// Sourced directly from verified certificate credentials stored in Google Drive:
// https://drive.google.com/drive/folders/1XUq_ivJK_R1VODfOkhdHOtWISlhGNE7P?usp=drive_link

import certCsharpDsa from '../assets/certificates/cert-csharp-dsa.webp';
import certCppAdvanced from '../assets/certificates/cert-cpp-advanced.webp';
import certNetworkSecurity from '../assets/certificates/cert-network-security.webp';
import certDatabaseSql from '../assets/certificates/cert-database-sql.webp';
import certEffectiveUx from '../assets/certificates/cert-effective-ux.webp';
import certProjectManagement from '../assets/certificates/cert-project-management.webp';
import certIot from '../assets/certificates/cert-iot.webp';
import certPythonDatascience from '../assets/certificates/cert-python-datascience.webp';

export const certificatesFolderUrl =
  'https://drive.google.com/drive/folders/1XUq_ivJK_R1VODfOkhdHOtWISlhGNE7P?usp=drive_link';

export const certificationCategories = [
  'All',
  'Software & Programming',
  'Data & AI',
  'Systems & Security',
  'Design & Management',
];

export const certifications = [
  {
    id: 'python-datascience-ai',
    title: 'Python for Data Science, AI & Development',
    issuer: 'IBM',
    platform: 'Coursera',
    credentialId: 'KC7QR6GGN7B3',
    completionDate: 'September 22, 2023',
    issueDate: 'September 22, 2023',
    category: 'Data & AI',
    tags: ['Python', 'Data Science', 'AI & Machine Learning'],
    fileId: '1MwFv-txT-zto0qJtIxl5NbaFrrP_yXWb',
    driveUrl: 'https://drive.google.com/file/d/1MwFv-txT-zto0qJtIxl5NbaFrrP_yXWb/view',
    verificationUrl: 'https://coursera.org/verify/KC7QR6GGN7B3',
    thumbnail: certPythonDatascience,
    featured: true,
  },
  {
    id: 'csharp-dsa',
    title: 'C# Data Structures and Algorithms',
    issuer: 'Infosys Springboard',
    platform: 'Infosys Limited',
    completionDate: 'April 28, 2024',
    issueDate: 'April 29, 2024',
    category: 'Software & Programming',
    tags: ['C#', 'Data Structures', 'Algorithms'],
    fileId: '1fKcyJkJXZCIYPRHo0DiPOGEwtxtcMZ0T',
    driveUrl: 'https://drive.google.com/file/d/1fKcyJkJXZCIYPRHo0DiPOGEwtxtcMZ0T/view',
    verificationUrl: 'https://verify.onwingspan.com',
    thumbnail: certCsharpDsa,
    featured: true,
  },
  {
    id: 'cpp-advanced',
    title: 'C++ Programming - Advanced',
    issuer: 'Infosys Springboard',
    platform: 'Infosys Limited',
    completionDate: 'April 25, 2024',
    issueDate: 'April 26, 2024',
    category: 'Software & Programming',
    tags: ['C++', 'OOP', 'Advanced Programming'],
    fileId: '1fdWBXa3D8ViGel9YNrY0wphtRWNh16-S',
    driveUrl: 'https://drive.google.com/file/d/1fdWBXa3D8ViGel9YNrY0wphtRWNh16-S/view',
    verificationUrl: 'https://verify.onwingspan.com',
    thumbnail: certCppAdvanced,
    featured: false,
  },
  {
    id: 'database-sql',
    title: 'Database and SQL',
    issuer: 'Infosys Springboard',
    platform: 'Infosys Limited',
    completionDate: 'September 9, 2023',
    issueDate: 'September 9, 2023',
    category: 'Data & AI',
    tags: ['Database Design', 'SQL', 'Relational Schemas'],
    fileId: '1WRCF0ifyJeTwE3KX6RtD5HeA9qT6J4NX',
    driveUrl: 'https://drive.google.com/file/d/1WRCF0ifyJeTwE3KX6RtD5HeA9qT6J4NX/view',
    verificationUrl: 'https://verify.onwingspan.com',
    thumbnail: certDatabaseSql,
    featured: false,
  },
  {
    id: 'network-security',
    title: 'Computer Network & Internet Security',
    issuer: 'Infosys Springboard',
    platform: 'Infosys Limited',
    completionDate: 'April 25, 2024',
    issueDate: 'April 26, 2024',
    category: 'Systems & Security',
    tags: ['Computer Networks', 'Network Security', 'Internet Protocols'],
    fileId: '1LGsVOelUkaXFlMJ_Awfruvnc2YCGmoDv',
    driveUrl: 'https://drive.google.com/file/d/1LGsVOelUkaXFlMJ_Awfruvnc2YCGmoDv/view',
    verificationUrl: 'https://verify.onwingspan.com',
    thumbnail: certNetworkSecurity,
    featured: false,
  },
  {
    id: 'effective-ux-design',
    title: 'Effective UX Design',
    issuer: 'Infosys Springboard',
    platform: 'Infosys Limited',
    completionDate: 'May 31, 2024',
    issueDate: 'June 1, 2024',
    category: 'Design & Management',
    tags: ['UX Design', 'User Research', 'Design Thinking'],
    fileId: '170_NX1pLS9n2tx1yguerETtMTHiEbYJt',
    driveUrl: 'https://drive.google.com/file/d/170_NX1pLS9n2tx1yguerETtMTHiEbYJt/view',
    verificationUrl: 'https://verify.onwingspan.com',
    thumbnail: certEffectiveUx,
    featured: false,
  },
  {
    id: 'expert-project-management',
    title: 'Expert Project Management (PMP)',
    issuer: 'Infosys Springboard',
    platform: 'Infosys Limited',
    completionDate: 'September 21, 2023',
    issueDate: 'September 23, 2023',
    category: 'Design & Management',
    tags: ['Project Management', 'PMP Methodologies', 'Agile Delivery'],
    fileId: '1tmlBjggVOJvbZF_Xgnjb6aVYMCyNM3up',
    driveUrl: 'https://drive.google.com/file/d/1tmlBjggVOJvbZF_Xgnjb6aVYMCyNM3up/view',
    verificationUrl: 'https://verify.onwingspan.com',
    thumbnail: certProjectManagement,
    featured: false,
  },
  {
    id: 'internet-of-things',
    title: 'Internet of Things',
    issuer: 'Infosys Springboard',
    platform: 'Infosys Limited',
    completionDate: 'May 4, 2024',
    issueDate: 'May 9, 2024',
    category: 'Systems & Security',
    tags: ['IoT Architecture', 'Sensors & Devices', 'Embedded Systems'],
    fileId: '1w2itT3qyg1qPZBQC5C7UlI8kMsc1-msw',
    driveUrl: 'https://drive.google.com/file/d/1w2itT3qyg1qPZBQC5C7UlI8kMsc1-msw/view',
    verificationUrl: 'https://verify.onwingspan.com',
    thumbnail: certIot,
    featured: false,
  },
];

