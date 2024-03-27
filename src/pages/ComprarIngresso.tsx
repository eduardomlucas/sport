import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableRow, TableHead, TableHeader, TableFooter } from "@/components/ui/table";
import { FileDiff, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

export function ComprarIngresso() {

    const[geral, setGeral] = useState(false);
    const[camarote, setCamarote] = useState(false);
    const[visitante, setVisitante] = useState(false);

    const handleType = (id: string) =>{
        switch(id){
            case "geral":
                setGeral(true);
                setCamarote(false);
                setVisitante(false);
                break;
            case "camarote":
                setCamarote(true);
                setGeral(false);
                setVisitante(false);
                break;
            case "visitante":
                setVisitante(true);
                setGeral(false);
                setCamarote(false);
                break;
        }
    }

    return (
        <div className="flex flex-col items-center">
            <p className="text-4xl font-semibold flex justify-center items-center pt-5">Comprar Ingresso</p>
            <div className="flex flex-col justify-between  gap-10 pt-5">
                
                {/* game-section */}
                <div className="border border-red-700 flex flex-col items-center justify-center rounded-lg">
                    <p className="bg-red-700 rounded p-1.5 mt-3 font-semibold text-white">Campeonato Gaúcho</p>
                    <div className="lg:w-1/2 flex items-center justify-center ">
                        <img className="w-1/5" src="../../public/shield_guarany.png" alt="" />
                        <p className="ml-3">X</p>
                        <img className="w-1/4" src="../../public/shield_gremio.png" alt="" />
                    </div>
                    <div className="font-semibold flex flex-col p-3 items-center justify-center">
                        <p>Local: Estrela D'alva</p>
                        <p>Horário: 16:00</p>
                    </div>
                </div>

                
                <div className="flex flex-col justify-center gap-3">
                
                    {/* button-section */}
                    <div className="flex flex-row items-center justify-center gap-20">
                        <Button onClick={() => handleType("geral")} className="bg-red-700 hover:bg-red-800">Arquibancada</Button>
                        <Button onClick={() => handleType("camarote")} className="bg-red-700 hover:bg-red-800 flex gap-3" ><Star/>Camarote</Button>
                        <Button onClick={() => handleType("visitante")} className="bg-zinc-200 hover:bg-zinc-400 text-black">Visitante</Button>
                
                    </div>
                    
                    <div className="boder border-red-700">
                        {/* geral-section */}
                        {geral && (
                            <div className="flex flex-col  gap-2 lg:gap-1">
                                    <div className="flex flex-col  border border-red-700 rounded-lg font-semibold">
                                        <p className="bg-red-700/50 flex justify-center p-1 rounded-t-lg">{"Selecione seu(s) Ingresso(s)"}</p>
                                        <p className="bg-red-700/10 flex justify-center">Setor: Arquibancada</p>
                                        {/* table add */}
                                        <div>
                                            <Table >
                                                <TableHeader>
                                                    <TableHead>
                                                        Perfil
                                                    </TableHead>
                                                    <TableHead>
                                                        Valor
                                                    </TableHead>
                                                    <TableHead>
                                                        Adicionar
                                                    </TableHead>
                                                </TableHeader>
                                                <TableBody>
                                                    <TableRow>
                                                        <TableCell>
                                                            Doador de Sangue
                                                        </TableCell>
                                                        <TableCell>
                                                            R$ 55,00
                                                        </TableCell>
                                                        <TableCell className="flex items-center justify-center">
                                                            <Button className="bg-green-700">+</Button>
                                                        </TableCell>                                            
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>
                                                            Estudante
                                                        </TableCell>
                                                        <TableCell>
                                                            R$ 55,00
                                                        </TableCell>
                                                        <TableCell className="flex items-center justify-center">
                                                            <Button className="bg-green-700">+</Button>
                                                        </TableCell>                                            
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>
                                                            Idoso
                                                        </TableCell>
                                                        <TableCell>
                                                            R$ 55,00
                                                        </TableCell>
                                                        <TableCell className="flex items-center justify-center">
                                                            <Button className="bg-green-700">+</Button>
                                                        </TableCell>                                            
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>
                                                            Menor - 3 a 15 anos
                                                        </TableCell>
                                                        <TableCell>
                                                            R$ 55,00
                                                        </TableCell>
                                                        <TableCell className="flex items-center justify-center">
                                                            <Button className="bg-green-700">+</Button>
                                                        </TableCell>                                            
                                                    </TableRow>
                                                    <TableRow>
                                                        <TableCell>
                                                            Inteira
                                                        </TableCell>
                                                        <TableCell>
                                                            R$ 110,00
                                                        </TableCell>
                                                        <TableCell className="flex items-center justify-center">
                                                            <Button className="bg-green-700">+</Button>
                                                        </TableCell>                                            
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </div>
                                    </div>
                                    <div className="flex font-semibold h-full flex-col border border-red-700 rounded-lg">
                                        <p className="flex gap-3  justify-center bg-red-700/50 p-1 rounded-t-lg"><ShoppingCart/> Meu Carrinho</p>
                                        <Table>
                                            <TableHeader>
                                                <TableHead>SETOR</TableHead>
                                                <TableHead>PREÇO</TableHead>
                                                <TableHead>TOTAL</TableHead>
                                                <TableHead className="text-red-700">X</TableHead>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>
                                                        Arquibancada
                                                    </TableCell>
                                                    <TableCell>
                                                        R$ 110,00
                                                    </TableCell>
                                                    <TableCell>
                                                        R$ 110,00
                                                    </TableCell>
                                                    <TableCell>
                                                        <Button className="bg-red-700">x</Button>
                                                    </TableCell>
                                                </TableRow>
                                            </TableBody>
                                            <TableFooter>
                                                <TableRow>
                                                    <TableCell>
                                                        TOTAL GERAL
                                                    </TableCell>
                                                    <TableCell>
                                                        X ITENS
                                                    </TableCell>
                                                    <TableCell>
                                                        R$ 110,00
                                                    </TableCell>
                                                    <TableCell>
                                                    </TableCell>
                                                </TableRow>
                                            </TableFooter>
                                        </Table>
                                        <Button>Comprar Agora</Button>
                                    </div>
                            </div>
                        )}

                        {camarote && (
                            <div className="flex flex-col items-center justify-center">
                                <p>VALOR CAMAROTE: R$ 155,00</p>
                                <div className="flex gap-5 items-center justify-center">
                                    <p>VENDIDOS: 50</p>
                                    <p>RESTANTE: 50</p>
                                </div>
                            </div>
                        )}

                        {visitante && (
                            <div className="flex flex-col items-center justify-center">
                                <p>VALOR VISITANTE: R$ 35,00</p>
                                <div className="flex gap-5 items-center justify-center">
                                    <p>VENDIDOS: 100</p>
                                    <p>RESTANTE: 100</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                

                
            </div>
        </div>
    )
}