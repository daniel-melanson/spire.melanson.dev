export interface PaginatedResult<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<T>;
}

export type Endpoints = {
  buildings: Building;
  terms: Term;
  "term-events": TermEvent;
  "academic-groups": AcademicGroup;
  subjects: Subject;
  courses: Course;
  "course-offerings": CourseOffering;
  instructors: Instructor;
  sections: Section;
  coverage: Coverage[];
};

interface HyperlinkedObject<T extends string | number = string> {
  id: T;
  url: string;
}

type HyperlinkedField<T, V extends keyof T> = HyperlinkedObject & Pick<T, V>;

export interface Building extends HyperlinkedObject<number> {
  name: string;
  address: string;
  rooms: RoomField[];
}

export type BuildingField = HyperlinkedField<Building, "name" | "address">;

export interface Room extends HyperlinkedObject<number> {
  number: string;
  alt: string;
  building: BuildingField;
}

export type RoomField = HyperlinkedField<Room, "number" | "url">;

interface TermEvent {
  date: string;
  description: string;
}

export interface Term extends HyperlinkedObject {
  season: string;
  year: number;
  ordinal: number;
  start_date: string;
  end_date: string;
  events: TermEvent[];
}

export type TermField = HyperlinkedField<Term, "season" | "year" | "ordinal">;

export interface AcademicGroup extends HyperlinkedObject {
  title: string;
  subjects: SubjectField[];
}

export type SubjectField = HyperlinkedField<Subject, "title">;

export interface Subject extends HyperlinkedObject {
  title: string;
  groups: AcademicGroupField[];
  courses: CourseField[];
}

export type AcademicGroupField = HyperlinkedField<AcademicGroup, "title">;

export type UnitsField = {
  base: number | null;
  min: number | null;
  max: number | null;
};

export interface SectionEnrollmentInformation {
  overview: string;
}

export interface Course extends HyperlinkedObject {
  subject: SubjectField;
  number: string;
  title: string;
  description: string;
  details: {
    units: UnitsField;
    career: string;
    grading_basis: string | null;
    course_components: string[];
    academic_group: string[];
    academic_organization: string[];
    campus: string | null;
  };
  enrollment_information: SectionMeetingInformation;
  offerings: OfferingField[];
}

export type CourseField = HyperlinkedField<Course, "title">;

export interface CourseOffering extends HyperlinkedObject<number> {
  subject: SubjectField;
  course: Course;
  alternative_title: string | null;
  term: TermField;
  sections: SectionField;
}

export type OfferingField = HyperlinkedField<CourseOffering, "term">;

export interface Instructor extends HyperlinkedObject {
  name: string;
}

export type InstructorField = HyperlinkedField<Instructor, "name">;

export interface SectionDetails {
  units: UnitsField;
  status: string;
  class_number: number;
}

export interface SectionAvailability {
  capacity: string;
}

export interface SectionRestrictions {
  drop_consent: string | null;
  enrollment_requirements: string | null;
  add_consent: string | null;
}

export interface SectionMeetingInformationSchedule {
  start: string;
  end: string;
  days: string[];
}

export interface SectionMeetingInformation {
  schedule: SectionMeetingInformationSchedule | null;
  instructors: InstructorField[];
  room: RoomField;
  room_raw: string;
}

export interface Section extends HyperlinkedObject<number> {
  spire_id: string;
  offering: OfferingField;
  description: string | null;
  overview: string | null;
  details: SectionDetails;
  availability: SectionAvailability;
  restrictions: SectionRestrictions;
  meeting_information: SectionMeetingInformation;
  _updated_at: string;
}

export type SectionField = HyperlinkedField<Section, "spire_id">;

export interface Coverage {
  completed: string;
  term: string;
  start_time: string;
  end_time: string;
}
