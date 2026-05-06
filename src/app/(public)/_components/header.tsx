"use client"

import { useState } from 'react'
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"; // Padronizado com @/
import { LogIn, Menu } from "lucide-react";

const navItems = [
  { href: "#profissionais", label: "Profissionais" },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const session = null; // Placeholder para autenticação

  return (
    <header className="fixed top-0 right-0 left-0 z-50 py-4 px-6 bg-white border-b border-border">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-3xl font-bold text-zinc-900">
          Odonto<span className="text-emerald-500">PRO</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => (
            <Button key={item.href} asChild variant="ghost" className="text-base">
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          
          <AuthButtons session={session} />
        </nav>

        {/* Mobile Navigation (Sheet) */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px]">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
              <SheetDescription className="text-left">
                Acesse as áreas da clínica
              </SheetDescription>
            </SheetHeader>

            <nav className='flex flex-col space-y-4 mt-6'>
              {navItems.map((item) => (
                <Button 
                  key={item.href} 
                  variant="ghost" 
                  className="justify-start text-base w-full"
                  onClick={() => setIsOpen(false)}
                  asChild
                >
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
              
              <div className="pt-4 border-t border-border">
                <AuthButtons session={session} onAction={() => setIsOpen(false)} />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

// 2. Componente auxiliar para os botões de login/acesso
function AuthButtons({ session, onAction }: { session: any, onAction?: () => void }) {
  if (session) {
    return (
      <Button asChild onClick={onAction} variant="outline">
        <Link href="/dashboard">Acessar clínica</Link>
      </Button>
    )
  }

  return (
    <Button onClick={onAction} className="gap-2">
      <LogIn className="w-4 h-4" />
      Portal da clínica
    </Button>
  )
}