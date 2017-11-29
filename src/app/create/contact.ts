export class Contact {
  id: number;
  title: string;
  name: string;
  phone: number;
  email: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

