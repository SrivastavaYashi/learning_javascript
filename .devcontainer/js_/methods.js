const indigo={
    airline:"indigo",
    code:"IH",
    bookings:[],

    //function
    book(flightnum,name)
    {
       console.log(`${name} has booked ${this.airline} ${this.code} has ${flightnum}`);
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



