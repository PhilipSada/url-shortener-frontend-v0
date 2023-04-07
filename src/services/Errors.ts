class Errors{
    errors:any = {}

    getErrors(){
        return this.errors;

    }

    setErrors(response:any){
        
      this.errors = response.data.errors;

    }

    getKey(key:any){
      return (this.errors[key] !== undefined ? this.errors[key]:null)
    }
    reset(){

        this.errors = {}

    }
}

export default new Errors;