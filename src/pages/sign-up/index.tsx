import {getLayout} from "src/components/Layout/BaseLayout/BaseLayout";
import {useForm} from "react-hook-form";
import {useSignUpMutation} from "src/api/authApi";
import {useState} from "react";
import {Card} from "@/shared/ui/card";
import {Typography} from "@/shared/ui/typography";
import {Button} from "@/shared/ui/button";
import {Github} from "public/icon/github-logo";
import {Google} from "public/icon/google-logo";
import {registerSchema} from "@/shared/utils/schemas/registerSchema";
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {ControlledTextField} from "@/shared/ui/controlled";
import s from "./SignUp.module.scss"

export type RegisterFormType = z.infer<typeof registerSchema>

type RegisterFormPropsType = {
    linkPath: string
    onSubmitHandler: (data: RegisterFormType) => void
}

const SignUp = () => {
    const [signUp] = useSignUpMutation()
    const onSubmitHandler = (data: RegisterFormType) => console.log(data)
    const {control, handleSubmit} = useForm<RegisterFormType>({resolver: zodResolver(registerSchema)})
    const onSubmit = handleSubmit(data => {
        onSubmitHandler(data)
        signUp(data)
    })


    return (
        <div className={s.container}>
            <Card className={s.card}>
                <Typography variant={"large"}>
                    Sign Up
                </Typography>
                <div className={s.iconContainer}>
                    <Button as={'a'} variant={'link'} className={s.link}>
                        <Google width={36} height={36}/>
                    </Button>
                    <Button as={'a'} variant={'link'} className={s.link}>
                        <Github width={36} height={36}/>
                    </Button>

                </div>

                <form onSubmit={onSubmit}>
                    <ControlledTextField control={control} name={'userName'} label={'Username'} className={s.email}/>
                    <ControlledTextField control={control} name={'email'} label={'Email'} className={s.email}/>
                    <ControlledTextField control={control} name={'password'} label={'Password'} className={s.password}
                                         type={'password'}
                    />
                    <ControlledTextField control={control} name={'confirmPassword'} label={'Confirm password'}
                                         className={s.confirmPassword}
                                         type={'password'}
                    />
                    <Button type={'submit'} fullWidth className={s.registerBtn}>
                        Sign Up
                    </Button>
                </form>
                <Typography variant={'body2'} className={s.subtitle}>
                    Do you have an account?
                </Typography>
                <Button as={'a'} variant={'link'} className={s.link} href={'/sign-in'}>
                    Sign In
                </Button>
            </Card>
        </div>
    );
}

SignUp.getLayout = getLayout
export default SignUp;
