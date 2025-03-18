'use client';

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-14 h-[calc(100%-3.5rem)] w-16 bg-gray-900 flex flex-col items-center py-6 space-y-6 z-40">
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={() => setOpen(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 17 12 22 22 17"/><path d="M2 12 12 17 22 12"/><path d="M12 2 2 7 12 12 22 7 12 2z"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
        </Button>
      </nav>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild className="hidden">
          <button>Open Sheet</button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] p-0">
          <SheetTitle className="sr-only">Layers Panel</SheetTitle>
          <div className="flex flex-col h-full">
            <div className="p-4">
              <h2 className="text-lg font-semibold">Layers</h2>
              <Separator className="my-4" />
              <div className="space-y-2">
                <div className="space-y-1">
                  <div className="flex items-center justify-between py-2 px-2 hover:bg-accent/50 rounded-md cursor-pointer">
                    <span className="font-medium">Edition layers</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-accent/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </Button>
                  </div>
                  <div className="pl-8 space-y-1">
                    <div className="flex items-center justify-between py-1">
                      <span className="text-sm">Points of interest</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12h20"/>
                        </svg>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-sm">Bicycle rides</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12h20"/>
                        </svg>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-sm">Areas of interest</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12h20"/>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between py-2 px-2 hover:bg-accent/50 rounded-md cursor-pointer">
                    <span className="font-medium">Transport</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-accent/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </Button>
                  </div>
                  <div className="pl-8 space-y-1">
                    <div className="flex items-center justify-between py-1">
                      <span className="text-sm">Bus</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12h20"/>
                        </svg>
                      </Button>
                    </div>
                    <div className="flex items-center justify-between py-1">
                      <span className="text-sm">Tramway</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12h20"/>
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between py-2 px-2 hover:bg-accent/50 rounded-md cursor-pointer">
                    <span className="font-medium">Buildings</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-accent/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </Button>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between py-2 px-2 hover:bg-accent/50 rounded-md cursor-pointer">
                    <span className="font-medium">Sous-quartiers</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-accent/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </Button>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between py-2 px-2 hover:bg-accent/50 rounded-md cursor-pointer">
                    <span className="font-medium">Districts</span>
                    <Button variant="ghost" size="icon" className="h-6 w-6 hover:bg-accent/50">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6"/>
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="m-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M12 5v14" />
                  <path d="M5 12h14" />
                </svg>
                Add Layer
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}