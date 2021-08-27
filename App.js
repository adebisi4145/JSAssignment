let Student ={
    FirstName: "Ezekiel",
    LastName: "Adeshola",
    MiddleName: "Mercy",
    Age: 99,
    MatriculationNumber: "2017/3267",
    Email:"Ezekiel@gmail.com",
    studentAge:function studentAge()
    {
       return `${this.Age}`; 
    },
    studentFullname:function studentFullname()
    {
        return `${this.FirstName} ${this.LastName} ${this.MiddleName}`
    }
};
console.log(Student.studentAge());
console.log(Student.studentFullname());