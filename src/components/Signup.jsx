
import { useState } from "react";
import { useForm } from "react-hook-form"


const Signup = () => {

    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()
    const [issubmitted, setIssubmitted] = useState(false);


    const onhandleSubitdata = async (data) => {
        try {
            console.log(data)
            setIssubmitted(true)



        } catch (error) {
            console.log(error)


        }

    }

    if (issubmitted) {
        reset()
        setIssubmitted(false)
    }
    return <div >
        <h2> USER SIGNUP</h2>

        <form className="form" onSubmit={handleSubmit(onhandleSubitdata)}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter Name"
                    {...register("name", {
                        required: "name char must be grethar than 2",
                        minLength: 2,
                        maxLength: 20

                    })}
                />
            </div>
            {
                errors && <div className="myerror">{errors.name?.message} </div>
            }

            <div>
                <label>Email</label>
                <input type="text" placeholder="Enter a email" {...register("email", {
                    required: "email is requird",
                    validate: (val) => {
                        if (!val.includes("@")) {
                            return "@ must be  include inside a email"
                        }
                        return true
                    }


                })} />
            </div>
            {errors && <div className="myerror">{errors.email?.message}</div>}


            <div>
                <label >Age</label>
                <input type="text" placeholder="Enter a age" {...register("age", {
                    required: "age is required",
                    minLength: {
                        value: 1,
                        message: "age must be grethat than or equl to 1"
                    }
                })} />
            </div>

            {errors && <div className="myerror">{errors.age?.message} </div>}

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Loading" : "submit"}
            </button>



        </form>


    </div>;
};

export default Signup;
