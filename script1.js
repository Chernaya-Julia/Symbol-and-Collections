const Singleton = (() => {
    const uniqueKey = Symbol('instance');
    let instance;
    function Singleton(key) {
      if(key !== uniqueKey) throw new Error('You should you instance static method instead');
    }
   
   Singleton.getInstance = () => {
     return this.instanceof;
   }
   
   return Singleton;
 })();
 
 console.log(Singleton.getInstance() === Singleton.getInstance())
 