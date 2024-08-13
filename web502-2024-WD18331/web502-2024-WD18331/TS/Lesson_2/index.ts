// ! Sử dụng ":" để khai báo cores type: string, number, boolean, array, object

// ! Sử dụng "type" để khai báo custom type

const myMessage: string = "Xin chao ca lop! Rat vui duoc day cac em!";

const myAge: number = 30;

const isMarried: boolean = false;

const mySkills: string[] = ["HTML", "CSS", "JS", "React", "NodeJS", "MongoDB"]; // Array of string

const myJobs: Array<string> = ["developer", "teacher", "grab dirver"]; // Generic array type

type educationType = {
  school: string;
  major: string;
  graduatedYear: number;
  GPA: number;
  sumary: string;
}; // Custom type

const myEducation: educationType = {
  school: "FPOLY",
  major: "Information Technology",
  graduatedYear: 2024,
  GPA: 3.5,
  sumary: "Good student",
};

const huongEducation: educationType = {
  school: "FPOLY",
  major: "Information Technology",
  graduatedYear: 2023,
  GPA: 4.0,
  sumary: "Excellent student",
};
