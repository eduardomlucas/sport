import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";

export function Register () {
    return (
        <div>
            <p className="font-light text-4xl flex justify-center">Cadastro de Sócio</p>
            
            <div className="mt-5 flex flex-col gap-10">
                <div className="flex justify-between gap-3">
                    <div className="w-full">
                        <Label htmlFor="nome">Nome</Label>
                        <Input />
                    </div>
                    <div className="w-full">
                        <Label htmlFor="sobrenome">Sobrenome</Label>
                        <Input />
                    </div>
                </div>
                <div>
                    <Label htmlFor="cpf">CPF</Label>
                    <Input />
                </div>
                <div>
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input />
                </div>

                
                <div className="flex justify-between gap-3">
                    <div className="w-full">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email"/>
                    </div>
                    <div className="w-full">
                        <Label htmlFor="confirmaEmail">Confirme seu Email</Label>
                        <Input type="email"/>
                    </div>
                    
                    
                </div>
                
                <div className="flex justify-between gap-3">
                    <div className="w-full">
                        <Label htmlFor="senha">Senha</Label>
                        <Input type="password"/>
                    </div>
                    
                    <div className="w-full">
                        <Label htmlFor="confirmaSenha">Confirme sua Senha</Label>
                        <Input type="password"/>
                    </div>
                    
                </div>
                

                <div className="flex items-center justify-center gap-5">
                    <Button>Confirmar Cadastro</Button>
                    <a href="/socio-login"><Button>Cancelar</Button></a>
                </div>
            </div>
        </div>
    )
}