const oneword=function(str)
{
    return str.replace(/ /g, '').toLowerCase();
};
const upperwordstring=function(str)
{
    const[first,...others]=str.split(' ');
    return [first.toUpperCase(),...others].join(' ');
};
const transformer=function(str,fn)
{
    console.log(`original string is ${str}`);
    console.log(`transformed string is ${fn(str)}`);
    console.log(`transformed string by ${fn.name}`);  
};

transformer("currently learning javascript by jonas !",oneword);
transformer("currently learning javascript by jonas !",upperwordstring);

const high5=function()
{
    console.log("🙌");
}
document.body.addEventListener(click,high5);