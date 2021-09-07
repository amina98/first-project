export const validate = data =>{
    const errors = {};

    if(!data.name.trim()){
        errors.name = "وارد کردن نام الزامی است.";
    }else{
        delete errors.name;
    }

    if(!data.lastName.trim()){
        errors.lastName = "وارد کردن نام خانوادگی الزامی است.";
    }else {
        delete errors.lastName;
    }

    if(!data.email){
        errors.email = "وارد کردن ایمیل الزامی است.";
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        errors.email = "یک ایمیل معتبر وارد کنید.";
    }else{
        delete errors.email;
    }

    if(!data.password){
        errors.password = "وارد کردن رمز عبور الزامی است.";
    }else if(data.password.length <= 6){
        errors.password = "رمز عبور باید حداقل شامل 6 کاراکتر باشد.";
    }else{
        delete errors.password;
    }



    return errors;
}