export interface StudentDashboardVM {
  id: string;
  profile: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  email: string;
  phone: number;
  address: {
    street: string;
    city: string;
    state: string;
    zip: number;
    country: string;
  };
  courses: [
    {
      course_id: string;
      course_name: string;
      grade: string;
    },
    {
      course_id: string;
      course_name: string;
      grade: string;
    }
  ];
}
