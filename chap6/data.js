function Student(name, password, middle, final) {
    this.name = name;
    this.password = password;
    this.middle = middle;
    this.final = final;
    this.total = middle + final;
    this.avg = (middle+final)/2;
}
var stu = [];
stu[0] = new Student('홍정아', 12345, 88, 77);
stu[1] = new Student('조민규', 54321, 82, 86);
stu[2] = new Student('이은준', 1357, 64, 78);
stu[3] = new Student('신은수', 24680, 94, 86);
stu[4] = new Student('송나현', 112233, 65, 75);