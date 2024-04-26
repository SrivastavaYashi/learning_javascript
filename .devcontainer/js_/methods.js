const indigo={
    airline:"indigo",
    code:"IH",
    bookings:[],

    //function
    book(flightnum,name)
    {
       console.log(`${name} has booked ${this.airline} flightcode=${this.code} has flightnumber= ${flightnum}`);
       this.bookings.push({flight:`${flightnum} ${this.code}`,name})
    }
    };
   
indigo.book(54,"alisha");
indigo.book(55,"hi");

const spicejet={
    airline:"spicejet",
    code:"sj",
    bookings:[],
}
const book=indigo.book;

book.call(spicejet,21,"koshak");
book.call(spicejet,13,"ram");
console.log(spicejet);

const mumbai={
    airline:"bombay",
    code:"bk13",
    bookings:[],
}
book.call(mumbai,87,"mark");
const [flightnum,nae]=[58,"abc"];
book.apply(indigo,[flightnum,nae]);
console.log(indigo);
book.call(spicejet,...[flightnum,nae]);
console.log(mumbai);
//by creating array using apply method
const flightdata=[45,"nisha"];
book.apply(spicejet,flightdata);
console.log(spicejet);

//bind function 
const bookin=book.bind(indigo);
const booksj=book.bind(spicejet);
const bookmu=book.bind(mumbai);

bookin(123,'osheen');

const bookin123=book.bind(indigo,123);
bookin123('henry');

console.log(indigo);

mumbai.planes=200;
mumbai.buyPlanes=function()
{
    console.log(this);

    this.planes++;

    console.log(this.planes);
};

mumbai.buyPlanes();
//const ind =mumbai.buyPlanes.bind(indigo);
//ind();

const addTax = (rate,value)=>  value+value*rate;
console.log(addTax(100,23));

const taxcalc=addTax.bind(null,10);
console.log(taxcalc(100));

//converting the function calling another function by arrow function
const tax=(rate)=>(value)=> value+value*rate;

const vg=tax(25);
console.log(vg(10));