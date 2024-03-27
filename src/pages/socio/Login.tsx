import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login() {
    return (
        <div className="flex gap-20 flex-col items-center">
            <p className="mt-10 font-light text-4xl">Entrar</p>
            
            <div className="flex flex-col gap-3 w-full lg:w-1/2 border border-red-300 p-10 rounded-xl ">
                <div className="flex flex-col gap-1">
                    <Label htmlFor="email">Email</Label>
                    <Input />
                </div>
                <div className="flex flex-col gap-1">
                    <Label htmlFor="password">Senha</Label>
                    <Input />

                </div>

                <div className="flex flex-col gap-1 p-10">
                    <div className="flex justify-center gap-10">
                        <a href="/socio-index"><Button>Entrar</Button></a>
                        <a href="/socio-register"><Button>Cadastrar</Button></a>
                    </div>
                    <a className="text-center" href="/socio-recover-password">Esqueceu sua senha?</a>
                </div>
            </div>
            
        </div>
    )
}