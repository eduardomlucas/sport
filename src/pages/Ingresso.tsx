import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Calendar, Info, Paperclip, Pin, Scroll, ScrollText, ShoppingCart, X } from "lucide-react";

export function Ingresso(){
    return (
        <div className="h-auto flex flex-col gap-5 items-center">
            <div className="flex flex-col items-center">
                <h1 className="text-xl">INGRESSOS</h1>
                <p>Veja abaixo os próximos jogos no Estrela D'alva</p>
            </div>
            <div className="w-1/2 flex gap-2 flex-col items-center">
                    <Card >
                        <CardHeader className="flex flex-row items-center justify-between lg:justify-center lg:gap-10 ">
                                    GRE <img className="w-1/3  lg:w-1/6 " src="shield_gremio.png" /> 
                                    <X />
                                    <img className="w-1/4 lg:w-1/6" src="shield_guarany.png" /> GFC
                        </CardHeader>
                        <CardContent className="flex flex-col gap-1 items-center">
                            
                            <p className="font-semibold text-red-700">Campeonato Gaúcho 2024</p>
                            <div className="flex gap-2"><Calendar /> 02/03/2024 ás 16:30</div>
                            <div className="flex gap-2"> <Pin/>Arena do grêmio - Porto Alegre/RS </div>
                            <div className="flex items-center justify-center"><Button onClick={() => window.open('/ingresso-comprar')} className="flex gap-3"><ShoppingCart/> Comprar ingresso</Button></div>
                            </CardContent>
                        </Card>
                </div>

            {/* regras-section */}
            <div className="flex flex-col pt-3">
                <h1>OBSERVAÇÕES, REGRAS E CONDUTAS PARA JOGOS</h1>

                <div className="flex flex-col gap-10 pt-10">
                    {/* info */}
                    <div className="flex  gap-3">
                        <div>
                            <Info className="text-red-700"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">É Obrigatório Portar:</p>
                            <p>Ingresso impresso (e-Ticket), documento de identificação e documentos conforme regras de acesso específicas durante estado de calamidade pública devido ao Covid-19.</p>
                        </div>
                    </div>
                    {/* politica de cancelamento */}
                    <div className="flex items-center justify-center gap-3">
                        <div>
                            <Scroll className="text-red-700"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Política de Cancelamento:</p>
                            <p>Somente o titular da compra pode efetuar a solicitação de cancelamento de ingresso e receber o reembolso do valor pago. A solicitação deve ser realizada através do preenchimento do formulário de cancelamento dentro do prazo de até 24 horas de antecedência do evento, o qual você acessa em https://torcedor.arenapoa.com.br/cancelamento. NÃO SERÃO ACEITAS SOLICITAÇÕES VIA E-MAIL. Caso sua compra seja feita em menos de 24h antes do evento, não haverá possibilidade de cancelamento.

O FORMULÁRIO É RECEBIDO SOMENTE APÓS O SISTEMA INFORMAR EM SUA TELA “FORMULÁRIO ENVIADO”. CASO ESSA AÇÃO TENHA OCORRIDO COM SUCESSO, VOCÊ RECEBERÁ UM E-MAIL AUTOMÁTICO CONFIRMANDO SUA SOLICITAÇÃO. SE VOCÊ NÃO RECEBER, ENTRE EM CONTATO COM NOSSA CENTRAL DE ATENDIMENTO: 51 3092- 9605.

Lembramos que após formalizada sua solicitação de cancelamento, a operação é irreversível e será concluída em até 48h úteis a contar do envio do formulário de cancelamento. Após o evento, não serão aceitos e/ou realizados cancelamentos e devoluções de valores.</p>
                        </div>
                    </div>
                    {/* politica de descontos */}
                    <div className="flex items-center justify-center gap-3">
                        <div>
                            <ScrollText className="text-red-700"/>
                        </div>
                        <div className="flex flex-col">
                            <p className="font-bold">Política de Desconto:</p>
                            <p>SÓCIOS Sócio Torcedor Diamante: Permite aquisição do seu ingresso na primei ra onda de vendas, limite de um (1) ingresso com desconto de 50% na Arquibancada Norte e nas Cadeiras Superiores; 40% nas Cadeiras Gramado e 30% nas Cadeiras Gold. Para a compra de ingressos adicionais ou do tipo Meia Entrada, o sócio deve aguardar a abertura do público geral. Sócio Torcedor Ouro: Permite aquisição do seu ingresso na primeira onda de vendas, limite de um (1) ingresso com desconto de 10% em todos os setores da Arena, exceto torcida visitante e camarotes. Para a compra de ingressos adicionais ou do tipo Meia Entrada, o sócio deve aguardar a abertura do público geral. Demais Sócios: Sócio Arquibancada e Cadeira já possuem acesso vinculado ao seu cartão e não necessita a compra de ingresso. Ingresso para acompanhante que não seja sócio, devem ser adquiridos na onda de público geral. MEIA-ENTRADA (*) Idoso: maiores de 60 anos têm 50% de desconto, mediante apresentação da carteira de identidade (RG). Pode comprar 2 ingressos por CPF, desde que apresente a comprovação do benefício para ambos. Estudante: tem 50% de desconto conforme a capacidade, com limite de 1 (um) ingresso por CPF (dono do login). Segundo a Lei Federal nº 12.933/2013 e o Decreto Federal 8.537 de 2015, a validação é feita mediante apresentação da carteira de estudante no momento da compra nas bilheterias, troca de voucher para compras no site e no acesso ao estádio no dia da partida. São válidas as carteirinhas emitidas pelas entidades educativas: Associação Nacional de Pós-Graduandos (ANPG), União Nacional dos Estudantes (UNE), União Brasileira dos Estudantes Secundaristas (UBES), Entidades estaduais e municipais, Diretórios Centrais dos Estudantes (DCE) e Centros e Diretórios Acadêmicos, de nível médio e superior. Na carteira do estudante devem constar as informações: nome completo e data de nascimento do estudante; foto recente do estudante; nome da instituição matriculado; grau de escolaridade e a data de validade até o dia 31 de março do ano subsequente da expedição do documento. Sendo assim, não serão válidos outros documentos/atestados como comprovação estudantil. Mais informações sobre Meia-entrada: https://www.meiaentrada.org.br/</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}