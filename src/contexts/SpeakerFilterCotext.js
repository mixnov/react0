import React, { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterCotext = createContext();

function SpeakerFilterProvider({ children, startingShowSessions = false }) {

    const { showSession, setShowSession } = useSpeakerFilter(startingShowSessions);

    return (
        <SpeakerFilterCotext.Provider
            value={
                { showSession, setShowSession }
            }>
            {children}
        </SpeakerFilterCotext.Provider>
    )
}

export { SpeakerFilterCotext, SpeakerFilterProvider };