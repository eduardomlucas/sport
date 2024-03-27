import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Calendar, Check, Copyright, Facebook, Instagram, Pin, Star, Twitter, X } from "lucide-react";

export function Home(){

    const patrocinios = [
        "Weefe Uniformes Esportivos",
        "C.C Corretora de Seguros",
        "Zezé Alimentos",
        "Postos SIM",
        "Peruzzo Supermercados"
    ]

    return (
        <div>
            {/* header */}
            <div id="header-home" className="flex flex-col gap-5 p-10">
                <div>
                    <p className="text-4xl font-semibold">Bem vindo</p>
                    <p className="text-xl font-light ">SEJA BEM VINDO AO SITE DO MAIOR CAMPEÃO DO INTERIOR</p>
                </div>
                <div className="flex items-center justify-center gap-5 font-semibold text-xl">
                    <div className="flex flex-col gap-1 items-center justify-center">
                        <Star className="text-red-700"/>
                        <p>Campeão Gaúcho 1920</p>
                    </div>
                    <div className="flex flex-col gap-1 items-center justify-center">
                        <Star className="text-red-700"/>
                        <p>Bicampeão Gaúcho 1938</p>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-1 items-center text-zinc-100">
                    <div>
                        <p className="text-xl text-red-700 font-semibold uppercase">Siga o Guarany</p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/guaranydebage"><Facebook className="bg-red-700 p-2 rounded-full h-10 w-10"/></a>
                        <a href="https://www.instagram.com/guaranydebage"><Instagram className="bg-red-700 p-2 rounded-full h-10 w-10"/></a>
                        <a href="https://twitter.com/guaranydebage"><Twitter className="bg-red-700 p-2 rounded-full h-10 w-10"/></a>
                    </div>
                    
                </div>
            </div>

            {/* main */}
            <div className="flex flex-col md:gap-5 sm:flex-col sm:gap-5 gap-10 border-t border-red-700 p-10">
                
                {/* ingresso-card */}
                <div className=" flex gap-2 flex-col items-center">
                    <p className="text-xl text-red-700">Próximos Jogos</p>
                    <Card className="">
                        <CardHeader className="flex flex-row items-center justify-between lg:justify-center lg:gap-10 ">
                                    GRE <img className="w-1/3  lg:w-1/6 " src="shield_gremio.png" /> 
                                    <X />
                                    <img className="w-1/4 lg:w-1/6" src="shield_guarany.png" /> GFC
                        </CardHeader>
                        <CardContent className="flex flex-col gap-1 items-center">
                            
                            <p className="font-semibold text-red-700">Campeonato Gaúcho 2024</p>
                            <div className="flex gap-2"><Calendar /> 02/03/2024 ás 16:30</div>
                            <div className="flex gap-2"> <Pin/>Arena do grêmio - Porto Alegre/RS </div>
                            <div className="flex items-center justify-center"><Button>Comprar ingresso</Button></div>
                            </CardContent>
                        </Card>
                </div>

                {/* tabelas-section */}
                <div className="flex flex-col gap-10 lg:flex-row w-full h-full justify-between">
                    
                    {/* games-section */}
                    <div className="flex flex-col gap-2 lg:w-1/2 items-center">
                        <p className="text-xl text-red-700">Tabela de Jogos</p>
                        <img className="rounded-xl" src="/tabela_jogos.jpg"/>
                    </div>

                    {/* classificação-section */}
                    <div className="flex flex-col z-0 gap-2 items-center">
                        <p className="text-xl text-red-700">Classificação</p>
                        <Table className="w-full">
                            <TableHeader>
                                <TableHead>Clube</TableHead>
                                <TableHead>Pts.</TableHead>
                                <TableHead>Vit.</TableHead>
                                <TableHead>Ept.</TableHead>
                                <TableHead>Der.</TableHead>
                                <TableHead>SG</TableHead>
                                <TableHead className="flex items-center justify-center">Últimas 5</TableHead>
                            </TableHeader>
                            <TableBody>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <TableRow>
                                    <TableCell>{index+1} Guarany</TableCell>
                                    <TableCell>27</TableCell>
                                    <TableCell>9</TableCell>
                                    <TableCell>0</TableCell>
                                    <TableCell>0</TableCell>
                                    <TableCell>9</TableCell>
                                    <TableCell className="flex items-center justify-center">
                                        <div className="flex gap-1">
                                            <div className="bg-green-700 rounded-full h-5 w-5 flex items-center justify-center text-zinc-200 p-1"><Check/></div>
                                            <div className="bg-green-700 rounded-full h-5 w-5 flex items-center justify-center text-zinc-200 p-1"><Check/></div>
                                            <div className="bg-green-700 rounded-full h-5 w-5 flex items-center justify-center text-zinc-200 p-1"><Check/></div>
                                            <div className="bg-green-700 rounded-full h-5 w-5 flex items-center justify-center text-zinc-200 p-1"><Check/></div>
                                            <div className="bg-green-700 rounded-full h-5 w-5 flex items-center justify-center text-zinc-200 p-1"><Check/></div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                            <TableFooter >
                                <TableRow>
                                    <TableCell colSpan={7}>
                                    <div className=" rounded-xl p-2 flex flex-col lg:flex-row gap-5  justify-between ">
                                    <div className="flex flex-col gap-2">
                                        <p>Qualificação / Rebaixamento </p>
                                        <div className="flex gap-3">
                                            <div className="rounded h-5 w-5 bg-blue-700"></div>
                                            <p>Próxima rodada</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="rounded h-5 w-5 bg-red-700"></div>
                                            <p>Rebaixamento</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <p>Últimas 5 partidas</p>
                                        <div className="flex gap-3">
                                            <div className="rounded h-5 w-5 bg-green-700"></div>
                                            <p>Vitória</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="rounded h-5 w-5 bg-zinc-300"></div>
                                            <p>Rebaixamento</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <div className="rounded h-5 w-5 bg-red-700"></div>
                                            <p>Derrota</p>
                                        </div>
                                    </div>
                                </div>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </div>
                     
                </div>
                <div className="flex flex-col lg:flex-row gap-2 items-center">
                    
                    {/* socios-section */}
                    {/* <div className="w-full flex flex-col gap-3">
                        <p className="text-xl w-max text-red-700">Aproveite as vantagens se ser sócio</p>
                        <Card>
                            <CardHeader className="text-red-700 flex items-center font-bold">Sócio Índio Véio</CardHeader>
                            <CardContent className="flex flex-col lg:flex-row gap-2 items-center justify-center">
                                    <p>Vamos juntos mostrar a força do </p>
                                    <p className="font-bold text-red-700">ÍNDIO</p>
                                    <p> no brasileirão série D 2025</p>
                            </CardContent>
                            <CardFooter className="flex justify-center">
                                <Button className="rounded-full bg-red-700">Te Associa Agora</Button>
                            </CardFooter>
                        </Card>
                    </div> */}

                    {/* patrocinadores-section */}
                    {/* <div className="lg:w-1/3">
                        <Carousel className="w-full max-w-xs">
                            <p className="flex -tems-center justify-center text-xl text-red-700">Patrocinadores</p>
                            <CarouselContent>
                                {patrocinios.map((item, index) => (
                                <CarouselItem key={index}>
                                    <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <span className="text-4xl font-semibold">{item}</span>
                                        </CardContent>
                                    </Card>
                                    </div>
                                </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div> */}
                    
                </div>
            </div>
            <div className="flex flex-col gap-2 border-t border-red-700 items-center">
                <div className="flex w-full h-full justify-between py-2">
                    <div>
                        GUARANY FUTEBOL CLUBE
                    </div>
                    <div>
                        <a href="/politica-privacidade">Política de Privacidade</a>
                    </div>
                    <div>
                        Desenvolvido por: Eduardo Lucas & Érica Alvarenga
                    </div>
                    <div className="flex gap-2">
                        <Copyright />
                        <p>2024 Todos os direitos reservados</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}