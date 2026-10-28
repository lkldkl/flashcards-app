"use client";

import { mockDecks } from "@/mock/data";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FullDeckDto } from "@/shared/types";
import Link from "next/link";
import Card from "./Card";
import Sidebar from "./Sidebar";


export default function DeckBrowser() {

    const [decks, setDecks] = useState<FullDeckDto[]>(mockDecks)
    const [search, setSearch] = useState("")

    useEffect(() => {
        let data = mockDecks;
        if(search.trim())
            data = data.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));
            setDecks(data);
    },[search])

    return (
        <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="flex flex-col gap-8 md:flex-row">
                {/*Sidebar*/}
                <Sidebar search={search} setSearch={setSearch} />
                {/*Cards*/}
                <section className="flex-1">
                    {decks.length === 0 ? (
                        <p className="text-center text-gray-500">
                            Nema spilova za dati filter.
                        </p>
                    ) : (
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {decks.map((deck) => (
                                <Card key={deck.id} deck={deck}/>
                            ))}
                        </div>
                    )}
                    
                </section>
            </div>

        </div>
    );
}