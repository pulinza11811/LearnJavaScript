let user =
{
    name :"Owen",
    age  : 21,
    email:"pulindev@gmail.com",
    color:"black",
    size :"s",
    phone : "0625470909",
    Getusers:function()
    {
        return this.name+" "+this.email+" "+this.phone
    }
}
console.log(user.Getusers());