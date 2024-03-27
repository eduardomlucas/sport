import { ReactNode } from "react"
interface MenuProps{
    children: ReactNode
    isHome?: boolean
}

export function Menu({children, isHome}: MenuProps) {

    if(isHome){
        window.addEventListener('scroll', () => {
            const verticalScrollPx = window.scrollY 
            
            if (verticalScrollPx > 100) {
                document.getElementById("div-menu").style.backgroundColor = '#ff0000';
            } else {
                document.getElementById("div-menu").style.backgroundColor = 'transparent';
            }
        });   
    }
    
    return (
        <div style={{backgroundColor: "#ff0000"}}className="flex flex-col">
            
            {isHome &&(
                <a href="/socio">
                    <img className="pt-[150px]" src="https://mail.google.com/mail/u/0?ui=2&ik=f5787b3adf&attid=0.1&permmsgid=msg-f:1792560701781711015&th=18e07475fc0618a7&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-EpyLMAbTqkOL9YSOn8M_eden-DgH6I-NjSSHWtmyyAgXTkXc1Avs48b2JkDC1zjjajK_FyRcK3iZLIwmtHuZXMM61nI6dwAXWV6HtFonM29TBVJPnhE_3COQ&disp=emb&realattid=bc5af2d09e42c3a_0.1.1"/>
                </a>
            )}
            
            <nav id="div-menu" style={{backgroundColor: "#ff0000"}} className={ isHome ? "fixed top-0 left-0 right-0 flex z-10 items-center justify-center flex-col " :"flex items-center fixed top-0 left-0 right-0 z-10 justify-center flex-col"}>
                 <div className="px-10 pt-5 flex flex-row ">
                    {/* logo */}
                    <a href="/" className="flex items-center gap-2">
                        <img className="w-1/4" src="/shield_guarany.png"/>
                        <div className="text-white font-semibold">
                            <p>GUARANY</p>
                            <p>FUTEBOL CLUBE</p>
                        </div>
                    </a>
                </div>
                <div className="flex flex-row items-center justify-center ">
                    {/* items */}
                    <div className="flex text-white gap-3">
                        <a className="font-semibold hover:bg-red-800 rounded p-2 transition" href="/futebol">Futebol</a>
                        <a className="font-semibold hover:bg-red-800 rounded p-2 transition" href="/clube">Clube</a>
                        <a className="font-semibold hover:bg-red-800 rounded p-2 transition" href="/socio">Sócios</a>
                        <a className="font-semibold hover:bg-red-800 rounded p-2 transition" href="/loja">Loja</a>
                        <a className="font-semibold hover:bg-red-800 rounded p-2 transition" href="/ingresso">Ingressos</a>
                        <a className="font-semibold hover:bg-red-800 rounded p-2 transition" href="/contato">Contato</a>
                    </div>
                </div>
                {/* <div className="flex items-center justify-center">
                    <Button className="bg-red-700 hover:bg-red-800">
                            <Search className="font-semibold "/>
                    </Button>
                </div> */}
            </nav>
            
            <div className={ isHome ? " z-0" : "pt-[150px] z-0" }>{children}</div>
        </div>
    )
}