"use client";

import { mockDecks } from "@/mock/data";
import { useState, useEffect } from "react";
import { FullSubjectDto, FullDeckDto } from "@/shared/types";
import Card from "./Card";
import Sidebar from "./Sidebar";

type Props = { subjects: FullSubjectDto[] }


export default function DeckBrowser({ subjects } : Props) {

    const [decks, setDecks] = useState<FullDeckDto[]>(mockDecks);
    const [search, setSearch] = useState("");
    const [subjectId, setSubjectId] = useState<number | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        let data = mockDecks;
        if(subjectId !== null)
            data = data.filter(d => d.subject.id === subjectId)
        if(search.trim())
            data = data.filter(d => d.name.toLowerCase().includes(search.toLowerCase()));
        setDecks(data);
        setLoading(false);
    },[subjectId, search])

    return (
        <div className="mx-auto max-w-7xl px-4 py-8">
            <div className="flex flex-col gap-8 md:flex-row">
                {/*Sidebar*/}
                <Sidebar search={search} setSearch={setSearch} subjectId={subjectId} setSubjectId={setSubjectId} subjects={subjects}/>
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