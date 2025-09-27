export interface Group {
  name: string;
  members: string;
  category: string;
  link?: string;
  description?: string;
}

export interface GroupsData {
  [key: string]: Group[];
}

export interface Category {
  key: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
}

export interface EmailForm {
  name: string;
  email: string;
}

export interface ContactForm {
  contact_type: 'broken_link' | 'suggestion';
  group_name: string;
  whatsapp_link: string;
  email: string;
  message: string;
}

export interface FormSubmission {
  type: 'email' | 'contact';
  data: EmailForm | ContactForm;
  timestamp: Date;
}
