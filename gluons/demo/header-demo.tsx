import { 
    Header, 
    HeaderCenter, 
    HeaderContainer, 
    HeaderLeft, 
    HeaderMobileMenuTrigger, 
    HeaderRight 
} from "@/gluons/header";

const HeaderDemo =  () => {
    return (
        <div className="h-full bg-background">
            <Header>
                <HeaderContainer>
                    <HeaderLeft>
                        <HeaderMobileMenuTrigger className="@lg:hidden"/>
                        <img src="/logoipsum.svg" alt="Logo" />
                    </HeaderLeft>
                    <HeaderCenter>
                        Center
                    </HeaderCenter>
                    <HeaderRight>
                        Right
                    </HeaderRight>
                </HeaderContainer>
            </Header>
            <main className="@container/main mx-auto h-auto pt-8 bg-background">
                <div className="flex flex-col gap-3 px-4 @md/main:px-6 @lg/main:px-8">
                    <div className="flex h-12 bg-muted rounded-md" />
                    <div className="grid grid-cols-3 gap-3">
                        {Array.from({ length: 3 }).map((_, i) => (
                            <div key={i} className="col-span-1 bg-muted justify-center items-center aspect-square rounded-md" />
                        ))}
                    </div>
                    <div className="flex h-64 bg-muted rounded-md" />
                    <div className="grid grid-cols-2 gap-3">
                        {Array.from({ length: 4 }).map((_, i) => (
                            <div key={i} className="col-span-1 bg-muted justify-center items-center aspect-square rounded-md" />
                        ))}
                    </div>
                    <div className="flex h-64 bg-muted rounded-md mb-8" />
                </div>
            </main>
        </div>
    )
}

export default HeaderDemo;