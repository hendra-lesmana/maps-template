'use client';

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Sidebar() {
  const [openLayers, setOpenLayers] = useState(false);
  const [openHome, setOpenHome] = useState(false);
  const [openBookmarks, setOpenBookmarks] = useState(false);
  const [openFavorites, setOpenFavorites] = useState(false);
  const [openHistory, setOpenHistory] = useState(false);
  const [openPrint, setOpenPrint] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  return (
    <>
      <nav className="fixed left-0 top-14 h-[calc(100%-56px)] w-16 bg-gray-900 flex flex-col items-center py-4 space-y-4 z-[110]">
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={() => setOpenHome(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={() => setOpenLayers(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83l-8.58-3.91z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={() => setOpenBookmarks(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={() => setOpenFavorites(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={() => setOpenHistory(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={() => setOpenPrint(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={() => setOpenLocation(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
        </Button>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-800" onClick={() => setOpenSettings(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
        </Button>
      </nav>
      <Sheet open={openLayers} onOpenChange={setOpenLayers}>
        <SheetContent side="left" className="w-[300px] p-0 ml-16 mt-14 h-[calc(100%-56px)] z-[100]">
          <SheetTitle className="p-4 text-lg font-semibold">Layers</SheetTitle>
        </SheetContent>
      </Sheet>

      <Sheet open={openHome} onOpenChange={setOpenHome}>
        <SheetContent side="left" className="w-[300px] p-0 ml-16 mt-14 h-[calc(100%-56px)] z-[100]">
          <SheetTitle className="p-4 text-lg font-semibold">Home</SheetTitle>
        </SheetContent>
      </Sheet>

      <Sheet open={openBookmarks} onOpenChange={setOpenBookmarks}>
        <SheetContent side="left" className="w-[300px] p-0 ml-16 mt-14 h-[calc(100%-56px)] z-[100]">
          <SheetTitle className="p-4 text-lg font-semibold">Bookmarks</SheetTitle>
        </SheetContent>
      </Sheet>

      <Sheet open={openFavorites} onOpenChange={setOpenFavorites}>
        <SheetContent side="left" className="w-[300px] p-0 ml-16 mt-14 h-[calc(100%-56px)] z-[100]">
          <SheetTitle className="p-4 text-lg font-semibold">Favorites</SheetTitle>
        </SheetContent>
      </Sheet>

      <Sheet open={openHistory} onOpenChange={setOpenHistory}>
        <SheetContent side="left" className="w-[300px] p-0 ml-16 mt-14 h-[calc(100%-56px)] z-[100]">
          <SheetTitle className="p-4 text-lg font-semibold">History</SheetTitle>
        </SheetContent>
      </Sheet>

      <Sheet open={openPrint} onOpenChange={setOpenPrint}>
        <SheetContent side="left" className="w-[300px] p-0 ml-16 mt-14 h-[calc(100%-56px)] z-[100]">
          <SheetTitle className="p-4 text-lg font-semibold">Print</SheetTitle>
        </SheetContent>
      </Sheet>

      <Sheet open={openLocation} onOpenChange={setOpenLocation}>
        <SheetContent side="left" className="w-[300px] p-0 ml-16 mt-14 h-[calc(100%-56px)] z-[100]">
          <SheetTitle className="p-4 text-lg font-semibold">Location</SheetTitle>
        </SheetContent>
      </Sheet>

      <Sheet open={openSettings} onOpenChange={setOpenSettings}>
        <SheetContent side="left" className="w-[300px] p-0 ml-16 mt-14 h-[calc(100%-56px)] z-[100]">
          <SheetTitle className="p-4 text-lg font-semibold">Settings</SheetTitle>
        </SheetContent>
      </Sheet>
    </>
  );
}