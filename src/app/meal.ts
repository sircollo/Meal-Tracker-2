export class Meal {
  toShowDetails: boolean  
    constructor(
        // public id:number,
        public name:string, 
        public calories:number,
        public details:string){
          
          this.toShowDetails = false;
      }
}