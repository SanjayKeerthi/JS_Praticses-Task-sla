const Laptop_Selection={
    Brand:{name:"lenovo",condition:"Refurbished",Technician:"Muthu",amount:12000},
    Model:"i3 intel processor",
    Covered:"silver",
    specification:"Amd ryzen",
    Expected_price:50000
}
console.log(Laptop_Selection.Brand.name,Laptop_Selection.Brand.Technician);

const Grinder_selection={
    Brand:"Ultra",
    Model:{year:2025,Batchid:"IRE2025",Year_of_manufacturing:"May2024"},
    Covered:"grey",
    specification:"easy to grind",
    Expected_price:15000
}
console.log(Grinder_selection.Model.Batchid);

const car_Selection = {
    Brand:"KIA",
    Model:{name:"Sonet",Year_of_manufacturing:"May2024",Manufacture_place:"Mumbai",assembledIn:"TamilNadu"},
    KM_Covered:24000,
    specification:"1.5L Turbo Charged Engine",
    Expected_price:1200000
}
console.log(car_Selection.Model.assembledIn);


const Tablet={
    Brand:"Samsung",
    Model:{name:2025,condition:"Refurbished",Technician:"Mahindran",amount:15000,problem:"screen resolution"},
    Covered:"Black",
    specification:"Android processor",
    Expected_price:55000
}
console.log(Tablet.Model.problem);

const Mixer={
    Brand:"Prestige",
    Model:{name:"Zodiac",Year_of_manufacturing:2024,dealer:"Prestige Enterprise",sales_count:"4000 per day"},
    Covered:"Black",
    specification:"Blend fast",
    Expected_price:5000
}
console.log(Mixer.Model.dealer);


const Television={
    Brand:"LG",
    Model:"Iplus",
Covered:{frame:"Border Less",variant:"cheetah",discount_product:"no",insurance_coverage_if_any:"Not for physical damage"},
    specification:"4k LED Screen",
    Expected_price:750000
}
console.log(Television.Covered.insurance_coverage_if_any);


let students = [
  {
    name: "Anitha",
    subject: { main: "Maths", teacher: "Raj Sir" },
    marks: 95
  },
  {
    name: "Kavin",
    subject: { main: "Science", teacher: "Meena Ma'am" },
    marks: 89
  }
];

console.log(students[0].subject.teacher); 


let cars = [
  {
    brand: "Toyota",
    model: { name: "Innova", year: 2022 },
    price: 2000000
  },
  {
    brand: "Hyundai",
    model: { name: "Creta", year: 2024 },
    price: 1800000
  }
];

console.log(cars[1].model.name); 


let courses = [
  {
    title: "JavaScript",
    instructor: { name: "Suresh", experience: 5 },
    duration: "3 Months"
  },
  {
    title: "Python",
    instructor: { name: "Priya", experience: 7 },
    duration: "4 Months"
  }
];

console.log(courses[0].instructor.name); 


let employees = [
  {
    name: "Ravi",
    department: { name: "HR", floor: 2 },
    salary: 40000
  },
  {
    name: "Deepa",
    department: { name: "IT", floor: 3 },
    salary: 60000
  }
];

console.log(employees[1].department.name); 


let products = [
    {
        item:"laptop",
        model:{
            name:"Dell",
            warranty:"2yrs"
        },
        price:55000
    },
        {
            item:"Phone",
            model:{
                name:"Iphone",
                warranty:"2yrs"
            },
            price:25000

        }
    
];
console.log(products[1].model.name);

let books=[
    {
        book_name:"Wings of wings",
        author:{
            name:"Robert Hawking",
            year:2025
        },
        price:1500
    },
    {
        book_name:"Tofu & Tofu",
        author:{
            name:"Stephen",
            year:2024
        },
        price:2000
    }
];
console.log(books[0].author.name);



