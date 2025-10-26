let tea_Shop_Name = "Annanaku Oru Tea Sollu"
console.log(tea_Shop_Name);

let tea_shop_address = "Anna Nagar East";
console.log(tea_shop_address);

let tea_shop_number = 9865541232
console.log(tea_shop_number);

let menu_category = { category1:"Tea" , category2:"Coffee" , category3:"Snacks" , category4:"Juice"}
console.log(menu_category.category1);
let tea_variety = ["Plain Tea" , "Ginger Tea" , "Sangupoo Tea" , "Hibiscus Tea" , "Choclate Tea"]
console.log(tea_variety);
let tea_price_list = {plain_Tea:12 , Ginger_Tea:18 , Sangupoo_Tea:25 , Hibisus_Tea:25 , Chocalate_Tea:30}
console.log(tea_price_list);

let menu_category_1 = { category1:"Tea" , category2:"Coffee" , category3:"Snacks" , category4:"Juice"}
console.log(menu_category_1.category2);
let coffe_variety = ["Plain Coffee" , "Expresso" , "Latte Chilled" , "Roasted-Brew" , "Raw-Sweetned"]
console.log(coffe_variety);
let coffe_price_list={Plain_Coffee:20 , Expresso:50 , Latte_Chilled:90 , Roasted_Brew:130 , Raw_Sweetned:150}
console.log(coffe_price_list);


let menu_category_2 = { category1:"Tea" , category2:"Coffee" , category3:"Snacks" , category4:"Juice"}
console.log(menu_category_2.category3);
let snacks_varietry_list ={Puffs:["Egg-Puffs , Mushroom-Puffs , Chicken-Puffs"],
    Sandwhich:["Veg-Sandwhich" , "Chicken-Sandwhich", "Egg-Sandwhich"],
    Burger:["Veg-Burger" , "Chicken-Burger" , "Beef-Burger" , "Tanddori-Burger"]};
    console.log(snacks_varietry_list.Puffs[0]);
let snacks_price_list={puffs_price:{Egg_puff:20 , Mushroom_puff:15 , chicken_puff:30},
sandwhich_price_list:{veg_sandwhich:50 , Chicken_Sandwhich:90 , Egg_Sandwhich:70},
Burger_price_list:{veg_burger:60 , chicken_burger:90 , beef_burger:70 , Tandoori_burger:100}}
console.log(snacks_price_list.puffs_price);

let menu_category_4 = { category1:"Tea" , category2:"Coffee" , category3:"Snacks" , category4:"Juice"}
console.log(menu_category_4.category4);
let juice_variety = ["Musk-Melon" , "Pomegranate" , "water-Melon" , "ABC-Juice"]
console.log(juice_variety);
let juice_price_list = {Muskmelon:40 , Pomegranate:50 , Water_Melon:30 , ABC_Juice:70}
console.log(juice_price_list);

const customer = (ordercoffee)=>{
    console.log(ordercoffee);
}
customer("Customer : Can I have Coffee")

const waiter = (reply)=>{
    console.log(reply);
}
waiter("Waiter : At the moment we cannot make coffee , Anything we can provide you sir")

const customer_reply = (juice)=>{
    console.log(juice);
}
customer_reply("Customer : I may have water-Melon Juice could you serve this for me...")

const waiter_1 = "Yes , I will check with kitchen"
console.log(waiter_1);

const kitchen = (juice)=>{
    if(juice=="Water_Melon"){
        console.log("Waiter:Yes sir its avaliable we will give you in 5 mins");
    }
    else{
        console.log("Waiter:You can go for other options");
        
    }
}
kitchen("Water_Melon");
 

const juice_ready = (prepared) =>{
    console.log(prepared);
}
juice_ready("Waiter:Kindly have it sir its your juice water_melon");

const amount = (amount)=>{
    console.log(amount);
}
amount("waiter: Its 30RS sir")

const customer_payment_mode = (payment)=>{
    console.log(payment);
}
customer_payment_mode("Customer:I will pay you through Gpay")

const shop_kepper = "Yes sir you can pay through any UPI"
console.log(shop_kepper);

const customer_paid = ()=>{
    console.log("I paid kindly check it");
}
customer_paid()

let shop_kepper_1 = ()=>{
    console.log("Thakyou sir, payment received Visit again!!!");
}
shop_kepper_1();




    





 



