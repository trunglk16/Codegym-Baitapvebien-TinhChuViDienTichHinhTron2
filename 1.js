var r,c,s;
const pi = 3.14159;
r = prompt("Nhap ban kinh hinh tron");

if (r <= 0){
    document.write("Hinh tron khong ton tai")
}
else {

    c = 2 * pi * r;
    s = pi * r * r;

    document.write("Dien tich hinh tron = " + s);
}
