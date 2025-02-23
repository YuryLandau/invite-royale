'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Button } from '../components/Button'
import { InputIcon, InputRoot, InputTextField } from '../components/Input'


const SubscriptionForm = () => {

    const subscriptionFormSchema = z.object({
        name: z.string().min(2, { message: 'Digite seu nome completo' }),
        email: z.string().email({ message: 'Digite um e-mail válido' }),
    })

    type SubscriptionFormData = z.infer<typeof subscriptionFormSchema>

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<SubscriptionFormData>({
        resolver: zodResolver(subscriptionFormSchema)
    })

    const onSubscribe = (data: SubscriptionFormData) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubscribe)}
            className="bg-gray-700 border-gray-600 rounded-2xl p-8 space-y-6 w-full md:max-w-[440px]">
            <h2 className="font-heading font-semibold text-gray-200 text-xl">
                Inscrição
            </h2>

            <div className="space-y-3">
                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <User />
                        </InputIcon>

                        <InputTextField
                            type="text"
                            placeholder="Nome completo"
                            {...register('name')}
                        />
                    </InputRoot>

                    {errors.name && <p className="text-danger text-xs font-semibold">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                    <InputRoot>
                        <InputIcon>
                            <Mail />
                        </InputIcon>

                        <InputTextField
                            type="email"
                            placeholder="E-mail"
                            {...register('email')}
                        />
                    </InputRoot>

                    {errors.email && <p className="text-danger text-xs font-semibold">{errors.email.message}</p>}
                </div>
            </div>

            <Button type="submit">
                Confirmar
                <ArrowRight />
            </Button>
        </form>
    )
}

export default SubscriptionForm