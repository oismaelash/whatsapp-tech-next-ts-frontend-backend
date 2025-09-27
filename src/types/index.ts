export interface Group {
  name: string;
  members: string;
  category: string;
  whatsapp_link: string;
  description?: string;
}

export interface Category {
  key: string;
  label: string;
  icon: string;
  groups: Group[];
}

export interface GroupsData {
  categories: Category[];
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
