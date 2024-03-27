import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react"

export function SocioIndex () {

    const [nome, setNome] = useState(`Eduardo Lucas`);

    return (
        <div className="flex flex-col gap-5">

            {/* header */}
            <div className="mt-5 flex items-center justify-center gap-5">
                <p className="font-light text-3xl flex justify-center">{`Seja bem vindo ${nome}`}</p>    
                <div className="bg-yellow-500 text-white rounded p-5 font-semibold w-1/3 flex justify-center border border-black">
                    <p>G O L D</p>
                </div>
            </div>

            <div className="flex flex-col gap-2 ">
                <p className="font-semibold text-xl flex justify-center">Newsletter Socio</p>
                <p>alskihda;skjdha;skjhd;akjshdakjshdljhagsdhgasdjkhgafsdkjahgsdkalsikudasdka;slkdja;slkdja;sldkjalksdgh</p>
                <p>alskihda;skjdha;skjhd;akjshdakjshdljhagsdhgasdjkhgafsdkjahgsdkalsikudasdka;slkdja;slkdja;sldkjalksdgh</p>
                <p>alskihda;skjdha;skjhd;akjshdakjshdljhagsdhgasdjkhgafsdkjahgsdkalsikudasdka;slkdja;slkdja;sldkjalksdgh</p>
                <p>alskihda;skjdha;skjhd;akjshdakjshdljhagsdhgasdjkhgafsdkjahgsdkalsikudasdka;slkdja;slkdja;sldkjalksdgh</p>
                <p>alskihda;skjdha;skjhd;akjshdakjshdljhagsdhgasdjkhgafsdkjahgsdkalsikudasdka;slkdja;slkdja;sldkjalksdgh</p>
                <p>alskihda;skjdha;skjhd;akjshdakjshdljhagsdhgasdjkhgafsdkjahgsdkalsikudasdka;slkdja;slkdja;sldkjalksdgh</p>
                <p>alskihda;skjdha;skjhd;akjshdakjshdljhagsdhgasdjkhgafsdkjahgsdkalsikudasdka;slkdja;slkdja;sldkjalksdgh</p>
                <p>alskihda;skjdha;skjhd;akjshdakjshdljhagsdhgasdjkhgafsdkjahgsdkalsikudasdka;slkdja;slkdja;sldkjalksdgh</p>
            </div>
            {/* promotion-section */}
            <div>
                <p className="font-semibold text-xl flex justify-center">Temos promocoes para voce</p>
                
                <div className="flex flex-col gap-5">
                    <div className="flex gap-3">
                        <Card className="w-full">
                            <CardContent>Cadeira de Praia Guarany</CardContent>
                        </Card>
                        <Card className="w-full">
                            <CardContent>Kit Chimarrao</CardContent>
                        </Card>
                    </div>
                    <div className="flex gap-3">
                        <Card className="w-full">
                            <CardContent>Chapeu</CardContent>
                        </Card>
                        <Card className="w-full">
                            <CardContent>Meiao de Jogo Guarany</CardContent>
                        </Card>
                    </div>
        
                </div>
            </div>
        </div>
    )
}