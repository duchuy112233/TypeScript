{
  const teachers: string[] = [
    "Tú",
    "Thắng",
    "Đạt",
    "Hoàng",
    "Huy",
    "Hoà",
    "Ngọc",
  ];
}

//! Cannot redeclare block-scoped variable 'teachers'.

//! Clearn code

var myString: string = "Hom nay troi dep qua!";
console.log(myString.toLowerCase());
console.log(myString.toLocaleUpperCase());

type user = {
  name: string;
  age: number;
  jobs: string[];
  company: string;
  isMarried: boolean;
  gender: string;
  hobbies: string[];
  address: string;
};

{
  const myInfor: user = {
    name: "Hoang Nguyen",
    age: 32,
    address: "Bắc Giang",
    jobs: ["developer", "teacher", "grab dirver"],
    company: "FPT Software",
    isMarried: true,
    gender: "lgbt+",
    hobbies: ["aoe", "lol", "pubg", "tiktok", "apple meowmeow", "tinder"],
  };
}
